import {createHeader, createFooter} from './header-footer';
import createNav from './nav';
import loadAboutMe from './aboutme';
import loadProjects from './projects';
import loadResume from './resume';


const content = document.getElementById('content');

// create factory function for new HTML
function createNewHTMLElement(element, id, classes, description) {

    const newElement = document.createElement(element);
    if (id) newElement.id = id;
    if (classes) classes.forEach((newClass) => 
        newElement.classList.add(newClass)
    ); 
    if (description) newElement.innerHTML = `${description}`;
    
    return newElement;
};

const loadHomepageContent = (() => {
    const main = createNewHTMLElement('div', 'main', ['main'],"")
    
    main.appendChild(loadAboutMe());

    content.insertAdjacentElement("beforebegin",createHeader());
    content.insertAdjacentElement("beforeend", createNav());
    content.appendChild(main);    
    content.insertAdjacentElement("afterend", createFooter());

}); 

loadHomepageContent();


document.addEventListener('click', (e) => {
    const targetLink = e.target.id;
    console.log(targetLink);
    if (targetLink === 'aboutMe') loadAboutMe();
    if (targetLink === 'projects') loadProjects();
    if (targetLink === 'resume') loadResume(); 
});

export {
    content,
    createNewHTMLElement,
    loadHomepageContent,
};
