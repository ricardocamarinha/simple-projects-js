document.addEventListener("keypress", function(pesquisar){

  const btn = document.querySelector("#pesquisar");

  btn.click();
}); 

function pesquisar(){
  var paises = window.document.getElementById('pais').value
  var lowerpaises = paises.toLowerCase();

  if (lowerpaises == 'brasil' || lowerpaises == 'brazil'){
    inputStyle('Você é Brasileiro(a).', 'green','136px', '20px')
  } else if (paises =='') {
    inputStyle('Não Encontramos Nada.', 'red', '120px', '20px')
  } else {
    inputStyle('Você Não é Brasiliero(a).','red','120px','20px')
  }
}

function inputStyle(message, color, left, top){
  var res = window.document.getElementById('res')
    res.innerHTML = message
    res.style.color = color
    res.style.marginLeft = left
    res.style.marginTop = top
}