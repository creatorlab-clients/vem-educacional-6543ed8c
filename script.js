/* ═══════════════════════════════════════════════════════════════
   template-lingue-001 — British Centre — script.js
   education-reveal scroll · single-page · pt-BR
   ═══════════════════════════════════════════════════════════════ */

// ── Scroll animation — frame config ──────────────────────────
var FRAME_PATH   = 'https://8ispuxmgjxgu2r5q.public.blob.vercel-storage.com/templates/lingue-001/frames/';
var FRAME_PREFIX = 'frame_';
var FRAME_PAD    = 4;
var FRAME_EXT    = '.webp';
var FRAME_COUNT  = 151;  // education-reveal — HARD

// ── Image fallback ────────────────────────────────────────────
window.__imgFallback = function (img, label) {
  var w = img.naturalWidth  || 600;
  var h = img.naturalHeight || 600;
  var svg = '<svg xmlns="http://www.w3.org/2000/svg" width="' + w + '" height="' + h
    + '" viewBox="0 0 ' + w + ' ' + h + '">'
    + '<defs><linearGradient id="fbg" x1="0" y1="0" x2="1" y2="1">'
    + '<stop offset="0%" stop-color="#1E3D6E" stop-opacity="0.08"/>'
    + '<stop offset="100%" stop-color="#C8943A" stop-opacity="0.05"/>'
    + '</linearGradient></defs>'
    + '<rect width="100%" height="100%" fill="url(#fbg)"/>'
    + '<text x="50%" y="50%" font-family="\'Hind\',sans-serif" font-size="14"'
    + ' font-weight="500" fill="#72706C" text-anchor="middle" dominant-baseline="middle">'
    + (label || 'imagem em breve')
    + '</text></svg>';
  img.src = 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(svg);
  img.onerror = null;
};

// ── Phosphor Regular icons (stroke-width 12-14) ──────────────
var PHOSPHOR_ICONS = {

  /* ─ Language / education ─ */
  'GlobeSimple': '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill="none" stroke="currentColor" stroke-width="12" stroke-linecap="round" stroke-linejoin="round" width="24" height="24" aria-hidden="true"><circle cx="128" cy="128" r="96"/><ellipse cx="128" cy="128" rx="40" ry="96"/><line x1="32" y1="128" x2="224" y2="128"/><path d="M56,80 C80,94 128,100 176,94 S212,80 204,60"/><path d="M56,176 C80,162 128,156 176,162 S212,176 204,196"/></svg>',

  'Certificate': '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill="none" stroke="currentColor" stroke-width="12" stroke-linecap="round" stroke-linejoin="round" width="24" height="24" aria-hidden="true"><rect x="28" y="44" width="200" height="144" rx="12"/><line x1="64" y1="96" x2="192" y2="96"/><line x1="64" y1="128" x2="148" y2="128"/><circle cx="196" cy="176" r="28"/><line x1="196" y1="204" x2="196" y2="228"/><line x1="180" y1="212" x2="196" y2="224"/><line x1="212" y1="212" x2="196" y2="224"/></svg>',

  /* ─ Course type icons ─ */
  'UsersThree': '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill="none" stroke="currentColor" stroke-width="12" stroke-linecap="round" stroke-linejoin="round" width="22" height="22" aria-hidden="true"><circle cx="128" cy="80" r="32"/><path d="M72,196 C72,160 96,140 128,140 C160,140 184,160 184,196"/><circle cx="56" cy="96" r="24"/><path d="M16,196 C16,168 32,152 56,152"/><circle cx="200" cy="96" r="24"/><path d="M240,196 C240,168 224,152 200,152"/></svg>',

  'UserFocus': '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill="none" stroke="currentColor" stroke-width="12" stroke-linecap="round" stroke-linejoin="round" width="22" height="22" aria-hidden="true"><circle cx="128" cy="108" r="40"/><path d="M64,208 C64,176 92,152 128,152 C164,152 192,176 192,208"/><path d="M40,44 L40,80 L76,80"/><path d="M216,44 L216,80 L180,80"/><path d="M40,212 L40,176 L76,176"/><path d="M216,212 L216,176 L180,176"/></svg>',

  'Monitor': '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill="none" stroke="currentColor" stroke-width="12" stroke-linecap="round" stroke-linejoin="round" width="22" height="22" aria-hidden="true"><rect x="32" y="48" width="192" height="136" rx="12"/><line x1="96" y1="224" x2="160" y2="224"/><line x1="128" y1="184" x2="128" y2="224"/></svg>',

  'Lightning': '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill="none" stroke="currentColor" stroke-width="12" stroke-linecap="round" stroke-linejoin="round" width="22" height="22" aria-hidden="true"><path d="M148,32 L88,136 H136 L108,224 L212,104 H164 L196,32 Z"/></svg>',

  'Briefcase': '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill="none" stroke="currentColor" stroke-width="12" stroke-linecap="round" stroke-linejoin="round" width="22" height="22" aria-hidden="true"><rect x="32" y="88" width="192" height="136" rx="12"/><path d="M88,88 V72 A24,24,0,0,1,112,48 H144 A24,24,0,0,1,168,72 V88"/><line x1="32" y1="160" x2="224" y2="160"/></svg>',

  /* ─ Prices ─ */
  'CheckCircle': '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill="none" stroke="currentColor" stroke-width="12" stroke-linecap="round" stroke-linejoin="round" width="18" height="18" aria-hidden="true"><circle cx="128" cy="128" r="96"/><polyline points="88,132 112,156 168,100"/></svg>',

  /* ─ Testimonials ─ */
  'Quotes': '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill="none" stroke="currentColor" stroke-width="12" stroke-linecap="round" stroke-linejoin="round" width="28" height="28" aria-hidden="true"><path d="M48,96 C48,80 60,68 76,68 H104 A16,16,0,0,1,120,84 V132 A16,16,0,0,1,104,148 H76 L48,184 Z"/><path d="M136,96 C136,80 148,68 164,68 H192 A16,16,0,0,1,208,84 V132 A16,16,0,0,1,192,148 H164 L136,184 Z"/></svg>',

  /* ─ UI icons ─ */
  'ChevronDown': '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill="none" stroke="currentColor" stroke-width="14" stroke-linecap="round" stroke-linejoin="round" width="18" height="18" aria-hidden="true"><polyline points="64,96 128,160 192,96"/></svg>',

  'MapPin': '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill="none" stroke="currentColor" stroke-width="12" stroke-linecap="round" stroke-linejoin="round" width="24" height="24" aria-hidden="true"><circle cx="128" cy="104" r="40"/><path d="M128,224 C128,224 40,152 40,104 a88,88,0,0,1,176,0 C216,152,128,224,128,224 Z"/></svg>',

  'Clock': '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill="none" stroke="currentColor" stroke-width="12" stroke-linecap="round" stroke-linejoin="round" width="24" height="24" aria-hidden="true"><circle cx="128" cy="128" r="96"/><polyline points="128,72 128,128 168,168"/></svg>',

  'Phone': '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill="none" stroke="currentColor" stroke-width="12" stroke-linecap="round" stroke-linejoin="round" width="24" height="24" aria-hidden="true"><path d="M164,164 L184,184 a16,16,0,0,1,0,22.6 C152,240 16,104 49.4,72 a16,16,0,0,1,22.6,0 L92,92 a16,16,0,0,1,0,22.6 L80,126.4 C98,158 98,158 130,176 Z"/></svg>',

  'Envelope': '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill="none" stroke="currentColor" stroke-width="12" stroke-linecap="round" stroke-linejoin="round" width="24" height="24" aria-hidden="true"><rect x="32" y="64" width="192" height="144" rx="12"/><polyline points="32,80 128,160 224,80"/></svg>',

  'WhatsappLogo': '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill="none" stroke="currentColor" stroke-width="12" stroke-linecap="round" stroke-linejoin="round" width="20" height="20" aria-hidden="true"><path d="M128,32 C76,32 32,72 32,120 C32,142 40,163 54,179 L40,216 L79,203 C95,211 111,216 128,216 C180,216 224,176 224,128 C224,80 180,32 128,32 Z"/><path d="M104,88 C104,88 96,108 112,124 C128,140 148,132 148,132"/></svg>',

  'InstagramLogo': '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill="none" stroke="currentColor" stroke-width="12" stroke-linecap="round" stroke-linejoin="round" width="20" height="20" aria-hidden="true"><rect x="32" y="32" width="192" height="192" rx="48"/><circle cx="128" cy="128" r="48"/><circle cx="180" cy="76" r="8" fill="currentColor" stroke="none"/></svg>'
};

(function () {
  'use strict';

  // ── Inject Phosphor icons ─────────────────────────────────
  document.querySelectorAll('[data-icon]').forEach(function (el) {
    var name = el.getAttribute('data-icon');
    var svg  = PHOSPHOR_ICONS[name];
    if (svg) el.innerHTML = svg;
  });

  // ── Footer year ──────────────────────────────────────────
  var yearEl = document.querySelector('[data-year]');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // ── Navbar scroll class ──────────────────────────────────
  var navbar = document.querySelector('.navbar');
  if (navbar) {
    window.addEventListener('scroll', function () {
      navbar.classList.toggle('scrolled', window.scrollY > 20);
    }, { passive: true });
  }

  // ── Mobile nav toggle ────────────────────────────────────
  var toggle = document.querySelector('.nav-toggle');
  if (toggle) {
    toggle.addEventListener('click', function () {
      var expanded = toggle.getAttribute('aria-expanded') === 'true';
      toggle.setAttribute('aria-expanded', String(!expanded));
      document.body.classList.toggle('nav-mobile-open', !expanded);
    });
    document.querySelectorAll('.nav-links a').forEach(function (link) {
      link.addEventListener('click', function () {
        toggle.setAttribute('aria-expanded', 'false');
        document.body.classList.remove('nav-mobile-open');
      });
    });
  }

  // ── Accordion ────────────────────────────────────────────
  document.querySelectorAll('.accordion-trigger').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var item   = btn.closest('.accordion-item');
      var isOpen = item.classList.contains('is-open');
      // Close all open items
      document.querySelectorAll('.accordion-item.is-open').forEach(function (el) {
        el.classList.remove('is-open');
        el.querySelector('.accordion-trigger').setAttribute('aria-expanded', 'false');
        el.querySelector('.accordion-content').setAttribute('aria-hidden', 'true');
      });
      // Open this one if it was closed
      if (!isOpen) {
        item.classList.add('is-open');
        btn.setAttribute('aria-expanded', 'true');
        item.querySelector('.accordion-content').setAttribute('aria-hidden', 'false');
      }
    });
  });

  // ── IntersectionObserver — fade-up, stagger-card ─────────
  if ('IntersectionObserver' in window) {
    var animObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          animObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });

    document.querySelectorAll('.fade-up, .stagger-card').forEach(function (el) {
      animObserver.observe(el);
    });
  } else {
    document.querySelectorAll('.fade-up, .stagger-card').forEach(function (el) {
      el.classList.add('visible');
    });
  }

  // ── Scroll animation — canvas (cover mode) ───────────────
  var section = document.getElementById('scroll-anim');
  var canvas  = document.getElementById('scroll-canvas');
  if (!section || !canvas) return;

  var ctx         = canvas.getContext('2d');
  var images      = [];
  var loaded      = 0;
  var currentFrame = 0;
  var pinEl       = section.querySelector('.scroll-anim-pin');

  function setupCanvas() {
    canvas.width  = pinEl.clientWidth;
    canvas.height = pinEl.clientHeight;
  }

  function renderFrame(img) {
    var cw = canvas.width;
    var ch = canvas.height;
    var iw = img.naturalWidth;
    var ih = img.naturalHeight;
    if (!iw || !ih) return;
    var scale = Math.max(cw / iw, ch / ih);
    var sw = iw * scale;
    var sh = ih * scale;
    var sx = (cw - sw) / 2;
    var sy = (ch - sh) / 2;
    ctx.clearRect(0, 0, cw, ch);
    ctx.drawImage(img, sx, sy, sw, sh);
  }

  function drawFrame(index) {
    var img = images[index];
    if (img && img.complete && img.naturalWidth) {
      renderFrame(img);
      currentFrame = index;
    }
  }

  function onScroll() {
    var rect     = section.getBoundingClientRect();
    var total    = section.offsetHeight - window.innerHeight;
    var scrolled = Math.max(0, -rect.top);
    var progress = Math.min(1, scrolled / (total || 1));
    var frameIdx = Math.round(progress * (FRAME_COUNT - 1));
    if (frameIdx !== currentFrame) drawFrame(frameIdx);
  }

  for (var i = 0; i < FRAME_COUNT; i++) {
    (function (idx) {
      var img = new Image();
      img.onload = function () {
        loaded++;
        if (idx === 0 || loaded === 1) {
          setupCanvas();
          renderFrame(img);
          currentFrame = 0;
        }
      };
      img.src = FRAME_PATH + FRAME_PREFIX
               + String(idx + 1).padStart(FRAME_PAD, '0') + FRAME_EXT;
      images[idx] = img;
    })(i);
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', function () {
    setupCanvas();
    drawFrame(currentFrame);
  }, { passive: true });
  setupCanvas();

})();
