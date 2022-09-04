'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(e => {
  e.addEventListener('click', openModal);
});

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

const header = document.querySelector('.header');

const novi = document.createElement('div');
novi.classList.add('cookie-message');
novi.innerHTML = `We use cookied for improved functionality and analytics.<button class="btn btn-primary klik">STISNI</button>`;

header.append(novi);
novi.style.width = 104 + '%';
novi.style.backgroundColor = '#6363ad';
// console.log(getComputedStyle(novi).width);
// header.prepend(novi);

const ukloniti = document.querySelector('.klik');
ukloniti.addEventListener('click', () => {
  ukloniti.parentElement.remove(novi);
});

//styles

// // Classes
// logo.classList.add('c', 'j');
// logo.classList.remove('c', 'j');
// logo.classList.toggle('c');
// logo.classList.contains('c'); // not includes

// console.log(logo.src);
// console.log(logo.getAttribute('src'));

// const link = document.querySelector('.nav__link--btn');
// console.log(link.href);
// console.log(link.getAttribute('href'));

// // Data attributes
// console.log(logo.dataset.versionNumber);

// project site

const btnOnScroll = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');

btnOnScroll.addEventListener('click', e => {
  e.preventDefault();
  // const seecoords = section1.getBoundingClientRect();
  // console.log(seecoords);
  // window.scrollTo(
  //   seecoords.left + window.pageXOffset,
  //   seecoords.top + window.pageYOffset
  // );

  // window.scrollTo({
  //   left: seecoords.left + window.pageXOffset,
  //   top: seecoords.top + window.pageYOffset,
  //   behavior: 'smooth',
  // });

  section1.scrollIntoView({ behavior: 'smooth' });
});
// ------------------------------
// page navigation-
// document.querySelectorAll('.nav__link').forEach(el => {
//   el.addEventListener('click', function (e) {
//     e.preventDefault();
//     const id = this.getAttribute('href');
//     document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
//   });
// });
// 1. add event listener to commnon parent element
// 2 determine what element origated the event
document.querySelector('.nav__links').addEventListener('click', function (e) {
  console.log(e.target);

  e.preventDefault();

  // matching
  if (e.target.classList.contains('nav__link')) {
    const id = e.target.getAttribute('href');
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  }
});

// tabbed componet
const tabs = document.querySelectorAll('.operations__tab');
const tabsContainer = document.querySelector('.operations__tab-container');
const tabsContent = document.querySelectorAll('.operations__content');

// tabs.forEach(t => t.addEventListener('click', () =>{
// }))

tabsContainer.addEventListener('click', e => {
  const clicked = e.target.closest('.operations__tab');
  // guard clause
  if (!clicked) return;
  // remove
  tabs.forEach(e => e.classList.remove('operations__tab--active'));
  clicked.classList.add('operations__tab--active');
  tabsContent.forEach(c => c.classList.remove('operations__content--active'));
  // Activate content area
  // Active tab
  document
    .querySelector(`.operations__content--${clicked.dataset.tab}`)
    .classList.add('operations__content--active');
});
const nav = document.querySelector('.nav');
const handleHover = function (e, opacity) {
  console.log(this, e.currentTarget);
  if (e.target.classList.contains('nav__link')) {
    const link = e.target;
    const siblings = link.closest('.nav').querySelectorAll('.nav__link');
    const logo = link.closest('.nav').querySelector('img');
    siblings.forEach(el => {
      if (el !== link) el.style.opacity = this;
    });
    logo.style.opacity = this;
  }
};
/// Menu fade hover
// nav.addEventListener('mouseover', function (e) {
//   handleHover(e, 0.5);
// });
// nav.addEventListener('mouseout', function (e) {
//   handleHover(e, 1);
// });
// passing "argument" into handler
nav.addEventListener('mouseover', handleHover.bind(0.5));
nav.addEventListener('mouseout', handleHover.bind(1));

// Sticky navigation
// const initalCoords = section1.getBoundingClientRect();
// window.addEventListener('scroll', function () {
//   console.log(this.window.scrollY);
//   if (this.window.scrollY > initalCoords.top) {
//     nav.classList.add('sticky');
//   } else {
//     nav.classList.remove('sticky');
//   }
// });
// sticky navigation: intersection Observer api
// const obsCallback = function () {};
// const obsOptions = {
//   root: null,
//   threshold: 0.1,
// };
// const observer = new IntersectionObserver();
// observer.observe(section1);

const stickyNav = function (entries) {
  const [entry] = entries;

  if (!entry.isIntersecting) {
    nav.classList.add('sticky');
  } else {
    nav.classList.remove('sticky');
  }
};

const headerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  rootMargin: '-90px',
});
headerObserver.observe(header);

// reveal sections
const allSections = document.querySelectorAll('.section');
const revealSection = function (entries, observer) {
  const [entry] = entries;
  if (!entry.isIntersecting) return;
  entry.target.classList.remove('section--hidden');

  observer.unobserve(entry.target);
};
const sectionObServer = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.15,
});
allSections.forEach(function (section) {
  sectionObServer.observe(section);
  section.classList.add('section--hidden');
});

// lazy loading image animation

const imgTargets = document.querySelectorAll('img[data-src]');
const loadImg = function (entries, observer) {
  const [entry] = entries;
  if (!entry.isIntersecting) return;

  // replace src with data-src
  entry.target.src = entry.target.dataset.src;
  entry.target.addEventListener('load', function () {
    entry.target.classList.remove('lazy-img');
  });
  observer.unobserve(entry.target);
};
const imgObserver = new IntersectionObserver(loadImg, {
  root: null,
  threshold: 0,
  rootMargin: '-150px',
});
imgTargets.forEach(img => imgObserver.observe(img));

// ------------------------------
// ------------------------------
// ------------------------------

// const randomInt = (min, max) => {
//   return Math.floor(Math.random() * (max - min + 1) + min);
// };
// const randomColor = () =>
//   `rgb(${randomInt(0, 255)},${randomInt(0, 255)},${randomInt(0, 255)})`;
// // console.log(randomColor(0, 255));

// const h1 = document.querySelector('h1');
// console.log(h1);
// // going down: child
// console.log(h1.querySelectorAll('.highlight'));
// // console.log(h1.childNodes);
// // console.log(h1.children);
// h1.firstElementChild.style.color = 'white';
// h1.lastElementChild.style.color = 'orangered';

// // going upwards: parents
// // console.log(h1.parentNode);
// // console.log(h1.parentElement);

// h1.closest('.header').style.backgroundColor = 'black';

// // going sideways: siblings

// // console.log(h1.previousElementSibling);
// // console.log(h1.nextElementSibling);
// // console.log(h1.parentElement.children);
