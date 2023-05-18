let iconState = document.querySelector('.navbar-toggler-icon');
let iconButton = iconState.parentNode;
let string = window.location.pathname.toString();
let open = document.querySelector('.open-icon');

if (string !== '/index.html') {
  if (string === '/tech.html' || string === '/neuropsy.html') {
    open.style.backgroundImage = 'url(../img/tech/menu.svg)';
  } else if (string === '/econ.html' || string === '/intrel.html') {
    open.style.backgroundImage = 'url(../img/econ/menu.svg)';
  }
}

function changeIcon() {
  if (iconState.classList.contains('open-icon')) {
    iconState.classList.remove('open-icon');
    iconState.classList.add('close-icon');
    let close = document.querySelector('.close-icon');
    if (string === '/tech.html' || string === '/neuropsy.html' || string === '/econ.html' || string === '/intrel.html') {
      close.style.backgroundImage = 'url(../img/tech/close.svg)';
    }
  } else if (iconState.classList.contains('close-icon')) {
    iconState.classList.remove('close-icon');
    iconState.classList.add('open-icon');
    let open = document.querySelector('.open-icon');
    if (string === '/tech.html' || string === '/neuropsy.html') {
      open.style.backgroundImage = 'url(../img/tech/menu.svg)';
    } else if (string === '/econ.html' || string === '/intrel.html') {
      open.style.backgroundImage = 'url(../img/econ/menu.svg)';
    }
  }
}

iconButton.addEventListener('click', changeIcon);