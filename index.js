const urlSearchParams = new URLSearchParams(window.location.search);
const messageCustom = urlSearchParams.get('message');

if (messageCustom) {
  const mainMessageElement = document.querySelector('#mainMessage');
  mainMessageElement.textContent = decodeURI(messageCustom);
}

const btnOpenElement = document.querySelector('#open');
const btnCloseElement = document.querySelector('#close');
const linkElement = document.querySelector('#videoLink');

btnCloseElement.disabled = true;

btnOpenElement.addEventListener('click', () => {
  btnOpenElement.disabled = true;
  btnCloseElement.disabled = false;

  const coverElement = document.querySelector('.cover');
  coverElement.classList.add('open-cover');

  setTimeout(() => {
    coverElement.style.zIndex = -1;

    const paperElement = document.querySelector('.paper');
    paperElement.classList.remove('close-paper');
    paperElement.classList.add('open-paper');

    // Mostrar corazón
    const heartElement = document.querySelector('.heart');
    heartElement.style.display = 'block';

    // Activar link
    linkElement.style.pointerEvents = 'auto';
    linkElement.style.opacity = '1';

  }, 500);
});

btnCloseElement.addEventListener('click', () => {
  btnOpenElement.disabled = false;
  btnCloseElement.disabled = true;

  const coverElement = document.querySelector('.cover');
  const paperElement = document.querySelector('.paper');

  paperElement.classList.remove('open-paper');
  paperElement.classList.add('close-paper');

  setTimeout(() => {
    coverElement.style.zIndex = 0;
    coverElement.classList.remove('open-cover');

    // Ocultar corazón
    const heartElement = document.querySelector('.heart');
    heartElement.style.display = 'none';

    // Desactivar link
    linkElement.style.pointerEvents = 'none';
    linkElement.style.opacity = '0.5';
  }, 500);
});
