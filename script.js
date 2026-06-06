/* ============================================================
   script.js — High Dive Rum Guide
   Hash-based SPA router with landing, category, and rum detail views.
   All rendering is done by injecting HTML into <main id="app">.
   ============================================================ */

// ── Helper: get category color CSS var by slug ───────────────
function catColor(slug) {
  const map = {
    'white-light-mixing-rum':     'var(--cat-white)',
    'spanish-style-aged-rum':     'var(--cat-spanish)',
    'jamaican-funk-pot-still-rum':'var(--cat-jamaican)',
    'demerara-guyana-rum':        'var(--cat-demerara)',
    'dark-navy-overproof-blends': 'var(--cat-dark)',
    'cane-juice-spirits':         'var(--cat-cane)',
    'flavored-spiced-rum-liqueurs':'var(--cat-flavored)'
  };
  return map[slug] || 'var(--accent)';
}

// ── Helper: build a flavor-tag span ──────────────────────────
function flavorTagHtml(tag) {
  return `<span class="flavor-tag">${tag}</span>`;
}

// ── Helper: build the breadcrumb bar HTML ────────────────────
function breadcrumbHtml(crumbs) {
  // crumbs is an array of { label, hash } objects;
  // the last crumb is the current page (no link).
  const parts = crumbs.map((c, i) => {
    if (i === crumbs.length - 1) {
      return `<span class="breadcrumb-current">${c.label}</span>`;
    }
    return `<a href="${c.hash}">${c.label}</a>`;
  });
  // Join with a separator arrow
  return `<nav class="breadcrumb fade-in" aria-label="Breadcrumb">
    ${parts.join('<span class="breadcrumb-sep"> › </span>')}
  </nav>`;
}

// ── Helper: escape HTML to prevent XSS in search input ───────
function esc(str) {
  return String(str)
    .replace(/&/g,'&amp;').replace(/</g,'&lt;')
    .replace(/>/g,'&gt;').replace(/"/g,'&quot;');
}

// ─────────────────────────────────────────────────────────────
// ROUTER — reads window.location.hash on every change
// ─────────────────────────────────────────────────────────────
function router() {
  const hash = window.location.hash || '#landing';
  const app  = document.getElementById('app');

  if (!app) return;

  // Scroll to top on every navigation (SPA feel)
  window.scrollTo({ top: 0, behavior: 'instant' });

  if (hash === '#landing' || hash === '' || hash === '#') {
    renderLanding(app);
  } else if (hash.startsWith('#category/')) {
    const slug = hash.slice('#category/'.length);
    renderCategory(app, slug);
  } else if (hash.startsWith('#rum/')) {
    const slug = hash.slice('#rum/'.length);
    renderRum(app, slug);
  } else {
    // Unknown hash — fall back to landing
    renderLanding(app);
  }
}

// ─────────────────────────────────────────────────────────────
// LANDING PAGE — hero + category grid + full searchable rum list
// ─────────────────────────────────────────────────────────────
function renderLanding(app) {
  const { categories, rums } = RUM_DATA;

  // Build the category card HTML
  const categoryCards = categories.map(cat => `
    <a class="cat-card fade-in" href="#category/${cat.slug}"
       style="--cat-color: ${catColor(cat.slug)}"
       role="button" aria-label="Browse ${cat.name}">
      <div class="cat-card-header">
        <span class="cat-emoji" aria-hidden="true">${cat.emoji}</span>
        <span class="cat-count-badge">${cat.count} bottle${cat.count !== 1 ? 's' : ''}</span>
      </div>
      <div class="cat-name">${cat.name}</div>
      <div class="cat-short">${cat.short}</div>
      <span class="cat-link" aria-hidden="true">Browse →</span>
    </a>
  `).join('');

  // Build the full rum list rows (all 44, filterable)
  const rumRows = rums.map(rum => `
    <div class="rum-list-item" 
         style="--item-color: ${catColor(rum.category_slug)}"
         data-slug="${rum.slug}"
         data-cat="${rum.category_slug}"
         data-name="${esc(rum.name.toLowerCase())}"
         data-tags="${esc(rum.flavor_tags.join(' ').toLowerCase())}"
         role="button"
         tabindex="0"
         onclick="navigate('#rum/${rum.slug}')"
         onkeydown="if(event.key==='Enter') navigate('#rum/${rum.slug}')">
      <div class="rum-list-item-body">
        <div class="cat-badge"
             style="--badge-bg: ${catColor(rum.category_slug)}22; --badge-color: ${catColor(rum.category_slug)}">
          ${rum.category}
        </div>
        <div class="rum-list-name">${rum.name}</div>
        <div class="rum-list-short">${rum.short}</div>
      </div>
      <span class="rum-list-arrow" aria-hidden="true">›</span>
    </div>
  `).join('');

  // Build category options for the filter dropdown
  const catOptions = categories.map(cat =>
    `<option value="${cat.slug}">${cat.name}</option>`
  ).join('');

  app.innerHTML = `
    <!-- Hero -->
    <section class="hero grain" aria-label="High Dive Rum Shelf">
      <div class="hero-inner fade-in">
        <p class="hero-eyebrow">High Dive · Harrisburg, PA</p>
        <h1>The Rum <em>Shelf</em></h1>
        <div class="hero-divider" aria-hidden="true">✦ ✦ ✦</div>
        <p class="hero-subtitle">
          Seven categories, forty-four bottles. 
          A practical guide to what's behind the bar and where each rum belongs.
        </p>
        <div class="hero-stats" aria-label="Shelf statistics">
          <div class="hero-stat">
            <span class="num">44</span>
            <span class="lbl">Bottles</span>
          </div>
          <div class="hero-stat">
            <span class="num">7</span>
            <span class="lbl">Categories</span>
          </div>
          <div class="hero-stat">
            <span class="num">∞</span>
            <span class="lbl">Possibilities</span>
          </div>
        </div>
        <a href="#categories-section" class="btn-primary" onclick="event.preventDefault(); document.getElementById('categories-section').scrollIntoView({behavior:'smooth'})">
          Browse the Shelf
        </a>
      </div>
    </section>

    <!-- Category Grid -->
    <section class="page-section" id="categories-section" aria-labelledby="cat-grid-title">
      <div class="section-header">
        <h2 class="section-title" id="cat-grid-title">Seven Categories</h2>
        <span class="section-count">Tap any to explore</span>
      </div>
      <div class="cat-grid">
        ${categoryCards}
      </div>
    </section>

    <!-- All Rums: Search + List -->
    <section class="page-section" id="all-rums-section" aria-labelledby="rum-list-title">
      <div class="section-header">
        <h2 class="section-title" id="rum-list-title">All 44 Bottles</h2>
      </div>

      <div class="search-bar" role="search" aria-label="Search rums">
        <div class="search-input-wrap">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" aria-hidden="true">
            <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
          </svg>
          <input type="search" id="rum-search" placeholder="Search by name, origin, flavor…" 
                 autocomplete="off" aria-label="Search rums" aria-controls="rum-list" />
        </div>
        <select id="cat-filter" aria-label="Filter by category">
          <option value="">All Categories</option>
          ${catOptions}
        </select>
        <button class="btn-clear" id="btn-clear" onclick="clearSearch()" aria-label="Clear search">Clear</button>
        <div id="search-count" aria-live="polite"></div>
      </div>

      <div id="rum-list" role="list" aria-label="Rum list">
        ${rumRows}
      </div>
    </section>
  `;

  // Attach the real-time search listeners after injecting HTML
  setupSearch();
}

// ─────────────────────────────────────────────────────────────
// CATEGORY PAGE — hero description + rum cards
// ─────────────────────────────────────────────────────────────
function renderCategory(app, slug) {
  const { categories, rums } = RUM_DATA;

  const cat = categories.find(c => c.slug === slug);
  if (!cat) {
    // Unknown slug — redirect home
    navigate('#landing');
    return;
  }

  // Rums belonging to this category, in data order
  const catRums = rums.filter(r => r.category_slug === slug);

  // Previous and next category for navigation
  const idx  = categories.indexOf(cat);
  const prev = idx > 0                    ? categories[idx - 1] : null;
  const next = idx < categories.length - 1 ? categories[idx + 1] : null;

  // Split the description on double newlines to get proper paragraphs
  const descParagraphs = cat.description.split('\n\n')
    .map(p => `<p>${p.trim()}</p>`).join('');

  // Rum cards for this category
  const rumCards = catRums.map(rum => `
    <a class="rum-card fade-in" href="#rum/${rum.slug}"
       style="--card-color: ${catColor(slug)}"
       aria-label="${rum.name}">
      <div class="rum-card-name">${rum.name}</div>
      <div class="rum-card-desc">${rum.two_sentence}</div>
      <div class="rum-card-footer">
        <div class="flavor-tags" aria-label="Flavor profile">
          ${rum.flavor_tags.slice(0, 4).map(flavorTagHtml).join('')}
        </div>
        <span class="rum-card-cta" aria-hidden="true">Details →</span>
      </div>
    </a>
  `).join('');

  // Prev/Next nav buttons
  const prevBtn = prev
    ? `<button class="cat-nav-btn" onclick="navigate('#category/${prev.slug}')">← ${prev.name}</button>`
    : `<span></span>`;
  const nextBtn = next
    ? `<button class="cat-nav-btn" onclick="navigate('#category/${next.slug}')">${next.name} →</button>`
    : `<span></span>`;

  app.innerHTML = `
    ${breadcrumbHtml([
      { label: 'All Categories', hash: '#landing' },
      { label: cat.name, hash: '' }
    ])}

    <div class="cat-page-hero grain">
      <div class="cat-page-hero-inner fade-in">
        <div class="cat-hero-emoji" aria-hidden="true">${cat.emoji}</div>
        <div>
          <div class="cat-hero-meta">${cat.count} bottles · High Dive Rum Shelf</div>
          <h1 class="cat-hero-title">${cat.name}</h1>
          <div class="cat-hero-desc">${descParagraphs}</div>
        </div>
      </div>
    </div>

    <section aria-labelledby="cat-rum-heading">
      <div class="page-section" style="padding-bottom:0.5rem">
        <div class="section-header">
          <h2 class="section-title" id="cat-rum-heading">${cat.count} Bottles in This Category</h2>
        </div>
      </div>
      <div class="rum-card-grid">
        ${rumCards}
      </div>
    </section>

    <div class="cat-nav">
      ${prevBtn}
      ${nextBtn}
    </div>
  `;
}

// ─────────────────────────────────────────────────────────────
// RUM DETAIL PAGE — full description, flavor tags, best-for, sidebar
// ─────────────────────────────────────────────────────────────
function renderRum(app, slug) {
  const { categories, rums } = RUM_DATA;

  const rum = rums.find(r => r.slug === slug);
  if (!rum) {
    navigate('#landing');
    return;
  }

  const cat = categories.find(c => c.slug === rum.category_slug);

  // Related rums: other bottles in the same category, up to 4
  const related = rums
    .filter(r => r.category_slug === rum.category_slug && r.slug !== rum.slug)
    .slice(0, 4);

  const relatedItems = related.map(r => `
    <button class="related-item" onclick="navigate('#rum/${r.slug}')" aria-label="Go to ${r.name}">
      <span class="related-dot" aria-hidden="true"></span>
      ${r.name}
    </button>
  `).join('');

  // Flavor tag pills for the main content section
  const flavorTagPills = rum.flavor_tags.map(flavorTagHtml).join('');

  // Best-for pills
  const bestForPills = rum.best_for.map(b =>
    `<span class="best-for-tag">${b}</span>`
  ).join('');

  app.innerHTML = `
    ${breadcrumbHtml([
      { label: 'All Categories', hash: '#landing' },
      { label: cat ? cat.name : 'Category', hash: `#category/${rum.category_slug}` },
      { label: rum.name, hash: '' }
    ])}

    <div class="rum-detail-hero grain">
      <div class="rum-detail-hero-inner fade-in">
        <button class="rum-detail-category-link"
                onclick="navigate('#category/${rum.category_slug}')"
                aria-label="Back to ${cat ? cat.name : 'Category'}">
          ← ${cat ? cat.emoji + ' ' + cat.name : 'Category'}
        </button>
        <h1 class="rum-detail-name">${rum.name}</h1>
        <p class="rum-detail-origin">${rum.origin}</p>
      </div>
    </div>

    <div class="rum-detail-layout">
      <!-- Main content column -->
      <main class="rum-main">
        <div class="rum-section fade-in">
          <h2 class="rum-section-title">About This Rum</h2>
          <p class="rum-description">${rum.description}</p>
        </div>

        <div class="rum-section fade-in">
          <h2 class="rum-section-title">Flavor Profile</h2>
          <div class="flavor-tags" aria-label="Flavor tags" style="gap:0.5rem">
            ${flavorTagPills}
          </div>
        </div>

        <div class="rum-section fade-in">
          <h2 class="rum-section-title">Best For</h2>
          <div class="best-for-list" aria-label="Best cocktail uses">
            ${bestForPills}
          </div>
        </div>
      </main>

      <!-- Sidebar column -->
      <aside class="rum-sidebar">
        <div class="info-panel fade-in">
          <div class="info-panel-title">Quick Facts</div>
          <div class="info-row">
            <span class="info-label">Origin</span>
            <span class="info-value">${rum.origin}</span>
          </div>
          <div class="info-row">
            <span class="info-label">Category</span>
            <span class="info-value">${rum.category}</span>
          </div>
          <div class="info-row">
            <span class="info-label">Style</span>
            <span class="info-value">${rum.flavor_tags[0] || '—'}</span>
          </div>
          <div class="info-row">
            <span class="info-label">Best Use</span>
            <span class="info-value">${rum.best_for[0] || '—'}</span>
          </div>
        </div>

        ${related.length > 0 ? `
        <div class="related-panel fade-in">
          <div class="info-panel-title">More in This Category</div>
          <div class="related-list">
            ${relatedItems}
          </div>
          <div style="margin-top:0.85rem">
            <button class="cat-nav-btn" style="width:100%; text-align:center; font-size:0.75rem"
                    onclick="navigate('#category/${rum.category_slug}')">
              All ${cat ? cat.count : ''} in ${cat ? cat.name : 'Category'} →
            </button>
          </div>
        </div>` : ''}
      </aside>
    </div>
  `;
}

// ─────────────────────────────────────────────────────────────
// SEARCH & FILTER (landing page only)
// ─────────────────────────────────────────────────────────────
function setupSearch() {
  const input  = document.getElementById('rum-search');
  const select = document.getElementById('cat-filter');
  if (!input || !select) return;

  // Run filter on every keystroke and dropdown change
  input.addEventListener('input', filterRums);
  select.addEventListener('change', filterRums);
}

function filterRums() {
  const input  = document.getElementById('rum-search');
  const select = document.getElementById('cat-filter');
  const count  = document.getElementById('search-count');
  if (!input || !select) return;

  const query   = input.value.trim().toLowerCase();
  const catSlug = select.value;

  const items = document.querySelectorAll('#rum-list .rum-list-item');
  let visible = 0;

  items.forEach(item => {
    const name = item.dataset.name || '';
    const cat  = item.dataset.cat  || '';
    const tags = item.dataset.tags || '';

    // Match on name, flavor tags, or a category sub-word
    const matchesQuery = !query ||
      name.includes(query) ||
      tags.includes(query) ||
      cat.includes(query);

    const matchesCat = !catSlug || cat === catSlug;

    if (matchesQuery && matchesCat) {
      item.style.display = '';
      visible++;
    } else {
      item.style.display = 'none';
    }
  });

  // Update the live count label
  if (count) {
    if (query || catSlug) {
      count.textContent = `${visible} of ${items.length} bottles shown`;
    } else {
      count.textContent = '';
    }
  }

  // Show a "no results" message if needed
  const list    = document.getElementById('rum-list');
  const noMatch = document.getElementById('no-results-msg');
  if (visible === 0 && list) {
    if (!noMatch) {
      const msg = document.createElement('div');
      msg.id = 'no-results-msg';
      msg.className = 'no-results';
      msg.textContent = 'No rums match that search. Try a different term or clear the filter.';
      list.appendChild(msg);
    }
  } else if (noMatch) {
    noMatch.remove();
  }
}

function clearSearch() {
  const input  = document.getElementById('rum-search');
  const select = document.getElementById('cat-filter');
  if (input)  input.value = '';
  if (select) select.value = '';
  filterRums(); // Re-run to show all
}

// ─────────────────────────────────────────────────────────────
// NAVIGATION HELPER — pushes hash and triggers router
// ─────────────────────────────────────────────────────────────
function navigate(hash) {
  window.location.hash = hash;
  // hashchange event fires automatically, calling router()
}

// ─────────────────────────────────────────────────────────────
// BACK-TO-TOP BUTTON
// ─────────────────────────────────────────────────────────────
function setupBackToTop() {
  const btn = document.getElementById('back-to-top');
  if (!btn) return;

  // Show after scrolling 400px
  window.addEventListener('scroll', () => {
    btn.classList.toggle('visible', window.scrollY > 400);
  }, { passive: true });

  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

// ─────────────────────────────────────────────────────────────
// UPDATE HEADER — highlights active nav btn
// ─────────────────────────────────────────────────────────────
function updateHeaderNav() {
  const hash = window.location.hash || '#landing';
  document.querySelectorAll('.nav-btn').forEach(btn => {
    btn.classList.remove('active');
    if (btn.dataset.hash && hash.startsWith(btn.dataset.hash)) {
      btn.classList.add('active');
    }
  });
  // "All Rums" button active on landing
  const homeBtn = document.querySelector('.nav-btn[data-hash="#landing"]');
  if (homeBtn && (hash === '#landing' || hash === '' || hash === '#')) {
    homeBtn.classList.add('active');
  }
}

// ─────────────────────────────────────────────────────────────
// INIT — runs when DOM is fully parsed
// ─────────────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  // One-time setup
  setupBackToTop();

  // Listen for hash changes (back/forward navigation)
  window.addEventListener('hashchange', () => {
    router();
    updateHeaderNav();
  });

  // Initial render on page load
  router();
  updateHeaderNav();
});
