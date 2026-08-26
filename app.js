// Strict Catalog Mapping based on Dulux Pricing
const PRODUCT_CATALOG = {
  73509372: { name: "DN VAF Trends Non - Metallic", category: "Interiors" },
  73509672: { name: "DN VAF Trends Glitter Silver", category: "Interiors" },
  73509772: { name: "DN VAF Trends Glitter Gold", category: "Interiors" },
  73519672: { name: "DN VAF Metallic - Silver", category: "Interiors" },
  73519772: { name: "DN VAF Metallic - Gold", category: "Interiors" },
  5967833: { name: "DN VT Velvetino Gold Base", category: "Interiors" },
  5967836: { name: "DN VT Velvetino Silver Base", category: "Interiors" },
  5967870: { name: "DN VT Clear Coat Matt", category: "Interiors" },
  307000: { name: "DN VT Diamond White", category: "Interiors" },
  307090: { name: "DN VT Diamond 90 Base", category: "Interiors" },
  306000: {
    name: "DN VT Pearl Glo New Brilliant White",
    category: "Interiors",
  },
  309000: { name: "DN VT Platinum Glo White", category: "Interiors" },
  5853009: {
    name: "Dulux SuperCover Ultra Brilliant White",
    category: "Interiors",
  },
  5948168: { name: "DN WS PF 15yr Br White", category: "Exteriors" },
  5948204: { name: "DN WS Max 10yr Br White", category: "Exteriors" },
  5948360: { name: "DN WS RP 8yr Br White", category: "Exteriors" },
  364000: {
    name: "DN WS Protect Dustproof Brilliant White",
    category: "Exteriors",
  },
  5748677: { name: "Aquatech PU Coat (15 Years)", category: "Waterproofing" },
  5576086: { name: "DN Aquatech Waterproof Putty", category: "Putty" },
  320129: { name: "Duwel Pink Wood Primer", category: "Primers" },
  320768: { name: "Dulux Water Based Cement Primer", category: "Primers" },
  33151025: { name: "Dulux Acrylic Putty", category: "Putty" },
  6457592: { name: 'Dulux Signature Brush Double 3"', category: "Ancillaries" },
  6457575: {
    name: 'Dulux Signature Epoxy Int. Roller 9"',
    category: "Ancillaries",
  },
};

class CoatCountDB {
  constructor() {
    this.dbName = "CoatCountDB";
    this.dbVersion = 1;
    this.db = null;
  }
  async init() {
    return new Promise((resolve, reject) => {
      const req = indexedDB.open(this.dbName, this.dbVersion);
      req.onupgradeneeded = (e) => {
        const db = e.target.result;
        if (!db.objectStoreNames.contains("inventory"))
          db.createObjectStore("inventory", { keyPath: "code" });
      };
      req.onsuccess = (e) => {
        this.db = e.target.result;
        resolve(this.db);
      };
      req.onerror = (e) => reject(e.target.error);
    });
  }
  async getItem(code) {
    return new Promise((resolve) => {
      const req = this.db
        .transaction(["inventory"], "readonly")
        .objectStore("inventory")
        .get(String(code).trim());
      req.onsuccess = () => resolve(req.result || null);
    });
  }
  async getAllItems() {
    return new Promise((resolve) => {
      const req = this.db
        .transaction(["inventory"], "readonly")
        .objectStore("inventory")
        .getAll();
      req.onsuccess = () => resolve(req.result || []);
    });
  }
  async setItem(item) {
    return new Promise((resolve) => {
      const tx = this.db.transaction(["inventory"], "readwrite");
      tx.objectStore("inventory").put(item);
      tx.oncomplete = () => resolve(true);
    });
  }
  async deleteItem(code) {
    return new Promise((resolve) => {
      const tx = this.db.transaction(["inventory"], "readwrite");
      tx.objectStore("inventory").delete(String(code).trim());
      tx.oncomplete = () => resolve(true);
    });
  }
}

const App = {
  db: new CoatCountDB(),
  currentMode: "in",
  batchQty: 1,
  audioCtx: null,

  async start() {
    await this.db.init();
    this.bindEvents();
    this.updateStats();
  },

  playTone(freq = 880, type = "sine") {
    try {
      if (!this.audioCtx)
        this.audioCtx = new (
          window.AudioContext || window.webkitAudioContext
        )();
      const osc = this.audioCtx.createOscillator();
      const gain = this.audioCtx.createGain();
      osc.type = type;
      osc.frequency.value = freq;
      gain.gain.setValueAtTime(0.08, this.audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(
        0.0001,
        this.audioCtx.currentTime + 0.15,
      );
      osc.connect(gain);
      gain.connect(this.audioCtx.destination);
      osc.start();
      osc.stop(this.audioCtx.currentTime + 0.15);
    } catch (e) {}
  },

  bindEvents() {
    document.querySelectorAll(".nav-tab").forEach((tab) => {
      tab.addEventListener("click", () => this.setMode(tab.dataset.mode));
    });
    document.querySelectorAll(".qty-pill").forEach((pill) => {
      pill.addEventListener("click", () => {
        this.batchQty = parseInt(pill.dataset.qty, 10);
        document
          .querySelectorAll(".qty-pill")
          .forEach((p) => p.classList.remove("active"));
        pill.classList.add("active");
      });
    });
    document
      .getElementById("inventory-search")
      ?.addEventListener("input", (e) => {
        this.renderInventory(e.target.value);
      });
  },

  setMode(mode) {
    this.currentMode = mode;
    document.body.className = `mode-${mode}`;
    const badge = document.getElementById("mode-indicator");
    badge.textContent =
      mode === "in" ? "STOCK IN" : mode === "out" ? "STOCK OUT" : "INVENTORY";

    document
      .querySelectorAll(".nav-tab")
      .forEach((t) => t.classList.toggle("active", t.dataset.mode === mode));
    const isInv = mode === "inventory";
    document.getElementById("scanner-view").classList.toggle("active", !isInv);
    document.getElementById("inventory-view").classList.toggle("active", isInv);
    if (isInv) this.renderInventory();
  },

  triggerFeedback(mode) {
    if (navigator.vibrate) {
      if (mode === "error") navigator.vibrate([50, 50, 50]);
      else navigator.vibrate(mode === "in" ? [30] : [20, 40, 20]);
    }

    if (mode === "error") this.playTone(150, "sawtooth");
    else this.playTone(mode === "in" ? 950 : 620);

    const overlay = document.getElementById("swipe-overlay");
    overlay.className = "swipe-effect";
    void overlay.offsetWidth;
    overlay.className = `swipe-effect active swipe-${mode}`;
    setTimeout(() => {
      overlay.className = "swipe-effect";
    }, 400);
  },

  async handleScan(rawCode) {
    const code = String(rawCode).trim();
    if (!code) return;

    // RULE: STRICT REJECTION FOR UNMAPPED PRODUCTS
    if (!PRODUCT_CATALOG[code]) {
      this.triggerFeedback("error");
      this.renderLastCard(
        { code, name: "Unmapped Product Code", quantity: 0 },
        "Scan Rejected - Not in Catalog",
        true,
      );
      return;
    }

    const catalog = PRODUCT_CATALOG[code];
    let item = await this.db.getItem(code);
    const delta = this.batchQty;

    if (this.currentMode === "in") {
      if (!item) {
        item = {
          code,
          name: catalog.name,
          category: catalog.category,
          quantity: delta,
          updatedAt: new Date().toISOString(),
        };
      } else {
        item.quantity += delta;
        item.updatedAt = new Date().toISOString();
      }
      await this.db.setItem(item);
      this.triggerFeedback("in");
      this.renderLastCard(item, `+${delta} Added to Stock`, false);
    } else if (this.currentMode === "out") {
      if (!item || item.quantity <= delta) {
        if (item) await this.db.deleteItem(code);
        this.triggerFeedback("out");
        this.renderLastCard(
          { code, name: catalog.name, quantity: 0 },
          `Removed from Stock`,
          false,
        );
      } else {
        item.quantity -= delta;
        item.updatedAt = new Date().toISOString();
        await this.db.setItem(item);
        this.triggerFeedback("out");
        this.renderLastCard(item, `-${delta} Deducted`, false);
      }
    }
    this.updateStats();
  },

  renderLastCard(item, statusMsg, isError) {
    const card = document.getElementById("last-scanned-card");
    card.className = `dense-card ${isError ? "error" : ""}`;
    card.innerHTML = `
      <div class="card-top">
        <span class="card-code">${item.code}</span>
        ${!isError ? `<span class="card-units">Total: ${item.quantity}</span>` : ""}
      </div>
      <div class="card-name">${item.name}</div>
      <div class="card-action-bar">
        <span class="card-badge-status ${isError ? "error" : ""}">${statusMsg}</span>
      </div>
    `;
  },

  async updateStats() {
    const items = await this.db.getAllItems();
    const totalUnits = items.reduce((sum, item) => sum + item.quantity, 0);
    document.getElementById("stat-summary").textContent =
      `${items.length} SKUs • ${totalUnits} Units`;
  },

  async renderInventory(filterQuery = "") {
    let items = await this.db.getAllItems();
    const tbody = document.getElementById("inventory-rows");
    tbody.innerHTML = "";

    if (filterQuery.trim()) {
      const q = filterQuery.toLowerCase();
      items = items.filter(
        (i) => i.name.toLowerCase().includes(q) || i.code.includes(q),
      );
    }

    if (items.length === 0) {
      tbody.innerHTML = `<tr><td colspan="2" style="text-align:center; color:#94a3b8; padding:20px;">No matching stock.</td></tr>`;
      return;
    }
    items.sort((a, b) => new Date(b.updatedAt) - new Date(a.updatedAt));
    items.forEach((item) => {
      const tr = document.createElement("tr");
      tr.innerHTML = `
        <td>
          <div style="font-weight:700;">${item.name}</div>
          <span class="mono">${item.code}</span>
        </td>
        <td style="text-align:right; font-weight:800; font-size:1.1rem; width: 60px;">
          ${item.quantity}
          <div style="margin-top: 8px;">
             <button class="btn-trash" onclick="App.deleteDirect('${item.code}')">✕</button>
          </div>
        </td>
      `;
      tbody.appendChild(tr);
    });
  },

  async deleteDirect(code) {
    await this.db.deleteItem(code);
    this.renderInventory(document.getElementById("inventory-search").value);
    this.updateStats();
  },
};

let html5QrcodeScanner;
function initCamera() {
  html5QrcodeScanner = new Html5QrcodeScanner(
    "interactive-reader",
    {
      fps: 15,
      qrbox: { width: 250, height: 160 },
      aspectRatio: 1.0,
      showTorchButtonIfSupported: true,
    },
    false,
  );
  let lastScan = 0;
  html5QrcodeScanner.render(
    (code) => {
      const now = Date.now();
      if (now - lastScan < 1200) return;
      lastScan = now;
      App.handleScan(code);
    },
    () => {},
  );
}

window.addEventListener("DOMContentLoaded", async () => {
  await App.start();
  initCamera();
});
