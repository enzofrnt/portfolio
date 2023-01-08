var button = document.querySelector('#menu-button');
var menu = document.querySelector('#menu');
var navbutton = document.querySelector('#nav-button');

button.addEventListener('click', function() {
  menu.classList.toggle('open');
  button.classList.toggle('nav-right-mobile-cliked');
});

navbutton.addEventListener('mouseover', function() {
  button.classList.toggle('nav-right-mobile-hover');
});

navbutton.addEventListener('mouseout', function() {
    button.classList.toggle('nav-right-mobile-hover');
  });