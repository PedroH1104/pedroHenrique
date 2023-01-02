const logoMenu = document.querySelector('.header__img__menu');
const menu = document.querySelector('.menu__lateral');

logoMenu.addEventListener('click', () => {
    menu.classList.toggle('menu__lateral__ativo')               // toggle -> adiciona e remove automaticamente, caso clique no botaoMenu, adiciona a classe "menu-lateral--ativo"
})