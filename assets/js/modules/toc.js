
const TOC_SELECTOR = '[data-toc]';

const OBSERVER_ROOT_MARGIN = '-15% 0px -70% 0px';

export function initToc() {
  const toc = document.querySelector(TOC_SELECTOR);
  if (!toc || !('IntersectionObserver' in window)) return;

  const links = Array.from(toc.querySelectorAll('a[href^="#"]'));
  const sections = links
    .map((link) => document.querySelector(link.getAttribute('href')))
    .filter(Boolean);

  if (sections.length === 0) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;

      const activeId = `#${entry.target.id}`;
      links.forEach((link) => {
        link.classList.toggle('is-active', link.getAttribute('href') === activeId);
      });
    });
  }, { rootMargin: OBSERVER_ROOT_MARGIN, threshold: 0 });

  sections.forEach((section) => observer.observe(section));
}
