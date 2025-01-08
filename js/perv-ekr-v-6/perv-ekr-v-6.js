const pervekrv6CallbackModal = document.querySelector('.perv-ekr-v-6__modal-callback');
const pervekrv6ThanksModal = document.querySelector('.perv-ekr-v-6__modal-thanks');
const pervekrv6CallbackBtn = document.querySelector(
  '.perv-ekr-v-6__header-contacts-callback-button'
);

if (pervekrv6CallbackBtn && pervekrv6CallbackModal) {
  pervekrv6CallbackBtn.addEventListener('click', () => {
    pervekrv6CallbackModal.classList.add('active');
  });

  pervekrv6CallbackModal.addEventListener('click', (event) => {
    const isLayout = event.target === event.currentTarget;
    const isClose = event.target.classList.contains('perv-ekr-v-6__modal-callback-close');

    if (isClose || isLayout) pervekrv6CallbackModal.classList.remove('active');
  });
}

if (pervekrv6ThanksModal) {
  pervekrv6ThanksModal.addEventListener('click', (event) => {
    const isLayout = event.target === event.currentTarget;
    const isClose = event.target.classList.contains('perv-ekr-v-6__modal-thanks-close');

    if (isClose || isLayout) pervekrv6ThanksModal.classList.remove('active');
  });
}

const pervekrv6CallbackForm = document.querySelector('.perv-ekr-v-6__callback-form');
const pervekrv6ModalCallbackForm = document.querySelector('.perv-ekr-v-6__modal-callback-form');

if (pervekrv6CallbackForm) {
  pervekrv6CallbackForm.addEventListener('submit', (event) => {
    event.preventDefault();
    if (pervekrv6ThanksModal) pervekrv6ThanksModal.classList.add('active');
  });
}

if (pervekrv6ModalCallbackForm) {
  pervekrv6ModalCallbackForm.addEventListener('submit', (event) => {
    event.preventDefault();
    if (pervekrv6CallbackModal) pervekrv6CallbackModal.classList.remove('active');
    if (pervekrv6ThanksModal) pervekrv6ThanksModal.classList.add('active');
  });
}
