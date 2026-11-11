/**
 * Плавный скролл по якорным ссылкам с учётом высоты липкой шапки.
 */
const HEADER_SELECTOR = '.site-header';
const EXTRA_OFFSET_PX = 16;

export function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener('click', (event) => {
      const target = document.querySelector(link.getAttribute('href'));
      if (!target) return;

      event.preventDefault();

      const headerHeight = document.querySelector(HEADER_SELECTOR)?.offsetHeight || 0;
      const top =
        target.getBoundingClientRect().top + window.scrollY - headerHeight - EXTRA_OFFSET_PX;

      window.scrollTo({ top, behavior: 'smooth' });
      history.replaceState(null, '', link.getAttribute('href'));
    });
  });
}
