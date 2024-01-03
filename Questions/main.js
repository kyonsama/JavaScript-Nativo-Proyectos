import './style.css'

const btns = document.querySelectorAll('.btn')
const answers = document.querySelector('.answer-container')

btns.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    const question = (e.currentTarget.parentElement.parentElement)
    question.classList.toggle('animate-p')
  })
})