export function initMobileMenu(){
  const btn = document.getElementById('mobileMenuBtn');
  const panel = document.getElementById('mobilePanel');
  if (!btn || !panel) return;

  const close = () => {
    panel.classList.remove('open');
    btn.setAttribute('aria-expanded', 'false');
  };

  btn.addEventListener('click', () => {
    const open = panel.classList.toggle('open');
    btn.setAttribute('aria-expanded', open ? 'true' : 'false');
  });

  panel.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', close);
  });

  window.addEventListener('resize', () => {
    if (window.innerWidth > 820) close();
  });
}
