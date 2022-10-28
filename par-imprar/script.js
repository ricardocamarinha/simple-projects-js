function enviar(){
  let num = document.querySelector('#numberjs')
  let res = document.querySelector('#res')
  if (num.value %2==0){
    res.innerHTML = `O numero ${num.value} é Par!`
  } else {
    res.innerHTML = `O numero ${num.value} é Impar!`
  }
}
