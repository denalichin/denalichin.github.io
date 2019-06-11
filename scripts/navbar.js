//make sure to include initNavBar in page js file

function initNavBar(){
    console.log("initializing navbar");
    let buttons = document.getElementsByClassName('navbutton');
    for(i = 0; i < buttons.length; i++){
        buttons[i].addEventListener("mouseover",underbar);
    }
}


function underbar(){
    let text = this.querySelector("p");
    let bar = document.querySelector('.underbar');
    let pos = text.getBoundingClientRect();
    console.log(pos.left);
    // bar.style.left = '\"' + pos.left +  '\"';
    bar.style.left = pos.left + 'px';
    bar.style.top = (pos.bottom + (pos.bottom*0.01))+ 'px';
    bar.style.width = pos.right-pos.left + 'px';
}