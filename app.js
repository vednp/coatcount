const RAW_CATALOG = [
  // Ambiance Velvet Touch & Special Effects
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

  // Eterna & Diamond Glo
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

  // Pearl Glo & Platinum Glo
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

  // SuperClean & SuperCover
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

  // Weathershield Powerflexx (15yr & 12yr)
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

  // Weathershield Max & Rainproof & Protect
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

  // Aquatech Waterproofing
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

  // Promise Tier
  { c: "5577377/5575898-900", n: "DN Promise Sheen Exterior Br White" },
  { c: "5749278-81", n: "DN Promise Sheen Exterior 92 Base" },
  { c: "5867141-43/5867110", n: "DN Promise Sheen Exterior 93 Base" },
  { c: "5577383/5575906-08", n: "DN Promise Sheen Interior Br White" },
  { c: "843000/5838872-75", n: "DN Dulux Promise White" },
  { c: "843090/5838876-79", n: "DN Dulux Promise White Base" },
  { c: "843092/5838880-83", n: "DN Promise Exterior 92 Base" },
  { c: "863000/5838852-55", n: "DN Promise Interior White" },
  { c: "5945463-65", n: "DN Promise SmartChoice Exterior Br. White/Base" },

  // Enamels (Handling dashed formats natively)
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

  // Primers, Putty, Distempers
  { c: "320129", n: "Duwel Pink Wood Primer" },
  { c: "320768", n: "Dulux Water Based Cement Primer" },
  { c: "324000/323000", n: "Dulux WS Prime coat Primer" },
  { c: "5576086-88", n: "DN Aquatech Waterproof Putty" },
  { c: "33151025/33161086", n: "Dulux Acrylic Putty" },
  { c: "87100003/04/12/20/25", n: "IP Duwel magik white" },

  // Ancillaries & Textures
  { c: "6457592", n: 'Dulux Signature Brush Double 3"' },
  { c: "6457575", n: 'Dulux Signature Epoxy Int. Roller 9"' },
  { c: "5953877", n: "DN WS Texture Rustic 90 25kg" },
  { c: "5993730", n: "DN WS Texture Dholpur 25kg" },
];

const PRODUCT_CATALOG = {};

// Runtime Code Expansion Algorithm
function inflateCatalog() {
  RAW_CATALOG.forEach((item) => {
    // Strip spaces to handle formats like "58517 66-70"
    const rawStr = item.c.replace(/\s+/g, "");
    const parts = rawStr.split(/[\/,&]/).filter(Boolean);
    let lastFullCode = "";

    parts.forEach((part) => {
      if (part.includes("-")) {
        const dashParts = part.split("-");

        // Differentiate a range (5948168-71) from a hyphenated product code (28-1400)
        // Ranges typically have a short string after the dash
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
          // It's a literal dashed code like "28-1400"
          PRODUCT_CATALOG[part] = { name: item.n };
          lastFullCode = part;
        }
      } else {
        // Handle literal codes and suffix roll-overs like "78" in "5832271/78"
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

// Generate the full 700+ SKUs into memory
inflateCatalog();
// IndexedDB Engine remains the same...
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

  async start() {
    await this.db.init();
    this.bindEvents();
    this.updateStats();
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
    document.getElementById("manual-add-btn").addEventListener("click", () => {
      document.getElementById("manual-modal").classList.add("active");
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

  async handleScan(rawCode) {
    const code = String(rawCode).trim();
    if (!code) return;

    if (!PRODUCT_CATALOG[code]) {
      this.triggerFeedback("error");
      this.renderLastCard(
        { code, name: "Unmapped Code", quantity: 0 },
        "Scan Rejected",
        true,
      );
      return;
    }

    const catalog = PRODUCT_CATALOG[code];
    let item = await this.db.getItem(code);
    const delta = this.batchQty;

    if (this.currentMode === "in") {
      if (!item)
        item = {
          code,
          name: catalog.name,
          category: catalog.category,
          quantity: delta,
          updatedAt: new Date().toISOString(),
        };
      else {
        item.quantity += delta;
        item.updatedAt = new Date().toISOString();
      }
      await this.db.setItem(item);
      this.triggerFeedback("in");
      this.renderLastCard(item, `+${delta} Added`, false);
    } else if (this.currentMode === "out") {
      if (!item || item.quantity <= delta) {
        if (item) await this.db.deleteItem(code);
        this.triggerFeedback("out");
        this.renderLastCard(
          { code, name: catalog.name, quantity: 0 },
          `Removed`,
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
      <div class="card-action-bar"><span class="card-badge-status ${isError ? "error" : ""}">${statusMsg}</span></div>
    `;
  },

  // Manual Modal Logic
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

    // Dynamically inject into runtime catalog so future scans recognize it
    PRODUCT_CATALOG[code] = { name: name, category: "Custom Entry" };

    let item = await this.db.getItem(code);
    if (!item)
      item = {
        code,
        name,
        category: "Custom Entry",
        quantity: qty,
        updatedAt: new Date().toISOString(),
      };
    else {
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
        (i) => i.name.toLowerCase().includes(q) || i.code.includes(q),
      );
    }

    if (items.length === 0) {
      container.innerHTML = `<div style="text-align:center; padding: 20px; color: var(--text-dim);">No stock found.</div>`;
      return;
    }

    items.sort((a, b) => new Date(b.updatedAt) - new Date(a.updatedAt));

    items.forEach((item) => {
      // Create Swipe Container
      const wrap = document.createElement("div");
      wrap.className = "swipe-container";

      const bg = document.createElement("div");
      bg.className = "swipe-background";
      bg.innerHTML = `<span class="swipe-bg-left">📤 -1 Sell</span><span class="swipe-bg-right">📥 +1 Add</span>`;

      const card = document.createElement("div");
      card.className = "inventory-card";
      card.innerHTML = `
        <div class="inv-details">
          <span class="inv-name">${item.name}</span>
          <span class="inv-code">${item.code}</span>
        </div>
        <span class="inv-qty">${item.quantity}</span>
      `;

      wrap.appendChild(bg);
      wrap.appendChild(card);
      container.appendChild(wrap);

      this.attachSwipeLogic(card, item.code);
    });
  },

  // Interactive Swipe Physics
  attachSwipeLogic(cardElement, code) {
    let startX = 0;
    let currentX = 0;
    const threshold = 75; // px to trigger action

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
        // Dampen the swipe distance
        const visualX = currentX * 0.6;
        cardElement.style.transform = `translateX(${visualX}px)`;
      },
      { passive: true },
    );

    cardElement.addEventListener("touchend", async () => {
      cardElement.style.transition =
        "transform 0.3s cubic-bezier(0.2, 0.8, 0.2, 1)";

      if (currentX > threshold) {
        // Swiped Right -> Stock In (+1)
        cardElement.style.transform = `translateX(100%)`;
        setTimeout(() => this.quickAdjust(code, 1), 300);
      } else if (currentX < -threshold) {
        // Swiped Left -> Stock Out (-1)
        cardElement.style.transform = `translateX(-100%)`;
        setTimeout(() => this.quickAdjust(code, -1), 300);
      } else {
        // Not far enough, snap back
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

let html5QrcodeScanner;
let ocrWorker = null;

async function initOCR() {
  // 1. Boot up the Tesseract Web Worker
  ocrWorker = await Tesseract.createWorker("eng");

  // 2. Start the device camera
  const video = document.getElementById("camera-feed");
  try {
    const stream = await navigator.mediaDevices.getUserMedia({
      video: { facingMode: "environment", focusMode: "continuous" },
    });
    video.srcObject = stream;
  } catch (err) {
    console.error("Camera access denied or unavailable.", err);
  }

  // 3. Bind the capture button
  document
    .getElementById("scan-trigger-btn")
    .addEventListener("click", captureAndRead);
}

async function captureAndRead() {
  const video = document.getElementById("camera-feed");
  const canvas = document.getElementById("capture-canvas");
  const ctx = canvas.getContext("2d");
  const btn = document.getElementById("scan-trigger-btn");

  // Set canvas size to match video frame
  canvas.width = video.videoWidth;
  canvas.height = video.videoHeight;
  ctx.drawImage(video, 0, 0, canvas.width, canvas.height);

  btn.textContent = "⏳ Extracting Text...";
  btn.disabled = true;

  try {
    // Run OCR on the captured image
    const {
      data: { text },
    } = await ocrWorker.recognize(canvas);
    console.log("Raw OCR Output:", text);

    // Use Regex to find 5 to 8 digit numbers in the messy text
    const foundNumbers = text.match(/\b\d{5,8}\b/g) || [];
    let matchedCode = null;

    // Check found numbers against our Dulux Catalog
    for (const num of foundNumbers) {
      if (PRODUCT_CATALOG[num]) {
        matchedCode = num;
        break;
      }
    }

    if (matchedCode) {
      App.handleScan(matchedCode); // Route to existing Add/Sell logic
    } else {
      App.triggerFeedback("error");
      App.renderLastCard(
        { code: "---", name: "No Catalog Match Found", quantity: 0 },
        "Check alignment",
        true,
      );
    }
  } catch (err) {
    console.error("OCR Failed", err);
  } finally {
    btn.textContent = "📸 Tap to Scan Code";
    btn.disabled = false;
  }
}

// Update the boot sequence
window.addEventListener("DOMContentLoaded", async () => {
  await App.start();
  initOCR();
});

window.addEventListener("DOMContentLoaded", async () => {
  await App.start();
  initCamera();
});

// Add these state variables to the top of your App object
App.pendingItem = null;
App.selectedSize = "1L";
App.selectedQty = 1;

// --- 1. The Dot-Matrix OCR Engine Fix ---
let ocrWorker = null;

async function initOCR() {
  if (!ocrWorker) {
    ocrWorker = await Tesseract.createWorker("eng");
    await ocrWorker.setParameters({ tessedit_char_whitelist: "0123456789" }); // Force numbers only to reduce errors
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

async function captureAndRead() {
  const video = document.getElementById("camera-feed");
  const canvas = document.getElementById("capture-canvas");
  const ctx = canvas.getContext("2d");
  const btn = document.getElementById("scan-trigger-btn");

  canvas.width = video.videoWidth;
  canvas.height = video.videoHeight;

  // THE DOT-MATRIX FIX: Blur to connect dots, contrast to harden lines
  ctx.filter = "grayscale(100%) contrast(300%) blur(1.5px)";
  ctx.drawImage(video, 0, 0, canvas.width, canvas.height);

  btn.textContent = "⏳ Processing...";
  btn.disabled = true;

  try {
    const {
      data: { text },
    } = await ocrWorker.recognize(canvas);
    const foundNumbers = text.match(/\b\d{5,8}\b/g) || [];
    let matchedCode = null;

    for (const num of foundNumbers) {
      if (PRODUCT_CATALOG[num]) {
        matchedCode = num;
        break;
      }
    }

    if (matchedCode) {
      App.openConfirmSheet(matchedCode);
    } else {
      App.triggerFeedback("error");
      alert("Code not recognized. Ensure the numbers are in focus.");
    }
  } catch (err) {
    console.error("OCR Failed", err);
  } finally {
    btn.textContent = "📸 Tap to Scan Code";
    btn.disabled = false;
  }
}

// --- 2. Post-Scan Confirmation Logic ---
App.openConfirmSheet = function (code) {
  this.pendingItem = { code: code, ...PRODUCT_CATALOG[code] };

  document.getElementById("confirm-name").textContent = this.pendingItem.name;
  document.getElementById("confirm-code").textContent = `Code: ${code}`;
  document.getElementById("confirm-mode-text").textContent =
    this.currentMode === "in" ? "Add" : "Sell";

  // Reset slider and pills
  document.getElementById("swipe-thumb").style.transform = `translateX(0px)`;
  document.getElementById("swipe-text").style.opacity = 1;
  this.selectedSize = "1L";
  this.selectedQty = 1;
  this.updatePills();

  document.getElementById("confirm-sheet").classList.add("active");
  this.triggerFeedback(this.currentMode); // Haptic tick
};

App.closeConfirmSheet = function () {
  document.getElementById("confirm-sheet").classList.remove("active");
  this.pendingItem = null;
};

App.updatePills = function () {
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
};

// Bind pill clicks (run this inside App.bindEvents())
document.querySelectorAll(".size-pill").forEach((pill) => {
  pill.addEventListener("click", (e) => {
    App.selectedSize = e.target.dataset.size;
    App.updatePills();
  });
});
document.querySelectorAll(".qty-pill").forEach((pill) => {
  pill.addEventListener("click", (e) => {
    if (e.target.dataset.qty === "custom") {
      const val = prompt("Enter custom quantity:");
      const parsed = parseInt(val, 10);
      if (parsed > 0) App.selectedQty = parsed;
    } else {
      App.selectedQty = parseInt(e.target.dataset.qty, 10);
    }
    App.updatePills();
  });
});

// --- 3. Swipe-to-Confirm Physics ---
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
    maxTranslate = track.offsetWidth - thumb.offsetWidth - 8; // 8px padding
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

  // If dragged more than 85% of the way, commit!
  if (currentTranslate > maxTranslate * 0.85) {
    thumb.style.transform = `translateX(${maxTranslate}px)`;
    setTimeout(() => App.commitScan(), 200);
  } else {
    // Snap back
    thumb.style.transform = `translateX(0px)`;
    text.style.opacity = 1;
  }
});

// --- 4. Database Save with Pack Size ---
App.commitScan = async function () {
  if (!this.pendingItem) return;

  // Combine code and pack size to create a unique ID (e.g., "324000_4L")
  const uniqueId = `${this.pendingItem.code}_${this.selectedSize}`;
  let item = await this.db.getItem(uniqueId);
  const delta = this.selectedQty;

  if (this.currentMode === "in") {
    if (!item) {
      item = {
        code: uniqueId,
        rawCode: this.pendingItem.code,
        name: this.pendingItem.name,
        category: this.pendingItem.category,
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
};
