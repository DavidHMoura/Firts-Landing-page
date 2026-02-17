export function initModal(){
  const overlay = document.getElementById('modalOverlay');
  const form = document.getElementById('leadForm');
  const success = document.getElementById('successMessage');
  if (!overlay) return;

  const openBtns = document.querySelectorAll('[data-open-modal]');
  const closeBtns = overlay.querySelectorAll('[data-close-modal]');
  const modal = overlay.querySelector('.modal');
  const firstInput = overlay.querySelector('input');

  let lastFocus = null;

  const open = () => {
    lastFocus = document.activeElement;
    overlay.classList.add('active');
    overlay.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    setTimeout(() => firstInput?.focus(), 0);
  };

  const close = () => {
    overlay.classList.remove('active');
    overlay.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    lastFocus?.focus?.();
  };

  openBtns.forEach(btn => btn.addEventListener('click', open));
  closeBtns.forEach(btn => btn.addEventListener('click', close));

  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) close();
  });

  window.addEventListener('keydown', (e) => {
    if (!overlay.classList.contains('active')) return;
    if (e.key === 'Escape') close();

    // trap simples
    if (e.key === 'Tab'){
      const focusable = modal.querySelectorAll('button,[href],input,select,textarea,[tabindex]:not([tabindex="-1"])');
      if (!focusable.length) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (e.shiftKey && document.activeElement === first){
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last){
        e.preventDefault();
        first.focus();
      }
    }
  });

  if (form){
    const setError = (name, on) => {
      const el = form.querySelector(`[data-error-for="${name}"]`);
      if (!el) return;
      el.classList.toggle('visible', !!on);
    };

    form.addEventListener('submit', (e) => {
      e.preventDefault();

      const name = form.querySelector('#name');
      const company = form.querySelector('#company');
      const email = form.querySelector('#email');
      const whatsapp = form.querySelector('#whatsapp');

      const emailOk = email?.value && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value);
      const whatsOk = whatsapp?.value && whatsapp.value.replace(/\D/g, '').length >= 10;

      setError('name', !name?.value.trim());
      setError('company', !company?.value.trim());
      setError('email', !emailOk);
      setError('whatsapp', !whatsOk);

      const ok = !!name?.value.trim() && !!company?.value.trim() && emailOk && whatsOk;

      if (ok){
        success.style.display = 'block';
        form.reset();
        setTimeout(close, 900);
      } else {
        success.style.display = 'none';
      }
    });
  }
}
