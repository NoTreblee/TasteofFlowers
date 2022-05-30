document.addEventListener('DOMContentLoaded', function () {
  const nav = document.querySelector('.navbar');
  const allNavItems = document.querySelectorAll('.nav-link');
  const navList = document.querySelector('.navbar-collapse');
  const logo = document.querySelector('.logo');
  function addShadow() {
    if (window.scrollY >= 300) {
      nav.classList.add('shadow-bg');
      logo.classList.add('none');
    } else {
      nav.classList.remove('shadow-bg');
      logo.classList.remove('none');
    }
  }

  allNavItems.forEach((item) =>
    item.addEventListener('click', () => navList.classList.remove('show'))
  );

  window.addEventListener('scroll', addShadow);
});
