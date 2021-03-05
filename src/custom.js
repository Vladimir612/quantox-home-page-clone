const toggleMenu = document.querySelector('.menu-wrap')
const sidebar = document.querySelector('.sidebar')

toggleMenu.onclick = function () {
  if (sidebar.classList.contains('show')) {
    sidebar.classList.remove('show')
  } else sidebar.classList.add('show')
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
