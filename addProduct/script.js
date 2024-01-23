let burger = document.querySelector('.burger')
let burgerLine = document.querySelector('.burger_line')
let menu = document.querySelector('.header__wrapper')
let container = document.querySelector('._container')

burger.addEventListener('click', activeBurger)

function activeBurger(){
    burgerLine.classList.toggle('active_burger')
    menu.classList.toggle('active__menu')
    container.classList.toggle('_active')
}
