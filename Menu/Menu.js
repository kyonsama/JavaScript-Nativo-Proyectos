export function displayMenuItems(menu, menuContainer) {
  const displayMenu = menu.map((item) => {
    return `
    <section class="menu--product" key=${item.id}>
      <img class="product--img" src=${item.img} alt=${item.title}>
      <h2 class="product--title">${item.title}</h2>
      <h2 class="product--price">${`$${item.price}`}</h2>
      <p class="product--description">${item.desc}</p>
    </section>`
  }).join("")
  menuContainer.innerHTML = displayMenu

}