import {content, createNewHTMLElement} from './index'
import createNav from './nav';


// create module to run and export
const loadAboutMe = (() => {
    content.textContent = " ";
    const subtitle = createNewHTMLElement('h3', "",['h3'],"HR and HR systems analyst learning full stack engineering.");
    const homepageContent = createNewHTMLElement('div', '',['homepage-content'],"")
    const aboutMeDescription = createNewHTMLElement('div', '', ['aboutMe', 'homepage-content'], "LOREM IPSUM");

    content.insertAdjacentElement("afterbegin",subtitle);
    homepageContent.appendChild(aboutMeDescription);

    const contentArray = Array.from(content.childNodes);
    for (child of contentArray) {
        if (child.id === "page-div") {
            content.insertAdjacentElement("beforeend", createNav());
        }
    }
    
    return homepageContent;
});

export default loadAboutMe;