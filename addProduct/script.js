let burger = document.querySelector('.burger')
let burgerLine = document.querySelector('.burger_line')
let menu = document.querySelector('.wrapper__btns')

burger.addEventListener('click', activeBurger)

function activeBurger(){
    burgerLine.classList.toggle('active_burger')
    menu.classList.toggle('active_wrapper')
}
