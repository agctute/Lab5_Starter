// expose.js

window.addEventListener('DOMContentLoaded', init);

// import {JSConfetti} from './js-confetti.browser.js';
const jsConfetti = new JSConfetti();
let confetti = function() { jsConfetti.addConfetti() };

function init() {
  
  let selected = null;
  const buttonElement = document.querySelector("button");
  const selectElement = document.querySelector('#horn-select');
  const slider = document.querySelector("[type='range']");

  slider.addEventListener('input', () => {
    let volume = slider.value / 100;
    const speaker = document.querySelector("[alt='Volume level 2']");
    if (slider.value == 0) {
      speaker.src = "assets/icons/volume-level-0.svg";
    } else if (slider.value < 33 & slider.value >= 1) {
      speaker.src = "assets/icons/volume-level-1.svg";
    } else if (slider.value < 67 & slider.value >= 33) {
      speaker.src = "assets/icons/volume-level-2.svg";
    } else if (slider.value >= 67) {
      speaker.src = "assets/icons/volume-level-3.svg";
    }
  });

  selectElement.addEventListener('change', (event) => {
    const img = document.querySelector("[alt='No image selected']");
    const audio = document.querySelector("audio");

    audio.src = "assets/audio/" + event.target.value + ".mp3";
    img.src = "assets/images/" + event.target.value + ".svg";
    selected = event.target.value;
  });

  buttonElement.addEventListener('click', () => { 
    document.querySelector("audio").play();
    const audio = document.querySelector("audio");
    if(selected == 'party-horn') {
    jsConfetti.addConfetti();
    } 
  });

}

