/**
 * Автоподсчёт времени чтения по объему текста статьи.
 * Для русского текста принята средняя скорость ~160 слов в минуту.
 */
const BODY_SELECTOR = '[data-article-body]';
const OUTPUT_SELECTOR = '[data-reading-time]';
const WORDS_PER_MINUTE = 160;

export function initReadingTime() {
  const body = document.querySelector(BODY_SELECTOR);
  const output = document.querySelector(OUTPUT_SELECTOR);
  if (!body || !output) return;

  const words = body.textContent.trim().split(/\s+/).length;
  const minutes = Math.max(1, Math.round(words / WORDS_PER_MINUTE));

  output.textContent = minutes;
}
