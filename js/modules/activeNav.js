export function initActiveNav(){
  const links = document.querySelectorAll('.nav-links a');
  const sections = ['beneficios','como-funciona','prova-social','faq']
    .map(id => document.getElementById(id))
    .filter(Boolean);

  if (!links.length || !sections.length) return;

  const map = new Map();
  links.forEach(a => map.set(a.getAttribute('href')?.replace('#',''), a));

  const setActive = (id) => {
    links.forEach(a => a.classList.remove('active'));
    const el = map.get(id);
    if (el) el.classList.add('active');
  };

  const io = new IntersectionObserver((entries) => {
    const visible = entries
      .filter(e => e.isIntersecting)
      .sort((a,b) => b.intersectionRatio - a.intersectionRatio)[0];

    if (visible?.target?.id) setActive(visible.target.id);
  }, { rootMargin: '-20% 0px -70% 0px', threshold: [0.12, 0.2, 0.35] });

  sections.forEach(s => io.observe(s));
}
