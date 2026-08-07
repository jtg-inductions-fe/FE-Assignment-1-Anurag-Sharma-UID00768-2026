const hamburger = document.querySelector('.navbar__menu');
const mobileMenu = document.querySelector('.mobile__menu');

hamburger.addEventListener('click', () => {
    mobileMenu.classList.toggle('move-right');
    hamburger.classList.toggle('color-blue');
});

document.addEventListener('click', (event) => {
    if (
        !mobileMenu.contains(event.target) &&
        !hamburger.contains(event.target)
    ) {
        mobileMenu.classList.remove('move-right');
        hamburger.classList.toggle('color-blue');
    }
});

const mobileLinks = document.querySelectorAll(
    '.mobile__nav__link',
    '.mobile__nav__link--active',
);

mobileLinks.forEach((link) => {
    link.addEventListener('click', () => {
        mobileMenu.classList.remove('move-right');
        hamburger.classList.toggle('color-blue');
    });
});
