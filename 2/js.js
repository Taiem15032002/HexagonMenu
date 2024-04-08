let menu = document.querySelector('.ibws-fix1');
let full = document.querySelector('.honeycomb');
let toggle = document.querySelector('.hexagon-menu');

toggle.onclick = function(){
    menu.classList.toggle('active');
    full.classList.toggle('active');
}