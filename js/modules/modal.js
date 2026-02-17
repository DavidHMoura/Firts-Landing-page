import { getFocusable } from './utils.js';

export function initModal() {
  const overlay = document.getElementById('modalOverlay');
  const modal = overlay?.querySelector('.modal');
  const openers = Array.from(document.querySelectorAll('[data-open-modal]'));
  const closers = Array.from(document.querySelectorAll('[data-close-modal]'));
  const form = document.getElementById('leadForm');
  const success = document.getElementById('successMessage');
  const whatsapp = document.getElementById('whatsapp');

  if (!overlay || !modal) return;

  let lastActive = null;

  const setHidden = (isHidden) => {
    overlay.setAttribute('aria-hidden', String(isHidden));
    document.body.style.overflow = isHidden ? '' : 'hidden';
  };

  const open = (trigger) => {
    lastActive = trigger || document.activeElement;
    overlay.classList.add('active');
    setHidden(false);

    const focusables = getFocusable(modal);
    (focusables[0] || modal).focus();
  };

  const close = () => {
    overlay.classList.remove('active');
    setHidden(true);

    if (lastActive && typeof lastActive.focus === 'function') {
      lastActive.focus();
    }
  };

  openers.forEach((b) => b.addEventListener('click', () => open(b)));
  closers.forEach((b) => b.addEventListener('click', close));

  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) close();
  });

  window.addEventListener('keydown', (e) => {
    if (!overlay.classList.contains('active')) return;

    if (e.key === 'Escape') {
      e.preventDefault();
      close();
      return;
    }

    if (e.key === 'Tab') {
      const focusables = getFocusable(modal);
      if (!focusables.length) return;

      const first = focusables[0];
      const last = focusables[focusables.length - 1];

      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    }
  });

  if (whatsapp) {
    whatsapp.addEventListener('input', () => {
      const digits = whatsapp.value.replace(/\D/g, '').slice(0, 11);
      const d = digits;

      if (d.length <= 2) whatsapp.value = d ? `(${d}` : '';
      else if (d.length <= 7) whatsapp.value = `(${d.slice(0,2)}) ${d.slice(2)}`;
      else whatsapp.value = `(${d.slice(0,2)}) ${d.slice(2,7)}-${d.slice(7)}`;
    });
  }

  const showError = (name, show) => {
    const el = form?.querySelector(`[data-error-for="${name}"]`);
    if (!el) return;
    el.classList.toggle('visible', !!show);
  };

  const validateEmail = (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(v || '').trim());

  const validate = () => {
    if (!form) return false;

    const name = form.name?.value?.trim();
    const company = form.company?.value?.trim();
    const email = form.email?.value?.trim();
    const wa = form.whatsapp?.value?.replace(/\D/g, '');

    const okName = !!name && name.length >= 2;
    const okCompany = !!company && company.length >= 2;
    const okEmail = validateEmail(email);
    const okWa = !!wa && wa.length >= 10;

    showError('name', !okName);
    showError('company', !okCompany);
    showError('email', !okEmail);
    showError('whatsapp', !okWa);

    return okName && okCompany && okEmail && okWa;
  };

  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();

      const ok = validate();
      if (!ok) return;

      if (success) {
        success.style.display = 'block';
        setTimeout(() => { success.style.display = 'none'; }, 3500);
      }

      form.reset();
      setTimeout(close, 650);
    });
  }
}
