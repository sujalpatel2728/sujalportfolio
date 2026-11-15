/**
 * Navigation Component Controller
 * Sticky header, active section spy, mobile drawer, smooth navigation
 */

class NavigationController {
  constructor() {
    this.header = document.querySelector('.navbar-header');
    this.navLinks = document.querySelectorAll('.navbar-link, .mobile-nav-link');
    this.sections = document.querySelectorAll('section[id]');
    this.menuToggle = document.getElementById('menu-toggle');
    this.drawer = document.getElementById('mobile-drawer');
    this.backdrop = document.getElementById('mobile-backdrop');
    this.drawerClose = document.getElementById('drawer-close');

    this.init();
  }

  init() {
    this.bindScrollEvents();
    this.bindDrawerEvents();
    this.setupIntersectionObserver();
  }

  bindScrollEvents() {
    window.addEventListener('scroll', () => {
      const scrollY = window.pageYOffset;
      if (scrollY > 40) {
        this.header.classList.add('scrolled');
      } else {
        this.header.classList.remove('scrolled');
      }
    }, { passive: true });
  }

  bindDrawerEvents() {
    if (this.menuToggle && this.drawer && this.backdrop) {
      this.menuToggle.addEventListener('click', () => this.openDrawer());
      if (this.drawerClose) {
        this.drawerClose.addEventListener('click', () => this.closeDrawer());
      }
      this.backdrop.addEventListener('click', () => this.closeDrawer());

      // Close on escape
      document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && this.drawer.classList.contains('open')) {
          this.closeDrawer();
        }
      });

      // Close when clicking any mobile nav link
      const mobileLinks = this.drawer.querySelectorAll('a');
      mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
          this.closeDrawer();
        });
      });
    }
  }

  openDrawer() {
    this.drawer.classList.add('open');
    this.backdrop.classList.add('open');
    document.body.style.overflow = 'hidden';
    this.menuToggle.setAttribute('aria-expanded', 'true');
  }

  closeDrawer() {
    this.drawer.classList.remove('open');
    this.backdrop.classList.remove('open');
    document.body.style.overflow = '';
    this.menuToggle.setAttribute('aria-expanded', 'false');
  }

  setupIntersectionObserver() {
    const observerOptions = {
      root: null,
      rootMargin: '-30% 0px -60% 0px',
      threshold: 0
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const currentId = entry.target.getAttribute('id');
          this.setActiveLink(currentId);
        }
      });
    }, observerOptions);

    this.sections.forEach(section => observer.observe(section));
  }

  setActiveLink(activeId) {
    this.navLinks.forEach(link => {
      const href = link.getAttribute('href');
      if (href === `#${activeId}`) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });
  }
}

window.NavigationController = NavigationController;
