/**
 * Появление блоков статьи при скролле (эффект reveal).
 */
const REVEAL_SELECTORS = [
  '.article-section',
  '.pull-quote',
  '.cta',
  '.tip-card',
  '.article-figure',
  '.related',
];

export function initScrollReveal() {
  if (!('IntersectionObserver' in window)) return;

  const targets = document.querySelectorAll(REVEAL_SELECTORS.join(', '));
  if (targets.length === 0) return;

  targets.forEach((element) => element.classList.add('reveal'));

  const observer = new IntersectionObserver((entries, self) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('is-visible');
      self.unobserve(entry.target);
    });
  }, { threshold: 0.08 });

  targets.forEach((element) => observer.observe(element));
}
