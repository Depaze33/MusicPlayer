//faire un tableau des musique
let musiqueArray = [
    "music/Blue_Skies.mp3",
  "music/Cartoon_Hoedown.mp3",
  "music/Earthy_Crust.mp3",
  "music/Hold_On_a_Minute.mp3",
  "music/JohnDunbarTheme.mp3",
  "music/nightfall-future-bass-music-228100.mp3",
  "music/Stay_With_You.mp3",
  "music/Symphony_No_5_by_Beethoven.mp3",
];

let mediaplayer = document.getElementById("mediaplayer");
let currentIndex = 0;

mediaplayer.src = musiqueArray[0];


//----------------BUTTON PLAY------------------------

function playPauseControler() {
  if (mediaplayer.paused) {
    mediaplayer.play();
  } else {
    mediaplayer.pause();
  }
}

document.getElementById("play").addEventListener("click", function () {
  playPauseControler();
});

//----------------BUTTON PREVIOUS-----------------------
function previous() {
    currentIndex = (currentIndex - 1 + musiqueArray.length) % musiqueArray.length;
    mediaplayer.src = musiqueArray[currentIndex]; 
    mediaplayer.play(); 
}


document.getElementById("left").addEventListener("click", function () {
    previous();
});

//----------------BUTTON NEXT------------------------
function next() {
    currentIndex = (currentIndex + 1) % musiqueArray.length; 
    mediaplayer.src = musiqueArray[currentIndex]; 
    mediaplayer.play();
};


document.getElementById("right").addEventListener("click", function () {
    next();
});

//range son
//---------------------EVENT MUSIC CONTAINER--------------------

document.querySelectorAll(".music").forEach(function(musicItem) {
    musicItem.addEventListener(
        "mouseover",
        function (event) {
           
            event.target.style.border = "3px solid #588dc2";
  
            
            setTimeout(function () {
                event.target.style.border = "";
            }, 500);
        },
        false
    );
});

//Music One
document.querySelectorAll(".music").addEventListener("click", function(){
    document.querySelectorAll(".music").style.border = "2px solid #588dc2";
});

//range musique


