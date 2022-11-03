const images = document.querySelectorAll('#car-gallery img')

function galleryTrade(event){
  const primary = document.querySelector('#car-primary')
  const mouseClick = event.currentTarget
  primary.src = mouseClick.src
}

function galleryClick(imagem){
  imagem.addEventListener('click',galleryTrade)
}

images.forEach(galleryClick)