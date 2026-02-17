export function initActiveNav() {
  const links = Array.from(document.querySelectorAll('.nav-links a'));
  if (!links.length) return;

  const map = new Map();
  links.forEach((a) => {
    const id = a.getAttribute('href');
    if (!id || !id.startsWith('#')) return;
    const sec = document.querySelector(id);
    if (sec) map.set(sec, a);
  });

  const setActive = (a) => {
    links.forEach((x) => x.classList.remove('active'));
    if (a) a.classList.add('active');
  };

  if (!('IntersectionObserver' in window)) {
    const onScroll = () => {
      const y = window.scrollY + 120;
      let current = null;

      for (const [sec, a] of map.entries()) {
        const top = sec.offsetTop;
        if (top <= y) current = a;
      }
      setActive(current);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return;
  }

  const io = new IntersectionObserver(
    (entries) => {
      const visible = entries.filter((e) => e.isIntersecting).sort((a,b) => b.intersectionRatio - a.intersectionRatio);
      if (!visible.length) return;

      const sec = visible[0].target;
      const a = map.get(sec);
      setActive(a);
    },
    { rootMargin: '-45% 0px -50% 0px', threshold: [0.05, 0.12, 0.2, 0.35] }
  );

  Array.from(map.keys()).forEach((sec) => io.observe(sec));
}
