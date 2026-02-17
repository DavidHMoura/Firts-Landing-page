export function initFaq(){
  const items = document.querySelectorAll('.faq-item');
  if (!items.length) return;

  items.forEach((item) => {
    const q = item.querySelector('.faq-q');
    const a = item.querySelector('.faq-a');
    if (!q || !a) return;

    q.addEventListener('click', () => {
      const isOpen = item.classList.toggle('active');
      q.setAttribute('aria-expanded', isOpen ? 'true' : 'false');

      if (isOpen){
        a.style.maxHeight = a.scrollHeight + 24 + 'px';
      } else {
        a.style.maxHeight = '0px';
      }
    });
  });
}
