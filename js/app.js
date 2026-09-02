/* =========================================================================
   THE COFFEE JOURNAL — APPLICATION CONTROLLER
   ========================================================================= */

let currentFilter = 'all';
let visibleCount = 6;
const INCREMENT = 3;

// Gallery 6-by-6 incremental controller
let visiblePhotoCount = 6;
const PHOTO_INCREMENT = 6;

let activeMethodIndex = 0;
let activeRecipeIndex = 0;
let activePhotoIndex = 0;

function initApp() {
  if (typeof COFFEES === 'undefined' || typeof BREW_METHODS === 'undefined' || typeof GALLERY === 'undefined') {
    console.error('Master data not defined. Ensure js/data.js is linked.');
    return;
  }

  renderPassport();
  renderBrews();
  renderGallery();
  initFilters();
}

function formatBrewDate(dateStr) {
  if (!dateStr) return '—';
  try {
    const parts = dateStr.split('-');
    if (parts.length === 3) {
      const d = new Date(parts[0], parts[1] - 1, parts[2]);
      return d.toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' });
    }
    return dateStr;
  } catch (e) {
    return dateStr;
  }
}

function getFilteredCoffees() {
  if (currentFilter === 'all') return COFFEES;
  return COFFEES.filter(c => (c.category || '').toLowerCase().includes(currentFilter.toLowerCase()));
}

/* =========================================================================
   PASSPORT ENGINE
   ========================================================================= */

function renderPassport() {
  const container = document.getElementById('passport-container');
  const lotCount = document.getElementById('lot-count');
  const viewMoreBtnWrap = document.querySelector('.passport .view-more-wrap');
  const remainingCount = document.getElementById('remaining-count');

  if (!container) return;

  const dataset = getFilteredCoffees();
  if (lotCount) lotCount.innerText = dataset.length;

  const visibleItems = dataset.slice(0, visibleCount);

  container.innerHTML = visibleItems.map(item => {
    const masterIndex = COFFEES.findIndex(c => c.title === item.title && c.roaster === item.roaster);
    const tags = Array.isArray(item.flavorTags) ? item.flavorTags : [];
    const recipe = item.recipes && item.recipes[0] ? item.recipes[0] : null;
    const originRegion = item.origin ? item.origin.split(',')[0] : 'Origin';
    const formattedDate = recipe ? formatBrewDate(recipe.lastBrewed) : '2026';

    return `
      <div class="coffee-card" onclick="openCoffeeModal(${masterIndex})">
        <div>
          <div class="stamp-wrap">
            <div class="tcj-stamp">
              <div class="stamp-inner-ring">
                <span class="stamp-brand">TCJ</span>
                <span class="stamp-text">APPROVED</span>
              </div>
            </div>
            <span class="lot-chip">${item.category.toUpperCase()}</span>
          </div>

          <h3 class="coffee-card-title serif">${item.title}</h3>
          <p class="coffee-card-roaster">${item.roaster}</p>
          
          <div class="coffee-tasting-tags">
            ${tags.map(tag => `<span class="taste-pill">${tag}</span>`).join('')}
          </div>
        </div>

        <div class="coffee-meta-grid">
          <div>
            <span>Origin</span>
            <strong>${originRegion}</strong>
          </div>
          <div>
            <span>Process</span>
            <strong>${item.category}</strong>
          </div>
          <div>
            <span>Score</span>
            <div class="star-rating-box">
              <span>★</span><strong>${item.rating.toFixed(1)}</strong>
            </div>
          </div>
          <div>
            <span>Last Brewed</span>
            <strong>${formattedDate}</strong>
          </div>
        </div>
      </div>
    `;
  }).join('');

  if (viewMoreBtnWrap) {
    if (visibleCount >= dataset.length) {
      viewMoreBtnWrap.classList.add('hidden');
    } else {
      viewMoreBtnWrap.classList.remove('hidden');
      const left = dataset.length - visibleCount;
      if (remainingCount) remainingCount.innerText = `(${left} left)`;
    }
  }
}

function loadMoreCoffees() {
  visibleCount += INCREMENT;
  renderPassport();
}

function initFilters() {
  const filterChips = document.querySelectorAll('.filter-chip');
  filterChips.forEach(chip => {
    chip.addEventListener('click', () => {
      filterChips.forEach(c => c.classList.remove('active'));
      chip.classList.add('active');
      currentFilter = chip.dataset.filter;
      visibleCount = 6;
      renderPassport();
    });
  });
}

function generateSensoryRadarSVG(profile) {
  if (!profile) return '';

  const metrics = [
    { label: 'Acidity', val: profile.acidity || 0 },
    { label: 'Sweetness', val: profile.sweetness || 0 },
    { label: 'Body', val: profile.body || 0 },
    { label: 'Clarity', val: profile.clarity || 0 },
    { label: 'Aftertaste', val: profile.aftertaste || 0 }
  ];

  const size = 170;
  const center = size / 2;
  const maxRadius = 60;
  const angleStep = (Math.PI * 2) / metrics.length;
  const startAngle = -Math.PI / 2;

  let rings = '';
  for (let level = 1; level <= 5; level++) {
    const r = (maxRadius / 5) * level;
    let ringPoints = [];
    for (let i = 0; i < metrics.length; i++) {
      const angle = startAngle + i * angleStep;
      ringPoints.push(`${center + r * Math.cos(angle)},${center + r * Math.sin(angle)}`);
    }
    rings += `<polygon class="radar-grid-line" points="${ringPoints.join(' ')}" />`;
  }

  let axes = '';
  let labels = '';
  metrics.forEach((m, i) => {
    const angle = startAngle + i * angleStep;
    const x = center + maxRadius * Math.cos(angle);
    const y = center + maxRadius * Math.sin(angle);
    axes += `<line class="radar-axis-line" x1="${center}" y1="${center}" x2="${x}" y2="${y}" />`;

    const labelRadius = maxRadius + 18;
    const lx = center + labelRadius * Math.cos(angle);
    const ly = center + labelRadius * Math.sin(angle) + 3;
    labels += `<text class="radar-label" x="${lx}" y="${ly}">${m.label}</text>`;
  });

  const valuePoints = metrics.map((m, i) => {
    const r = (maxRadius / 5) * Math.min(Math.max(m.val, 0), 5);
    const angle = startAngle + i * angleStep;
    return `${center + r * Math.cos(angle)},${center + r * Math.sin(angle)}`;
  }).join(' ');

  return `
    <div class="sensory-radar-box">
      <div>
        <svg class="radar-svg" viewBox="0 0 ${size} ${size}">
          ${rings}
          ${axes}
          <polygon class="radar-polygon" points="${valuePoints}" />
          ${labels}
        </svg>
      </div>
      <div>
        <h5 style="font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.15em; color: var(--text-muted); margin-bottom: 0.5rem;">Sensory Map Readings</h5>
        <div style="font-size: 0.85rem; line-height: 1.8; color: var(--text-primary);">
          ${metrics.map(m => `<div style="display:flex; justify-content:space-between; border-bottom:1px dashed var(--border-delicate); padding:2px 0;"><span>${m.label}</span><strong>${m.val.toFixed(1)} / 5.0</strong></div>`).join('')}
        </div>
      </div>
    </div>
  `;
}

function openCoffeeModal(index) {
  const item = COFFEES[index];
  const modalContent = document.getElementById('modal-content');
  if (!item || !modalContent) return;

  const recipe = item.recipes && item.recipes[0] ? item.recipes[0] : null;
  const tags = Array.isArray(item.flavorTags) ? item.flavorTags : [];
  const fullBrewDate = recipe ? formatBrewDate(recipe.lastBrewed) : '—';

  modalContent.innerHTML = `
    <div style="display: flex; justify-content: space-between; align-items: flex-start; padding-right: 3.5rem; margin-bottom: 0.5rem;">
      <span class="chapter-tag">Cupping File · Passport</span>
      <div style="display: flex; align-items: center; gap: 0.35rem; color: var(--accent-gold); font-size: 1.2rem; font-weight: 700;">
        <span>★</span><span>${item.rating.toFixed(1)}</span><span style="font-size: 0.8rem; color: var(--text-muted); font-weight: 500;">/ 5.0</span>
      </div>
    </div>

    <h2 class="serif" style="font-size: 2.4rem; line-height: 1.1; margin-top: 0.25rem;">${item.title}</h2>
    <p style="color: var(--accent-rust); font-weight: 600; font-size: 1rem; margin-bottom: 1.25rem;">${item.roaster}</p>

    <div style="display: flex; flex-wrap: wrap; gap: 0.4rem; margin-bottom: 1.5rem;">
      ${tags.map(tag => `<span class="taste-pill" style="font-size: 0.8rem; padding: 0.35rem 0.75rem;">${tag}</span>`).join('')}
    </div>

    <div class="modal-specs-grid">
      <div class="spec-node">
        <span>Origin & Region</span>
        <strong>${item.origin}</strong>
      </div>
      <div class="spec-node">
        <span>Processing Category</span>
        <strong>${item.category}</strong>
      </div>
      <div class="spec-node">
        <span>Sensory Score</span>
        <strong style="color: var(--accent-gold);">${item.rating.toFixed(1)} / 5.0 Stars</strong>
      </div>
      <div class="spec-node">
        <span>Last Brewed</span>
        <strong>${fullBrewDate}</strong>
      </div>
    </div>

    <h4 class="serif" style="font-size: 1.35rem; margin-bottom: 0.4rem;">Cupping & Flavour Profile</h4>
    <p style="line-height: 1.8; color: var(--text-primary); font-size: 0.95rem;">${item.notes}</p>

    ${recipe && recipe.tasteProfile ? generateSensoryRadarSVG(recipe.tasteProfile) : ''}
  `;
  showModal();
}

/* =========================================================================
   BREWS ENGINE
   ========================================================================= */

function renderBrews() {
  const container = document.getElementById('brews-container');
  if (!container) return;

  container.innerHTML = BREW_METHODS.map((method, index) => {
    const primaryRecipe = method.recipes[0];

    return `
      <div class="brew-card" onclick="openBrewModal(${index})">
        <div class="brew-img-wrapper">
          <img 
            src="${method.image}" 
            onerror="this.onerror=null;this.src='${method.fallback}'" 
            alt="${method.name}" 
            loading="lazy" 
          />
          ${method.isFavorite ? `<span class="brew-favorite-pill">★ ${method.badgeText}</span>` : ''}
        </div>
        <div class="brew-card-body">
          <span class="chapter-tag" style="font-size: 0.65rem;">${method.type}</span>
          <h3 class="brew-card-title serif">${method.name}</h3>
          <p class="brew-characteristic">${method.summary}</p>

          <div class="brew-params-strip">
            <div class="param-item"><span>Ratio</span><strong>${primaryRecipe.ratio}</strong></div>
            <div class="param-item"><span>Dose</span><strong>${primaryRecipe.coffee}</strong></div>
            <div class="param-item"><span>Temp</span><strong>${primaryRecipe.temperature.split(' ')[0]}</strong></div>
            <div class="param-item"><span>Time</span><strong>${primaryRecipe.brewTime}</strong></div>
          </div>

          <div class="brew-card-footer">
            <span>Browse ${method.recipes.length} Dialed Recipes</span> &rarr;
          </div>
        </div>
      </div>
    `;
  }).join('');
}

function openBrewModal(methodIndex, recipeIndex = 0) {
  activeMethodIndex = methodIndex;
  activeRecipeIndex = recipeIndex;

  const method = BREW_METHODS[methodIndex];
  const recipe = method.recipes[recipeIndex];
  const modalContent = document.getElementById('modal-content');
  if (!method || !recipe || !modalContent) return;

  modalContent.innerHTML = `
    <div style="padding-right: 3.5rem; margin-bottom: 0.75rem;">
      <span class="chapter-tag">${method.type}</span>
      <h2 class="serif" style="font-size: 2.5rem; line-height: 1.1; margin-top: 0.25rem;">${method.name}</h2>
      <p style="color: var(--text-muted); font-size: 0.95rem; margin-top: 0.35rem;">${method.summary}</p>
    </div>

    <div class="brew-recipe-tabs">
      ${method.recipes.map((r, i) => `
        <button class="recipe-tab-btn ${i === recipeIndex ? 'active' : ''}" onclick="openBrewModal(${methodIndex}, ${i})">
          ${r.recipeTitle}
        </button>
      `).join('')}
    </div>

    <div class="recipe-detail-grid">
      <div class="recipe-spec-card">
        <span>Coffee</span>
        <strong>${recipe.coffee}</strong>
      </div>
      <div class="recipe-spec-card">
        <span>Water</span>
        <strong>${recipe.water}</strong>
      </div>
      <div class="recipe-spec-card">
        <span>Ratio</span>
        <strong>${recipe.ratio}</strong>
      </div>
      <div class="recipe-spec-card">
        <span>Grind</span>
        <strong>${recipe.grind}</strong>
      </div>
      <div class="recipe-spec-card">
        <span>Temperature</span>
        <strong>${recipe.temperature}</strong>
      </div>
      <div class="recipe-spec-card">
        <span>Brew Time</span>
        <strong>${recipe.brewTime}</strong>
      </div>
    </div>

    <h4 class="serif" style="font-size: 1.45rem; margin: 1.75rem 0 0.75rem;">Brewing Steps</h4>
    <ol class="modal-instruction-list">
      ${recipe.steps.map(step => `<li>${step}</li>`).join('')}
    </ol>

    <div style="margin-top: 2rem; background: var(--bg-cream); padding: 1.5rem; border-radius: 12px; border: 1px solid var(--border-delicate);">
      <h5 style="font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.15em; color: var(--text-muted); margin-bottom: 0.35rem;">Notes & Character</h5>
      <p style="font-size: 0.95rem; color: var(--text-primary); line-height: 1.7;">${recipe.notes}</p>
      
      <div style="display: flex; flex-wrap: wrap; gap: 0.4rem; margin-top: 1rem;">
        ${recipe.tasteNotes.map(note => `<span class="taste-pill" style="font-size: 0.75rem; background: var(--bg-paper);">${note}</span>`).join('')}
      </div>
    </div>
  `;

  showModal();
}

/* =========================================================================
   GALLERY ENGINE (6 + 6 PAGINATION & CAROUSEL)
   ========================================================================= */

function renderGallery() {
  const container = document.getElementById('gallery-container');
  const viewMoreWrap = document.getElementById('gallery-view-more-wrap');
  const remainingCount = document.getElementById('gallery-remaining-count');

  if (!container) return;

  const visiblePhotos = GALLERY.slice(0, visiblePhotoCount);

  container.innerHTML = visiblePhotos.map((photo, index) => `
    <div class="gallery-tile" onclick="openPhotoModal(${index})">
      <div class="gallery-tile-img">
        <img 
          src="${photo.local}" 
          onerror="this.onerror=null;this.src='${photo.fallback}'" 
          alt="Coffee journal photograph" 
          loading="lazy" 
        />
      </div>
    </div>
  `).join('');

  if (viewMoreWrap) {
    if (visiblePhotoCount >= GALLERY.length) {
      viewMoreWrap.classList.add('hidden');
    } else {
      viewMoreWrap.classList.remove('hidden');
      const left = GALLERY.length - visiblePhotoCount;
      if (remainingCount) remainingCount.innerText = `(${left} left)`;
    }
  }
}

function loadMorePhotos() {
  visiblePhotoCount += PHOTO_INCREMENT;
  renderGallery();
}

function openPhotoModal(index) {
  activePhotoIndex = index;
  const modalContent = document.getElementById('modal-content');
  if (!modalContent || !GALLERY[index]) return;

  const total = GALLERY.length;
  const currentNum = String(index + 1).padStart(2, '0');
  const totalNum = String(total).padStart(2, '0');
  const photo = GALLERY[index];

  modalContent.innerHTML = `
    <div class="lightbox-container">
      <div class="lightbox-img-wrapper">
        <img 
          src="${photo.local}" 
          onerror="this.onerror=null;this.src='${photo.fallback}'" 
          alt="Coffee Moment" 
          class="lightbox-img" 
        />
      </div>

      <button class="lightbox-nav-btn lightbox-prev" onclick="navigateGallery(-1)" aria-label="Previous photo">&#8249;</button>
      <button class="lightbox-nav-btn lightbox-next" onclick="navigateGallery(1)" aria-label="Next photo">&#8250;</button>

      <div class="lightbox-counter">${currentNum} / ${totalNum}</div>
    </div>
  `;

  showModal();
}

function navigateGallery(direction) {
  let nextIndex = activePhotoIndex + direction;
  if (nextIndex < 0) nextIndex = GALLERY.length - 1;
  if (nextIndex >= GALLERY.length) nextIndex = 0;
  openPhotoModal(nextIndex);
}

function showModal() {
  const modal = document.getElementById('modal');
  if (!modal) return;
  modal.classList.add('active');
  document.body.classList.add('modal-open');
}

function closeModal() {
  const modal = document.getElementById('modal');
  if (!modal) return;
  modal.classList.remove('active');
  document.body.classList.remove('modal-open');
}

const modalEl = document.getElementById('modal');
if (modalEl) {
  modalEl.addEventListener('click', (e) => {
    if (e.target === modalEl) closeModal();
  });
}

window.addEventListener('keydown', (e) => {
  const modal = document.getElementById('modal');
  if (!modal || !modal.classList.contains('active')) return;

  if (e.key === 'Escape') {
    closeModal();
  } else if (e.key === 'ArrowLeft') {
    const isGallery = document.querySelector('.lightbox-container');
    if (isGallery) navigateGallery(-1);
  } else if (e.key === 'ArrowRight') {
    const isGallery = document.querySelector('.lightbox-container');
    if (isGallery) navigateGallery(1);
  }
});

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initApp);
} else {
  initApp();
}