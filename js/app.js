import { initReveal } from './modules/reveal.js';
import { initMobileMenu } from './modules/mobileMenu.js';
import { initModal } from './modules/modal.js';
import { initFaq } from './modules/faq.js';
import { initActiveNav } from './modules/activeNav.js';
import { prefersReducedMotion } from './modules/utils.js';

document.addEventListener('DOMContentLoaded', () => {
  const year = document.getElementById('year');
  if (year) year.textContent = String(new Date().getFullYear());

  initReveal();
  initMobileMenu();
  initModal();
  initFaq();
  initActiveNav();

  if (!prefersReducedMotion()) {
    const glow = document.createElement('div');
    glow.className = 'mouse-glow';
    document.body.appendChild(glow);

    let raf = 0;
    let lastX = 0;
    let lastY = 0;

    const onMove = (e) => {
      lastX = e.clientX;
      lastY = e.clientY;
      if (raf) return;
      raf = requestAnimationFrame(() => {
        glow.style.left = lastX + 'px';
        glow.style.top = lastY + 'px';
        raf = 0;
      });
    };

    window.addEventListener('mousemove', onMove, { passive: true });
  }
});
