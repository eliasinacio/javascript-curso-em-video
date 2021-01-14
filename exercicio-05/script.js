const add = document.getElementById('add')
const verif = document.getElementById('verif')

add.addEventListener('click', adicionar)
verif.addEventListener('click', verificar)

let cont = 0
let maior = 0
let menor
let valores = []

function adicionar () {
  const num = document.getElementById('num')
  const tab = document.getElementById('tab')

  const valor = Number(num.value)

  if (num.value.length == 0) {
    window.alert('erro. digite um valor')
  } else if (valor > 100 || valor < 1) {
    window.alert('Só são válidos valores entre 0 e 100.')
  } else if ( valores.indexOf(valor) != -1 ) {
    window.alert('Este valor já foi inserido')
  } else {
    cont++
    valores.push(valor)

    if (valor > maior) {maior = valor;}
    if (valores.indexOf(valor) == 0) {
      menor = valor
    } else {
      if (valor < menor) {
        menor = valor
      }
    }

    let item = document.createElement('option')
    item.text = `${valor} adicionado`
    tab.appendChild(item)
  }

  tab.hidden = false
}

function verificar () {
  const espaco = document.getElementById('espaco')
  let soma = 0

  espaco.style.height = '300px'

  if (cont == 0) {
    window.alert('Insira valores antes de verificar')
  } else {
    for (let i in valores) {
      soma += valores[i]
    }
    let string = []

    string[0] = `foram inseridos ${cont} números`
    string[1] = `maior valor: ${maior}`
    string[2] = `menor valor: ${menor}`
    string[3] = `soma de todos os valores: ${soma}`
    string[4] = `média dos valores: ${soma/cont}`
    
    for (let i=0; i<5; i++) {
      let tag = document.createElement('p')
      let texto = document.createTextNode(string[i])
      tag.appendChild(texto)
      espaco.appendChild(tag)

      tag.style.margin = '5px'
    }
  }
}
