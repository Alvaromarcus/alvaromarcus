/* ==========================================================================
   1. Alternancia de tema claro/escuro
   2. Filtro de posts por tag na home (sem recarregar a pagina)
   ========================================================================== */

(function () {
  'use strict';

  /* ------------------------------------------------------------- tema --- */

  var root = document.documentElement;
  var toggle = document.querySelector('[data-theme-toggle]');

  function currentTheme() {
    var explicit = root.getAttribute('data-theme');
    if (explicit === 'dark' || explicit === 'light') return explicit;
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
      ? 'dark'
      : 'light';
  }

  if (toggle) {
    toggle.addEventListener('click', function () {
      var next = currentTheme() === 'dark' ? 'light' : 'dark';
      root.setAttribute('data-theme', next);
      try { localStorage.setItem('theme', next); } catch (e) {}
    });
  }

  /* ------------------------------------------------------- filtro tags --- */

  var cloud = document.querySelector('[data-tag-filter]');
  var items = Array.prototype.slice.call(document.querySelectorAll('.post-item'));
  var groups = Array.prototype.slice.call(document.querySelectorAll('.month-group'));
  var status = document.querySelector('[data-filter-status]');
  var statusLabel = document.querySelector('[data-filter-label]');
  var clearButton = document.querySelector('[data-filter-clear]');

  if (!cloud || items.length === 0) return;

  function tagsOf(item) {
    return (item.getAttribute('data-tags') || '').trim().split(/\s+/);
  }

  function apply(slug) {
    items.forEach(function (item) {
      item.hidden = slug !== '' && tagsOf(item).indexOf(slug) === -1;
    });

    // Esconde o cabecalho do mes se nenhum post dele sobrou visivel
    groups.forEach(function (group) {
      var visible = group.querySelectorAll('.post-item:not([hidden])').length;
      group.hidden = visible === 0;
    });

    cloud.querySelectorAll('[data-tag]').forEach(function (el) {
      el.classList.toggle('is-active', (el.getAttribute('data-tag') || '') === slug);
    });

    if (status) {
      status.hidden = slug === '';
      if (statusLabel) statusLabel.textContent = '#' + slug;
    }

    var url = slug === '' ? window.location.pathname : window.location.pathname + '#' + slug;
    if (window.history && window.history.replaceState) {
      window.history.replaceState(null, '', url);
    }
  }

  if (clearButton) {
    clearButton.addEventListener('click', function () { apply(''); });
  }

  cloud.addEventListener('click', function (event) {
    var target = event.target.closest('[data-tag]');
    if (!target) return;
    event.preventDefault();
    var slug = target.getAttribute('data-tag') || '';
    apply(currentActive() === slug ? '' : slug);
  });

  function currentActive() {
    var active = cloud.querySelector('[data-tag].is-active');
    return active ? active.getAttribute('data-tag') || '' : '';
  }

  // Tags clicadas dentro da propria lista de posts tambem filtram
  document.querySelectorAll('.post-list .tag[data-tag]').forEach(function (link) {
    link.addEventListener('click', function (event) {
      event.preventDefault();
      apply(link.getAttribute('data-tag') || '');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  });

  // Permite abrir a home ja filtrada: /#automacao
  var initial = decodeURIComponent((window.location.hash || '').replace('#', ''));
  if (initial) apply(initial);
})();
