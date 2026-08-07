const hamburger = document.querySelector('.navbar__menu');
const mobileMenu = document.querySelector('.mobile__menu');
const hamIcon = document.querySelector('.icon-hamburger');

hamburger.addEventListener('click', () => {
    mobileMenu.classList.toggle('move-right');
    hamburger.classList.toggle('color-blue');
    hamIcon.classList.toggle('color-white');
});

document.addEventListener('click', (event) => {
    if (
        !mobileMenu.contains(event.target) &&
        !hamburger.contains(event.target)
    ) {
        mobileMenu.classList.remove('move-right');
        hamburger.classList.remove('color-blue');
        hamIcon.classList.remove('color-white');
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
        hamIcon.classList.toggle('color-white');
    });
});
