import * as style from './clearButton.scss'

const el = document.createElement('button')
el.textContent = 'Clear'
el.classList.add([style.clearButton])
function buttonEvent() {
  alert('Clear')
}
el.addEventListener('click', () => {
  buttonEvent()
})
document.body.appendChild(el)
