let num = document.querySelector('#numjs')
let lista = document.querySelector('#listajs')
let res = document.querySelector('#resjs')
let valores = []

function isNumero(n){
  if(Number(n) >= 1 && Number(n) <= 100){
    return true
  } else {
    return false
  }
}

function inLista(n, l){
  if(l.indexOf(Number(n)) != -1){
    return true
  } else {
    return false
  }
}

function adicionar(){
  if(isNumero(num.value) && !inLista(num.value, valores)){
    valores.push(Number(num.value))
    let item = document.createElement('option')
    item.text = `Valor ${num.value} adicionado.`
    lista.appendChild(item)
    res.innerHTML = ''
  } else {
    window.alert('Valor invalido ou já encontrado na lista.')
  }
  num.value = ''
  num.focus()
}

function finalizar(){
  if(valores.length == 0){
    window.alert('Preencha a campo para finalizar')
  } else {
    let tot = valores.length
    let maior = valores[0]
    let menor = valores[0]
    for(let pos in valores){
      if (valores[pos] > maior)
       maior = valores[pos]
      if  (valores[pos] < menor)
      menor = valores[pos]
    }
    res.innerHTML = ''
    res.innerHTML += `<p>Ao todo, temos ${tot} numero cadastrados.</p>`
    res.innerHTML += `<p>O Menor valor foi ${menor}.</p>`
    res.innerHTML += `<p>O Maior valor foi ${maior}.</p>`
  }
}