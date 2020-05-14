const burger = document.getElementById('burger');
const menu = document.getElementById('menu');
const body = document.getElementById('body');
burger.onclick = (function (ev) {
    menu.classList.toggle('active');
    burger.classList.toggle('active');
    body.classList.toggle('lock');
});
