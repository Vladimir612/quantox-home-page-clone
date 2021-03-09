const toggleMenu = document.querySelector('.menu-wrap')
const sidebar = document.querySelector('.sidebar')

toggleMenu.onclick = function () {
  sidebar.classList.toggle('show')
}

//scrolling

function isVisible(element) {
  let elementBox = element.getBoundingClientRect()
  let distanceFromTop = -200

  if (elementBox.top - window.innerHeight < distanceFromTop) {
    return true
  } else {
    return false
  }
}

function scanDocument() {
  let sectionList = document.querySelectorAll('.hidden')
  sectionList.forEach((section) => {
    if (isVisible(section)) {
      section.classList.remove('hidden')
    }
  })
}

document.onscroll = function () {
  scanDocument()
}

//changing color over different background

window.addEventListener('scroll', function () {
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

function isOnTopOf(a, b) {
  let fixedCoord = a.getBoundingClientRect()
  let bgCoord = b.getBoundingClientRect()

  if (
    fixedCoord.top + fixedCoord.height - 10 >= bgCoord.top &&
    fixedCoord.top + fixedCoord.height - 10 <= bgCoord.bottom
  ) {
    return true
  }

  return false
}

//scroll-to-next

const mouse = document.querySelector('.mouse-scroll')

const destinationSection = document.querySelector('body')

function scrollToNextSection() {
  destinationSection.scrollIntoView({
    behavior: 'smooth',
    block: 'end',
    inline: 'nearest',
  })
}
