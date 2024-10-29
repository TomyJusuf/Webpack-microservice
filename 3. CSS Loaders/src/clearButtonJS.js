// import style from './clearButton.css'
import './clearButton.css'

const el = document.createElement('button')
el.textContent = 'Clear'
el.classList.add('button')
el.onclick = () => {
  alert('clear')
}
document.body.appendChild(el)
