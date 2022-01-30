function selectItem(el) {
  let selectedElement = el.parentNode.querySelector('.select')
  selectedElement?.classList.remove('select')
  if (selectedElement != el) {
    el.classList.add('select')
  }
  allSelected()
}
function allSelected() {
  let footerButton = document.querySelector('.footer_button')
  let h1 = footerButton.querySelector('h1')
  if (document.querySelectorAll('.select').length === 3) {
    footerButton.classList.add('enabled')
    h1.innerHTML = 'Fechar pedido'
  } else {
    footerButton.classList.remove('enabled')
    h1.innerHTML = 'Selecione os 3 itens para fechar o pedido'
  }
}
