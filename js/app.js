import { initReveal } from './modules/reveal.js';
import { initMobileMenu } from './modules/mobileMenu.js';
import { initModal } from './modules/modal.js';
import { initFaq } from './modules/faq.js';
import { initActiveNav } from './modules/activeNav.js';

document.addEventListener('DOMContentLoaded', () => {
  const year = document.getElementById('year');
  if (year) year.textContent = String(new Date().getFullYear());

  initReveal();
  initMobileMenu();
  initModal();
  initFaq();
  initActiveNav();

  // Mouse glow (leve e sem travar)
  const glow = document.createElement('div');
  glow.className = 'mouse-glow';
  document.body.appendChild(glow);

  let raf = null;
  let x = 0, y = 0;

  window.addEventListener('mousemove', (e) => {
    x = e.clientX;
    y = e.clientY;

    if (raf) return;
    raf = requestAnimationFrame(() => {
      glow.style.left = x + 'px';
      glow.style.top = y + 'px';
      raf = null;
    });
  });
});
