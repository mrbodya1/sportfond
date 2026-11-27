const priceCountdown = document.querySelector('#price-countdown');
const distancePrices = document.querySelectorAll('[data-prices]');

// Tariffs change at midnight in Khanty-Mansiysk (UTC+05:00).
const priceDeadlines = ['2027-01-01', '2027-04-01', '2027-07-01', '2027-07-23']
  .map(date => Date.parse(date + 'T00:00:00+05:00'));
const raceDateFormat = new Intl.DateTimeFormat('ru-RU', {
  day: 'numeric',
  month: 'long',
  timeZone: 'Asia/Yekaterinburg',
});
const rubleFormat = new Intl.NumberFormat('ru-RU');
const dayPlural = new Intl.PluralRules('ru-RU');
const dayForms = { one: 'день', few: 'дня', many: 'дней', other: 'дня' };
const formatPrice = value => rubleFormat.format(Number(value)) + '\u00a0₽';

function updateDistancePrices(now = Date.now()) {
  const period = priceDeadlines.findIndex(deadline => now < deadline);
  const hasIncrease = period >= 0 && period < priceDeadlines.length - 1;
  const deadline = priceDeadlines[period];
  const date = hasIncrease ? raceDateFormat.format(deadline) : '';
  const days = Math.ceil((deadline - now) / 86400000);

  if (hasIncrease) {
    priceCountdown.textContent = `До повышения цен — ${days} ${dayForms[dayPlural.select(days)]}. Новые цены с ${date}.`;
  } else if (period >= 0) {
    priceCountdown.textContent = 'Финальные цены действуют до 22 июля включительно.';
  } else {
    priceCountdown.textContent = 'Тарифы до 22 июля завершились.';
  }

  distancePrices.forEach(card => {
    const prices = card.dataset.prices.split(',');
    const current = card.querySelector('[data-current-price]');
    const next = card.querySelector('[data-next-price]');
    card.hidden = period < 0;
    if (period < 0) return;
    current.textContent = formatPrice(prices[period]);
    next.hidden = !hasIncrease;
    if (hasIncrease) next.textContent = `С ${date} — ${formatPrice(prices[period + 1])}`;
  });
}

updateDistancePrices();
setInterval(updateDistancePrices, 1000 * 30);
document.addEventListener('visibilitychange', () => {
  if (!document.hidden) updateDistancePrices();
});
