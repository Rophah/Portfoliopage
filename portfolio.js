const hamburger = document.querySelector('#hamburger');
const closed = document.querySelector('#close');
const navListItems = document.querySelectorAll('.nav-list-item');
const navList = document.querySelector('#nav-list');

const mobileMenu = () => {
  navList.classList.toggle('active');
  hamburger.classList.toggle('close');
  closed.classList.toggle('displayshow');
};

navListItems.forEach((element) => {
  element.addEventListener('click', mobileMenu);
});

hamburger.addEventListener('click', mobileMenu);
closed.addEventListener('click', mobileMenu);
