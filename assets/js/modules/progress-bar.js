
const FILL_ELEMENT_SELECTOR = '[data-progress-fill]';

export function initProgressBar() {
  const fill = document.querySelector(FILL_ELEMENT_SELECTOR);
  if (!fill) return;

  const update = () => {
    const root = document.documentElement;
    const scrollable = root.scrollHeight - window.innerHeight;
    const ratio = scrollable > 0 ? window.scrollY / scrollable : 0;
    fill.style.width = `${(ratio * 100).toFixed(2)}%`;
  };

  window.addEventListener('scroll', update, { passive: true });
  window.addEventListener('resize', update, { passive: true });
  update();
}
