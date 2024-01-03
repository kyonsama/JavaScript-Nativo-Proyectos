import './style.css'

const btnChangeColor = document.getElementById('btn-change-color')
const btnRandomColor = document.getElementById('btn-change-random-color')
const nextColor = document.querySelector('.siguiente-color')
const title = document.getElementById('bg-color-name')
const colors = [
  '#FFFFFF', '#C0C0C0', '#808080',
  '#000000', '#FF0000', '#800000',
  '#FFFF00', '#808000', '#00FF00',
  '#008000', '#00FFFF', '#008080',
  '#0000FF', '#000080', '#FF00FF',
  '#800080'
]
const nameColors = [
  'blanco', 'plateado', 'gris',
  'negro', 'rojo', 'marron',
  'amarillo', 'olive', 'lime',
  'verde', 'aqua', 'teal', 'azul',
  'navy', 'fuchsia', 'purpura'
]
const getRandomColor = () => {
  const selCol = Math.floor(Math.random() * colors.length)
  document.body.style.backgroundColor = colors[selCol]
  count = 0
}
let count = 0
const bgName = () => {
  title.innerText = `El color del fondo es ${nameColors[count]}`
}
const currentColor = () => {
  count = count + 1
}
const nextColorIs = () => {
  nextColor.style.backgroundColor = colors[count + 1]
}
const changeColor = () => {
  const color = colors[count]
  document.body.style.backgroundColor = color
  console.log(color)
  bgName()
  if (color === '#FFFFFF') {
    currentColor()
    nextColorIs()
  } else if (count > 14) {
    count = 0
  } else {
    currentColor()
    nextColorIs()
  }
}

btnRandomColor.addEventListener('click', getRandomColor)
btnChangeColor.addEventListener('click', changeColor)
