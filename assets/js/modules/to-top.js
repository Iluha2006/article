/**
 * Кнопка «наверх»: показывается после прокрутки и возвращает наверх.
 */
const BUTTON_SELECTOR = '[data-to-top]';
const SHOW_THRESHOLD_PX = 600;

export function initToTop() {
  const button = document.querySelector(BUTTON_SELECTOR);
  if (!button) return;

  const toggleVisibility = () => {
    button.classList.toggle('is-shown', window.scrollY > SHOW_THRESHOLD_PX);
  };

  button.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  window.addEventListener('scroll', toggleVisibility, { passive: true });
  toggleVisibility();
}
