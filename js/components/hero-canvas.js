/**
 * Interactive Hero Canvas Animation
 * Lightweight particle constellation & cursor field
 * Optimized for 60fps with automatic viewport culling & DPI scaling
 */

class HeroCanvas {
  constructor(canvasId) {
    this.canvas = document.getElementById(canvasId);
    if (!this.canvas) return;

    this.ctx = this.canvas.getContext('2d');
    this.particles = [];
    this.particleCount = 55;
    this.connectionDistance = 140;
    this.mouse = {
      x: -1000,
      y: -1000,
      radius: 180,
      isActive: false
    };

    this.dpr = Math.min(window.devicePixelRatio || 1, 2);
    this.animationFrameId = null;
    this.isVisible = true;

    this.init();
  }

  init() {
    this.resize();
    this.createParticles();
    this.bindEvents();
    this.start();
  }

  resize() {
    const rect = this.canvas.parentElement.getBoundingClientRect();
    this.width = rect.width;
    this.height = rect.height;

    this.canvas.width = this.width * this.dpr;
    this.canvas.height = this.height * this.dpr;
    this.canvas.style.width = `${this.width}px`;
    this.canvas.style.height = `${this.height}px`;

    this.ctx.scale(this.dpr, this.dpr);

    // Adjust particle count based on screen width
    if (this.width < 768) {
      this.particleCount = 28;
      this.connectionDistance = 100;
    } else {
      this.particleCount = 55;
      this.connectionDistance = 140;
    }
  }

  createParticles() {
    this.particles = [];
    for (let i = 0; i < this.particleCount; i++) {
      this.particles.push({
        x: Math.random() * this.width,
        y: Math.random() * this.height,
        vx: (Math.random() - 0.5) * 0.7,
        vy: (Math.random() - 0.5) * 0.7,
        baseRadius: Math.random() * 2 + 1.2,
        radius: Math.random() * 2 + 1.2,
        color: Math.random() > 0.4 ? 'rgba(67, 94, 240, ' : 'rgba(43, 68, 209, ',
        alpha: Math.random() * 0.5 + 0.3
      });
    }
  }

  bindEvents() {
    window.addEventListener('resize', () => {
      this.resize();
      this.createParticles();
    });

    const heroSection = this.canvas.parentElement;

    heroSection.addEventListener('mousemove', (e) => {
      const rect = this.canvas.getBoundingClientRect();
      this.mouse.x = e.clientX - rect.left;
      this.mouse.y = e.clientY - rect.top;
      this.mouse.isActive = true;
    });

    heroSection.addEventListener('mouseleave', () => {
      this.mouse.x = -1000;
      this.mouse.y = -1000;
      this.mouse.isActive = false;
    });

    // Touch support for mobile devices
    heroSection.addEventListener('touchmove', (e) => {
      if (e.touches.length > 0) {
        const rect = this.canvas.getBoundingClientRect();
        this.mouse.x = e.touches[0].clientX - rect.left;
        this.mouse.y = e.touches[0].clientY - rect.top;
        this.mouse.isActive = true;
      }
    }, { passive: true });

    heroSection.addEventListener('touchend', () => {
      this.mouse.x = -1000;
      this.mouse.y = -1000;
      this.mouse.isActive = false;
    });

    // Intersection Observer to stop rendering when scrolled out of view
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        this.isVisible = entry.isIntersecting;
        if (this.isVisible && !this.animationFrameId) {
          this.animate();
        }
      });
    }, { threshold: 0.05 });

    observer.observe(heroSection);
  }

  animate() {
    if (!this.isVisible) {
      this.animationFrameId = null;
      return;
    }

    this.ctx.clearRect(0, 0, this.width, this.height);

    // Render interactive cursor glow
    if (this.mouse.isActive) {
      const gradient = this.ctx.createRadialGradient(
        this.mouse.x, this.mouse.y, 0,
        this.mouse.x, this.mouse.y, this.mouse.radius
      );
      gradient.addColorStop(0, 'rgba(67, 94, 240, 0.16)');
      gradient.addColorStop(0.5, 'rgba(43, 68, 209, 0.06)');
      gradient.addColorStop(1, 'rgba(5, 5, 16, 0)');

      this.ctx.fillStyle = gradient;
      this.ctx.beginPath();
      this.ctx.arc(this.mouse.x, this.mouse.y, this.mouse.radius, 0, Math.PI * 2);
      this.ctx.fill();
    }

    // Update and draw particles
    for (let i = 0; i < this.particles.length; i++) {
      const p = this.particles[i];

      p.x += p.vx;
      p.y += p.vy;

      // Wall bounce
      if (p.x < 0 || p.x > this.width) p.vx *= -1;
      if (p.y < 0 || p.y > this.height) p.vy *= -1;

      // Mouse influence
      if (this.mouse.isActive) {
        const dx = p.x - this.mouse.x;
        const dy = p.y - this.mouse.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < this.mouse.radius) {
          const force = (this.mouse.radius - dist) / this.mouse.radius;
          const angle = Math.atan2(dy, dx);
          p.x += Math.cos(angle) * force * 2.8;
          p.y += Math.sin(angle) * force * 2.8;
          p.radius = p.baseRadius * (1 + force * 0.8);
        } else {
          p.radius = p.baseRadius;
        }
      }

      // Draw particle
      this.ctx.fillStyle = `${p.color}${p.alpha})`;
      this.ctx.beginPath();
      this.ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
      this.ctx.fill();

      // Draw connections to nearby particles
      for (let j = i + 1; j < this.particles.length; j++) {
        const p2 = this.particles[j];
        const dist = Math.hypot(p.x - p2.x, p.y - p2.y);

        if (dist < this.connectionDistance) {
          const lineAlpha = (1 - dist / this.connectionDistance) * 0.28;
          this.ctx.strokeStyle = `rgba(67, 94, 240, ${lineAlpha})`;
          this.ctx.lineWidth = 0.85;
          this.ctx.beginPath();
          this.ctx.moveTo(p.x, p.y);
          this.ctx.lineTo(p2.x, p2.y);
          this.ctx.stroke();
        }
      }
    }

    this.animationFrameId = requestAnimationFrame(() => this.animate());
  }

  start() {
    if (!this.animationFrameId) {
      this.animate();
    }
  }
}

window.HeroCanvas = HeroCanvas;
