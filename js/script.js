let iconState = document.querySelector('.navbar-toggler-icon');
let iconButton = iconState.parentNode;
let string = window.location.pathname.toString();
let open = document.querySelector('.open-icon');

if (string !== '/homepage-example/index.html') {
  if (string === '/homepage-example/tech.html' || string === '/homepage-example/neuropsy.html') {
    open.style.backgroundImage = 'url(/homepage-example/img/tech/menu.svg)';
  } else if (string === '/homepage-example/econ.html' || string === '/homepage-example/intrel.html') {
    open.style.backgroundImage = 'url(/homepage-example/img/econ/menu.svg)';
  }
}

function changeIcon() {
    if (iconState.classList.contains('open-icon')) {
        iconState.classList.remove('open-icon');
        iconState.classList.add('close-icon');
        let close = document.querySelector('.close-icon');
        if (string === '/homepage-example/tech.html' || string === '/homepage-example/neuropsy.html' || string === '/homepage-example/econ.html' || string === '/homepage-example/intrel.html') {
            close.style.backgroundImage = 'url(/homepage-example/img/tech/close.svg)';
        }
    } else if (iconState.classList.contains('close-icon')) {
        iconState.classList.remove('close-icon');
        iconState.classList.add('open-icon');
        let open = document.querySelector('.open-icon');
        if (string === '/homepage-example/tech.html' || string === '/homepage-example/neuropsy.html') {
            open.style.backgroundImage = 'url(/homepage-example/img/tech/menu.svg)';
        } else if (string === '/homepage-example/econ.html' || string === '/homepage-example/intrel.html') {
            open.style.backgroundImage = 'url(/homepage-example/img/econ/menu.svg)';
        }
    }
}

iconButton.addEventListener('click', changeIcon);
