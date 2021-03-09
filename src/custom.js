;(toggleMenu = () => {
  const toggleMenu = document.querySelector('.menu-wrap')
  const sidebar = document.querySelector('.sidebar')
  toggleMenu.onclick = () => sidebar.classList.toggle('show')
})()

//scrolling

const isInViewport = (element) => {
  const elementBox = element.getBoundingClientRect()
  const distanceFromTop = -200

  if (elementBox.top - window.innerHeight < distanceFromTop) {
    return true
  } else {
    return false
  }
}

const scanDocument = () => {
  const sectionList = document.querySelectorAll('.toggle-hidden')
  sectionList.forEach((section) => {
    if (isInViewport(section)) {
      section.classList.remove('hidden')
    } else section.classList.add('hidden')
  })
}

document.onscroll = () => scanDocument()

//changing color over different background

window.addEventListener('scroll', () => {
  const services = document.querySelector('.quantox-services')
  const translate = document.querySelector('.sidebar.fixed .translate ul')
  const socialMedia = document.querySelector('.sidebar.fixed .social-media')
  const links = document.querySelectorAll('.menu-link')

  links.forEach((link) => {
    if (isOnTopOf(link, services)) {
      link.classList.add('white')
    } else link.classList.remove('white')

    if (isOnTopOf(translate, services)) {
      translate.classList.add('white')
    } else translate.classList.remove('white')

    if (isOnTopOf(socialMedia, services)) {
      socialMedia.classList.add('white')
    } else socialMedia.classList.remove('white')
  })
})

const isOnTopOf = (a, b) => {
  const fixedCoord = a.getBoundingClientRect()
  const bgCoord = b.getBoundingClientRect()

  if (
    fixedCoord.top + fixedCoord.height - 10 >= bgCoord.top &&
    fixedCoord.top + fixedCoord.height - 10 <= bgCoord.bottom
  ) {
    return true
  }
  return false
}
