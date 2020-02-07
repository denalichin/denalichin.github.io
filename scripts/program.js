
// let languages = [
//     'Java',         //0
//     'Javascript',   //1
//     'HTML',         //2  
//     'CSS',          //3
//     'Python',       //4
//     'Matlab',       //5
//     'Swift',        //6
//     'C, C++, C#',   //7
//     'SQL'           //8
// ]

let languages = [];

languages['Java'] = 1;
languages['Javascript'] = 2;
languages['HTML/CSS'] = 3;
languages['Python'] = 4;
languages['Matlab'] = 5;
languages['Swift'] = 6;
languages['C/C++'] = 7;
languages['C#'] = 8;
languages['SQL'] = 9;



let technologies = [
    'MongoDB',
    'Spring Boot',
    'OracleDB',
    'Angular',
    'Unity',
    'Xcode',
    'Firebase',
    'Bootstrap',
    'Version Control'
]


let projects = [
    {
        name: 'Concept Forum [2020]',
        desc: 'Full-stack web application with Angular, Java, Spring boot, Mongo Atlas <br>\
        Implemented user registration, REST, AJAX, nested comments',
        lang: ['Java','Javascript','HTML/CSS'],    
    },
    {
        name: 'Bug Tracker [2019]',
        desc: 'Full-stack web application with Angular, Java, Spring boot, Mongo Atlas <br>\
        Implemented user registration, routing guards, REST, AJAX',
        lang: ['Java','Javascript','HTML/CSS'],  
    },
    {
        name: 'Machine Learning [2019]',
        desc: 'Implemented with Python, Tensor Flow, Keras, NumPy <br>\
        Trained a model to recognize articles of clothing',
        lang: ['Python'],  
    },
    {
        name: 'Portolio Website [2019]',
        desc: 'Designed and developed responsive website with HTML, CSS, Javascript <br> \
        Hosted website through github with custom domain name',
        lang: ['Javascript','HTML/CSS']
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

    for(let key in languages){
        let p = document.createElement('p');
        p.id = 'l'+languages[key]; //set the id to l0,l1,l2,l3 ..etc
        p.innerText = key;
        lang.appendChild(p);
    }
}

function populateProjects(){
    let proj_div = document.getElementById('projects');

    for(let i in projects){
        let div = document.createElement('div');
        div.className = "project_div";
        div.id = i;
        let description = document.createElement('div');
        let name = document.createElement('p');

        description.innerHTML = "<p class=\"description\">" + projects[i].desc +"</p>";

        div.appendChild(name);
        div.appendChild(description);

        name.innerText = projects[i].name;
        name.className = 'proj_name';
        div.onmouseenter = highlightLanguages;
        div.onmouseleave = unhighlightLanguages;
        proj_div.appendChild(div);
    }
}

function populateTechnologies(){
    let tech = document.getElementById('technology');

    for(let t of technologies){
        let p = document.createElement('p');
        p.innerText = t;
        tech.appendChild(p);
    }

}

function populateExperiences(){
    let exp = document.getElementById('experience');

    for(let e of experiences){
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

function highlightLanguages(obj){ 
    // console.log(obj.target.id);
    for(let lan of projects[obj.target.id].lang){
        console.log(languages[lan]);
        let p = document.getElementById('l'+languages[lan]); //access that specific language on the dom
        console.log(p);
        p.className = 'highlight';
    }
}

function unhighlightLanguages(){
    let langList = document.getElementById('skills').children;
    for (l of langList) {
        if(l.className == 'highlight')
            l.className = 'proj_name';
    }
}

window.onload = function () {
    initNavBar();
    populateLanguages();
    populateProjects();
    populateTechnologies();
    populateExperiences();
}