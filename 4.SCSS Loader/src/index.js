import './style.scss'
import './clearButton.js'
function buttonEvent() {
  const el = document.getElementById('header')
  el.textContent = 'Hello,I ben updated'
  el.classList.add(['button'])
  console.log('clicked')
}

document.querySelector('button').addEventListener('click', buttonEvent)
