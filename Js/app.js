
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

const navMenu = document.getElementById('navbar__list');
for (let i = 1; i <= 3; i++) {
    const section = document.createElement('li');
    const sections = document.createElement('a');
    section.append(sections);
    sections.textContent = `Section${i}`;
    navMenu.append(section);
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
