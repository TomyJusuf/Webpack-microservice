import * as style from './style.css'
import './clearButtonJS'

const btn1 = document.getElementById('button1')
function buttonEvent() {
  const el = document.getElementById('header')
  el.textContent = 'Hello,I ben updated'
}

btn1.classList.add(style.button)
btn1.addEventListener('click', buttonEvent)
