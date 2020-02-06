window.onload = function () {
    initNavBar();
    populateLanguages();
    populateProjects();
}

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
        name: 'This Portolio Website [2019]',
        desc: 'Designed and developed responsive website with HTML, CSS, Javascript <br> \
        Hosted website through github with custom domain name',
    },
]

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