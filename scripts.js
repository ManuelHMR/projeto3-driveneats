let dishesName = ''
let drinksName = ''
let dessertsName = ''
let dishesPrice = ''
let drinksPrice = ''
let dessertsPrice = ''
let fullPrice = 0
let adress = ''
let userName = ''
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
    footerButton.disabled = false
    h1.innerHTML = 'Fechar pedido'
  } else {
    footerButton.disabled = true
    h1.innerHTML = 'Selecione os 3 itens para fechar o pedido'
  }
}
function orderResume(){
  let selectArray = document.querySelectorAll('.select')
   dishesName = selectArray[0].querySelector('h1').innerHTML
   drinksName = selectArray[1].querySelector('h1').innerHTML
   dessertsName = selectArray[2].querySelector('h1').innerHTML
   dishesPrice = parseFloat(selectArray[0].querySelector('h3').innerHTML.replace(',','.').replace('R$', ""))
   drinksPrice = parseFloat(selectArray[1].querySelector('h3').innerHTML.replace(',','.').replace('R$', ""))
   dessertsPrice = parseFloat(selectArray[2].querySelector('h3').innerHTML.replace(',','.').replace('R$ ', ""))
}
function orderPrice(){
  fullPrice = (dishesPrice + drinksPrice + dessertsPrice).toFixed(2).toString().replace('.',',')
}
function finishOrder() {
  //document.querySelector('.finish_back_ground').classList.add('enabled')
  orderResume()
  orderPrice()
  userName = prompt('Qual o seu nome?')
  adress = prompt('Qual o seu endereço?')
  const final_message = `Olá, gostaria de fazer o pedido:
  - Prato: ${dishesName}
  - Bebida: ${drinksName}
  - Sobremesa: ${dessertsName}
  Total: R$ ${fullPrice}
  
  Nome: ${userName}
  Endereço: ${adress}`
  window.open(`https://wa.me/553288239133?text=${encodeURIComponent(final_message)}`);
}
