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
            break;
        case "alien":
            break;
        case "sixty":
            break;
        default:
        innerPopup.innerHTML = "you failed";
      }
}

function closePopup(){
    console.log("closing popup")
    let popup = document.getElementById("popup");
    popup.style.visibility = "hidden";
    stopVideo(popup);
}

var stopVideo = function ( element ) {
	var iframe = element.querySelector( 'iframe');
	var video = element.querySelector( 'video' );
	if ( iframe ) {
		var iframeSrc = iframe.src;
		iframe.src = iframeSrc;
	}
	if ( video ) {
		video.pause();
	}
};