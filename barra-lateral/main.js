import './style.css'

const sideBar = document.querySelector('.sidebar')
const toggleSideBar = document.querySelector('.sidebar-toggle')
const CloseBtn = document.querySelector('.close-btn')

const toggleShowSideBar = () => {
  if(sideBar.classList.contains('show-sidebar')){
    sideBar.classList.remove('show-sidebar')
  } else {
    sideBar.classList.add('show-sidebar')
  }
}

toggleSideBar.addEventListener('click', toggleShowSideBar)
CloseBtn.addEventListener('click', toggleShowSideBar)