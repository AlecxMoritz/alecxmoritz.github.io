const projects = [
    { 
        name : 'PhotoMax 90',
        tagline : 'Instagram Clone',
        image : './assets/photomax90-sized.png',
        text : 'This is a full stack PERN web app, and can be viewed comfortably on both mobile and web. The back end has a postgres database, and uses Sequelize to communicate with it, and Express to handle end point logic and resource routing. For more backend logic, it pulls in Jsonwebtoken, Bcryptjs, dotenv, and body-parser. The front end is a React client using Material UI for the interface. This project was inspired by Instagram, and the could-be-complexities of image uploading. PhotoMax relies on an AWS S3 bucket, the middleware for the backend stores the image in S3, records the location, the client is then able to use this location to host the image out of AWS. Resulting is direct file uploads that are always accessible.'
    },
    {
        name : 'Xpedite CLI',
        tagline : 'Express & Sequelize Scaffolding Tool',
        image : './assets/xpedite-cli-sized.png',
        text : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod placeat quas odit dolorum ducimus ipsa dolorem? Beatae omnis atque, vitae aliquam, tenetur alias et iste libero accusantium architecto magni quae? Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, placeat! A vitae ipsum velit quo quaerat ullam similique omnis ratione quibusdam officiis qui corrupti magni, laudantium deleniti rem eveniet nesciunt! Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure consectetur maxime vel, iste facilis sint odit unde nemo doloremque, natus pariatur ipsum quod reprehenderit omnis reiciendis, hic aliquid accusamus quis?',
    },
    {
        name : 'Showster',
        tagline : 'Angular 7 CRUD App',
        image : './assets/showster-sized.png',
        text : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod placeat quas odit dolorum ducimus ipsa dolorem? Beatae omnis atque, vitae aliquam, tenetur alias et iste libero accusantium architecto magni quae? Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, placeat! A vitae ipsum velit quo quaerat ullam similique omnis ratione quibusdam officiis qui corrupti magni, laudantium deleniti rem eveniet nesciunt! Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure consectetur maxime vel, iste facilis sint odit unde nemo doloremque, natus pariatur ipsum quod reprehenderit omnis reiciendis, hic aliquid accusamus quis?'
    },
    {
        name : 'shadr',
        tagline : 'Twitter Clone',
        image : './assets/shadr-sized.png',
        text : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod placeat quas odit dolorum ducimus ipsa dolorem? Beatae omnis atque, vitae aliquam, tenetur alias et iste libero accusantium architecto magni quae? Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, placeat! A vitae ipsum velit quo quaerat ullam similique omnis ratione quibusdam officiis qui corrupti magni, laudantium deleniti rem eveniet nesciunt! Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure consectetur maxime vel, iste facilis sint odit unde nemo doloremque, natus pariatur ipsum quod reprehenderit omnis reiciendis, hic aliquid accusamus quis?'
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

        columns.classList.add('columns', 'has-text-light', 'divide', 'is-v-centered');
        imgCol.className = 'column';
        fig.classList.add('image', 'is-5by3');
        textCol.className = 'column';
        name.classList.add('title', 'has-text-light', 'is-2'); 
        tagline.classList.add('title', 'has-text-light', 'is-4');
        text.className = 'is-size-5';
        
        img.src = project.image;
        name.innerText = project.name;
        tagline.innerText = project.tagline;
        text.innerText = project.text;

        imgCol.appendChild(img);
        textCol.appendChild(name);
        textCol.appendChild(tagline);
        textCol.appendChild(text);
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

        columns.classList.add('columns', 'has-text-light', 'divive', 'is-vcentered');
        imgCol.className = 'column';
        fig.classList.add('image', 'is-5by3');
        textCol.className = 'column';
        name.classList.add('title', 'has-text-light', 'is-2'); 
        tagline.classList.add('title', 'has-text-light', 'is-4');
        text.className = 'is-size-5';
        
        img.src = project.image;
        name.innerText = project.name;
        tagline.innerText = project.tagline;
        text.innerText = project.text;

        imgCol.appendChild(img);
        textCol.appendChild(name);
        textCol.appendChild(tagline);
        textCol.appendChild(text);


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
