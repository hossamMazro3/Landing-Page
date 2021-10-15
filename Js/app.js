
/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 * 
 * author --> hossam ahmed mazroa
*/

/**
 bulid links && add to nav-bar
 */

const navMenu = document.querySelector('#navbar__list');
for (let i = 1; i <= 3; i++) {
    const navElement = document.createElement('li');
    const sections = document.createElement('a');
    navElement.append(sections);
    sections.textContent = `Section${i}`;
    navMenu.append(navElement);
}
const items = document.querySelectorAll('a');
for (let i = 0; i < 3; i++) {
    const str = `#section${i + 1}`;
    items[i].setAttribute('href', str);
    items[i].setAttribute('class', 'menu__link');
}


/**
 bulid smoothScrole to sections
 */

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
const sectionsContaner = document.getElementsByClassName('landing__container');

// activeSection
console.log(sectionsContaner);
window.addEventListener('scroll', () => {
    for (let i = 0; i < sectionsContaner.length; i++) {
        const rectangle = sectionsContaner[i].getBoundingClientRect();
        if (rectangle.top > 0 && rectangle.top < 240) {
            //mark this section with css
            navMenu.children[i].classList.add('activeNave');
            sectionsContaner[i].classList.add('activeSection');
        } else {
            //remove marker of section
            navMenu.children[i].classList.remove('activeNave');
            sectionsContaner[i].classList.remove('activeSection');
        }
    }
});