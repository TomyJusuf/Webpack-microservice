import * as style from './clearButton.css'

const el = document.createElement('button')
el.textContent = 'Clear'
el.classList.add([style.button])
el.onclick = () => {
  alert('clear')
}
document.body.appendChild(el)
