const links = document.querySelectorAll('nav a')

function activateLink(link){
  const href = link.href
  const url = document.location.href

  if (href === url){
    link.style.border ='thin solid brown'
    link.style.borderRadius ='4px'
    link.style.padding ='4px'
  }
}

links.forEach(activateLink)