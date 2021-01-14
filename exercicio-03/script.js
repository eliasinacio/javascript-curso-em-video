const button = document.getElementById('button')
const inicio = document.getElementById('inicio')
const fim = document.getElementById('fim')
const passo = document.getElementById('passo')
const main = document.getElementById('main')
const saida = document.getElementById('saida')

button.addEventListener('click', listar)

function listar () {
  main.style.height = '350px'

  let i = Number(inicio.value)
  let f = Number(fim.value)
  let p = Number(passo.value)

  saida.innerHTML = ''

  if (Number(inicio.value) < Number(fim.value)) {
    saida.innerHTML += `${i}`

    for (let c= (i+p); c<=f; c+=p) {
      saida.innerHTML += ` > ${c}`
    }
  } else {
    saida.innerHTML += `${i}`

    for (let c= (i-p); c>=f; c-=p) {
      saida.innerHTML += ` > ${c}`
    }
  }
}