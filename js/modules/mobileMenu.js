export function initMobileMenu() {
  const btn = document.getElementById('mobileMenuBtn');
  const panel = document.getElementById('mobilePanel');
  if (!btn || !panel) return;

  const close = () => {
    panel.classList.remove('open');
    btn.setAttribute('aria-expanded', 'false');
  };

  const toggle = () => {
    const open = panel.classList.toggle('open');
    btn.setAttribute('aria-expanded', String(open));
  };

  btn.addEventListener('click', toggle);

  panel.addEventListener('click', (e) => {
    const t = e.target;
    if (t && t.tagName === 'A') close();
  });

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') close();
  });
}
