const menuIcon = document.querySelector('.nav--icon__menu')
const navBarList = document.querySelector('.nav--list')

menuIcon.addEventListener('click', () => {
  navBarList.classList.contains('nav--toggle__active') ? navBarList.classList.remove('nav--toggle__active') : navBarList.classList.add('nav--toggle__active')
})
