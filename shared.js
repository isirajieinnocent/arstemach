// ── AR STELMACH – Shared Data & Utilities ──────────────────────────────────

window.DEFAULT_PRODUCTS = [
  // ── NEW iPHONES – iPhone 15 Series ──
  {id:1,name:"iPhone 15",storage:"128GB",price:326,condition:"New",brand:"Apple",moq:10,category:"iPhone",img:"https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-15.jpg",desc:"Apple iPhone 15 128GB. A16 Bionic chip, 6.1-inch Super Retina XDR display, 48MP camera system, Dynamic Island, USB-C. New, sealed, factory unlocked."},
  {id:2,name:"iPhone 15",storage:"256GB",price:371,condition:"New",brand:"Apple",moq:10,category:"iPhone",img:"https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-15.jpg",desc:"Apple iPhone 15 256GB. A16 Bionic chip, 6.1-inch Super Retina XDR display, 48MP camera system, Dynamic Island, USB-C. New, sealed, factory unlocked."},
  {id:3,name:"iPhone 15 Plus",storage:"256GB",price:406,condition:"New",brand:"Apple",moq:8,category:"iPhone",img:"https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-15-plus.jpg",desc:"Apple iPhone 15 Plus 256GB. A16 Bionic chip, 6.7-inch Super Retina XDR display, 48MP camera, Dynamic Island, USB-C, larger battery. New, sealed, factory unlocked."},
  {id:4,name:"iPhone 15 Pro",storage:"128GB",price:402,condition:"New",brand:"Apple",moq:8,category:"iPhone",img:"https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-15-pro.jpg",desc:"Apple iPhone 15 Pro 128GB. A17 Pro chip, 6.1-inch ProMotion OLED 120Hz, 48MP triple camera, titanium frame, Action Button, USB-C 3. New, sealed, factory unlocked."},
  {id:5,name:"iPhone 15 Pro",storage:"256GB",price:455,condition:"New",brand:"Apple",moq:8,category:"iPhone",img:"https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-15-pro.jpg",desc:"Apple iPhone 15 Pro 256GB. A17 Pro chip, 6.1-inch ProMotion OLED 120Hz, 48MP triple camera, titanium frame, Action Button, USB-C 3. New, sealed, factory unlocked."},
  {id:6,name:"iPhone 15 Pro",storage:"512GB",price:546,condition:"New",brand:"Apple",moq:7,category:"iPhone",img:"https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-15-pro.jpg",desc:"Apple iPhone 15 Pro 512GB. A17 Pro chip, 6.1-inch ProMotion OLED 120Hz, 48MP triple camera, titanium frame, Action Button, USB-C 3. New, sealed, factory unlocked."},
  {id:7,name:"iPhone 15 Pro Max",storage:"256GB",price:511,condition:"New",brand:"Apple",moq:7,category:"iPhone",img:"https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-15-pro-max.jpg",desc:"Apple iPhone 15 Pro Max 256GB. A17 Pro chip, 6.7-inch ProMotion OLED, 5x optical zoom, titanium frame, Action Button. New, sealed, factory unlocked."},
  {id:8,name:"iPhone 15 Pro Max",storage:"512GB",price:602,condition:"New",brand:"Apple",moq:5,category:"iPhone",img:"https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-15-pro-max.jpg",desc:"Apple iPhone 15 Pro Max 512GB. A17 Pro chip, 6.7-inch ProMotion OLED, 5x optical zoom, titanium frame, Action Button. New, sealed, factory unlocked."},
  {id:9,name:"iPhone 15 Pro Max",storage:"1TB",price:693,condition:"New",brand:"Apple",moq:5,category:"iPhone",img:"https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-15-pro-max.jpg",desc:"Apple iPhone 15 Pro Max 1TB. A17 Pro chip, 6.7-inch ProMotion OLED, 5x optical zoom, maximum storage, titanium frame. New, sealed, factory unlocked."},
  // ── NEW iPHONES – iPhone 14 Series ──
  {id:10,name:"iPhone 14 Pro",storage:"512GB",price:455,condition:"New",brand:"Apple",moq:7,category:"iPhone",img:"https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-14-pro.jpg",desc:"Apple iPhone 14 Pro 512GB. A16 Bionic, 6.1-inch ProMotion OLED 120Hz, 48MP camera, Dynamic Island, Always-On display. New, sealed, factory unlocked."},
  {id:11,name:"iPhone 14 Pro Max",storage:"256GB",price:441,condition:"New",brand:"Apple",moq:7,category:"iPhone",img:"https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-14-pro-max.jpg",desc:"Apple iPhone 14 Pro Max 256GB. A16 Bionic, 6.7-inch ProMotion OLED 120Hz, 48MP camera, Dynamic Island, Always-On display. New, sealed, factory unlocked."},
  {id:12,name:"iPhone 14 Pro Max",storage:"512GB",price:511,condition:"New",brand:"Apple",moq:7,category:"iPhone",img:"https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-14-pro-max.jpg",desc:"Apple iPhone 14 Pro Max 512GB. A16 Bionic, 6.7-inch ProMotion OLED 120Hz, 48MP camera, Dynamic Island, Always-On display. New, sealed, factory unlocked."},
  {id:13,name:"iPhone 14 Pro Max",storage:"1TB",price:595,condition:"New",brand:"Apple",moq:7,category:"iPhone",img:"https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-14-pro-max.jpg",desc:"Apple iPhone 14 Pro Max 1TB. A16 Bionic, 6.7-inch ProMotion OLED 120Hz, 48MP camera, Dynamic Island, maximum storage. New, sealed, factory unlocked."},
  // ── NEW iPHONES – iPhone 13 Series ──
  {id:14,name:"iPhone 13 Pro Max",storage:"512GB",price:364,condition:"New",brand:"Apple",moq:10,category:"iPhone",img:"https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-13-pro-max.jpg",desc:"Apple iPhone 13 Pro Max 512GB. A15 Bionic, 6.7-inch ProMotion OLED 120Hz, 12MP triple camera, 5G, stainless steel. New, sealed, factory unlocked."},
  {id:15,name:"iPhone 13 Pro Max",storage:"1TB",price:427,condition:"New",brand:"Apple",moq:8,category:"iPhone",img:"https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-13-pro-max.jpg",desc:"Apple iPhone 13 Pro Max 1TB. A15 Bionic, 6.7-inch ProMotion OLED 120Hz, 12MP triple camera, 5G, stainless steel, maximum storage. New, sealed, factory unlocked."},
  // ── USED iPHONES – iPhone 15 Series ──
  {id:16,name:"iPhone 15 Plus",storage:"256GB",price:243.60,condition:"Used",brand:"Apple",moq:10,category:"iPhone",img:"https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-15-plus.jpg",desc:"Apple iPhone 15 Plus 256GB. Grade A used condition. A16 Bionic, 6.7-inch Super Retina XDR, USB-C. Professionally tested and inspected."},
  {id:17,name:"iPhone 15 Pro",storage:"128GB",price:241.20,condition:"Used",brand:"Apple",moq:10,category:"iPhone",img:"https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-15-pro.jpg",desc:"Apple iPhone 15 Pro 128GB. Grade A used condition. A17 Pro chip, titanium frame, triple camera. Professionally tested and inspected."},
  {id:18,name:"iPhone 15 Pro",storage:"256GB",price:273.00,condition:"Used",brand:"Apple",moq:10,category:"iPhone",img:"https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-15-pro.jpg",desc:"Apple iPhone 15 Pro 256GB. Grade A used condition. A17 Pro chip, titanium frame, triple camera. Professionally tested and inspected."},
  {id:19,name:"iPhone 15 Pro",storage:"512GB",price:327.60,condition:"Used",brand:"Apple",moq:9,category:"iPhone",img:"https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-15-pro.jpg",desc:"Apple iPhone 15 Pro 512GB. Grade A used condition. A17 Pro chip, titanium frame, triple camera. Professionally tested and inspected."},
  {id:20,name:"iPhone 15 Pro Max",storage:"256GB",price:306.60,condition:"Used",brand:"Apple",moq:9,category:"iPhone",img:"https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-15-pro-max.jpg",desc:"Apple iPhone 15 Pro Max 256GB. Grade A used condition. A17 Pro, 6.7-inch ProMotion OLED, 5x zoom. Professionally tested and inspected."},
  {id:21,name:"iPhone 15 Pro Max",storage:"512GB",price:361.20,condition:"Used",brand:"Apple",moq:7,category:"iPhone",img:"https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-15-pro-max.jpg",desc:"Apple iPhone 15 Pro Max 512GB. Grade A used condition. A17 Pro, 6.7-inch ProMotion OLED, 5x zoom. Professionally tested and inspected."},
  {id:22,name:"iPhone 15 Pro Max",storage:"1TB",price:415.80,condition:"Used",brand:"Apple",moq:7,category:"iPhone",img:"https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-15-pro-max.jpg",desc:"Apple iPhone 15 Pro Max 1TB. Grade A used condition. A17 Pro, 6.7-inch ProMotion OLED, 5x zoom, maximum storage. Professionally tested."},
  // ── USED iPHONES – iPhone 14 Series ──
  {id:23,name:"iPhone 14 Pro",storage:"512GB",price:273.00,condition:"Used",brand:"Apple",moq:9,category:"iPhone",img:"https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-14-pro.jpg",desc:"Apple iPhone 14 Pro 512GB. Grade A used condition. A16 Bionic, Dynamic Island, Always-On display. Professionally tested and inspected."},
  {id:24,name:"iPhone 14 Pro Max",storage:"256GB",price:264.60,condition:"Used",brand:"Apple",moq:9,category:"iPhone",img:"https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-14-pro-max.jpg",desc:"Apple iPhone 14 Pro Max 256GB. Grade A used condition. A16 Bionic, 6.7-inch ProMotion OLED. Professionally tested and inspected."},
  {id:25,name:"iPhone 14 Pro Max",storage:"512GB",price:306.60,condition:"Used",brand:"Apple",moq:9,category:"iPhone",img:"https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-14-pro-max.jpg",desc:"Apple iPhone 14 Pro Max 512GB. Grade A used condition. A16 Bionic, 6.7-inch ProMotion OLED. Professionally tested and inspected."},
  {id:26,name:"iPhone 14 Pro Max",storage:"1TB",price:357.00,condition:"Used",brand:"Apple",moq:9,category:"iPhone",img:"https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-14-pro-max.jpg",desc:"Apple iPhone 14 Pro Max 1TB. Grade A used condition. A16 Bionic, 6.7-inch ProMotion OLED, maximum storage. Professionally tested."},
  // ── USED iPHONES – iPhone 13 Series ──
  {id:27,name:"iPhone 13 Pro Max",storage:"512GB",price:218.40,condition:"Used",brand:"Apple",moq:12,category:"iPhone",img:"https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-13-pro-max.jpg",desc:"Apple iPhone 13 Pro Max 512GB. Grade A used condition. A15 Bionic, 6.7-inch ProMotion OLED, 5G. Professionally tested and inspected."},
  {id:28,name:"iPhone 13 Pro Max",storage:"1TB",price:256.20,condition:"Used",brand:"Apple",moq:10,category:"iPhone",img:"https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-13-pro-max.jpg",desc:"Apple iPhone 13 Pro Max 1TB. Grade A used condition. A15 Bionic, 6.7-inch ProMotion OLED, 5G, maximum storage. Professionally tested."},
  // ── PS5 CONSOLES ──
  {id:29,name:"PS5 Slim Digital",storage:"1TB",price:419.99,condition:"Game",brand:"Sony",moq:5,category:"PS5",img:"https://fdn2.gsmarena.com/vv/bigpic/sony-playstation-5-slim.jpg",desc:"Sony PlayStation 5 Slim Digital Edition 1TB. No disc drive, 30% smaller than original PS5, 4K gaming, DualSense controller included. New, sealed."},
  {id:30,name:"PS5 Slim Disc",storage:"1TB",price:454.99,condition:"Game",brand:"Sony",moq:5,category:"PS5",img:"https://fdn2.gsmarena.com/vv/bigpic/sony-playstation-5-slim.jpg",desc:"Sony PlayStation 5 Slim Disc Edition 1TB. Ultra HD Blu-ray disc drive, 4K gaming at 120fps, DualSense controller included. New, sealed."},
  {id:31,name:"PS5 Pro",storage:"2TB",price:629.99,condition:"Game",brand:"Sony",moq:4,category:"PS5",img:"https://fdn2.gsmarena.com/vv/bigpic/sony-playstation-5-slim.jpg",desc:"Sony PlayStation 5 Pro 2TB. Enhanced GPU with 45% faster rendering, PlayStation Spectral Super Resolution AI upscaling, 4K 120fps. New, sealed."},
];

// ── Get products (admin can override) ──────────────────────────────────────
window.getProducts = function(){
  const saved = localStorage.getItem('arstemach_products');
  if(saved) return JSON.parse(saved);
  return window.DEFAULT_PRODUCTS;
};

// ── Save products ──────────────────────────────────────────────────────────
window.saveProducts = function(products){
  localStorage.setItem('arstemach_products', JSON.stringify(products));
};

// ── Cart helpers ───────────────────────────────────────────────────────────
window.getCart = function(){
  return JSON.parse(localStorage.getItem('arstemach_cart') || '[]');
};

window.saveCart = function(cart){
  localStorage.setItem('arstemach_cart', JSON.stringify(cart));
};

window.addToCartGlobal = function(p){
  let cart = window.getCart();
  const idx = cart.findIndex(i => i.id === p.id);
  if(idx > -1) cart[idx].qty += 1;
  else cart.push({...p, qty: 1});
  window.saveCart(cart);
  window.updateAllCartCounts();
};

window.updateAllCartCounts = function(){
  const cart = window.getCart();
  const total = cart.reduce((a, i) => a + i.qty, 0);
  document.querySelectorAll('.cart-count').forEach(el => el.textContent = total);
};

// ── Settings ───────────────────────────────────────────────────────────────
window.getSettings = function(){
  const defaults = {
    storeName: 'AR STELMACH SPÓŁKA JAWNA',
    ownerEmail: 'sale@arstemach.pl',
    whatsapp: '',
    location: 'Poland / Europe',
    emailjsPublicKey: '',
    emailjsServiceId: '',
    emailjsTemplateId: '',
    adminPassword: 'enterprise1'
  };
  const saved = JSON.parse(localStorage.getItem('arstemach_settings') || '{}');
  return {...defaults, ...saved};
};

// ── Init: seed products if not yet saved ──────────────────────────────────
if(!localStorage.getItem('arstemach_products')){
  localStorage.setItem('arstemach_products', JSON.stringify(window.DEFAULT_PRODUCTS));
}

// ── Theme & lang init ─────────────────────────────────────────────────────
(function(){
  const t = localStorage.getItem('theme') || 'dark';
  document.documentElement.setAttribute('data-theme', t);
})();
