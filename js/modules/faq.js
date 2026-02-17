export function initFaq() {
  const items = Array.from(document.querySelectorAll('.faq-item'));
  if (!items.length) return;

  const closeAll = () => {
    items.forEach((it) => {
      it.classList.remove('active');
      const btn = it.querySelector('.faq-q');
      const ans = it.querySelector('.faq-a');
      if (btn) btn.setAttribute('aria-expanded', 'false');
      if (ans) ans.style.maxHeight = '0px';
    });
  };

  items.forEach((it) => {
    const btn = it.querySelector('.faq-q');
    const ans = it.querySelector('.faq-a');
    if (!btn || !ans) return;

    ans.style.maxHeight = '0px';

    btn.addEventListener('click', () => {
      const isOpen = it.classList.contains('active');
      closeAll();

      if (!isOpen) {
        it.classList.add('active');
        btn.setAttribute('aria-expanded', 'true');
        ans.style.maxHeight = ans.scrollHeight + 'px';
      }
    });
  });

  window.addEventListener('resize', () => {
    items.forEach((it) => {
      if (!it.classList.contains('active')) return;
      const ans = it.querySelector('.faq-a');
      if (ans) ans.style.maxHeight = ans.scrollHeight + 'px';
    });
  }, { passive: true });
}
