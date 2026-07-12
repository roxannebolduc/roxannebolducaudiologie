/* Roxanne Bolduc · Audiologiste — main.js */

/* Menu mobile */
(function () {
  var toggle = document.querySelector('.nav-toggle');
  var links = document.querySelector('.nav-links');
  if (!toggle || !links) return;
  toggle.addEventListener('click', function () {
    var open = links.classList.toggle('open');
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
  links.addEventListener('click', function (e) {
    if (e.target.tagName === 'A') {
      links.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
    }
  });
})();

/* Onglets (page Audiologiste) */
(function () {
  var tabs = document.querySelectorAll('[data-tab]');
  if (!tabs.length) return;
  function activate(name) {
    tabs.forEach(function (t) {
      var on = t.getAttribute('data-tab') === name;
      t.classList.toggle('active', on);
      t.setAttribute('aria-selected', on ? 'true' : 'false');
    });
    document.querySelectorAll('[data-panel]').forEach(function (p) {
      p.classList.toggle('active', p.getAttribute('data-panel') === name);
    });
  }
  tabs.forEach(function (tab) {
    tab.addEventListener('click', function () {
      activate(tab.getAttribute('data-tab'));
      history.replaceState(null, '', '#' + tab.getAttribute('data-tab'));
    });
  });
  var hash = location.hash.replace('#', '');
  if (hash === 'equipe' || hash === 'metier') activate(hash);
})();

/* Révélation au défilement */
(function () {
  var els = document.querySelectorAll('.reveal');
  if (!els.length) return;
  var reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduced || !('IntersectionObserver' in window)) {
    els.forEach(function (e) { e.classList.add('in'); });
    return;
  }
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('in');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  els.forEach(function (e) { io.observe(e); });
})();

/* Carrousel (guide pédiatrique) */
(function () {
  var cars = document.querySelectorAll('[data-carousel]');
  if (!cars.length) return;
  cars.forEach(function (car) {
    var pages = car.querySelectorAll('.car-page');
    var count = car.querySelector('.car-count');
    var i = 0;
    function show(n) {
      i = (n + pages.length) % pages.length;
      pages.forEach(function (p, k) { p.classList.toggle('active', k === i); });
      if (count) count.textContent = 'Page ' + (i + 1) + ' de ' + pages.length;
    }
    var prev = car.querySelector('.car-btn.prev');
    var next = car.querySelector('.car-btn.next');
    if (prev) prev.addEventListener('click', function () { show(i - 1); });
    if (next) next.addEventListener('click', function () { show(i + 1); });
    show(0);
  });
})();
