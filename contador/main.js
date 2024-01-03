import './style.css'

const titleCount = document.getElementById('count')
const btns = document.querySelectorAll('.btn')

let count = 0

btns.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    const styles = e.currentTarget.classList
    if (styles.contains('increase')) {
      count++
      titleCount.innerText = `${count}`
      if (count >= 0) {
        titleCount.style.color = 'black'
      } else {
        titleCount.style.color = 'red'
      }
    } else if (styles.contains('decrease')) {
      count--
      titleCount.innerText = `${count}`
      if (count < 0) {
        titleCount.style.color = 'red'
      } else {
        titleCount.style.color = 'black'
      }
    } else if (styles.contains('reset')) {
      count = 0
      titleCount.innerText = `${count}`
      titleCount.style.color = 'black'
    } else {
      return count
    }
  })
})
