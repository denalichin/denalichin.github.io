
let languages = [
    'Java',
    'Javascript',
    'HTML',
    'CSS',
    'Python',
    'Matlab',
    'Swift',
    'C, C++, C#',
    'SQL'
]

let technologies = [
    'MongoDB',
    'Spring Boot',
    'OracleDB',
    'Angular',
    'Unity',
    'Xcode',
    'Firebase',
    'Version Control'
]


let projects = [
    {
        name: 'Concept Forum [2020]',
        desc: 'Full-stack web application with Angular, Java, Spring boot, Mongo Atlas <br>\
        Implemented user registration, REST, AJAX, nested comments',
            
    },
    {
        name: 'Bug Tracker [2019]',
        desc: 'Full-stack web application with Angular, Java, Spring boot, Mongo Atlas <br>\
        Implemented user registration, routing guards, REST, AJAX',
    },
    {
        name: 'Machine Learning [2019]',
        desc: 'Implemented with Python, Tensor Flow, Keras, NumPy <br>\
        Trained a model to recognize articles of clothing',
    },
    {
        name: 'Portolio Website [2019]',
        desc: 'Designed and developed responsive website with HTML, CSS, Javascript <br> \
        Hosted website through github with custom domain name',
    },
]

let experiences = [
    {
        name: 'Software Engineer - TCS [2019]',
        desc: 'Full-stack web development with Angular, Java, Spring Boot, MongoDB <br>\
        Full-stack web development with Java EE backend and OracleDB <br>\
        Operated in a high-speed Agile environment',
            
    },
    {
        name: 'IOS Developer - Steps Mobile [2018]',
        desc: 'Full-stack IOS app development in fast-paced startup environment with Xcode<br>\
        Implemented Google Firebase functions to query database <br>\
        Designed and implemented intuitive UI for high-quality user experience',
    },
    {
        name: 'Research Intern [2018]',
        desc: 'Created educational game teaching students to make microtransistors<br>\
        Modeled 3D game objects in Maya <br>\
        Utilized Unity and C# to bring ideas into fruition',
    },
]

function populateLanguages(){

    let lang = document.getElementById('skills');

    for(lan of languages){
        let p = document.createElement('p');
        p.innerText = lan;
        lang.appendChild(p);
    }
}

function populateProjects(){
    let proj_div = document.getElementById('projects');

    for(p of projects){
        let div = document.createElement('div');
        div.className = "project_div";
        let description = document.createElement('div');
        let name = document.createElement('p');

        description.innerHTML = "<p class=\"description\">" + p.desc +"</p>";

        div.appendChild(name);
        div.appendChild(description);

        name.innerText = p.name;
        name.className = 'proj_name';
        proj_div.appendChild(div);
    }
}

function populateTechnologies(){
    let tech = document.getElementById('technology');

    for(t of technologies){
        let p = document.createElement('p');
        p.innerText = t;
        tech.appendChild(p);
    }

}

function populateExperiences(){
    let exp = document.getElementById('experience');

    for(e of experiences){
        let div = document.createElement('div');
        div.className = "project_div";
        let description = document.createElement('div');
        let name = document.createElement('p');

        description.innerHTML = "<p class=\"description\">" + e.desc +"</p>";

        div.appendChild(name);
        div.appendChild(description);

        name.innerText = e.name;
        name.className = 'proj_name';
        exp.appendChild(div);
    }
}

function highlightLanguages(){

}

window.onload = function () {
    initNavBar();
    populateLanguages();
    populateProjects();
    populateTechnologies();
    populateExperiences();
}