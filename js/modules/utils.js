export function prefersReducedMotion() {
  return window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

export function getFocusable(container) {
  if (!container) return [];
  return Array.from(
    container.querySelectorAll(
      'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])'
    )
  ).filter((el) => !!(el.offsetWidth || el.offsetHeight || el.getClientRects().length));
}

export function clamp(n, min, max) {
  return Math.max(min, Math.min(max, n));
}
