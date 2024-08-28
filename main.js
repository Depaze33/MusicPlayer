let musicArray = [
  {
    author: "Dub Inc",
    title: "Couleur",
    src: "music/DUB INC - Couleur (Lyrics Vidéo Official) - Album Millions.mp3",
  },
  {
    author: "Sopico",
    title: "Dans les yeux",
    src: "music/Dans les yeux.mp3",
  },
  {
    author: "Nekfeu",
    title: "Elle pleut",
    src: "music/Nekfeu - Elle pleut ft. nemir.mp3",
  },
  {
    author: "Linkin Park",
    title: "In the end",
    src: "music/In the End.mp3",
  },
  {
    author: "Saez",
    title: "J'accuse",
    src: "music/Saez - Jaccuse.mp3",
  },
  {
    author: "Gaël Faye",
    title: "Petit Pays",
    src: "music/Gaël Faye - Petit Pays.mp3",
  },
  {
    author: "Tom Frager",
    title: "Lady Melody",
    src: "music/Tom Frager - Lady Melody (Clip Officiel).mp3",
  },
  {
    author: "Gargentüa",
    title: "La mort avec toi",
    src: "music/GARGÄNTUA - LA MORT AVEC TOI (OFFICIAL VIDEO).mp3",
  },
];
console.log(musicArray);

let mediaplayer = document.getElementById("mediaplayer");
let currentIndex = 0;

mediaplayer.src = musicArray[0].src;

//----------------BUTTON PLAY------------------------

function playPauseController() {
  if (mediaplayer.paused) {
    mediaplayer.play();
  } else {
    mediaplayer.pause();
  }
}

document.getElementById("play").addEventListener("click", function () {
  playPauseController();
});

//----------------BUTTON PREVIOUS-----------------------
function previous() {
  currentIndex = (currentIndex - 1 + musicArray.length) % musicArray.length;
  mediaplayer.src = musicArray[currentIndex].src;
  mediaplayer.play();
}

document.getElementById("left").addEventListener("click", function () {
  previous();
});

//----------------BUTTON NEXT------------------------
function next() {
  currentIndex = (currentIndex + 1) % musicArray.length;
  mediaplayer.src = musicArray[currentIndex].src;
  mediaplayer.play();
  changeListnerInformation();
}

document.getElementById("right").addEventListener("click", function () {
  next();
  
});

//-------------------SON----------------------------------

function lowerSound() {
  if (mediaplayer.volume > 0.1) {
    mediaplayer.volume = mediaplayer.volume - 0.1;
  } else if (mediaplayer.volume <= 0.1) {
    mediaplayer.volume = 1;
  }
  updateSlider();
}

function upperSound() {
  if (mediaplayer.volume < 0.9) {
    mediaplayer.volume = mediaplayer.volume + 0.1;
  }else if (mediaplayer.volume >= 0.1) {
    mediaplayer.volume = 1;
  }
  updateSlider();
}

function updateSlider() {
  document.getElementById("rangeVol").value = mediaplayer.volume * 100;
}

let value = 0.5;
document.getElementById("rangeVol").value = value * 100;
mediaplayer.volume = value;

function slider() {
  let sliderValue = document.getElementById("rangeVol").value / 100;
  mediaplayer.volume = sliderValue;
}

document.getElementById("volMin").addEventListener("click", function () {
  lowerSound();
});

document.getElementById("volMax").addEventListener("click", function () {
  upperSound();
});

document.getElementById("rangeVol").addEventListener("input", function () {
  slider();
});

//----------------Click Card launches music---------------
function playCard(index) {
  mediaplayer.src = musicArray[index].src;
  mediaplayer.load();
  // mediaplayer.play();
}

document.querySelectorAll(".music").forEach((item, index) => {
  item.addEventListener("click", function () {
    playCard(index);
  });
});


//--------------------CHANGE TITLE MUSIQUE---------


function changeListnerInformation() {
  let informationMusic = document.getElementById("text");
  informationMusic.innerHTML = `${musicArray[currentIndex].author} - ${musicArray[currentIndex].title}`;
informationMusic.style.fontFamily = "Basic, sans-serif";

informationMusic.style.fontSize = "0.75em"

}

document.getElementById("right").addEventListener("click", function(){
  changeListnerInformation();
});

document.getElementById("left").addEventListener("click", function(){
  changeListnerInformation();
});

document.querySelectorAll(".music").forEach((item, index) => {
  item.addEventListener("click", function () {
    playCard(index);
    currentIndex = index; 
    changeListnerInformation(); 
  });
});

document.getElementById("play").addEventListener("click", function(){
  changeListnerInformation();
  
})

//--------------------------SOUND BAR-------------------------

mediaplayer.addEventListener("loadedmetadata", function () {
  document.getElementById("rangeMusic").max = mediaplayer.duration;
  // document.getElementById("totalTime").textContent = formatTime(mediaplayer.duration);
});

mediaplayer.addEventListener("timeupdate", function () {
  document.getElementById("rangeMusic").value = mediaplayer.currentTime;
  // document.getElementById("currentTime").textContent = formatTime(mediaplayer.currentTime);
});

document.getElementById("rangeMusic").addEventListener("input", function () {
  mediaplayer.currentTime = document.getElementById("rangeMusic").value;
});



//-----------------------CHANGE MUSIC AUTOMATLY-----------------
mediaplayer.addEventListener("ended", function () {
  next();
});

function formatTime(seconds) {
  const minutes = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
}

