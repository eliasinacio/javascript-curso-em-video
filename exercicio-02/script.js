const menina = "https://i.pinimg.com/originals/b5/8b/18/b58b18544d415888084cc2c2c795fdfe.jpg"
const menino = "https://64.media.tumblr.com/dcaec8c91351a20a3631c0ea18cf3211/tumblr_pl6yy3jTw91vbfakn_400.jpg"
const homem = "https://pm1.narvii.com/7646/13c404e15f18b5a67b93c06c53c577ad2fb4d72cr1-736-734v2_uhq.jpg"
const mulher = "https://i.pinimg.com/564x/6b/b9/90/6bb990779bda315382ddd0f2fba039eb.jpg"
const velha = "https://64.media.tumblr.com/792d9773ebf8def04e23ba7d5aa9bd04/tumblr_pqv5qyzqX31u1ycqw_400.jpg"
const velho = "https://i.pinimg.com/originals/e9/ca/25/e9ca25dc66283e7595e61ce321b4a267.jpg"

const data = new Date
ano = data.getFullYear()

button.addEventListener('click', verificar)

function verificar() {
  const main = document.getElementById('main')
  const image = document.getElementById('imagem')
  const resposta = document.getElementById('resposta')
  const r_ano = document.getElementById('r-ano')
  const button = document.getElementById('button')
  const sexo = document.getElementsByName('radsex')

  var genero = ""
  var idade = ano - Number(r_ano.value)

  main.style.height = "520px"

  if ( idade <= 17 ) {
    if (sexo[0].checked) {
      var img = menino
      genero = "um menino"
    } else if (sexo[1].checked) {
      var img = menina
      genero = "uma menina"
    }
  } else if ( idade < 50 ) {
    if (sexo[0].checked) {
      var img = homem
      genero = "um homem"
    } else if (sexo[1].checked) {
      var img = mulher
      genero = "uma mulher"
    }
  } else if ( idade >= 50 ) {
    if (sexo[0].checked) {
      var img = velho
      genero = "um idoso"
    } else if (sexo[1].checked) {
      var img = velha
      genero = "uma idosa"
    }
  }

  resposta.innerText = `Encontrei ${genero} de ${idade} anos`

  image.setAttribute('src', img)
  image.hidden = false
}

