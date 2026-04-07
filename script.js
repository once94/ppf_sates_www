/* ============================================
   SUITWRAP by SATES — Script
   ============================================ */

// ─── LANGUAGE SWITCHER ───
let currentLang = 'sk';

function setLang(lang) {
  currentLang = lang;
  document.querySelectorAll('.lang-btn').forEach(function(btn) {
    btn.classList.toggle('active', btn.textContent.trim().toLowerCase() === lang);
  });
  document.querySelectorAll('[data-lang-' + lang + ']').forEach(function(el) {
    var val = el.getAttribute('data-lang-' + lang);
    if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
      el.placeholder = val;
    } else {
      el.innerHTML = val;
    }
  });
  document.documentElement.lang = lang;
}

// ─── SCROLL REVEAL ───
var observer = new IntersectionObserver(function(entries) {
  entries.forEach(function(entry) {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.15 });

document.querySelectorAll('.reveal').forEach(function(el) {
  observer.observe(el);
});

// ─── SMOOTH NAV ───
document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    var target = document.querySelector(this.getAttribute('href'));
    if (target) target.scrollIntoView({ behavior: 'smooth' });
  });
});
