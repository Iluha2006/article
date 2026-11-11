/**
 * Входная точка: сборка и инициализация всех модулей страницы.
 * type="module" исполняется с defer — DOM к этому моменту готов.
 */
import { initProgressBar } from './modules/progress-bar.js';
import { initToTop } from './modules/to-top.js';
import { initToc } from './modules/toc.js';
import { initSmoothScroll } from './modules/smooth-scroll.js';
import { initFaq } from './modules/faq.js';
import { initReadingTime } from './modules/reading-time.js';
import { initScrollReveal } from './modules/scroll-reveal.js';

const features = [
  initProgressBar,
  initToTop,
  initToc,
  initSmoothScroll,
  initFaq,
  initReadingTime,
  initScrollReveal,
];

features.forEach((init) => {
  try {
    init();
  } catch (error) {
    console.error(`[init] Ошибка инициализации модуля "${init.name}":`, error);
  }
});
