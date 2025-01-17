const navBotao = document.getElementById("nav-botao");

function toggleMenu() {
    const nav = document.getElementById('nav');
    nav.classList.toggle('active');
}
navBotao.addEventListener('click', toggleMenu);