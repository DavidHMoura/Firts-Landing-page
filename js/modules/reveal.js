import { prefersReducedMotion } from './utils.js';

export function initReveal() {
  const items = Array.from(document.querySelectorAll('.reveal'));
  if (!items.length) return;

  if (prefersReducedMotion()) {
    items.forEach((el) => el.classList.add('active'));
    return;
  }

  if (!('IntersectionObserver' in window)) {
    items.forEach((el) => el.classList.add('active'));
    return;
  }

  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) e.target.classList.add('active');
      });
    },
    { threshold: 0.12 }
  );

  items.forEach((el) => io.observe(el));
}
