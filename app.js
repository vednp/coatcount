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
  { c: "73519672", n: "DN VAF Metallic - Silver" },
  { c: "73519772", n: "DN VAF Metallic - Gold" },
  { c: "IN73519672", n: "DN VAF Metallic - Silver" },
  { c: "IN73519772", n: "DN VAF Metallic - Gold" },
  { c: "58517 66-70", n: "VT Eterna Matt White/90 Base" },
  { c: "58517 71-74", n: "VT Eterna Matt 92 Base" },
  { c: "58517 76-79", n: "VT Eterna Matt 93 Base" },
  { c: "58517 80-81", n: "VT Eterna Matt 94 Base" },
  { c: "58524 37-40", n: "VT Eterna Basecoat" },
  { c: "58564 14-18", n: "DN VT Diamond 93 Base" },
  { c: "58564 19-23", n: "DN VT Pearl Glo New Accent 93 Base" },
  { c: "58564 09-13", n: "DN VT Platinum Glo New Accent 93 Base" },
  { c: "5832299/306/313/320 &", n: "5910851 Dulux SuperClean 3in1 MR White 90 Base" },
  { c: "5832327/34/41/48 &", n: "5910851 Dulux SuperClean 3in1 MR 92 Base" },
  { c: "5832355/362/369/472 &", n: "5910852 Dulux SuperClean 3in1 MR 93 Base" },
  { c: "5832479/486/493/500 &", n: "5910853 Dulux SuperClean 3in1 MR 94 Base" },
  { c: "5906464/65/66/67 &", n: "5906736 Dulux SuperClean New Brilliant White" },
  { c: "5906708/09/10/11 &", n: "5906739 Dulux SuperClean New White 90 Base" },
  { c: "5906712/13/14/15 &", n: "5906739 Dulux SuperClean New 92 Base" },
  { c: "5906716/17/18/19 &", n: "5906739 Dulux SuperClean New 93 Base" },
  { c: "5906720/21/22/23 &", n: "5906740 Dulux SuperClean New 94 Base" },
  { c: "5906724/25 &", n: "5906741 Dulux SuperClean New 95 Base" },
  { c: "5906728/29 &", n: "5906742 Dulux SuperClean New 96 Base" },
  { c: "5906732/33", n: "&5906743 Dulux SuperClean New 97 Base" },
  { c: "5853009/10/11/12/31", n: "Dulux SuperCover Ultra Brilliant White" },
  { c: "5853013/14/15/16/32", n: "Dulux SuperCover Ultra White 90 Base" },
  { c: "5853017/18/19/20/33", n: "Dulux SuperCover Ultra Intermediate 92 Base" },
  { c: "5853021/22/23/24/34", n: "Dulux SuperCover Ultra Accent 94 Base" },
  { c: "5853027/28/36", n: "Dulux SuperCover Ultra Yellow 96 Base" },
  { c: "5853029/30/37", n: "Dulux SuperCover Ultra Red 97 Base" },
  { c: "5948200-03", n: "DN WS PF 15yr 98 Base" },
  { c: "5948407", n: "DN WS PF 15yr 92 Base" },
  { c: "5948409", n: "DN WS PF 15yr 93 Base" },
  { c: "5948411", n: "DN WS PF 15yr 94 Base" },
  { c: "5771981/82/83/84/013", n: "DN WS PF Brilliant White" },
  { c: "5771985/86/87/88/014", n: "DN WS PF White 90 Base" },
  { c: "5771989/90/91/92/015", n: "DN WS PF Intermediate 92 Base" },
  { c: "5771993/94/95/96", n: "DN WS PF Accent 94 Base" },
  { c: "5771997/98/99/000/017", n: "DN WS PF Deep 95 Base" },
  { c: "5772018/02/03/04", n: "DN WS PF YOX Base" },
  { c: "5772019/06/07/08", n: "DN WS PF ROX Base" },
  { c: "5772020/10/11/12", n: "DN WS PF Vibrant Yellow Base" },
  { c: "5769795/96/97/98", n: "DN WS Powerflexx 93 Base" },
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

/* Legacy implementation retained temporarily for catalog provenance.

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

*/
// --- Legacy OCR pipeline (reactivated for dotted paint-box codes) ---
// ================================================================
// 4. ROBUST OCR FOR DOTTED / DOT-MATRIX PRODUCT CODES
// ================================================================

let ocrWorker = null;
let ocrReady = false;
let ocrReadyPromise = null;

const OCR_UPSCALE = 3;
const OCR_MAX_WIDTH = 1800;

// ---------------------------------------------------------------
// OCR worker
// ---------------------------------------------------------------

async function initOCR() {
  if (ocrReadyPromise) return ocrReadyPromise;

  ocrReadyPromise = (async () => {
    try {
      ocrWorker = await Tesseract.createWorker("eng");

      await ocrWorker.setParameters({
        tessedit_char_whitelist: "0123456789",

        // IMPORTANT:
        // The scanner target contains ONE line of digits.
        // PSM 7 is much better than sparse-text mode 11 here.
        tessedit_pageseg_mode: "7",

        // Treat input as numeric-looking text.
        classify_bln_numeric_mode: "1",

        // Avoid language dictionary interference.
        load_system_dawg: "0",
        load_freq_dawg: "0",

        // Tell Tesseract that the image is high resolution.
        user_defined_dpi: "300",
      });

      ocrReady = true;
      console.log("OCR ready");
    } catch (err) {
      console.error("OCR initialization failed:", err);
      ocrReady = false;
      throw err;
    }
  })();

  return ocrReadyPromise;
}

// ---------------------------------------------------------------
// Camera
// ---------------------------------------------------------------

async function legacyInitCamera() {
  const video = document.getElementById("camera-feed");

  try {
    const stream = await navigator.mediaDevices.getUserMedia({
      video: {
        facingMode: { ideal: "environment" },
        width: { ideal: 1920 },
        height: { ideal: 1080 },
      },
      audio: false,
    });

    video.srcObject = stream;

    await new Promise((resolve) => {
      if (video.readyState >= 2) {
        resolve();
      } else {
        video.addEventListener("loadedmetadata", resolve, { once: true });
      }
    });
  } catch (err) {
    console.error("Camera denied:", err);
    alert("Camera permission is required.");
  }
}

// ---------------------------------------------------------------
// Utility
// ---------------------------------------------------------------

function clamp(v, min, max) {
  return Math.max(min, Math.min(max, v));
}

function createCanvas(width, height) {
  const canvas = document.createElement("canvas");
  canvas.width = Math.max(1, Math.round(width));
  canvas.height = Math.max(1, Math.round(height));
  return canvas;
}

// ---------------------------------------------------------------
// Crop ONLY the scan target
//
// This is a major improvement over processing the entire camera frame.
// ---------------------------------------------------------------

function captureScanRegion(video) {
  const videoRect = video.getBoundingClientRect();
  const target = document.querySelector(".scan-target");

  if (!target) {
    const canvas = createCanvas(video.videoWidth, video.videoHeight);
    canvas
      .getContext("2d")
      .drawImage(video, 0, 0, canvas.width, canvas.height);
    return canvas;
  }

  const targetRect = target.getBoundingClientRect();

  // Convert CSS coordinates -> actual camera pixels.
  const scaleX = video.videoWidth / videoRect.width;
  const scaleY = video.videoHeight / videoRect.height;

  let sx = (targetRect.left - videoRect.left) * scaleX;
  let sy = (targetRect.top - videoRect.top) * scaleY;
  let sw = targetRect.width * scaleX;
  let sh = targetRect.height * scaleY;

  // Add margin around the target so dots are never clipped.
  const marginX = sw * 0.18;
  const marginY = sh * 0.70;

  sx -= marginX;
  sy -= marginY;
  sw += marginX * 2;
  sh += marginY * 2;

  sx = clamp(sx, 0, video.videoWidth - 1);
  sy = clamp(sy, 0, video.videoHeight - 1);

  sw = clamp(sw, 1, video.videoWidth - sx);
  sh = clamp(sh, 1, video.videoHeight - sy);

  // Upscale immediately.
  const scale = Math.min(
    OCR_UPSCALE,
    OCR_MAX_WIDTH / Math.max(1, sw)
  );

  const canvas = createCanvas(sw * scale, sh * scale);

  const ctx = canvas.getContext("2d", {
    willReadFrequently: true,
  });

  ctx.imageSmoothingEnabled = true;
  ctx.imageSmoothingQuality = "high";

  ctx.drawImage(
    video,
    sx,
    sy,
    sw,
    sh,
    0,
    0,
    canvas.width,
    canvas.height
  );

  return canvas;
}

// ---------------------------------------------------------------
// Grayscale
// ---------------------------------------------------------------

function toGrayscale(ctx, width, height) {
  const data = ctx.getImageData(0, 0, width, height).data;
  const gray = new Float32Array(width * height);

  for (let i = 0, p = 0; i < data.length; i += 4, p++) {
    gray[p] =
      data[i] * 0.299 +
      data[i + 1] * 0.587 +
      data[i + 2] * 0.114;
  }

  return gray;
}

// ---------------------------------------------------------------
// Box blur
// ---------------------------------------------------------------

function boxBlur(src, width, height, radius) {
  if (radius <= 0) return src;

  const tmp = new Float32Array(width * height);
  const out = new Float32Array(width * height);
  const size = radius * 2 + 1;

  // Horizontal
  for (let y = 0; y < height; y++) {
    const row = y * width;

    let sum = 0;

    for (let x = -radius; x <= radius; x++) {
      sum += src[row + clamp(x, 0, width - 1)];
    }

    for (let x = 0; x < width; x++) {
      tmp[row + x] = sum / size;

      sum +=
        src[row + clamp(x + radius + 1, 0, width - 1)] -
        src[row + clamp(x - radius, 0, width - 1)];
    }
  }

  // Vertical
  for (let x = 0; x < width; x++) {
    let sum = 0;

    for (let y = -radius; y <= radius; y++) {
      sum += tmp[clamp(y, 0, height - 1) * width + x];
    }

    for (let y = 0; y < height; y++) {
      out[y * width + x] = sum / size;

      sum +=
        tmp[clamp(y + radius + 1, 0, height - 1) * width + x] -
        tmp[clamp(y - radius, 0, height - 1) * width + x];
    }
  }

  return out;
}

// ---------------------------------------------------------------
// Dark-pixel dilation.
//
// This is especially useful for dot-matrix printing.
// It makes:
//
//      . . . .       ->       █████
//
// without requiring the original print to be continuous.
// ---------------------------------------------------------------

function darkDilate(gray, width, height, radius) {
  if (radius <= 0) return gray;

  const horizontal = new Float32Array(width * height);
  const output = new Float32Array(width * height);

  for (let y = 0; y < height; y++) {
    const row = y * width;

    for (let x = 0; x < width; x++) {
      let minValue = 255;

      for (
        let xx = Math.max(0, x - radius);
        xx <= Math.min(width - 1, x + radius);
        xx++
      ) {
        minValue = Math.min(minValue, gray[row + xx]);
      }

      horizontal[row + x] = minValue;
    }
  }

  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      let minValue = 255;

      for (
        let yy = Math.max(0, y - radius);
        yy <= Math.min(height - 1, y + radius);
        yy++
      ) {
        minValue = Math.min(
          minValue,
          horizontal[yy * width + x]
        );
      }

      output[y * width + x] = minValue;
    }
  }

  return output;
}

// ---------------------------------------------------------------
// Otsu threshold
// ---------------------------------------------------------------

function otsuThreshold(gray) {
  const hist = new Array(256).fill(0);

  for (let i = 0; i < gray.length; i++) {
    hist[Math.max(0, Math.min(255, gray[i] | 0))]++;
  }

  const total = gray.length;

  let totalSum = 0;

  for (let i = 0; i < 256; i++) {
    totalSum += i * hist[i];
  }

  let sumBackground = 0;
  let weightBackground = 0;

  let bestVariance = -1;
  let bestThreshold = 127;

  for (let t = 0; t < 256; t++) {
    weightBackground += hist[t];

    if (weightBackground === 0) continue;

    const weightForeground = total - weightBackground;

    if (weightForeground === 0) break;

    sumBackground += t * hist[t];

    const meanBackground =
      sumBackground / weightBackground;

    const meanForeground =
      (totalSum - sumBackground) / weightForeground;

    const variance =
      weightBackground *
      weightForeground *
      Math.pow(meanBackground - meanForeground, 2);

    if (variance > bestVariance) {
      bestVariance = variance;
      bestThreshold = t;
    }
  }

  return bestThreshold;
}

// ---------------------------------------------------------------
// Adaptive threshold
//
// More reliable when the paper/label has uneven lighting.
// ---------------------------------------------------------------

function adaptiveThreshold(
  gray,
  width,
  height,
  radius,
  offset
) {
  const localMean = boxBlur(gray, width, height, radius);
  const result = new Uint8Array(width * height);

  for (let i = 0; i < gray.length; i++) {
    result[i] =
      gray[i] < localMean[i] - offset
        ? 0
        : 255;
  }

  return result;
}

// ---------------------------------------------------------------
// Convert binary pixels to image canvas
// ---------------------------------------------------------------

function binaryToCanvas(binary, width, height) {
  const canvas = createCanvas(width, height);
  const ctx = canvas.getContext("2d", {
    willReadFrequently: true,
  });

  const image = ctx.createImageData(width, height);

  for (let i = 0, p = 0; i < binary.length; i++, p += 4) {
    const v = binary[i];

    image.data[p] = v;
    image.data[p + 1] = v;
    image.data[p + 2] = v;
    image.data[p + 3] = 255;
  }

  ctx.putImageData(image, 0, 0);

  return canvas;
}

// ---------------------------------------------------------------
// Preprocessing variant
// ---------------------------------------------------------------

function preprocessDottedImage(
  sourceCanvas,
  options
) {
  const width = sourceCanvas.width;
  const height = sourceCanvas.height;

  const ctx = sourceCanvas.getContext("2d", {
    willReadFrequently: true,
  });

  const gray = toGrayscale(ctx, width, height);

  // First enlarge/darken dots.
  const merged = darkDilate(
    gray,
    width,
    height,
    options.dotRadius
  );

  let binary;

  if (options.adaptive) {
    binary = adaptiveThreshold(
      merged,
      width,
      height,
      options.blurRadius,
      options.offset
    );
  } else {
    const blurred = boxBlur(
      merged,
      width,
      height,
      options.blurRadius
    );

    const threshold = otsuThreshold(blurred);

    binary = new Uint8Array(width * height);

    for (let i = 0; i < blurred.length; i++) {
      binary[i] =
        blurred[i] < threshold ? 0 : 255;
    }
  }

  // Final dot/stroke fusion.
  if (options.finalDilate > 0) {
    // Convert binary back to gray so darkDilate can be reused.
    const temp = new Float32Array(binary.length);

    for (let i = 0; i < binary.length; i++) {
      temp[i] = binary[i];
    }

    const mergedBinary = darkDilate(
      temp,
      width,
      height,
      options.finalDilate
    );

    for (let i = 0; i < mergedBinary.length; i++) {
      binary[i] = mergedBinary[i] < 128 ? 0 : 255;
    }
  }

  return binaryToCanvas(binary, width, height);
}

// ---------------------------------------------------------------
// OCR variants
//
// Different cameras/labels need different amounts of dot fusion.
// ---------------------------------------------------------------

const OCR_VARIANTS = [
  {
    name: "adaptive-strong",
    dotRadius: 2,
    blurRadius: 4,
    offset: 12,
    finalDilate: 2,
    adaptive: true,
  },
  {
    name: "otsu-strong",
    dotRadius: 3,
    blurRadius: 3,
    offset: 0,
    finalDilate: 2,
    adaptive: false,
  },
  {
    name: "adaptive-medium",
    dotRadius: 2,
    blurRadius: 3,
    offset: 10,
    finalDilate: 1,
    adaptive: true,
  },
  {
    name: "otsu-medium",
    dotRadius: 2,
    blurRadius: 2,
    offset: 0,
    finalDilate: 2,
    adaptive: false,
  },
  {
    name: "adaptive-light",
    dotRadius: 1,
    blurRadius: 2,
    offset: 8,
    finalDilate: 1,
    adaptive: true,
  }
];

// ---------------------------------------------------------------
// Normalize OCR output
// ---------------------------------------------------------------

function normalizeOCRText(text) {
  return String(text || "")
    .replace(/O/gi, "0")
    .replace(/I/gi, "1")
    .replace(/L/gi, "1")
    .replace(/S/gi, "5")
    .replace(/B/gi, "8")
    .replace(/[^0-9]/g, "");
}

// ---------------------------------------------------------------
// Levenshtein distance
// ---------------------------------------------------------------

function levenshtein(a, b) {
  const rows = b.length + 1;
  const cols = a.length + 1;

  const dp = new Array(rows);

  for (let i = 0; i < rows; i++) {
    dp[i] = new Array(cols).fill(0);
    dp[i][0] = i;
  }

  for (let j = 0; j < cols; j++) {
    dp[0][j] = j;
  }

  for (let i = 1; i < rows; i++) {
    for (let j = 1; j < cols; j++) {
      const cost = a[j - 1] === b[i - 1] ? 0 : 1;

      dp[i][j] = Math.min(
        dp[i - 1][j] + 1,
        dp[i][j - 1] + 1,
        dp[i - 1][j - 1] + cost
      );
    }
  }

  return dp[rows - 1][cols - 1];
}

// ---------------------------------------------------------------
// Find the closest REAL catalog code.
//
// This is extremely important.
//
// Example:
//
// OCR -> 32400
// Catalog -> 324000
//
// OCR -> 32400O
// Catalog -> 324000
//
// OCR -> 324008
// Catalog -> 324000
//
// We can safely correct it because the valid codes are already
// present in PRODUCT_CATALOG.
// ---------------------------------------------------------------

function matchCatalogCode(rawText) {
  const digits = normalizeOCRText(rawText);

  if (!digits) return null;

  const catalogCodes = Object.keys(PRODUCT_CATALOG).filter(
    (code) => /^\d+$/.test(code)
  );

  // ------------------------------------------------------------
  // 1. Exact match anywhere.
  // ------------------------------------------------------------

  for (const code of catalogCodes) {
    if (digits.includes(code)) {
      return code;
    }
  }

  // ------------------------------------------------------------
  // 2. Try numeric sequences from OCR.
  // ------------------------------------------------------------

  const candidates = new Set();

  const tokenMatches =
    String(rawText).match(/\d{4,10}/g) || [];

  tokenMatches.forEach((token) => {
    candidates.add(token);
  });

  // Also scan every possible substring.
  for (let len = 5; len <= 8; len++) {
    for (let i = 0; i + len <= digits.length; i++) {
      candidates.add(digits.slice(i, i + len));
    }
  }

  let bestCode = null;
  let bestScore = Infinity;

  for (const candidate of candidates) {
    for (const code of catalogCodes) {
      // Don't compare wildly different lengths.
      if (Math.abs(candidate.length - code.length) > 1) {
        continue;
      }

      const distance = levenshtein(candidate, code);

      // Very conservative fuzzy matching.
      let allowed = 0;

      if (code.length >= 7) {
        allowed = 2;
      } else if (code.length >= 5) {
        allowed = 1;
      }

      if (distance <= allowed) {
        const lengthPenalty =
          Math.abs(candidate.length - code.length) * 0.5;

        const score = distance + lengthPenalty;

        if (score < bestScore) {
          bestScore = score;
          bestCode = code;
        }
      }
    }
  }

  return bestCode;
}

// ---------------------------------------------------------------
// OCR one image with multiple page segmentation modes.
//
// Even though PSM 7 is the default worker setting, trying 8 and
// 13 gives the dotted font a couple of different recognition
// strategies.
// ---------------------------------------------------------------

async function recognizeCanvas(canvas) {
  // Ordered 13, 8, 7. PSM 13 (raw line) and 8 (single word) are generally much better for dotted numeric matrices than 7.
  const psmModes = ["13", "8", "7"];

  let bestText = "";

  for (const psm of psmModes) {
    // Only set page seg mode inside the loop to avoid heavy reset overhead if possible,
    // but Tesseract.js setParameters is usually fine as long as it doesn't trigger language reload.
    await ocrWorker.setParameters({
      tessedit_pageseg_mode: psm,
      tessedit_char_whitelist: "0123456789",
      classify_bln_numeric_mode: "1",
      load_system_dawg: "0",
      load_freq_dawg: "0",
      user_defined_dpi: "300",
    });

    const result = await ocrWorker.recognize(canvas);

    const text = result?.data?.text || "";

    if (text.length > bestText.length) {
      bestText = text;
    }

    const matched = matchCatalogCode(text);

    if (matched) {
      return {
        text,
        matched,
        psm,
      };
    }
  }

  return {
    text: bestText,
    matched: matchCatalogCode(bestText),
    psm: null,
  };
}

// ---------------------------------------------------------------
// Capture + OCR
// ---------------------------------------------------------------

async function legacyCaptureAndRead() {
  const video = document.getElementById("camera-feed");
  const btn = document.getElementById("scan-trigger-btn");

  if (!video.videoWidth || !video.videoHeight) {
    alert("Camera is not ready yet.");
    return;
  }

  btn.disabled = true;
  btn.textContent = "⏳ Reading...";

  try {
    await initOCR();

    // IMPORTANT:
    // Crop to the scan target rather than OCR the entire frame.
    const scanCanvas = captureScanRegion(video);

    console.log(
      "OCR image:",
      scanCanvas.width,
      "x",
      scanCanvas.height
    );

    let matchedCode = null;
    let lastText = "";
    let lastCandidates = [];

    // Try every preprocessing version.
    for (const variant of OCR_VARIANTS) {
      console.log("Trying OCR variant:", variant.name);

      const processed = preprocessDottedImage(
        scanCanvas,
        variant
      );

      const result = await recognizeCanvas(processed);

      const text = result.text || "";

      if (text) {
        lastText = text;

        const candidates =
          text.match(/\d{4,10}/g) || [];

        if (candidates.length) {
          lastCandidates = candidates;
        }

        console.log(
          variant.name,
          "OCR:",
          JSON.stringify(text),
          "match:",
          result.matched
        );
      }

      if (result.matched) {
        matchedCode = result.matched;

        console.log(
          "MATCHED CATALOG CODE:",
          matchedCode
        );

        break;
      }
    }

    // ----------------------------------------------------------
    // SUCCESS
    // ----------------------------------------------------------

    if (matchedCode) {
      App.openConfirmSheet(matchedCode);
      return;
    }

    // ----------------------------------------------------------
    // FAILURE
    // ----------------------------------------------------------

    App.triggerFeedback("error");

    console.warn(
      "OCR failed.",
      "Last text:",
      lastText,
      "Candidates:",
      lastCandidates
    );

    if (lastCandidates.length) {
      document.getElementById("manual-code").value =
        lastCandidates[0];

      document
        .getElementById("manual-modal")
        .classList.add("active");
    } else {
      alert(
        "Code not recognized.\n\n" +
        "Place the dotted code inside the dashed box, " +
        "move slightly closer, and tap Scan again."
      );
    }
  } catch (err) {
    console.error("OCR Failed:", err);

    App.triggerFeedback("error");

    alert(
      "OCR error. Please refresh the page and try again."
    );
  } finally {
    btn.disabled = false;
    btn.textContent = "📸 Tap to Scan Code";
  }
}

// ---------------------------------------------------------------
// Boot
// ---------------------------------------------------------------

/* Legacy boot disabled: the current UI owns camera and event startup.
window.addEventListener("DOMContentLoaded", async () => {
  await App.start();

  // Start camera and OCR in parallel.
  await Promise.allSettled([
    initCamera(),
    initOCR(),
  ]);

  const button =
    document.getElementById("scan-trigger-btn");

  button.addEventListener("click", captureAndRead);
});
*/

// CoatCount application - fast barcode-first scanning with a dot-matrix fallback.
class CoatCountStore {
  constructor() { this.db = null; }
  async init() {
    this.db = await new Promise((resolve, reject) => {
      const request = indexedDB.open("CoatCountDB", 2);
      request.onupgradeneeded = () => {
        const db = request.result;
        if (!db.objectStoreNames.contains("inventory")) db.createObjectStore("inventory", { keyPath: "id" });
        if (!db.objectStoreNames.contains("activity")) db.createObjectStore("activity", { keyPath: "id", autoIncrement: true });
      };
      request.onsuccess = () => resolve(request.result);
      request.onerror = () => reject(request.error);
    });
    // Older installs used `code` as the storage key. Keep their stock intact.
    const legacy = await this.all();
    await Promise.all(legacy.filter(item => !item.id).map(item => this.put({ ...item, id: item.code })));
  }
  request(store, mode, action) {
    return new Promise((resolve, reject) => {
      const tx = this.db.transaction(store, mode);
      const req = action(tx.objectStore(store));
      req.onsuccess = () => resolve(req.result);
      req.onerror = () => reject(req.error);
    });
  }
  get(id) { return this.request("inventory", "readonly", s => s.get(id)); }
  all() { return this.request("inventory", "readonly", s => s.getAll()); }
  put(item) { return this.request("inventory", "readwrite", s => s.put(item)); }
  remove(id) { return this.request("inventory", "readwrite", s => s.delete(id)); }
  log(entry) { return this.request("activity", "readwrite", s => s.add(entry)); }
  async todayCount() {
    const entries = await this.request("activity", "readonly", s => s.getAll());
    const today = new Date().toDateString();
    return entries.filter(e => new Date(e.at).toDateString() === today).length;
  }
}

const App = {
  store: new CoatCountStore(), mode: "in", pending: null, size: "1L", qty: 1, busy: false,
  async start() {
    await this.store.init();
    this.bindEvents();
    await this.refresh();
    initCamera();
  },
  bindEvents() {
    document.querySelectorAll(".nav-tab").forEach(button => button.addEventListener("click", () => this.setMode(button.dataset.mode)));
    document.querySelectorAll("#qty-pill-group .qty-pill").forEach(button => button.addEventListener("click", () => {
      document.querySelectorAll("#qty-pill-group .qty-pill").forEach(p => p.classList.toggle("active", p === button));
      this.qty = Number(button.dataset.qty);
    }));
    document.querySelectorAll(".size-pill").forEach(button => button.addEventListener("click", () => { this.size = button.dataset.size; this.updatePills(); }));
    document.querySelectorAll("#pack-qty-pills .qty-pill").forEach(button => button.addEventListener("click", () => {
      if (button.dataset.qty === "custom") {
        const value = Number(prompt("Quantity", String(this.qty)));
        if (Number.isFinite(value) && value > 0) this.qty = Math.floor(value);
      } else this.qty = Number(button.dataset.qty);
      this.updatePills();
    }));
    document.getElementById("inventory-search").addEventListener("input", e => this.renderInventory(e.target.value));
    document.getElementById("manual-add-btn").addEventListener("click", () => this.openManual());
    document.getElementById("manual-cancel-btn").addEventListener("click", () => this.closeManual());
    document.getElementById("manual-save-btn").addEventListener("click", () => this.saveManual());
    document.getElementById("confirm-cancel-btn").addEventListener("click", () => this.closeConfirm());
    document.getElementById("scan-trigger-btn").addEventListener("click", captureAndRead);
    const installButton = document.getElementById("install-app-btn"), installSheet = document.getElementById("install-sheet");
    const isIOS = /iphone|ipad|ipod/i.test(navigator.userAgent) || (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1);
    const isStandalone = window.matchMedia("(display-mode: standalone)").matches || navigator.standalone;
    if (isIOS && !isStandalone) { installButton.hidden = false; installButton.addEventListener("click", () => installSheet.classList.add("active")); }
    document.getElementById("install-sheet-close").addEventListener("click", () => installSheet.classList.remove("active"));
    this.bindConfirmSlider();
  },
  bindConfirmSlider() {
    const track = document.getElementById("swipe-track"), thumb = document.getElementById("swipe-thumb"), text = document.getElementById("swipe-text");
    let start = 0, offset = 0, active = false;
    const move = x => { const max = track.clientWidth - thumb.clientWidth - 8; offset = Math.max(0, Math.min(max, x - start)); thumb.style.transform = `translateX(${offset}px)`; text.style.opacity = String(1 - offset / max); };
    thumb.addEventListener("pointerdown", e => { active = true; start = e.clientX; thumb.setPointerCapture(e.pointerId); thumb.style.transition = "none"; });
    thumb.addEventListener("pointermove", e => { if (active) move(e.clientX); });
    thumb.addEventListener("pointerup", () => { if (!active) return; active = false; const max = track.clientWidth - thumb.clientWidth - 8; thumb.style.transition = "transform .2s ease"; if (offset > max * .82) { thumb.style.transform = `translateX(${max}px)`; setTimeout(() => this.commit(), 120); } else { thumb.style.transform = "translateX(0)"; text.style.opacity = "1"; } });
  },
  setMode(mode) {
    this.mode = mode;
    document.body.className = `mode-${mode}`;
    document.querySelectorAll(".nav-tab").forEach(t => t.classList.toggle("active", t.dataset.mode === mode));
    document.getElementById("mode-indicator").textContent = mode === "in" ? "STOCK IN" : mode === "out" ? "STOCK OUT" : "INVENTORY";
    document.getElementById("scanner-view").classList.toggle("active", mode !== "inventory");
    document.getElementById("inventory-view").classList.toggle("active", mode === "inventory");
    if (mode === "inventory") this.renderInventory();
  },
  updatePills() {
    document.querySelectorAll(".size-pill").forEach(p => p.classList.toggle("active", p.dataset.size === this.size));
    document.querySelectorAll("#pack-qty-pills .qty-pill").forEach(p => p.classList.toggle("active", p.dataset.qty === String(this.qty) || (p.dataset.qty === "custom" && ![1,2,5,10].includes(this.qty))));
  },
  async refresh() {
    const items = await this.store.all(), units = items.reduce((n, item) => n + item.quantity, 0), today = await this.store.todayCount();
    document.getElementById("stat-summary").textContent = `${items.length} SKUs • ${units} Units`;
    document.getElementById("metric-units").textContent = units;
    document.getElementById("metric-skus").textContent = items.length;
    document.getElementById("metric-today").textContent = today;
  },
  openProduct(code) {
    const clean = normalizeCode(code), product = PRODUCT_CATALOG[clean];
    if (!product) { this.openManual(clean); return; }
    this.pending = { code: clean, name: product.name };
    this.size = "1L"; this.qty = this.qty || 1; this.updatePills();
    document.getElementById("confirm-name").textContent = product.name;
    document.getElementById("confirm-code").textContent = `Code: ${clean}`;
    document.getElementById("confirm-mode-text").textContent = this.mode === "out" ? "Sell" : "Add";
    document.getElementById("swipe-text").textContent = this.mode === "out" ? "Swipe to sell  ››" : "Swipe to add stock  ››";
    document.getElementById("swipe-thumb").style.transform = "translateX(0)";
    document.getElementById("confirm-sheet").classList.add("active");
  },
  closeConfirm() { document.getElementById("confirm-sheet").classList.remove("active"); this.pending = null; },
  openManual(code = "") { document.getElementById("manual-code").value = code; document.getElementById("manual-name").value = ""; document.getElementById("manual-qty").value = this.qty; document.getElementById("manual-modal").classList.add("active"); },
  closeManual() { document.getElementById("manual-modal").classList.remove("active"); },
  async saveManual() {
    const code = normalizeCode(document.getElementById("manual-code").value), name = document.getElementById("manual-name").value.trim(), quantity = Math.floor(Number(document.getElementById("manual-qty").value));
    if (!code || !name || !quantity) return alert("Enter a code, product name, and quantity.");
    PRODUCT_CATALOG[code] = { name }; this.pending = { code, name }; this.size = "1L"; this.qty = quantity; this.closeManual(); await this.commit("in");
  },
  async commit(forceMode) {
    if (!this.pending || this.busy) return; this.busy = true;
    const mode = forceMode || this.mode, id = `${this.pending.code}::${this.size}`, item = await this.store.get(id), existing = item?.quantity || 0;
    if (mode === "out" && !item) { this.feedback("error"); this.busy = false; return alert("This product and pack size are not currently in stock."); }
    const next = mode === "in" ? existing + this.qty : existing - this.qty;
    if (next <= 0) { if (item) await this.store.remove(id); } else await this.store.put({ id, code: id, rawCode: this.pending.code, name: this.pending.name, packSize: this.size, quantity: next, updatedAt: new Date().toISOString() });
    await this.store.log({ at: new Date().toISOString(), mode, code: this.pending.code, quantity: this.qty });
    this.lastScan(this.pending, mode, next > 0 ? next : 0); this.closeConfirm(); this.feedback(mode); await this.refresh(); if (this.mode === "inventory") this.renderInventory(); this.busy = false;
  },
  feedback(mode) { if (navigator.vibrate) navigator.vibrate(mode === "error" ? [40, 50, 40] : 30); const overlay = document.getElementById("swipe-overlay"); overlay.className = `swipe-effect active swipe-${mode}`; setTimeout(() => overlay.className = "swipe-effect", 700); },
  lastScan(product, mode, stock) { const card = document.getElementById("last-scanned-card"); card.className = "dense-card"; card.innerHTML = `<div class="card-top"><span class="card-code">${escapeHtml(product.code)}</span><span class="card-units">${stock} left</span></div><div class="card-name">${escapeHtml(product.name)}</div><div class="card-action-bar"><span class="card-badge-status">${mode === "in" ? "STOCK ADDED" : "SOLD"}</span><span>${this.qty} × ${this.size}</span></div>`; },
  async renderInventory(query = "") {
    const q = query.toLowerCase().trim(), items = (await this.store.all()).filter(i => !q || i.name.toLowerCase().includes(q) || i.rawCode.toLowerCase().includes(q)).sort((a,b) => b.updatedAt.localeCompare(a.updatedAt)), list = document.getElementById("inventory-list");
    list.replaceChildren(); if (!items.length) { list.innerHTML = '<p class="empty-list">No matching stock.</p>'; return; }
    items.forEach(item => { const el = document.createElement("article"); el.className = "inventory-card"; el.innerHTML = `<div class="inv-details"><span class="inv-name">${escapeHtml(item.name)} <em>${escapeHtml(item.packSize)}</em></span><span class="inv-code">${escapeHtml(item.rawCode)}</span></div><div class="inventory-actions"><button aria-label="Sell one" data-step="-1">−</button><strong>${item.quantity}</strong><button aria-label="Add one" data-step="1">+</button></div>`; el.querySelectorAll("button").forEach(b => b.addEventListener("click", () => this.adjust(item.id, Number(b.dataset.step)))); list.append(el); });
  },
  async adjust(id, step) { const item = await this.store.get(id); if (!item) return; item.quantity += step; if (item.quantity <= 0) await this.store.remove(id); else { item.updatedAt = new Date().toISOString(); await this.store.put(item); } await this.store.log({at:new Date().toISOString(),mode:step > 0 ? "in":"out",code:item.rawCode,quantity:1}); this.feedback(step > 0 ? "in" : "out"); await this.refresh(); this.renderInventory(document.getElementById("inventory-search").value); }
};

function normalizeCode(value) { return String(value || "").toUpperCase().replace(/O/g, "0").replace(/L/g, "1").replace(/[^A-Z0-9]/g, ""); }
function escapeHtml(value) { const span = document.createElement("span"); span.textContent = String(value); return span.innerHTML; }

let cameraStream;
async function initCamera() {
  const video = document.getElementById("camera-feed"), status = document.getElementById("camera-status");
  try { cameraStream = await navigator.mediaDevices.getUserMedia({ video: { facingMode: { ideal: "environment" }, width: { ideal: 1280 }, height: { ideal: 720 } }, audio: false }); video.srcObject = cameraStream; await video.play(); status.textContent = "Ready - keep the code inside the guide."; }
  catch { status.textContent = "Camera unavailable. You can still add products manually."; }
}
async function barcodeFromVideo(video) {
  if (!("BarcodeDetector" in window)) return null;
  const detector = new BarcodeDetector({ formats: ["code_128", "code_39", "ean_13", "ean_8", "upc_a", "upc_e", "itf"] });
  const results = await detector.detect(video); return results[0]?.rawValue || null;
}
function captureCrop(video) {
  const target = document.querySelector(".scan-target").getBoundingClientRect(), rect = video.getBoundingClientRect(), scaleX = video.videoWidth / rect.width, scaleY = video.videoHeight / rect.height;
  const marginX = target.width * .12, marginY = target.height * .65, sx = Math.max(0, (target.left - rect.left - marginX) * scaleX), sy = Math.max(0, (target.top - rect.top - marginY) * scaleY), sw = Math.min(video.videoWidth - sx, (target.width + marginX * 2) * scaleX), sh = Math.min(video.videoHeight - sy, (target.height + marginY * 2) * scaleY);
  const canvas = document.createElement("canvas"); canvas.width = Math.min(1600, Math.round(sw * 2)); canvas.height = Math.round(sh * (canvas.width / sw)); const ctx = canvas.getContext("2d", {willReadFrequently:true}); ctx.imageSmoothingEnabled = false; ctx.drawImage(video, sx, sy, sw, sh, 0, 0, canvas.width, canvas.height); return canvas;
}
function preprocessDotMatrix(canvas) {
  const ctx = canvas.getContext("2d", {willReadFrequently:true}), image = ctx.getImageData(0,0,canvas.width,canvas.height), data = image.data;
  let sum = 0; for (let i=0;i<data.length;i+=4) sum += data[i]*.299 + data[i+1]*.587 + data[i+2]*.114; const threshold = Math.max(85, Math.min(210, sum / (data.length/4) - 28));
  for (let i=0;i<data.length;i+=4) { const gray = data[i]*.299 + data[i+1]*.587 + data[i+2]*.114; const pixel = gray < threshold ? 0 : 255; data[i]=data[i+1]=data[i+2]=pixel; data[i+3]=255; }
  // A one-pixel dilation joins the tiny dots in matrix printing without joining adjacent digits.
  const source = new Uint8ClampedArray(data);
  for (let y=1;y<canvas.height-1;y++) for (let x=1;x<canvas.width-1;x++) { const at = (y*canvas.width+x)*4; if (source[at] === 0 || source[at-4] === 0 || source[at+4] === 0 || source[at-canvas.width*4] === 0 || source[at+canvas.width*4] === 0) data[at]=data[at+1]=data[at+2]=0; }
  ctx.putImageData(image,0,0); return canvas;
}
async function dottedCodeFromVideo(video) {
  if (!window.Tesseract) return null;
  if (!ocrWorker) { ocrWorker = await Tesseract.createWorker("eng"); await ocrWorker.setParameters({tessedit_char_whitelist:"0123456789IN", tessedit_pageseg_mode:"7", classify_bln_numeric_mode:"1", load_system_dawg:"0", load_freq_dawg:"0"}); }
  const { data } = await ocrWorker.recognize(preprocessDotMatrix(captureCrop(video))); const digits = normalizeCode(data.text); if (!digits) return null;
  if (PRODUCT_CATALOG[digits]) return digits;
  const numeric = digits.replace(/I/g, "1").match(/\d{5,10}/g) || []; return numeric.find(code => PRODUCT_CATALOG[code]) || closestCatalogCode(numeric[0]);
}
function closestCatalogCode(code) { if (!code) return null; const candidates = Object.keys(PRODUCT_CATALOG).filter(k => /^\d+$/.test(k) && Math.abs(k.length-code.length) <= 1); let best = null, score = 3; for (const key of candidates) { let changes = Math.abs(key.length-code.length); for (let i=0;i<Math.min(key.length,code.length);i++) if(key[i]!==code[i]) changes++; if(changes < score) {score=changes;best=key;} } return best; }
async function captureAndRead() {
  const button = document.getElementById("scan-trigger-btn"), video = document.getElementById("camera-feed"), status = document.getElementById("camera-status");
  if (!video.videoWidth) return App.openManual(); button.disabled = true; button.textContent = "Reading dotted code…"; status.textContent = "Trying enhanced paint-box reader…";
  try {
    await initOCR();
    const scanCanvas = captureScanRegion(video);
    let matchedCode = null;
    // Restore the former multi-pass reader: it tests both adaptive and Otsu
    // thresholding, with different dot-fusion levels, before giving up.
    for (const variant of OCR_VARIANTS) {
      const result = await recognizeCanvas(preprocessDottedImage(scanCanvas, variant));
      if (result.matched) { matchedCode = result.matched; break; }
    }
    if (matchedCode) { status.textContent = "Product recognised."; App.openProduct(matchedCode); }
    else { App.feedback("error"); status.textContent = "Not recognised - move closer or add it manually."; App.openManual(); }
  }
  catch { status.textContent = "Could not read that image. Try again or add manually."; App.feedback("error"); }
  finally { button.disabled = false; button.textContent = "Scan product"; }
}
window.addEventListener("DOMContentLoaded", () => App.start());
