function tabuada(){
  let number = document.getElementById('numberjs')
  let tabuada = document.getElementById('stabuada')
  if (number.value.length == 0){
    window.alert('[Erro] Preencha o Campo!')
  } else {
    let n = Number(number.value)
    let c = 1
    tabuada.innerHTML = ''
    while (c <= 10) {
      let item = document.createElement('option')
      item.text = `${n} x ${c} = ${n*c}`
      item.value = `tab${c}`
      tabuada.appendChild(item)
      c++
    }
  }
}