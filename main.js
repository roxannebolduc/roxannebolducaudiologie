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

/* Bannière de témoins (Loi 25) */
(function () {
  var KEY = 'rb-temoins';
  var DUREE = 180 * 24 * 60 * 60 * 1000; /* le choix expire après 6 mois */

  function lireChoix() {
    try {
      var d = JSON.parse(localStorage.getItem(KEY));
      if (d && d.choix && (Date.now() - d.date) < DUREE) return d.choix;
    } catch (e) {}
    return null;
  }

  function enregistrer(choix) {
    try {
      localStorage.setItem(KEY, JSON.stringify({ choix: choix, date: Date.now() }));
    } catch (e) {}
  }

  function afficher() {
    if (document.getElementById('cookie-banner')) return;
    var b = document.createElement('div');
    b.id = 'cookie-banner';
    b.className = 'cookie-banner';
    b.setAttribute('role', 'region');
    b.setAttribute('aria-label', 'Consentement aux témoins (cookies)');
    b.innerHTML =
      '<div class="cookie-head">' +
      '<span class="cookie-icon" aria-hidden="true">' +
      '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">' +
      '<path d="M12 2a10 10 0 1 0 10 10 4 4 0 0 1-5-5 4 4 0 0 1-5-5"/>' +
      '<path d="M8.5 8.5v.01"/><path d="M16 15.5v.01"/><path d="M12 12v.01"/><path d="M11 17v.01"/><path d="M7 14v.01"/>' +
      '</svg></span>' +
      '<div><span class="cookie-eyebrow">Confidentialité</span><h3>Témoins (cookies)</h3></div>' +
      '</div>' +
      '<p>Ce site web conserve un seul témoin sur votre ordinateur : celui qui mémorise votre réponse ci-dessous. ' +
      'Il ne collecte aucune information sur la manière dont vous interagissez avec le site et ne vous suit pas. ' +
      'Pour en savoir plus, consultez notre <a href="confidentialite.html">Politique de confidentialité</a>.</p>' +
      '<p class="cookie-note">Si vous refusez, rien de plus n’est conservé : ce même témoin servira uniquement à se souvenir de votre préférence.</p>' +
      '<div class="cookie-actions">' +
      '<button type="button" class="btn btn--primary" data-consent="accepte">Accepter</button>' +
      '<button type="button" class="btn btn--ghost" data-consent="refuse">Refuser</button>' +
      '</div>';
    document.body.appendChild(b);
    requestAnimationFrame(function () { b.classList.add('show'); });
    b.addEventListener('click', function (e) {
      var btn = e.target.closest ? e.target.closest('[data-consent]') : null;
      if (!btn) return;
      enregistrer(btn.getAttribute('data-consent'));
      b.classList.remove('show');
      setTimeout(function () { if (b.parentNode) b.parentNode.removeChild(b); }, 500);
    });
  }

  if (!lireChoix()) afficher();

  /* Lien « gérer mes témoins » (page confidentialité) */
  var gerer = document.getElementById('gerer-temoins');
  if (gerer) {
    gerer.addEventListener('click', function (e) {
      e.preventDefault();
      try { localStorage.removeItem(KEY); } catch (err) {}
      afficher();
    });
  }
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
