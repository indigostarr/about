import {content, createNewHTMLElement, loadHomepageContent} from './index'
import createNav from './nav';


const loadResume = (() => {
    content.textContent = " ";
    const resume = createNewHTMLElement('div', 'resume', ['resume'], '<a src="resume-page');
    
    content.appendChild(createNav());
    content.appendChild(resume);
    
})

export default loadResume;

