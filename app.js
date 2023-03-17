const menu = document.querySelector("#mobile-menu");
const menuLinks = document.querySelector(".navbar__menu");

menu.addEventListener("click", function () {
  menu.classList.toggle("is-active");
  menuLinks.classList.toggle("active");
});

// Audio

// var song = document.getElementById("song");
// var icon = document.getElementById("icon");

// icon.onclick = function () {
//   if (song.paused) {
//     song.play();
//     icon.scr = "media/pause.png";
//   } else {
//     song.pause();
//     icon.src = "media/play.png";
//   }
// };

const icon = document.getElementById("icon");
const audio = new Audio("./media/MattKnight-Drum&Bass-Showreel2023.mp3");
let isPlaying = false;

icon.addEventListener("click", () => {
  if (isPlaying) {
    audio.pause();
    icon.src = "./images/play.png";
    isPlaying = false;
  } else {
    audio.play();
    icon.src = "./images/pause.png";
    isPlaying = true;
  }
});
