import './style.scss'
import './clearButton.js'
import logo from './assets/photoX.png'

const btn = document.querySelector('button')
const logoEl = document.getElementById('logo')

logoEl.src = logo

function buttonEvent() {
  const el = document.getElementById('header')
  el.textContent = 'Hello,I ben updated'
  el.classList.add(['button'])
  console.log('clicked')
}

btn.addEventListener('click', buttonEvent)
