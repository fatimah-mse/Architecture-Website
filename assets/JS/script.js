let nav = document.querySelector('.navbar')
let navbar_nav = document.querySelector('.navbar-nav')
let sidebar = document.querySelector('.sidebar')

let preloader = document.querySelector('#preloader');
if (preloader) {
  window.addEventListener('load', () => {
    preloader.remove()
})
}

// Scroll To Top
function Top () {
  window.scrollTo({
      top: 0,
      behavior: "smooth"
  })
  }

window.addEventListener('scroll',() =>{
    var navbar = document.querySelector('.navbar')
    
    if (window.scrollY > 50) {
      navbar.classList.add('scroll')
      navbar_nav.classList.add('scroll')
      sidebar.classList.add('scroll')
    } 
    else {
      navbar.classList.remove('scroll')
      navbar_nav.classList.remove('scroll')
      sidebar.classList.remove('scroll')
    }
});
window.addEventListener('load', () => {
  AOS.init({
    duration: 1000,
    easing: 'ease-in-out',
    once: false,
    mirror: false
  })
})

window.onscroll = function () {
  this.scrollY > 50 ? up.classList.add('show') : up.classList.remove('show') 
}