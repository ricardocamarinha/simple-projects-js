function contar(){
  let inicio = document.getElementById('iniciojs')
  let fim = document.getElementById('fimjs')
  let passo = document.getElementById('passojs')
  let res = document.getElementById('resjs')

  if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
    window.alert('[Erro] Insira as informações correta!')
    res.innerHTML = 'Erro!'
  } else {
    res.innerHTML = 'Contando: '
    let i = Number(inicio.value)
    let f = Number(fim.value)
    let p = Number(passo.value)
    if(p <= 0){
    window.alert = ('Passo invalido!')
    p = 1 
    }

    if (i < f){
      for(let c = i; c <= f; c += p){
        res.innerHTML += ` ${c} \u{1f449}`
      }
    } else {
      for(let c = i;c >=f;c-=p){
        res.innerHTML += ` ${c} \u{1f449}`
      }
    }
    res.innerHTML += `\u{1f3c1}`
  }
}