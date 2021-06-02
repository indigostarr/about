import {createNewHTMLElement} from './index'


// create object for the nav
function createNav() {
    const nav = createNewHTMLElement('div', 'page-div',['pages'],"");
    const aboutMe = createNewHTMLElement('button', 'aboutMe',['pages'],"ABOUT ME");
    const projects = createNewHTMLElement('button', 'projects',['pages'],"PROJECTS");
    const resume = createNewHTMLElement('button', 'resume', ['pages'],'RESUME');

    const pages = [aboutMe, projects, resume];
    pages.forEach((page) => nav.appendChild(page));
    
    return nav;
}


export default createNav;