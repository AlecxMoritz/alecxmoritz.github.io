const javaScriptSkills = [ 'React', 'ReactNative', 'Next', 'Gatsby', 'Apollo', 'Angular', 'jQuery', 'Radium', 'Styled Components' ];
const dotNetSkills = [ 'MongoDB', 'GraphQL', 'Axios', 'Sequelize', 'NodeJs', 'Express', 'http', 'SQL' ];
const frontEndSkills = [ 'Bootstrap', 'Material', 'Bulma' ];
const tools = [ 'yarn', 'pgAdmin', 'npm', 'Postman', 'git', 'Adobe CC', 'Slack', 'NoSQLBooster', 'Insomnia' ];
const misc = [ 'CSS', 'HTML', 'Markdown', 'TypeScript', 'Heroku', 'Firebase', 'C#' ];
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
        case 'client-side' :
            displaySkills(javaScriptSkills);
            break;

        case 'server-side' :
            displaySkills(dotNetSkills);
            break;

        case 'component-libs' :
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
    };
};

setSkills('client-side');
let jsSkillHeader = document.getElementById('javascript-header');
jsSkillHeader.classList.add('skill-header-active');
currentSkillHeader = jsSkillHeader;
