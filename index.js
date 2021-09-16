//  Menu Show
const showmenu = (toggleId, navId) => {
  const toggle = document.getElementById(toggleId);
  const nav = document.getElementById(navId);

  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      nav.classList.toggle('show');
    });
  }
};

showmenu('nav-toggle', 'nav-menu');

// const toggleId = document.getElementById('nav-toggle');
// const navId = document.getElementById('nav-menu');
// toggleId.addEventListener('click', () => {
//   navId.classList.toggle('show');
// });

//Active and Remove
const navLink = document.querySelectorAll('.nav__link');
console.log(navLink);

navLink.forEach((n) =>
  n.addEventListener('click', function () {
    //Active
    navLink.forEach((n) => n.classList.remove('active'));
    this.classList.add('active');

    //Remove
    document.getElementById('nav-menu').classList.remove('show');
  })
);

const sr = ScrollReveal();

// sr.reveal('.animate-left', {
//   origin: 'left',
//   duration: 800,
//   distance: '80px',
//   delay: 300,
// });

// sr.reveal('.animate-right', {
//   origin: 'right',
//   duration: 800,
//   distance: '80px',
//   delay: 300,
// });

sr.reveal('.animate-top', {
  origin: 'top',
  duration: 800,
  distance: '10rem',
  delay: 600,
});

sr.reveal('.animate-bottom', {
  origin: 'bottom',
  duration: 800,
  distance: '80px',
  delay: 600,
});

// const sr = scrollReveal({
//   origin: 'top',
//   distance: '80px',
//   duration: 2000,
//   reset: true,
// });

// sr.reveal('.home__title', {});
// sr.reveal('.button', { delay: 200 });
// sr.reveal('.home__img', { delay: 400 });
// sr.reveal('.home__social-icon', { interval: 200 });
