var navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
  if(window.scrollY > 357) {
    navbar.classList.add('new-nav');
  }else {
    navbar.classList.remove('new-nav');
  }
});
var scroll = new SmoothScroll('a[href*="#"]', {
  speed : 800
});