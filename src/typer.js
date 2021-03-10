import $ from 'jquery'
import Typed from 'typed.js'

$(function () {
  var typed = new Typed('.type-word2', {
    strings: [
      'Web development',
      'Mobile development',
      'Web design',
      'IT consulting',
      'System administrator',
      'Virtual assistent',
      'Customer support',
    ],
    typeSpeed: 130,
    backSpeed: 60,
    backDelay: 2000,
    loop: true,
  })
})
