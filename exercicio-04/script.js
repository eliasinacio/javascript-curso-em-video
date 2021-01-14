const button = document.getElementById('button')

button.addEventListener('click', criar)

function criar () {
  const num = document.getElementById('num')
  const tab = document.getElementById('tab')

  const valor = Number(num.value)

  if (num.value.length == 0) {
    window.alert('erro. digite um valor')
  } else {
    tab.innerHTML = ''

    for (let i=0; i<=10; i++){
      let item = document.createElement('option')
      item.value = `tab${i}`
      item.text = `${valor} x ${i} = ${valor*i}`
      tab.appendChild(item)
    }
  }

  tab.hidden = false
}