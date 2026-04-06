/* ============================================
   SUITWRAP by SATES — Script
   ============================================ */

(function () {
  'use strict';

  /* --- Language Switcher --- */
  const DEFAULT_LANG = 'sk';

  function setLang(lang) {
    // Update all data-lang elements
    document.querySelectorAll('[data-lang]').forEach(function (el) {
      el.classList.toggle('active-lang', el.getAttribute('data-lang') === lang);
    });

    // Update language buttons
    document.querySelectorAll('.lang-btn').forEach(function (btn) {
      btn.classList.toggle('active', btn.getAttribute('data-set-lang') === lang);
    });

    // Store preference
    try {
      localStorage.setItem('suitwrap-lang', lang);
    } catch (e) {
      // ignore
    }

    // Update html lang attribute
    document.documentElement.lang = lang;
  }

  function initLang() {
    var saved;
    try {
      saved = localStorage.getItem('suitwrap-lang');
    } catch (e) {
      // ignore
    }
    var lang = saved || DEFAULT_LANG;
    setLang(lang);

    document.querySelectorAll('.lang-btn').forEach(function (btn) {
      btn.addEventListener('click', function () {
        setLang(btn.getAttribute('data-set-lang'));
      });
    });
  }

  /* --- Navbar Scroll Effect --- */
  function initNavbar() {
    var navbar = document.querySelector('.navbar');
    if (!navbar) return;

    function onScroll() {
      navbar.classList.toggle('scrolled', window.scrollY > 60);
    }

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  /* --- Scroll Reveal --- */
  function initReveal() {
    var reveals = document.querySelectorAll('.reveal');
    if (!reveals.length) return;

    if ('IntersectionObserver' in window) {
      var observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      }, {
        threshold: 0.15,
        rootMargin: '0px 0px -40px 0px'
      });

      reveals.forEach(function (el) {
        observer.observe(el);
      });
    } else {
      // Fallback: show all
      reveals.forEach(function (el) {
        el.classList.add('visible');
      });
    }
  }

  /* --- Hero Load Animation --- */
  function initHero() {
    var hero = document.querySelector('.hero');
    if (!hero) return;

    // Trigger background zoom-out
    requestAnimationFrame(function () {
      hero.classList.add('loaded');
    });
  }

  /* --- Init --- */
  document.addEventListener('DOMContentLoaded', function () {
    initLang();
    initNavbar();
    initReveal();
    initHero();
  });
})();
