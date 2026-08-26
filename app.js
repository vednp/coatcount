// --- 1. DULUX RAW CATALOG ---
const RAW_CATALOG = [
  { c: "73509372", n: "DN VAF Trends Non - Metallic" },
  { c: "73509672", n: "DN VAF Trends Glitter Silver" },
  { c: "73509772", n: "DN VAF Trends Glitter Gold" },
  { c: "73519672, IN73519672", n: "DN VAF Metallic - Silver" },
  { c: "73519772, IN73519772", n: "DN VAF Metallic - Gold" },
  { c: "5967833", n: "DN VT Velvetino Gold Base" },
  { c: "5967836", n: "DN VT Velvetino Silver Base" },
  { c: "5967870", n: "DN VT Clear Coat Matt" },
  { c: "IN37909774", n: "DN VT FIN GOLD SAMPLER" },
  { c: "IN37909674", n: "DN VT FIN SILVER SAMPLER" },
  { c: "5967859/60/5990406/5967861", n: "DN VT Concrete Finish" },
  { c: "IN3539303", n: "DN VAF Marble" },
  { c: "5990407", n: "DN VT Marble" },
  { c: "5851766-70", n: "VT Eterna Matt White/90 Base" },
  { c: "5851771-74", n: "VT Eterna Matt 92 Base" },
  { c: "5851776-79", n: "VT Eterna Matt 93 Base" },
  { c: "5851780-81", n: "VT Eterna Matt 94 Base" },
  { c: "5852437-40", n: "VT Eterna Basecoat" },
  { c: "307000", n: "DN VT Diamond White" },
  { c: "307090", n: "DN VT Diamond 90 Base" },
  { c: "307092", n: "DN VT Diamond 92 Base" },
  { c: "5856414-18", n: "DN VT Diamond 93 Base" },
  { c: "307094", n: "DN VT Diamond 94 Base" },
  { c: "307095", n: "DN VT Diamond Glo New Deep Base" },
  { c: "307096", n: "DN VT Diamond Glo Yellow Base" },
  { c: "307097", n: "DN VT Diamond Glo Red Base" },
  { c: "306000", n: "DN VT Pearl Glo New Brilliant White" },
  { c: "306090", n: "DN VT Pearl Glo New White 90 Base" },
  { c: "306092", n: "DN VT Pearl Glo New Int 92 Base" },
  { c: "5856419-23", n: "DN VT Pearl Glo New Accent 93 Base" },
  { c: "306084", n: "DN VT Pearl Glo New Accent 94 Base" },
  { c: "306095", n: "DN VT Pearl Glo New Deep 95 Base" },
  { c: "306096", n: "DN VT Pearl Glo New Yellow 96 Base" },
  { c: "306097", n: "DN VT Pearl Glo New Red 97 Base" },
  { c: "309000", n: "DN VT Platinum Glo White" },
  { c: "309090", n: "DN VT Platinum Glo White Base" },
  { c: "309092", n: "DN VT Platinum Glo New Int 92 Base" },
  { c: "5856409-13", n: "DN VT Platinum Glo New Accent 93 Base" },
  { c: "309094", n: "DN VT Platinum Glo New Accent 94 Base" },
  { c: "309095", n: "DN VT Platinum Glo Deep 95 Base" },
  { c: "309096", n: "DN VT Platinum Glo Yellow 96 Base" },
  { c: "309097", n: "DN VT Platinum Glo Red 97 Base" },
  { c: "5832271/78/85/92", n: "Dulux SuperClean 3in1 MR Brilliant White" },
  {
    c: "5832299/306/313/320 & 5910851",
    n: "Dulux SuperClean 3in1 MR White 90 Base",
  },
  { c: "5832327/34/41/48 & 5910851", n: "Dulux SuperClean 3in1 MR 92 Base" },
  { c: "5832355/362/369/472 & 5910852", n: "Dulux SuperClean 3in1 MR 93 Base" },
  { c: "5832479/486/493/500 & 5910853", n: "Dulux SuperClean 3in1 MR 94 Base" },
  { c: "5906464-67 & 5906736", n: "Dulux SuperClean New Brilliant White" },
  { c: "5906708-11 & 5906739", n: "Dulux SuperClean New White 90 Base" },
  { c: "5906712-15 & 5906739", n: "Dulux SuperClean New 92 Base" },
  { c: "5906716-19 & 5906739", n: "Dulux SuperClean New 93 Base" },
  { c: "5906720-23 & 5906740", n: "Dulux SuperClean New 94 Base" },
  { c: "5853009-12/31", n: "Dulux SuperCover Ultra Brilliant White" },
  { c: "5853013-16/32", n: "Dulux SuperCover Ultra White 90 Base" },
  { c: "5853017-20/33", n: "Dulux SuperCover Ultra Intermediate 92 Base" },
  { c: "5853021-24/34", n: "Dulux SuperCover Ultra Accent 94 Base" },
  { c: "5853025/26/35", n: "Dulux SuperCover Ultra Deep 95 Base" },
  { c: "5948168-71/5948403", n: "DN WS PF 15yr Br White" },
  { c: "5948172-75/5948405", n: "DN WS PF 15yr 90 Base" },
  { c: "5948176-79/5948407", n: "DN WS PF 15yr 92 Base" },
  { c: "5948180-83/5948409", n: "DN WS PF 15yr 93 Base" },
  { c: "5948184-87/5948411", n: "DN WS PF 15yr 94 Base" },
  { c: "5948188-91", n: "DN WS PF 15yr 95 Base" },
  { c: "5948192-95", n: "DN WS PF 15yr 96 Base" },
  { c: "5948196-99", n: "DN WS PF 15yr 97 Base" },
  { c: "5771981-84/013", n: "DN WS PF Brilliant White" },
  { c: "5771985-88/014", n: "DN WS PF White 90 Base" },
  { c: "5771989-92/015", n: "DN WS PF Intermediate 92 Base" },
  { c: "5771993-96", n: "DN WS PF Accent 94 Base" },
  { c: "5771997-99/000/017", n: "DN WS PF Deep 95 Base" },
  { c: "5772018-04", n: "DN WS PF YOX Base" },
  { c: "5769795-98", n: "DN WS Powerflexx 93 Base" },
  { c: "5948204-07", n: "DN WS Max 10yr Br White" },
  { c: "5948208-11", n: "DN WS Max 10yr 90 Base" },
  { c: "5948212-15", n: "DN WS Max 10yr 92 Base" },
  { c: "5948216-19", n: "DN WS Max 10yr 93 Base" },
  { c: "5948415", n: "DN WS MAX 10yr 92 BASE" },
  { c: "5948360-63", n: "DN WS RP 8yr Br White" },
  { c: "5948364-67", n: "DN WS RP 8yr 90 Base" },
  { c: "5948378-81", n: "DN WS RP 8yr 92 Base" },
  { c: "364000", n: "DN WS Protect Dustproof Brilliant White" },
  { c: "364090", n: "DN WS Protect Dustproof White Base" },
  { c: "5880417/390/391/392/393", n: "DN WS PROTECT DUSTPROOF 93 BASE" },
  { c: "5963118-21", n: "DN WS Protect Dust Hi-Sheen Br.White" },
  { c: "5478923/24", n: "DN WS Signature Black Diamond" },
  { c: "5960727/5961028/29", n: "DN WS Protect Metallic Silver" },
  { c: "5748677/5748708", n: "Aquatech PU Coat (15 Years)" },
  {
    c: "77009072/71/5847766/77009081",
    n: "Aquatech Flexible Basecoat Advance (12 Years)",
  },
  {
    c: "78009072/71/5847765/7800907281",
    n: "Aquatech Flexible Basecoat Neo (10 Years)",
  },
  { c: "5908363-66", n: "Aquatech Damp Protect 2in1 (8 Years)" },
  { c: "5580864-67", n: "Aquatech Damp Protect Basecoat (5 Years)" },
  {
    c: "82000072/71/5882382/82000081",
    n: "Aquatech Roof Waterproof White (12 Years)",
  },
  { c: "83009072/71", n: "Aquatech Damp Cure (5 Years)" },
  { c: "81019005/15", n: "Aquatech Waterblock 2K (5 Years)" },
  { c: "5964276/77", n: "Aquatech Crackfiller Paste 5MM" },
  { c: "5577377/5575898-900", n: "DN Promise Sheen Exterior Br White" },
  { c: "5749278-81", n: "DN Promise Sheen Exterior 92 Base" },
  { c: "5867141-43/5867110", n: "DN Promise Sheen Exterior 93 Base" },
  { c: "5577383/5575906-08", n: "DN Promise Sheen Interior Br White" },
  { c: "843000/5838872-75", n: "DN Dulux Promise White" },
  { c: "843090/5838876-79", n: "DN Dulux Promise White Base" },
  { c: "843092/5838880-83", n: "DN Promise Exterior 92 Base" },
  { c: "863000/5838852-55", n: "DN Promise Interior White" },
  { c: "5945463-65", n: "DN Promise SmartChoice Exterior Br. White/Base" },
  { c: "280800", n: "Dulux Super SB PU Satin White" },
  { c: "280790/280890", n: "Dulux Super SB PU Satin White Base" },
  { c: "28-1400", n: "Dulux Stay Bright WB PU Satin White" },
  { c: "28-1290", n: "Dulux Stay Bright WB PU Satin White Base" },
  { c: "28-0850", n: "Dulux Lustre Finish White" },
  { c: "55-0090", n: "Dulux Lustre Finish White Base" },
  { c: "2830000/3000/3300/4000", n: "Dulux Gloss Premium Enamel" },
  { c: "28-2090", n: "Dulux Gloss Premium Enamel - White Base" },
  { c: "56-1000", n: "Dulux Super Gloss 5in1 White" },
  { c: "5802249-52,5827545", n: "Dulux PU Enamel 12-in-1 White" },
  { c: "29-3202,5948784-88", n: "Dulux Promise Enamel White" },
  { c: "320129", n: "Duwel Pink Wood Primer" },
  { c: "320768", n: "Dulux Water Based Cement Primer" },
  { c: "324000/323000", n: "Dulux WS Prime coat Primer" },
  { c: "5576086-88", n: "DN Aquatech Waterproof Putty" },
  { c: "33151025/33161086", n: "Dulux Acrylic Putty" },
  { c: "87100003/04/12/20/25", n: "IP Duwel magik white" },
  { c: "6457592", n: 'Dulux Signature Brush Double 3"' },
  { c: "6457575", n: 'Dulux Signature Epoxy Int. Roller 9"' },
  { c: "5953877", n: "DN WS Texture Rustic 90 25kg" },
  { c: "5993730", n: "DN WS Texture Dholpur 25kg" },
];

const PRODUCT_CATALOG = {};

function inflateCatalog() {
  RAW_CATALOG.forEach((item) => {
    const rawStr = item.c.replace(/\s+/g, "");
    const parts = rawStr.split(/[\/,&]/).filter(Boolean);
    let lastFullCode = "";

    parts.forEach((part) => {
      if (part.includes("-")) {
        const dashParts = part.split("-");
        if (
          dashParts.length === 2 &&
          dashParts[0].length > dashParts[1].length
        ) {
          const start = dashParts[0];
          const end = dashParts[1];
          if (start.length >= 5) lastFullCode = start;

          const prefix = lastFullCode.slice(
            0,
            lastFullCode.length - end.length,
          );
          const fullStart =
            start.length < 5
              ? lastFullCode.slice(0, lastFullCode.length - start.length) +
                start
              : start;

          const startNum = parseInt(fullStart, 10);
          const endNum = parseInt(prefix + end, 10);

          if (!isNaN(startNum) && !isNaN(endNum)) {
            for (let i = startNum; i <= endNum; i++) {
              PRODUCT_CATALOG[i.toString()] = { name: item.n };
            }
          }
        } else {
          PRODUCT_CATALOG[part] = { name: item.n };
          lastFullCode = part;
        }
      } else {
        if (part.length >= 5 || !lastFullCode) {
          lastFullCode = part;
          PRODUCT_CATALOG[part] = { name: item.n };
        } else {
          const prefix = lastFullCode.slice(
            0,
            lastFullCode.length - part.length,
          );
          PRODUCT_CATALOG[prefix + part] = { name: item.n };
        }
      }
    });
  });
}
inflateCatalog();

// --- 2. INDEXED DB ---
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

// --- 3. CORE APP LOGIC ---
const App = {
  db: new CoatCountDB(),
  currentMode: "in",
  pendingItem: null,
  selectedSize: "1L",
  selectedQty: 1,

  async start() {
    await this.db.init();
    this.bindEvents();
    this.updateStats();
  },

  bindEvents() {
    document.querySelectorAll(".nav-tab").forEach((tab) => {
      tab.addEventListener("click", () => this.setMode(tab.dataset.mode));
    });

    document
      .getElementById("inventory-search")
      ?.addEventListener("input", (e) => {
        this.renderInventory(e.target.value);
      });

    document.getElementById("manual-add-btn").addEventListener("click", () => {
      document.getElementById("manual-modal").classList.add("active");
    });

    // Confirmation Sheet Size & Qty Pills
    document.querySelectorAll(".size-pill").forEach((pill) => {
      pill.addEventListener("click", (e) => {
        this.selectedSize = e.target.dataset.size;
        this.updatePills();
      });
    });

    document.querySelectorAll(".qty-pill").forEach((pill) => {
      pill.addEventListener("click", (e) => {
        if (e.target.dataset.qty === "custom") {
          const val = prompt("Enter custom quantity:");
          const parsed = parseInt(val, 10);
          if (parsed > 0) this.selectedQty = parsed;
        } else {
          this.selectedQty = parseInt(e.target.dataset.qty, 10);
        }
        this.updatePills();
      });
    });

    // Swipe Physics logic
    const track = document.getElementById("swipe-track");
    const thumb = document.getElementById("swipe-thumb");
    const text = document.getElementById("swipe-text");
    let isDragging = false;
    let startX = 0;
    let currentTranslate = 0;
    let maxTranslate = 0;

    thumb.addEventListener(
      "touchstart",
      (e) => {
        isDragging = true;
        startX = e.touches[0].clientX;
        maxTranslate = track.offsetWidth - thumb.offsetWidth - 8;
        thumb.style.transition = "none";
      },
      { passive: true },
    );

    thumb.addEventListener(
      "touchmove",
      (e) => {
        if (!isDragging) return;
        const currentX = e.touches[0].clientX;
        currentTranslate = currentX - startX;

        if (currentTranslate < 0) currentTranslate = 0;
        if (currentTranslate > maxTranslate) currentTranslate = maxTranslate;

        thumb.style.transform = `translateX(${currentTranslate}px)`;
        text.style.opacity = 1 - currentTranslate / maxTranslate;
      },
      { passive: true },
    );

    thumb.addEventListener("touchend", () => {
      isDragging = false;
      thumb.style.transition = "transform 0.3s ease";
      if (currentTranslate > maxTranslate * 0.85) {
        thumb.style.transform = `translateX(${maxTranslate}px)`;
        setTimeout(() => this.commitScan(), 200);
      } else {
        thumb.style.transform = `translateX(0px)`;
        text.style.opacity = 1;
      }
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
    if (navigator.vibrate)
      navigator.vibrate(mode === "error" ? [50, 50] : [30]);
    const overlay = document.getElementById("swipe-overlay");
    overlay.className = "swipe-effect";
    void overlay.offsetWidth;
    overlay.className = `swipe-effect active swipe-${mode}`;
    setTimeout(() => {
      overlay.className = "swipe-effect";
    }, 400);
  },

  openConfirmSheet(code) {
    this.pendingItem = { code: code, ...PRODUCT_CATALOG[code] };
    document.getElementById("confirm-name").textContent = this.pendingItem.name;
    document.getElementById("confirm-code").textContent = `Code: ${code}`;
    document.getElementById("confirm-mode-text").textContent =
      this.currentMode === "in" ? "Add" : "Sell";

    document.getElementById("swipe-thumb").style.transform = `translateX(0px)`;
    document.getElementById("swipe-text").style.opacity = 1;
    this.selectedSize = "1L";
    this.selectedQty = 1;
    this.updatePills();

    document.getElementById("confirm-sheet").classList.add("active");
    this.triggerFeedback(this.currentMode);
  },

  closeConfirmSheet() {
    document.getElementById("confirm-sheet").classList.remove("active");
    this.pendingItem = null;
  },

  updatePills() {
    document.querySelectorAll(".size-pill").forEach((p) => {
      p.classList.toggle("active", p.dataset.size === this.selectedSize);
    });
    document.querySelectorAll(".qty-pill").forEach((p) => {
      p.classList.toggle(
        "active",
        p.dataset.qty == this.selectedQty ||
          (p.dataset.qty === "custom" &&
            !["1", "2", "5", "10"].includes(String(this.selectedQty))),
      );
    });
  },

  async commitScan() {
    if (!this.pendingItem) return;

    // Unique ID combining code and pack size
    const uniqueId = `${this.pendingItem.code}_${this.selectedSize}`;
    let item = await this.db.getItem(uniqueId);
    const delta = this.selectedQty;

    if (this.currentMode === "in") {
      if (!item) {
        item = {
          code: uniqueId,
          rawCode: this.pendingItem.code,
          name: this.pendingItem.name,
          packSize: this.selectedSize,
          quantity: delta,
          updatedAt: new Date().toISOString(),
        };
      } else {
        item.quantity += delta;
        item.updatedAt = new Date().toISOString();
      }
      await this.db.setItem(item);
      this.triggerFeedback("in");
    } else if (this.currentMode === "out") {
      if (!item || item.quantity <= delta) {
        if (item) await this.db.deleteItem(uniqueId);
        this.triggerFeedback("out");
      } else {
        item.quantity -= delta;
        item.updatedAt = new Date().toISOString();
        await this.db.setItem(item);
        this.triggerFeedback("out");
      }
    }

    this.closeConfirmSheet();
    this.updateStats();
    if (document.getElementById("inventory-view").classList.contains("active"))
      this.renderInventory();
  },

  closeManualModal() {
    document.getElementById("manual-modal").classList.remove("active");
    document.getElementById("manual-code").value = "";
    document.getElementById("manual-name").value = "";
  },

  async saveManualItem() {
    const code = document.getElementById("manual-code").value.trim();
    const name = document.getElementById("manual-name").value.trim();
    const qty = parseInt(document.getElementById("manual-qty").value, 10);

    if (!code || !name) return alert("Code and Name required.");

    PRODUCT_CATALOG[code] = { name: name, category: "Custom Entry" };

    // Default manual adds to "1L" size for consistency
    const uniqueId = `${code}_1L`;

    let item = await this.db.getItem(uniqueId);
    if (!item) {
      item = {
        code: uniqueId,
        rawCode: code,
        name: name,
        packSize: "1L",
        quantity: qty,
        updatedAt: new Date().toISOString(),
      };
    } else {
      item.quantity += qty;
      item.updatedAt = new Date().toISOString();
    }

    await this.db.setItem(item);
    this.closeManualModal();
    this.triggerFeedback("in");
    this.updateStats();
    if (this.currentMode === "inventory") this.renderInventory();
  },

  async updateStats() {
    const items = await this.db.getAllItems();
    const totalUnits = items.reduce((sum, item) => sum + item.quantity, 0);
    document.getElementById("stat-summary").textContent =
      `${items.length} SKUs • ${totalUnits} Units`;
  },

  async renderInventory(filterQuery = "") {
    let items = await this.db.getAllItems();
    const container = document.getElementById("inventory-list");
    container.innerHTML = "";

    if (filterQuery.trim()) {
      const q = filterQuery.toLowerCase();
      items = items.filter(
        (i) => i.name.toLowerCase().includes(q) || i.rawCode.includes(q),
      );
    }

    if (items.length === 0) {
      container.innerHTML = `<div style="text-align:center; padding: 20px; color: var(--text-dim);">No stock found.</div>`;
      return;
    }

    items.sort((a, b) => new Date(b.updatedAt) - new Date(a.updatedAt));

    items.forEach((item) => {
      const wrap = document.createElement("div");
      wrap.className = "swipe-container";

      const bg = document.createElement("div");
      bg.className = "swipe-background";
      bg.innerHTML = `<span class="swipe-bg-left">📤 -1 Sell</span><span class="swipe-bg-right">📥 +1 Add</span>`;

      const card = document.createElement("div");
      card.className = "inventory-card";

      // Included packSize rendering so you can distinguish identical codes with different volumes
      card.innerHTML = `
        <div class="inv-details">
          <span class="inv-name">${item.name} <span style="font-size: 0.8em; color: var(--active-theme);">(${item.packSize})</span></span>
          <span class="inv-code">${item.rawCode}</span>
        </div>
        <span class="inv-qty">${item.quantity}</span>
      `;

      wrap.appendChild(bg);
      wrap.appendChild(card);
      container.appendChild(wrap);

      this.attachSwipeLogic(card, item.code);
    });
  },

  attachSwipeLogic(cardElement, code) {
    let startX = 0;
    let currentX = 0;
    const threshold = 75;

    cardElement.addEventListener(
      "touchstart",
      (e) => {
        startX = e.touches[0].clientX;
        cardElement.style.transition = "none";
      },
      { passive: true },
    );

    cardElement.addEventListener(
      "touchmove",
      (e) => {
        currentX = e.touches[0].clientX - startX;
        const visualX = currentX * 0.6;
        cardElement.style.transform = `translateX(${visualX}px)`;
      },
      { passive: true },
    );

    cardElement.addEventListener("touchend", async () => {
      cardElement.style.transition =
        "transform 0.3s cubic-bezier(0.2, 0.8, 0.2, 1)";

      if (currentX > threshold) {
        cardElement.style.transform = `translateX(100%)`;
        setTimeout(() => this.quickAdjust(code, 1), 300);
      } else if (currentX < -threshold) {
        cardElement.style.transform = `translateX(-100%)`;
        setTimeout(() => this.quickAdjust(code, -1), 300);
      } else {
        cardElement.style.transform = `translateX(0px)`;
      }
      currentX = 0;
    });
  },

  async quickAdjust(code, step) {
    const item = await this.db.getItem(code);
    if (!item) return;
    item.quantity += step;
    if (item.quantity <= 0) await this.db.deleteItem(code);
    else {
      item.updatedAt = new Date().toISOString();
      await this.db.setItem(item);
    }
    this.triggerFeedback(step > 0 ? "in" : "out");
    this.updateStats();
    this.renderInventory();
  },
};

// --- 4. OCR & BOOT LOGIC ---
let ocrWorker = null;

async function initOCR() {
  if (!ocrWorker) {
    ocrWorker = await Tesseract.createWorker("eng");
    await ocrWorker.setParameters({
      tessedit_char_whitelist: "0123456789",
      // 11 = SPARSE_TEXT: hunt for isolated strings anywhere in the frame
      // instead of assuming a full page of body text.
      tessedit_pageseg_mode: "11",
    });
  }

  const video = document.getElementById("camera-feed");
  try {
    const stream = await navigator.mediaDevices.getUserMedia({
      video: { facingMode: "environment", focusMode: "continuous" },
    });
    video.srcObject = stream;
  } catch (err) {
    console.error("Camera denied", err);
  }

  document
    .getElementById("scan-trigger-btn")
    .addEventListener("click", captureAndRead);
}

// ---------------------------------------------------------------
// Dot-matrix / pin-stamp preprocessing
//
// Individual printed dots need to be fused into solid strokes
// before any OCR engine stands a chance. The pipeline is:
//   1. Downscale to a sane working size (keeps pixel loops fast)
//   2. Grayscale
//   3. Fast separable box blur -> merges nearby dots into blobs
//   4. Otsu threshold -> re-binarizes the blur back into crisp text
//   5. Light separable dilation -> closes any remaining gaps
//      *within* a character without bridging adjacent characters
//   6. Cheap GPU upscale (canvas drawImage) before handing to Tesseract
//
// Because we know every valid code ahead of time (PRODUCT_CATALOG),
// we try a few blur/dilate strengths and keep the first result that
// actually matches a real catalog code — much more robust than
// betting everything on one fixed filter setting.
// ---------------------------------------------------------------

const PRE_MAX_DIM = 1400; // cap working resolution so pixel loops stay fast on mobile
const PRE_UPSCALE = 2; // final upscale before OCR (hardware-accelerated, cheap)

const PRE_VARIANTS = [
  { blur: 1, dilate: 1 },
  { blur: 2, dilate: 1 },
  { blur: 2, dilate: 2 },
  { blur: 3, dilate: 1 },
];

function clamp(v, lo, hi) {
  return v < lo ? lo : v > hi ? hi : v;
}

function buildWorkingCanvas(sourceCanvas) {
  const srcW = sourceCanvas.width;
  const srcH = sourceCanvas.height;
  const scale = Math.min(1, PRE_MAX_DIM / Math.max(srcW, srcH));
  const w = Math.max(1, Math.round(srcW * scale));
  const h = Math.max(1, Math.round(srcH * scale));

  const working = document.createElement("canvas");
  working.width = w;
  working.height = h;
  working.getContext("2d").drawImage(sourceCanvas, 0, 0, w, h);
  return working;
}

function toGrayscale(ctx, w, h) {
  const px = ctx.getImageData(0, 0, w, h).data;
  const gray = new Float32Array(w * h);
  for (let i = 0, j = 0; i < px.length; i += 4, j++) {
    gray[j] = px[i] * 0.299 + px[i + 1] * 0.587 + px[i + 2] * 0.114;
  }
  return gray;
}

// Separable box blur via running sum — O(w*h), cost independent of radius.
function boxBlur(src, w, h, radius) {
  if (radius <= 0) return src;
  const tmp = new Float32Array(w * h);
  const out = new Float32Array(w * h);
  const size = radius * 2 + 1;

  for (let y = 0; y < h; y++) {
    const rowOff = y * w;
    let sum = 0;
    for (let x = -radius; x <= radius; x++)
      sum += src[rowOff + clamp(x, 0, w - 1)];
    for (let x = 0; x < w; x++) {
      tmp[rowOff + x] = sum / size;
      sum +=
        src[rowOff + clamp(x + radius + 1, 0, w - 1)] -
        src[rowOff + clamp(x - radius, 0, w - 1)];
    }
  }

  for (let x = 0; x < w; x++) {
    let sum = 0;
    for (let y = -radius; y <= radius; y++)
      sum += tmp[clamp(y, 0, h - 1) * w + x];
    for (let y = 0; y < h; y++) {
      out[y * w + x] = sum / size;
      sum +=
        tmp[clamp(y + radius + 1, 0, h - 1) * w + x] -
        tmp[clamp(y - radius, 0, h - 1) * w + x];
    }
  }
  return out;
}

function otsuThreshold(gray) {
  const hist = new Array(256).fill(0);
  for (let i = 0; i < gray.length; i++) hist[gray[i] | 0]++;
  const total = gray.length;

  let sum = 0;
  for (let t = 0; t < 256; t++) sum += t * hist[t];

  let sumB = 0,
    wB = 0,
    maxVar = 0,
    threshold = 127;
  for (let t = 0; t < 256; t++) {
    wB += hist[t];
    if (wB === 0) continue;
    const wF = total - wB;
    if (wF === 0) break;
    sumB += t * hist[t];
    const mB = sumB / wB;
    const mF = (sum - sumB) / wF;
    const varBetween = wB * wF * (mB - mF) * (mB - mF);
    if (varBetween > maxVar) {
      maxVar = varBetween;
      threshold = t;
    }
  }
  return threshold;
}

function binarize(gray, threshold) {
  const out = new Uint8Array(gray.length);
  for (let i = 0; i < gray.length; i++) out[i] = gray[i] < threshold ? 0 : 255; // 0 = ink
  return out;
}

// Cheap separable min-filter dilation, run for N iterations. Grows dark
// (ink) pixels to fuse gaps between dots within one glyph, one ring at
// a time, without leaping across the (larger) gaps between characters.
function dilateBinary(bin, w, h, iterations) {
  let cur = bin;
  for (let it = 0; it < iterations; it++) {
    const tmp = new Uint8Array(w * h);
    for (let y = 0; y < h; y++) {
      const rowOff = y * w;
      for (let x = 0; x < w; x++) {
        tmp[rowOff + x] = Math.min(
          cur[rowOff + clamp(x - 1, 0, w - 1)],
          cur[rowOff + x],
          cur[rowOff + clamp(x + 1, 0, w - 1)],
        );
      }
    }
    const out = new Uint8Array(w * h);
    for (let x = 0; x < w; x++) {
      for (let y = 0; y < h; y++) {
        out[y * w + x] = Math.min(
          tmp[clamp(y - 1, 0, h - 1) * w + x],
          tmp[y * w + x],
          tmp[clamp(y + 1, 0, h - 1) * w + x],
        );
      }
    }
    cur = out;
  }
  return cur;
}

function buildOcrCanvas(binary, w, h) {
  const bwCanvas = document.createElement("canvas");
  bwCanvas.width = w;
  bwCanvas.height = h;
  const bctx = bwCanvas.getContext("2d");
  const imgData = bctx.createImageData(w, h);
  for (let i = 0, j = 0; i < binary.length; i++, j += 4) {
    const v = binary[i];
    imgData.data[j] = v;
    imgData.data[j + 1] = v;
    imgData.data[j + 2] = v;
    imgData.data[j + 3] = 255;
  }
  bctx.putImageData(imgData, 0, 0);

  const finalCanvas = document.createElement("canvas");
  finalCanvas.width = w * PRE_UPSCALE;
  finalCanvas.height = h * PRE_UPSCALE;
  const fctx = finalCanvas.getContext("2d");
  fctx.imageSmoothingEnabled = true;
  fctx.drawImage(bwCanvas, 0, 0, finalCanvas.width, finalCanvas.height);
  return finalCanvas;
}

function preprocessVariant(sourceCanvas, { blur, dilate }) {
  const working = buildWorkingCanvas(sourceCanvas);
  const w = working.width,
    h = working.height;
  const wctx = working.getContext("2d");

  const gray = toGrayscale(wctx, w, h);
  const blurred = boxBlur(gray, w, h, blur);
  const threshold = otsuThreshold(blurred);
  const bin = binarize(blurred, threshold);
  const dilated = dilateBinary(bin, w, h, dilate);

  return buildOcrCanvas(dilated, w, h);
}

// ---------------------------------------------------------------
// Capture + multi-pass recognition
// ---------------------------------------------------------------

async function captureAndRead() {
  const video = document.getElementById("camera-feed");
  const canvas = document.getElementById("capture-canvas");
  const ctx = canvas.getContext("2d");
  const btn = document.getElementById("scan-trigger-btn");

  canvas.width = video.videoWidth;
  canvas.height = video.videoHeight;
  ctx.drawImage(video, 0, 0, canvas.width, canvas.height);

  btn.textContent = "⏳ Processing...";
  btn.disabled = true;

  try {
    let matchedCode = null;
    let lastCandidates = [];

    for (const variant of PRE_VARIANTS) {
      const ocrCanvas = preprocessVariant(canvas, variant);
      const {
        data: { text },
      } = await ocrWorker.recognize(ocrCanvas);
      const foundNumbers = text.match(/\b\d{5,8}\b/g) || [];
      if (foundNumbers.length) lastCandidates = foundNumbers;

      const hit = foundNumbers.find((num) => PRODUCT_CATALOG[num]);
      if (hit) {
        matchedCode = hit;
        break;
      }
    }

    if (matchedCode) {
      App.openConfirmSheet(matchedCode);
    } else {
      App.triggerFeedback("error");
      if (lastCandidates.length) {
        // Read *something* but it didn't match a known code — hand it to
        // manual entry pre-filled so the user only has to fix a digit or two
        // instead of retyping the whole thing.
        document.getElementById("manual-code").value = lastCandidates[0];
        document.getElementById("manual-modal").classList.add("active");
      } else {
        alert(
          "Code not recognized. Move closer and keep the code flat/in focus.",
        );
      }
    }
  } catch (err) {
    console.error("OCR Failed", err);
  } finally {
    btn.textContent = "📸 Tap to Scan Code";
    btn.disabled = false;
  }
}

// Single initialization call
window.addEventListener("DOMContentLoaded", async () => {
  await App.start();
  initOCR();
});
