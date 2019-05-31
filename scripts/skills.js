const javaScriptSkills = [ 'React', 'ReactNative', 'Angular', 'NodeJs', 'Express', 'Sequelize' ];
const dotNetSkills = [ 'C#', 'ASP.NET', 'WebAPI' ];
const frontEndSkills = [ 'CSS', 'HTML', 'Bootstrap', 'Material', 'Bulma', 'Radium', 'Styled Components' ];
const tools = [ 'pgAdmin', 'Postman', 'Adobe CC', 'Slack' ];

const clearSkills = () => {
    let display = document.getElementById('skillDisplay');
    
    while(display.firstChild) {
        display.removeChild(display.firstChild);
    }
}

const displaySkills = (skillSet) => {
    let display = document.getElementById('skillDisplay');

    skillSet.map(skill => {
        let item = document.createElement('p');
        item.classList.add('has-text-light')
        item.innerText = skill;
        display.appendChild(item);
    })
}

const setSkills = (type) => {
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

        default :
            console.log('something went wrong');
    }
}

setSkills('javascript');