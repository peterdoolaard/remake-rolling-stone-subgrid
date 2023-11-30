const pageHeader = document.querySelector('.page-header');
window.addEventListener('scroll', collapseHeader);

function collapseHeader() {
  if (window.innerWidth > 959) {
    if (window.scrollY > 50) {
      pageHeader.classList.add('header-collapse')
    }
    if (window.scrollY < 50) {
      pageHeader.classList.remove('header-collapse')
    }
  }
}
