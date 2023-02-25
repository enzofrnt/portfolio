var button = document.querySelector('#menu-button');
var menu = document.querySelector('#menu');
var navbutton = document.querySelector('#nav-button');
var newStyle = document.createElement("style");
newStyle.innerHTML = "@media (max-width: 1230px) {.post-block {display: flex;flex-direction: column;align-items: center;}}";

button.addEventListener('click', function() {
  menu.classList.toggle('open');
  button.classList.toggle('nav-right-mobile-cliked');
});

navbutton.addEventListener('mouseover', function() {
  if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {}
  else {
    button.classList.toggle('nav-right-mobile-hover');
  }
});

navbutton.addEventListener('mouseout', function() {
  if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {}
  else {
    button.classList.toggle('nav-right-mobile-hover');
  }
});

document.addEventListener("click", function(event) {
  if (menu.classList.contains("open")){
    if (!event.target.closest("nav")) {
      menu.classList.toggle("open");    
      button.classList.toggle('nav-right-mobile-cliked');
    }
  }
});

if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
  document.head.appendChild(newStyle);
}