function countVidyContentMaxHeight() {
  const oddCards = document.querySelectorAll('.otzyvy-variant-1__card:nth-child(odd)');
  const evenCards = document.querySelectorAll('.otzyvy-variant-1__card:nth-child(even)');

  const oddCardsHeight = [...oddCards]
    .map((card) => card.offsetHeight)
    .reduce((acc, value) => acc + value, 0);

  const evenCardsHeight = [...evenCards]
    .map((card) => card.offsetHeight)
    .reduce((acc, value) => acc + value, 0);

  const maxColumnHeight = oddCardsHeight > evenCardsHeight ? oddCardsHeight : evenCardsHeight;
  const maxColumnElemsCount = oddCardsHeight > evenCardsHeight ? oddCards.length : evenCards.length;

  const container = document.querySelector('.otzyvy-variant-1__content');

  if (container) {
    const gap = Number.parseInt(window.getComputedStyle(container).columnGap);
    container.style.maxHeight = `${maxColumnHeight + (maxColumnElemsCount +  1) * gap}px`;
  }
}

window.addEventListener('resize', () => countVidyContentMaxHeight());

countVidyContentMaxHeight();

const otzyvyModal = document.querySelector('.otzyvy-variant-1__modal');
const otzyvyAddButton = document.querySelector('.otzyvy-variant-1__new-button');

if (otzyvyAddButton && otzyvyModal) {
  otzyvyAddButton.addEventListener('click', () => {
    otzyvyModal.classList.add('active');
  });

  otzyvyModal.addEventListener('click', (event) => {
    const isLayout = event.target === event.currentTarget;
    const isClose = event.target.classList.contains('otzyvy-variant-1__modal-close');

    if (isClose || isLayout) {
      event.currentTarget.classList.remove('active');
    }
  });
}
