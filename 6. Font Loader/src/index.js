import './assets/font/DancingScript-VariableFont_wght.ttf'
import './clearButton.js'

import * as style from './style.scss'
import logo from './assets/photoX.png'

const btn = document.querySelector('button')
const logoEl = document.getElementById('logo')
const el = document.querySelector('.header')

logoEl.src = logo

function buttonEvent() {
  el.textContent = 'Hello,I ben updated'
  el.classList.add([style.font])
  console.log('clicked')
}

btn.addEventListener('click', buttonEvent)
