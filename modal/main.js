import './style.css'

const btn = document.getElementById('btn')
const btnClose = document.getElementById('closeIcon')
const modal = document.querySelector('.modal-open')


const handleClick = () => {
  modal.classList.contains('modal-on') ? modal.classList.remove('modal-on') : modal.classList.add('modal-on')
}

btn.addEventListener('click', handleClick)
btnClose.addEventListener('click', handleClick)