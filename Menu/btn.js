// import { displayMenuItems } from "./Menu"


export function displayFilterButtons(menu, btnscontainer, displayMenuItems, menuContainer) {
  const categories = menu.reduce((values, item) => {
    if (!values.includes(item.category)) {
      values.push(item.category)
    }
    return values

  }, ['all'])

  const btns = categories.map((item) => {
    return `
    <button class="filter--button" type="button" data-id=${item}>${item}</button>
    `
  }).join('')

  btnscontainer.innerHTML = btns

  const filterBtns = document.querySelectorAll(".filter--button")


  filterBtns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      const category = e.currentTarget.dataset.id
      const MenuFilt = menu.filter((menuItem) => {
        if (menuItem.category === category) {
          return menuItem
        }
      })
      if (category === 'all') {
        displayMenuItems(menu, menuContainer)
      }
      else {
        displayMenuItems(MenuFilt, menuContainer)
      }
    })
  })

}

