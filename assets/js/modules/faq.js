
const ITEM_SELECTOR = '[data-faq-item]';

export function initFaq() {
  const items = document.querySelectorAll(ITEM_SELECTOR);
  if (items.length === 0) return;

  items.forEach((item) => {
    item.addEventListener('toggle', () => {
      if (!item.open) return;
      items.forEach((other) => {
        if (other !== item) other.open = false;
      });
    });
  });
}
