// Massively Expanded Catalog Extracted from Dulux Price List[cite: 2]
const PRODUCT_CATALOG = {
  // Ambiance Velvet Touch & Special Effects[cite: 2]
  "73509372": { name: "DN VAF Trends Non - Metallic", category: "Interiors" },
  "73509672": { name: "DN VAF Trends Glitter Silver", category: "Interiors" },
  "73519672": { name: "DN VAF Metallic - Silver", category: "Interiors" },
  "5967833":  { name: "DN VT Velvetino Gold Base", category: "Interiors" },
  "307000":   { name: "DN VT Diamond White", category: "Interiors" },
  "306000":   { name: "DN VT Pearl Glo New Brilliant White", category: "Interiors" },
  "309000":   { name: "DN VT Platinum Glo White", category: "Interiors" },
  
  // SuperClean & SuperCover[cite: 2]
  "5832271":  { name: "Dulux SuperClean 3in1 MR Brilliant White", category: "Interiors" },
  "5906464":  { name: "Dulux SuperClean New Brilliant White", category: "Interiors" },
  "5853009":  { name: "Dulux SuperCover Ultra Brilliant White", category: "Interiors" },
  
  // Weathershield Exteriors[cite: 2]
  "5948168":  { name: "DN WS PF 15yr Br White", category: "Exteriors" },
  "5771981":  { name: "DN WS PF Brilliant White", category: "Exteriors" },
  "5948204":  { name: "DN WS Max 10yr Br White", category: "Exteriors" },
  "5948360":  { name: "DN WS RP 8yr Br White", category: "Exteriors" },
  "364000":   { name: "DN WS Protect Dustproof Brilliant White", category: "Exteriors" },
  "5963118":  { name: "DN WS Protect Dust Hi-Sheen Br.White", category: "Exteriors" },
  "466000":   { name: "DN WS Tile Clear", category: "Exteriors" },
  
  // Waterproofing[cite: 2]
  "5748677":  { name: "Aquatech PU Coat (15 Years)", category: "Waterproofing" },
  "77009072": { name: "Aquatech Flexible Basecoat Advance (12 Years)", category: "Waterproofing" },
  "82000072": { name: "Aquatech Roof Waterproof White (12 Years)", category: "Waterproofing" },
  "83009072": { name: "Aquatech Damp Cure (5 Years)", category: "Waterproofing" },
  
  // Promise Tier[cite: 2]
  "5577377":  { name: "DN Promise Sheen Exterior Br White", category: "Exteriors" },
  "843000":   { name: "DN Dulux Promise White", category: "Exteriors" },
  "863000":   { name: "DN Promise Interior White", category: "Interiors" },
  
  // Enamels & Woodcare[cite: 2]
  "280800":   { name: "Dulux Super SB PU Satin White", category: "Enamels" },
  "28-1400":  { name: "Dulux Stay Bright WB PU Satin White", category: "Enamels" },
  "28-0850":  { name: "Dulux Lustre Finish White", category: "Enamels" },
  "2830000":  { name: "Dulux Gloss Premium Enamel", category: "Enamels" },
  "56-1000":  { name: "Dulux Super Gloss 5in1 White", category: "Enamels" },
  "5802249":  { name: "Dulux PU Enamel 12-in-1 White", category: "Enamels" },
  
  // Primers, Putty, Distemper[cite: 2]
  "320129":   { name: "Duwel Pink Wood Primer", category: "Primers" },
  "320768":   { name: "Dulux Water Based Cement Primer", category: "Primers" },
  "5576086":  { name: "DN Aquatech Waterproof Putty", category: "Putty" },
  "33151025": { name: "Dulux Acrylic Putty", category: "Putty" },
  "87100003": { name: "Promise SmartChoice Arcylic Distemper", category: "Distempers" },
  
  // Ancillaries & Textures[cite: 2]
  "6457592":  { name: "Dulux Signature Brush Double 3\"", category: "Ancillaries" },
  "6457575":  { name: "Dulux Signature Epoxy Int. Roller 9\"", category: "Ancillaries" },
  "5953877":  { name: "DN WS Texture Rustic 90 25kg", category: "Textures" }
};

// IndexedDB Engine remains the same...
class CoatCountDB {
  constructor() { this.dbName = 'CoatCountDB'; this.dbVersion = 1; this.db = null; }
  async init() {
    return new Promise((resolve, reject) => {
      const req = indexedDB.open(this.dbName, this.dbVersion);
      req.onupgradeneeded = (e) => {
        const db = e.target.result;
        if (!db.objectStoreNames.contains('inventory')) db.createObjectStore('inventory', { keyPath: 'code' });
      };
      req.onsuccess = (e) => { this.db = e.target.result; resolve(this.db); };
      req.onerror = (e) => reject(e.target.error);
    });
  }
  async getItem(code) {
    return new Promise((resolve) => {
      const req = this.db.transaction(['inventory'], 'readonly').objectStore('inventory').get(String(code).trim());
      req.onsuccess = () => resolve(req.result || null);
    });
  }
  async getAllItems() {
    return new Promise((resolve) => {
      const req = this.db.transaction(['inventory'], 'readonly').objectStore('inventory').getAll();
      req.onsuccess = () => resolve(req.result || []);
    });
  }
  async setItem(item) {
    return new Promise((resolve) => {
      const tx = this.db.transaction(['inventory'], 'readwrite');
      tx.objectStore('inventory').put(item);
      tx.oncomplete = () => resolve(true);
    });
  }
  async deleteItem(code) {
    return new Promise((resolve) => {
      const tx = this.db.transaction(['inventory'], 'readwrite');
      tx.objectStore('inventory').delete(String(code).trim());
      tx.oncomplete = () => resolve(true);
    });
  }
}

const App = {
  db: new CoatCountDB(),
  currentMode: 'in',
  batchQty: 1,

  async start() {
    await this.db.init();
    this.bindEvents();
    this.updateStats();
  },

  bindEvents() {
    document.querySelectorAll('.nav-tab').forEach(tab => {
      tab.addEventListener('click', () => this.setMode(tab.dataset.mode));
    });
    document.querySelectorAll('.qty-pill').forEach(pill => {
      pill.addEventListener('click', () => {
        this.batchQty = parseInt(pill.dataset.qty, 10);
        document.querySelectorAll('.qty-pill').forEach(p => p.classList.remove('active'));
        pill.classList.add('active');
      });
    });
    document.getElementById('inventory-search')?.addEventListener('input', (e) => {
      this.renderInventory(e.target.value);
    });
    document.getElementById('manual-add-btn').addEventListener('click', () => {
      document.getElementById('manual-modal').classList.add('active');
    });
  },

  setMode(mode) {
    this.currentMode = mode;
    document.body.className = `mode-${mode}`;
    const badge = document.getElementById('mode-indicator');
    badge.textContent = mode === 'in' ? 'STOCK IN' : (mode === 'out' ? 'STOCK OUT' : 'INVENTORY');

    document.querySelectorAll('.nav-tab').forEach(t => t.classList.toggle('active', t.dataset.mode === mode));
    const isInv = mode === 'inventory';
    document.getElementById('scanner-view').classList.toggle('active', !isInv);
    document.getElementById('inventory-view').classList.toggle('active', isInv);
    if (isInv) this.renderInventory();
  },

  triggerFeedback(mode) {
    if (navigator.vibrate) navigator.vibrate(mode === 'error' ? [50, 50] : [30]);
    const overlay = document.getElementById('swipe-overlay');
    overlay.className = 'swipe-effect';
    void overlay.offsetWidth;
    overlay.className = `swipe-effect active swipe-${mode}`;
    setTimeout(() => { overlay.className = 'swipe-effect'; }, 400);
  },

  async handleScan(rawCode) {
    const code = String(rawCode).trim();
    if (!code) return;

    if (!PRODUCT_CATALOG[code]) {
      this.triggerFeedback('error');
      this.renderLastCard({ code, name: "Unmapped Code", quantity: 0 }, "Scan Rejected", true);
      return; 
    }

    const catalog = PRODUCT_CATALOG[code];
    let item = await this.db.getItem(code);
    const delta = this.batchQty;

    if (this.currentMode === 'in') {
      if (!item) item = { code, name: catalog.name, category: catalog.category, quantity: delta, updatedAt: new Date().toISOString() };
      else { item.quantity += delta; item.updatedAt = new Date().toISOString(); }
      await this.db.setItem(item);
      this.triggerFeedback('in');
      this.renderLastCard(item, `+${delta} Added`, false);
    } else if (this.currentMode === 'out') {
      if (!item || item.quantity <= delta) {
        if (item) await this.db.deleteItem(code);
        this.triggerFeedback('out');
        this.renderLastCard({ code, name: catalog.name, quantity: 0 }, `Removed`, false);
      } else {
        item.quantity -= delta;
        item.updatedAt = new Date().toISOString();
        await this.db.setItem(item);
        this.triggerFeedback('out');
        this.renderLastCard(item, `-${delta} Deducted`, false);
      }
    }
    this.updateStats();
  },

  renderLastCard(item, statusMsg, isError) {
    const card = document.getElementById('last-scanned-card');
    card.className = `dense-card ${isError ? 'error' : ''}`;
    card.innerHTML = `
      <div class="card-top">
        <span class="card-code">${item.code}</span>
        ${!isError ? `<span class="card-units">Total: ${item.quantity}</span>` : ''}
      </div>
      <div class="card-name">${item.name}</div>
      <div class="card-action-bar"><span class="card-badge-status ${isError ? 'error' : ''}">${statusMsg}</span></div>
    `;
  },

  // Manual Modal Logic
  closeManualModal() {
    document.getElementById('manual-modal').classList.remove('active');
    document.getElementById('manual-code').value = '';
    document.getElementById('manual-name').value = '';
  },

  async saveManualItem() {
    const code = document.getElementById('manual-code').value.trim();
    const name = document.getElementById('manual-name').value.trim();
    const qty = parseInt(document.getElementById('manual-qty').value, 10);
    
    if (!code || !name) return alert("Code and Name required.");
    
    // Dynamically inject into runtime catalog so future scans recognize it
    PRODUCT_CATALOG[code] = { name: name, category: "Custom Entry" };
    
    let item = await this.db.getItem(code);
    if (!item) item = { code, name, category: "Custom Entry", quantity: qty, updatedAt: new Date().toISOString() };
    else { item.quantity += qty; item.updatedAt = new Date().toISOString(); }
    
    await this.db.setItem(item);
    this.closeManualModal();
    this.triggerFeedback('in');
    this.updateStats();
    if (this.currentMode === 'inventory') this.renderInventory();
  },

  async updateStats() {
    const items = await this.db.getAllItems();
    const totalUnits = items.reduce((sum, item) => sum + item.quantity, 0);
    document.getElementById('stat-summary').textContent = `${items.length} SKUs • ${totalUnits} Units`;
  },

  async renderInventory(filterQuery = '') {
    let items = await this.db.getAllItems();
    const container = document.getElementById('inventory-list');
    container.innerHTML = '';

    if (filterQuery.trim()) {
      const q = filterQuery.toLowerCase();
      items = items.filter(i => i.name.toLowerCase().includes(q) || i.code.includes(q));
    }

    if (items.length === 0) {
      container.innerHTML = `<div style="text-align:center; padding: 20px; color: var(--text-dim);">No stock found.</div>`;
      return;
    }

    items.sort((a, b) => new Date(b.updatedAt) - new Date(a.updatedAt));

    items.forEach(item => {
      // Create Swipe Container
      const wrap = document.createElement('div');
      wrap.className = 'swipe-container';
      
      const bg = document.createElement('div');
      bg.className = 'swipe-background';
      bg.innerHTML = `<span class="swipe-bg-left">📤 -1 Sell</span><span class="swipe-bg-right">📥 +1 Add</span>`;
      
      const card = document.createElement('div');
      card.className = 'inventory-card';
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

    cardElement.addEventListener('touchstart', e => {
      startX = e.touches[0].clientX;
      cardElement.style.transition = 'none';
    }, { passive: true });

    cardElement.addEventListener('touchmove', e => {
      currentX = e.touches[0].clientX - startX;
      // Dampen the swipe distance
      const visualX = currentX * 0.6; 
      cardElement.style.transform = `translateX(${visualX}px)`;
    }, { passive: true });

    cardElement.addEventListener('touchend', async () => {
      cardElement.style.transition = 'transform 0.3s cubic-bezier(0.2, 0.8, 0.2, 1)';
      
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
    this.triggerFeedback(step > 0 ? 'in' : 'out');
    this.updateStats();
    this.renderInventory();
  }
};

let html5QrcodeScanner;
function initCamera() {
  html5QrcodeScanner = new Html5QrcodeScanner("interactive-reader", { fps: 15, qrbox: { width: 250, height: 160 }, aspectRatio: 1.0, showTorchButtonIfSupported: true }, false);
  let lastScan = 0;
  html5QrcodeScanner.render(
    (code) => {
      const now = Date.now();
      if (now - lastScan < 1200) return;
      lastScan = now;
      App.handleScan(code);
    },
    () => {}
  );
}

window.addEventListener('DOMContentLoaded', async () => { await App.start(); initCamera(); });