
let languages = [];

languages['Java'] = 0;
languages['Javascript'] = 1;
languages['HTML/CSS'] = 2;
languages['Python'] = 3;
languages['Matlab'] = 4;
languages['Swift'] = 5;
languages['C/C++'] = 6;
languages['C#'] = 7;
languages['SQL'] = 8;

let technologies = [];

technologies['MongoDB'] = 0;
technologies['Spring Boot'] = 1;
technologies['OracleDB'] = 2;
technologies['Angular'] = 3;
technologies['Unity'] = 4;
technologies['Xcode'] = 5;
technologies['Firebase'] = 6;
technologies['Bootstrap'] = 7;
technologies['Version Control'] = 8;

let projects = [
    {
        name: 'Concept Forum [2020]',
        desc: 'Full-stack web application with Angular, Java, Spring boot, Mongo Atlas <br>\
        Implemented user registration, REST, AJAX, nested comments',
        lang: ['Java','Javascript','HTML/CSS'], 
        tech: ['Angular','Spring Boot','MongoDB','Version Control'],   
    },
    {
        name: 'Bug Tracker [2019]',
        desc: 'Full-stack web application with Angular, Java, Spring boot, Mongo Atlas <br>\
        Implemented user registration, routing guards, REST, AJAX',
        lang: ['Java','Javascript','HTML/CSS'],  
        tech: ['Angular','Spring Boot','MongoDB','Version Control'],  
    },
    {
        name: 'Machine Learning [2019]',
        desc: 'Implemented with Python, Tensor Flow, Keras, NumPy <br>\
        Trained a model to recognize articles of clothing',
        lang: ['Python'],  
        tech: ['Version Control'],  
    },
    {
        name: 'Portolio Website [2019]',
        desc: 'Designed and developed responsive website with HTML, CSS, Javascript <br> \
        Hosted website through github with custom domain name',
        lang: ['Javascript','HTML/CSS'],
        tech: ['Version Control'],  
    },
]

let experiences = [
    {
        name: 'Software Engineer - TCS [2019 - current]',
        desc: 'Full-stack web development with Angular, Java, Spring Boot, MongoDB <br>\
        Full-stack web development with Java EE backend and OracleDB <br>\
        Operated in a high-speed Agile environment',
        lang: ['Java','Javascript','HTML/CSS','SQL'],
        tech: ['Angular','Spring Boot','MongoDB','Bootstrap','OracleDB','Version Control'],  
    },
    {
        name: 'IOS Developer - Steps Mobile [2018]',
        desc: 'Full-stack IOS app development in fast-paced startup environment with Xcode<br>\
        Implemented Google Firebase functions to query database <br>\
        Designed and implemented intuitive UI for high-quality user experience',
        lang: ['Swift','Javascript'],
        tech: ['Xcode','Firebase','Version Control'],  
    },
    {
        name: 'Research Intern [2018]',
        desc: 'Created educational game teaching students to make microtransistors<br>\
        Modeled 3D game objects in Maya <br>\
        Utilized Unity and C# to bring ideas into fruition',
        lang: ['C#'],
        tech: ['Unity','Version Control'],
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
        div.id = 'p'+i;
        let description = document.createElement('div');
        let name = document.createElement('p');

        description.innerHTML = "<p class=\"description\">" + projects[i].desc +"</p>";

        div.appendChild(name);
        div.appendChild(description);

        name.innerText = projects[i].name;
        name.className = 'normal-size';

        div.onmouseenter = highlightLanguages; //mouse over triggers
        div.onmouseleave = unhighlightLanguages;

        proj_div.appendChild(div);
    }
}

function populateTechnologies(){
    let tech = document.getElementById('technology');

    for(let key in technologies){
        let p = document.createElement('p');
        p.innerText = key;
        p.id = 't' + technologies[key];
        p.className = 'normal-size';
        tech.appendChild(p);
    }

}

function populateExperiences(){
    let exp = document.getElementById('experience');

    for(let i in experiences){
        let div = document.createElement('div');
        div.className = "project_div";
        let description = document.createElement('div');
        let name = document.createElement('p');

        description.innerHTML = "<p class=\"description\">" + experiences[i].desc +"</p>";

        div.appendChild(name);
        div.appendChild(description);
        div.id = 'e' + i;

        name.innerText = experiences[i].name;
        name.className = 'normal-size';
        exp.appendChild(div);

        div.onmouseenter = highlightLanguages; //mouse over triggers
        div.onmouseleave = unhighlightLanguages;
    }
}

function highlightLanguages(obj){ 
    // console.log(obj.target.id);
    let id = obj.target.id;
    let array = [];
    
    if(id[0] == 'p'){
        array = projects;
        // console.log('project')
    }
    else{
        array = experiences;
        // console.log('experience');
    }

    id = id.substring(1,id.length);

    for(let lan of array[id].lang){ //for each language in the array
        let p = document.getElementById('l'+languages[lan]); //access that specific language on the dom
        if(p === undefined){
            console.log("ERROR with value: " + lan);
        }else{
            p.className = 'highlight';
        }

    }

    for(let t of array[id].tech){ //for each language in the array
        let p = document.getElementById('t'+technologies[t]); //access that specific technology on the dom
        if(p == null){
            console.log("ERROR with value: " + t);
        }else{
            p.className = 'highlight';
        }


    }
}

function unhighlightLanguages(){
    let langList = document.getElementById('skills').children;
    for (l of langList) {
        if(l.className == 'highlight')
            l.className = 'normal-size';
    }

    let techList = document.getElementById('technology').children;
    for (t of techList) {
        if(t.className == 'highlight')
            t.className = 'normal-size';
    }
}

window.onload = function () {
    initNavBar();
    populateLanguages();
    populateProjects();
    populateTechnologies();
    populateExperiences();
}