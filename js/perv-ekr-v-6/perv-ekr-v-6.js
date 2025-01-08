const pervekrv6CallbackModal = document.querySelector('.perv-ekr-v-6__modal-callback');
const pervekrv6CallbackBtn = document.querySelector(
  '.perv-ekr-v-6__header-contacts-callback-button'
);

if (pervekrv6CallbackBtn) {
  pervekrv6CallbackBtn.addEventListener('click', () => {
    pervekrv6CallbackModal.classList.add('active');
  });

  pervekrv6CallbackModal.addEventListener('click', (event) => {
    const isLayout = event.target === event.currentTarget;
    const isClose = event.target.classList.contains('perv-ekr-v-6__modal-callback-close');

    if (isClose || isLayout) pervekrv6CallbackModal.classList.remove('active');
  });
}
