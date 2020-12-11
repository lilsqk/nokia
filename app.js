let vimeoVideoContainer = document.querySelector(".vimeo-video-container");
let darkBackground = document.querySelector(".dark-background");
let vimeoVideo = document.querySelector(".vimeo-video");
let closeBtn = document.querySelector(".fa-close");
let videoLength = document.querySelector(".video-length");
var player = new Vimeo.Player(vimeoVideo);
console.log(player.getDuration());

player.getDuration().then(function(duration) {
    // `duration` indicates the duration of the video in seconds
    console.log(secondsToHms(duration));
    videoLength.innerText=secondsToHms(duration);
});
function videoClose(){
    vimeoVideoContainer.style.display="none";
    hide(closeBtn);
    hide(vimeoVideo);
    hide(darkBackground);
    player.pause();
}

function showVideo(){
    vimeoVideoContainer.style.display="flex";
    show(closeBtn);
    show(vimeoVideo);
    show(darkBackground);
}

function hide(item){
    item.classList.remove("show");
    item.classList.add("hide");
}
function show(item){
    item.classList.remove("hide");
    item.classList.add("show");
}

function secondsToHms(d) {
    d = Number(d);
    var h = Math.floor(d / 3600);
    var m = Math.floor(d % 3600 / 60);
    var s = Math.floor(d % 3600 % 60);

    var hDisplay = h > 0 ? h + (h == 1 ? " : " : "") : "";
    var mDisplay = m > 0 ? m + (m == 1 ? " : " : "") : "";
    var sDisplay = s > 0 ? s + (s == 1 ? " : " : "") : "";
    return hDisplay + mDisplay + sDisplay; 
}