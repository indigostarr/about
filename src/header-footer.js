import createNewHTMLElement from './index'
import createNav from './nav';

// create sticky header
function createHeader() {
    const header = document.createElement('header');
    const star = document.createElement('img');
        star.src = "http://clipart-library.com/img/2184506.png";
    const fullName = document.createElement('div');
        fullName.setAttribute('class', 'full-name');
    const firstName = document.createElement('h1');
        firstName.innerHTML = "INDIGO";
        firstName.style.color = '#003366';
    const lastName = document.createElement('h1');
        lastName.innerHTML = "STARR";
        lastName.style.color = 'black';
    
    fullName.appendChild(firstName);
    fullName.appendChild(lastName);
    header.appendChild(star);
    header.appendChild(fullName);

    return header;
}


// create function for sticky footer
function createFooter() {
    const footer = document.createElement("footer");
        footer.innerHTML = 'Contact me';
    function createGithub() {
        const github = document.createElement("a");
        github.href = "https://github.com/indigostarr";
        
        const githubIcon = document.createElement("img");
        githubIcon.src = "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png";
        github.appendChild(githubIcon);

        return github;
    };


    function createLinkedin() {
        const linkedIn = document.createElement("a");
        linkedIn.href = "https://www.linkedin.com/in/indigostarr/";
        
        const linkedInIcon = document.createElement("img");
        linkedInIcon.src = "https://image.flaticon.com/icons/png/512/174/174857.png";
        linkedIn.appendChild(linkedInIcon);
        
        return linkedIn;
    };

    function createRTB() {
        const RTB = document.createElement("a");
        RTB.href = "http://www.runtothebeet.com/";
        
        const RTBIcon = document.createElement("img");
        RTBIcon.src = "rtb.png";
        RTB.appendChild(RTBIcon);
        
        return RTB;
    };

    function createMail() {
        const mail = document.createElement("a");
        mail.href = "indigojstarr@gmail.com";
        
        const mailIcon = document.createElement("img");
        mailIcon.src = "https://freepngimg.com/thumb/mailbox/5-2-mailbox-png-image.png";
        mail.appendChild(mailIcon);
        
        return mail;
    };
    

    footer.appendChild(createGithub());
    footer.appendChild(createLinkedin());
    footer.appendChild(createRTB());
    footer.appendChild(createMail());
    
    return footer;
  }


export {
    createHeader,
    createFooter
}