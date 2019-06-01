const projects = [
    { 
        name : 'PhotoMax 90',
        tagline : 'Instagram Clone',
        image : './assets/photomax90-sized.png',
        link : 'https://am-s3-photomax.herokuapp.com/',
        text : 'This is a full stack PERN web app, and can be viewed comfortably on both mobile and web. The back end has a postgres database, and uses Sequelize to communicate with it, and Express to handle end point logic and resource routing. For more backend logic, it pulls in Jsonwebtoken, Bcryptjs, dotenv, and body-parser. The front end is a React client using Material UI for the interface. This project was inspired by Instagram, and the could-be-complexities of image uploading. PhotoMax relies on an AWS S3 bucket and Multer middleware, allowing for direct file uploads that are always accessible.'
    },
    {
        name : 'Xpedite CLI',
        tagline : 'Express & Sequelize Scaffolding Tool',
        image : './assets/xpedite-cli-sized.png',
        link : 'https://github.com/AlecxMoritz/xpedite-cli',
        text : 'Xpedite is a command line tool created in NodeJS, and out of a need to rapidly spin up flexible servers with minimal bloat. The CLI will prompt the user for set up options, and create an Express backend. You can include static hosting, a Sequelize database, and user authentication with custom unique and password values. Xpedite also incorporates several UI libraries to increase usability and user experience.',
    },
    {
        name : 'Showster',
        tagline : 'Angular 7 CRUD App',
        image : './assets/showster-sized.png',
        link : 'https://am-showster.herokuapp.com/',
        text : 'This was a test project for a few Angular, Material, and Sequelize concepts. The Showster client allows users to post reviews of different shows, and is built over a Postgres Sequelize/Express backend, and features a custom Material theme and module. The client operates with a nimble layer of services, and implements guarded routes, and an authorization interceptor. Both client and server also support an admin role, which can delete any post in Showster\'s message board.'
    },
    {
        name : 'shadr',
        tagline : 'Twitter Clone',
        image : './assets/shadr-sized.png',
        link : 'https://am-shadrclient.herokuapp.com/',
        text : 'Shadr is a satirical social media clone CRUD application built in React, with a Postgres Sequelize/Express backend. The UI was created using mostly custom CSS and some Reactstrap components, and is completely mobile friendly. It allows users to sign up, and post about things they are unhappy with, and save any post that resonates with them in their \'Dislikes\'.'
    }
];
const breakPoint = window.matchMedia('(max-width : 770px)');
const projSection = document.getElementById('projectSection');
const body = document.getElementById('body');

const displayMobile = () => {
    projects.map(project => {
        let columns = document.createElement('div');
        let imgCol = document.createElement('div');
        let fig = document.createElement('figure');
        let img = document.createElement('img');
        let textCol = document.createElement('div');
        let name = document.createElement('h1');
        let tagline = document.createElement('h1');
        let text = document.createElement('p');
        let link = document.createElement('a');

        columns.classList.add('columns', 'has-text-light', 'divide', 'is-v-centered');
        imgCol.className = 'column';
        fig.classList.add('image', 'is-5by3');
        textCol.className = 'column';
        name.classList.add('title', 'has-text-light', 'is-2'); 
        tagline.classList.add('title', 'has-text-light', 'is-4');
        text.className = 'is-size-5';
        
        link.href = project.link;
        link.target = '_blank';
        link.className = 'resume-link';
        link.innerText = 'Open in new tab';

        img.src = project.image;
        name.innerText = project.name;
        tagline.innerText = project.tagline;
        text.innerText = project.text;

        imgCol.appendChild(img);
        textCol.appendChild(name);
        textCol.appendChild(tagline);
        textCol.appendChild(text);
        textCol.appendChild(link);
        columns.appendChild(imgCol);
        columns.appendChild(textCol);
        
        projSection.appendChild(columns);
    });
};

const displayWeb = () => {
    projects.map((project, index) => {
        let columns = document.createElement('div');
        let imgCol = document.createElement('div');
        let fig = document.createElement('figure');
        let img = document.createElement('img');
        let textCol = document.createElement('div');
        let name = document.createElement('h1');
        let tagline = document.createElement('h1');
        let text = document.createElement('p');
        let link = document.createElement('a');

        columns.classList.add('columns', 'has-text-light', 'divive', 'is-vcentered');
        imgCol.className = 'column';
        fig.classList.add('image', 'is-5by3');
        textCol.className = 'column';
        name.classList.add('title', 'has-text-light', 'is-2'); 
        tagline.classList.add('title', 'has-text-light', 'is-4');
        text.className = 'is-size-5';

        link.href = project.link;
        link.target = '_blank';
        link.className = 'resume-link';
        link.innerText = 'Open in new tab';
        
        img.src = project.image;
        name.innerText = project.name;
        tagline.innerText = project.tagline;
        text.innerText = project.text;

        imgCol.appendChild(img);
        textCol.appendChild(name);
        textCol.appendChild(tagline);
        textCol.appendChild(text);
        textCol.appendChild(link);


        if(index % 2 === 0) {
            columns.appendChild(imgCol);
            columns.appendChild(textCol);
        } else {
            columns.appendChild(textCol)
            columns.appendChild(imgCol);
        }
        
        projSection.appendChild(columns);
    });
}


const clearProjectsDisplay = () => {
    while(projSection.firstChild) {
        projSection.removeChild(projSection.firstChild);
    };
}

const checkDisplay = () => {
    if(breakPoint.matches) {
        clearProjectsDisplay();
        displayMobile();
    } else {
        clearProjectsDisplay();
        displayWeb();
    }
};

checkDisplay();
