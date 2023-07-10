const navButton = document.querySelector('.navbar-toggler');
const navList = document.querySelector('.nav-list');
navButton.addEventListener('click', () => {
    navButton.classList.toggle('clicked');
    navList.classList.toggle('open');
})