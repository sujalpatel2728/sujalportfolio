/**
 * Main Application Orchestrator
 * Dynamic component rendering, filters, animations, and interactive effects
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Initialize Interactive Canvas
  if (window.HeroCanvas) {
    new window.HeroCanvas('hero-canvas');
  }

  // 2. Initialize Navigation
  if (window.NavigationController) {
    new window.NavigationController();
  }

  // 3. Render Dynamic Content
  renderSkills();
  renderProjects();

  // 4. Initialize Contact Form & Copy buttons
  if (window.ContactFormController) {
    new window.ContactFormController('contact-form');
  }

  // 5. Cursor Spotlight Follower
  initCursorSpotlight();

  // 6. Interactive 3D Card Hover Tilt
  initCardTilt();

  // 7. Scroll Reveal Animations
  initScrollAnimations();

  // 8. Back to Top Button
  initBackToTop();
});

/**
 * Render Skills Categories and Badges dynamically
 */
function renderSkills() {
  const container = document.getElementById('skills-container');
  if (!container || typeof skillsData === 'undefined') return;

  container.innerHTML = skillsData.map(cat => `
    <div class="neu-card skill-category-card fade-up">
      <div class="category-header">
        <h3 class="category-title">${cat.category}</h3>
        <span class="text-mono text-secondary">${cat.skills.length} Items</span>
      </div>
      <p class="category-desc">${cat.description}</p>
      <div class="skills-items-container">
        ${cat.skills.map(s => `
          <div class="skill-item-row">
            <div class="skill-left-info">
              <span class="skill-icon-svg">${s.icon}</span>
              <div class="skill-name-wrap">
                <div class="name">${s.name}</div>
                <div class="sub">${s.level}</div>
              </div>
            </div>
            <span class="skill-pill-tag">${s.tag}</span>
          </div>
        `).join('')}
      </div>
    </div>
  `).join('');
}

/**
 * Render Projects with category filtering
 */
function renderProjects(filterCategory = 'All') {
  const container = document.getElementById('projects-container');
  if (!container || typeof projectsData === 'undefined') return;

  const filtered = filterCategory === 'All' 
    ? projectsData 
    : projectsData.filter(p => p.category === filterCategory);

  container.innerHTML = filtered.map(p => `
    <article class="neu-card project-card fade-up" data-category="${p.category}">
      <div class="project-header-preview">
        <span class="project-badge-pill">${p.badge}</span>
        <div class="project-preview-overlay">
          <div style="width: 56px; height: 56px; border-radius: 14px; background: rgba(43,68,209,0.3); border: 1px solid rgba(67,94,240,0.4); display: flex; align-items: center; justify-content: center; color: #FFFFFF; margin-bottom: 8px;">
            <svg style="width: 28px; height: 28px;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M16 18l6-6-6-6"></path>
              <path d="M8 6l-6 6 6 6"></path>
            </svg>
          </div>
          <span class="text-mono" style="color: #CCD9FF; font-size: 0.6875rem;">${p.metrics}</span>
        </div>
      </div>
      
      <div class="project-body">
        <h3 class="project-title">${p.title}</h3>
        <p class="project-desc">${p.shortDescription}</p>
        
        <div class="project-tech-tags">
          ${p.technologies.map(t => `<span class="tech-tag">${t}</span>`).join('')}
        </div>
        
        <div class="project-actions-row">
          <a href="${p.githubUrl}" target="_blank" rel="noopener noreferrer" class="project-link" aria-label="View source code on GitHub">
            <svg style="width: 16px; height: 16px;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
            </svg>
            Code Repository
          </a>
          
          <a href="${p.liveUrl}" class="project-link" aria-label="View project demo">
            Live Preview
            <svg style="width: 14px; height: 14px;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
              <polyline points="15 3 21 3 21 9"></polyline>
              <line x1="10" y1="14" x2="21" y2="3"></line>
            </svg>
          </a>
        </div>
      </div>
    </article>
  `).join('');

  // Re-bind interactive tilt for newly rendered cards
  initCardTilt();
}

/**
 * Filter projects by category tab
 */
window.filterProjects = function(category, buttonElement) {
  const buttons = document.querySelectorAll('.filter-btn');
  buttons.forEach(btn => btn.classList.remove('active'));
  if (buttonElement) {
    buttonElement.classList.add('active');
  }
  renderProjects(category);
};

/**
 * Cursor Spotlight on Desktop
 */
function initCursorSpotlight() {
  const spotlight = document.getElementById('cursor-spotlight');
  if (!spotlight || window.innerWidth < 768) return;

  window.addEventListener('mousemove', (e) => {
    spotlight.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
  });
}

/**
 * 3D Tilt Effect on Neuform Cards
 */
function initCardTilt() {
  if (window.innerWidth < 1024) return; // Only on desktop for best performance

  const cards = document.querySelectorAll('.neu-card');
  cards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateX = ((y - centerY) / centerY) * -4;
      const rotateY = ((x - centerX) / centerX) * 4;

      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px)`;
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0)';
    });
  });
}

/**
 * Scroll Reveal Animations
 */
function initScrollAnimations() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  });

  const animatedElements = document.querySelectorAll('.fade-up');
  animatedElements.forEach(el => observer.observe(el));
}

/**
 * Back to Top Smooth Scroll
 */
function initBackToTop() {
  const btn = document.getElementById('back-to-top');
  if (btn) {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }
}
