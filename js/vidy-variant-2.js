function countVidyContentMaxHeight() {
  const oddCards = document.querySelectorAll('.vidy-variant-2__card:nth-child(odd)');
  const evenCards = document.querySelectorAll('.vidy-variant-2__card:nth-child(even)');

  const oddCardsHeight = [...oddCards]
    .map((card) => card.offsetHeight)
    .reduce((acc, value) => acc + value, 0);

  const evenCardsHeight = [...evenCards]
    .map((card) => card.offsetHeight)
    .reduce((acc, value) => acc + value, 0);

  const maxColumnHeight = oddCardsHeight > evenCardsHeight ? oddCardsHeight : evenCardsHeight;
  const maxColumnElemsCount = oddCardsHeight > evenCardsHeight ? oddCards.length : evenCards.length;

  const container = document.querySelector('.vidy-variant-2__content');

  if (container) {
    const gap = Number.parseInt(window.getComputedStyle(container).columnGap);
    container.style.maxHeight = `${maxColumnHeight + maxColumnElemsCount * gap}px`;
  }
}

window.addEventListener('resize', () => countVidyContentMaxHeight());

countVidyContentMaxHeight();
