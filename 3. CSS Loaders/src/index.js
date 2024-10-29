import './style.css'
function buttonEvent() {
  const el = document.getElementById('header')
  el.textContent = 'Hello,I ben updated'
  console.log('clicked')
}

document.querySelector('button').addEventListener('click', buttonEvent)
