function buttonClicked() {
  const el = document.getElementById('header')
  el.textContent = 'Hello,I ben updated'

  const listItem = ['Apple', 'Banana', 'Orange']
  _.forEach(listItem, function (element) {
    const ul = document.getElementById('shoppingList')
    const li = document.createElement('li')
    li.textContent = element
    ul.appendChild(li)
  })
}
