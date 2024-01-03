import './style.css'
import { displayFilterButtons } from './btn.js';
import { displayMenuItems } from './Menu.js';
import { constantes } from './const.js';

window.addEventListener('DOMContentLoaded', () => {
  const { menu, btnscontainer, menuContainer } = constantes

  const form = document.querySelector('form')

  form.addEventListener('submit', (e) => {
    e.preventDefault()



  })


  displayMenuItems(menu, menuContainer)
  displayFilterButtons(menu, btnscontainer, displayMenuItems, menuContainer)
})