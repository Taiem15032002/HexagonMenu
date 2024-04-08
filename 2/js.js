let menu = document.querySelector('.hexagon-menu3');
let menu4 = document.querySelector('.hexagon-menu4');
let full = document.querySelector('.honeycomb');
let toggle = document.querySelector('.hexagon-menu');
let hexagon2 = document.querySelector('.hexagon2');
let hexagon3 = document.querySelector('.hexagon3');
let hexagon1 = document.querySelector('.hexagon1');
let hexagon4 = document.querySelector('.hexagon4');

toggle.onclick = function(){
    menu.classList.toggle('active');
    full.classList.toggle('active');
    hexagon1.classList.toggle('submenu2');
    hexagon4.classList.toggle('submenu2');
    document.getElementById('hex-menu3-1').style.visibility = 'visible';
    document.getElementById('hex-menu3-2').style.visibility = 'visible';
    document.getElementById('hex-menu3-3').style.visibility = 'visible';
    document.getElementById('hex-menu3-1').style.opacity = '0';
    document.getElementById('hex-menu3-2').style.opacity = '0';
    document.getElementById('hex-menu3-3').style.opacity = '0';
}
hexagon3.onclick = function () {
    menu4.classList.toggle('submenu1');
    document.getElementById('hex-menu3-1').style.visibility = 'visible';
    document.getElementById('hex-menu3-2').style.visibility = 'visible';
    document.getElementById('hex-menu3-3').style.visibility = 'visible';
    document.getElementById('hex-menu3-1').style.opacity = '1';
    document.getElementById('hex-menu3-2').style.opacity = '1';
    document.getElementById('hex-menu3-3').style.opacity = '1';
}