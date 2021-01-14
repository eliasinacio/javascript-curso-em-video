const saudacao = document.getElementById('saudacao')
const horas = document.getElementById('horas')
const imagem = document.getElementById('imagem')
const bg = document.getElementById('bg')

agora = new Date
hora = agora.getHours()

horas.innerText = `São ${hora} hora(s)`

if (hora >= 12 & hora < 18) {
  saudacao.innerText = "Boa tarde"
  bg.style.backgroundColor = "#816831"
  imagem.src = "https://cdn.pixabay.com/photo/2016/04/12/09/27/the-evening-sun-1323948_960_720.jpg"

} else if (hora >= 18 || hora < 5) {
  saudacao.innerText = "Boa noite"
  bg.style.backgroundColor = "#101c30"
  imagem.src = "https://cdn.pixabay.com/photo/2017/03/02/16/54/iceland-2111811_960_720.jpg"

} else {
  bg.style.backgroundColor = "#70b5ca"
}
