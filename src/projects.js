import {content, createNewHTMLElement, loadHomepageContent} from './index'
import createNav from './nav';

// class projectClass {
//     constructor(projectName, description) {
//         this.projectName = projectName;
//         this.description = description;
//     };

    
//     createProject = () => {
//       const project = document.createElement('div');
//       return project;
        
//     };

//     return content.appendChild(createProject());
// }


const loadProjects = (() => {
    content.textContent = " ";
    const projects = createNewHTMLElement('div', 'project-div', ['projects'], 'PROJECTS');
    const ticTacToe = createNewHTMLElement('div', 'tic-tac-toe', ['projects'], 'tic-tac-toe lorem impsum');
    
    content.appendChild(createNav());
    content.appendChild(projects);
    projects.appendChild(ticTacToe);
    
})

export default loadProjects;