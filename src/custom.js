const toggleMenu = document.querySelector('.menu-wrap')
const sidebar = document.querySelector('.sidebar')

toggleMenu.onclick = function () {
  if (sidebar.classList.contains('show')) {
    sidebar.classList.remove('show')
  } else sidebar.classList.add('show')
}
