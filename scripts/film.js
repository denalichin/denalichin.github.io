function playVideo(div){
    console.log("hello");
    console.log(div);
//    let popup = div.querySelector(".popup")
//    console.log(popup);

    let popup = document.getElementById("popup");
    popup.style.visibility = "visible";

    let innerPopup = document.getElementById("innerPopup");
    // innerPopup.innerHTML = "<img id=\"closeButton\" src=\"images/close.svg\"> <iframe src=\"https://player.vimeo.com/video/250036877?autoplay=1&title=0&byline=0&portrait=0\" width=\"640\" height=\"360\" frameborder=\"0\" allow=\"autoplay; fullscreen\" allowfullscreen></iframe>";

    switch(div.id) {
        case "row":
            innerPopup.innerHTML = "<img id=\"closeButton\" src=\"images/close.svg\"> <iframe src=\"https://player.vimeo.com/video/250036877?autoplay=1&title=0&byline=0&portrait=0\" width=\"640\" height=\"360\" frameborder=\"0\" allow=\"autoplay; fullscreen\" allowfullscreen></iframe>";
            break;
        case "shadow":
            innerPopup.innerHTML = "<img id=\"closeButton\" src=\"images/close.svg\"> <iframe src=\"https://player.vimeo.com/video/250941836?autoplay=1&title=0&byline=0&portrait=0\" width=\"640\" height=\"360\" frameborder=\"0\" allow=\"autoplay; fullscreen\" allowfullscreen></iframe>";
            break;
        case "mustang":
            innerPopup.innerHTML = "<img id=\"closeButton\" src=\"images/close.svg\"> <iframe src=\"https://player.vimeo.com/video/341496479?title=0&byline=0&portrait=0\" width=\"640\" height=\"360\" frameborder=\"0\" allow=\"autoplay; fullscreen\" allowfullscreen></iframe>";            
            break;
        case "alien":
            innerPopup.innerHTML = "<img id=\"closeButton\" src=\"images/close.svg\"> <iframe src=\"https://player.vimeo.com/video/250941297?autoplay=1&title=0&byline=0&portrait=0\" width=\"640\" height=\"360\" frameborder=\"0\" allow=\"autoplay; fullscreen\" allowfullscreen></iframe>";
            break;
        case "sixty":
            innerPopup.innerHTML = "<img id=\"closeButton\" src=\"images/close.svg\"> <iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/MtbyUhLqa5o?\" frameborder=\"0\" allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>";
            break;
        default:
        innerPopup.innerHTML = "you failed";
      }
}

function closePopup(){
    console.log("closing popup")
    let popup = document.getElementById("popup");
    // popup.remove();
    popup.style.visibility = "hidden";
    stopVideo(popup);
}

var stopVideo = function ( element ) {
    let innerPopup = document.getElementById("innerPopup");
    innerPopup.innerHTML = "";
};

window.onload = function() {
    initNavBar();
}