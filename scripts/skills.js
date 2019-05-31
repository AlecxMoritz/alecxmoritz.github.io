const javaScriptSkills = [ 'React', 'ReactNative', 'Angular', 'NodeJs', 'Express', 'Sequelize', 'Axios' ];
const dotNetSkills = [ 'C#', 'ASP.NET (Framework)', 'WebAPI (Framework)' ];
const frontEndSkills = [ 'CSS', 'HTML', 'Bootstrap', 'Material', 'Bulma', 'Radium', 'Styled Components', 'jQuery' ];
const tools = [ 'yarn', 'pgAdmin', 'npm', 'Postman', 'git', 'Adobe CC', 'Slack' ];
const misc = [ 'Markdown', 'TypeScript', 'Heroku', 'Firebase' ];

let currentSkillHeader;

const clearSkills = () => {
    let display = document.getElementById('skillDisplay');
    
    while(display.firstChild) {
        display.removeChild(display.firstChild);
    }
}

const displaySkills = (skillSet) => {
    let display = document.getElementById('skillDisplay');

    skillSet.map(skill => {
        let item = document.createElement('li');
        item.classList.add('is-size-5', 'skill-list-item', 'animated', 'fadeIn')
        item.innerText = skill;
        display.appendChild(item);
    })
}

const setSkills = (type, event) => {

    if(event) {
    currentSkillHeader.classList.remove('skill-header-active');

    let current = document.getElementById(event.target.id);
    current.classList.add('skill-header-active');
    currentSkillHeader = current;
    }

    clearSkills();
    switch(type) {
        case 'javascript' :
            displaySkills(javaScriptSkills);
            break;

        case 'dotnet' :
            displaySkills(dotNetSkills);
            break;

        case 'frontend' :
            displaySkills(frontEndSkills);
            break;

        case 'tools' :
            displaySkills(tools);
            break;

        case 'misc' :
            displaySkills(misc);
            break;

        default :
            console.log('something went wrong');
    }
}

setSkills('javascript');

// set active class to javascript skill header

let jsSkillHeader = document.getElementById('javascript-header');
jsSkillHeader.classList.add('skill-header-active');
currentSkillHeader = jsSkillHeader;