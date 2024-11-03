const buttons = document.querySelectorAll(".drum");
const buttonAnimation = (key) => {
  const button = document.querySelector("." + key);
  button.classList.add("pressed");
  setTimeout(() => {
    button.classList.remove("pressed");
  }, 100);
};

const playSound = (key) => {
  buttonAnimation(key);
  switch (key) {
    case "w":
      var audio = new Audio("sounds/tom-1.mp3");
      break;
    case "a":
      var audio = new Audio("sounds/tom-2.mp3");
      break;
    case "s":
      var audio = new Audio("sounds/tom-3.mp3");
      break;
    case "d":
      var audio = new Audio("sounds/tom-4.mp3");
      break;
    case "j":
      var audio = new Audio("sounds/snare.mp3");
      break;
    case "k":
      var audio = new Audio("sounds/crash.mp3");
      break;
    case "l":
      var audio = new Audio("sounds/kick-bass.mp3");
      break;
  }
  audio.play();
};
document.addEventListener("keydown", (e) => playSound(e.key));
buttons.forEach((button) => {
  button.addEventListener("click", (e) => playSound(e.target.innerText));
});
