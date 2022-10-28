var area = window.document.getElementById('area')
    
area.addEventListener('mouseenter', entrou)
area.addEventListener('click',clicou)
area.addEventListener('mouseout', saiu)


function entrou(){
  area.innerText = 'Entrou!'
  document.getElementById("cursor").style.cursor = "pointer"
}

function clicou(){
  area.innerText = 'Clicou!'
  area.style.background = "rgb(83, 43, 226)"
  document.getElementById("cursor").style.cursor = ""
}

function saiu(){
  area.innerText = 'Saiu!'
  area.style.background = "blueviolet"
}