// explore.js

window.addEventListener('DOMContentLoaded', init);
function init() {
  // TODO
  setInterval(function() {
    if (synth.speaking) {
    document.querySelector("[alt='Smiling face']").src = "../assets/images/smiling-open.png";
    } else { 
      document.querySelector("[alt='Smiling face']").src = "../assets/images/smiling.png";
    }
  }, 3)

  let voiceOptions = [];
  const synth = window.speechSynthesis;
  const utterance = new SpeechSynthesisUtterance("");
  
  window.speechSynthesis.onvoiceschanged = function() {
    voiceOptions = window.speechSynthesis.getVoices();
    
    for (let i = 0; i < voiceOptions.length; i++) {
      console.log(voiceOptions[i]);
      const option = document.createElement("option");
      option.textContent = voiceOptions[i].name;
      option.value = voiceOptions[i].name;
      document.querySelector("#voice-select").appendChild(option);
    }
      
  }
  
  document.querySelector("#voice-select").addEventListener('change', (event) => {
    console.log('Selected ' + event.target.value);
    voiceOptions = window.speechSynthesis.getVoices();
    
    for (let i = 0; i < voiceOptions.length; i++) {
      if(voiceOptions[i].name == event.target.value) {
        utterance.voice = voiceOptions[i];
      }
    }

  });
  
  const button = document.querySelector('button').addEventListener('click', () => {
    const txt = document.querySelector("#text-to-speak");
    utterance.text = txt.value;
    console.log(txt.value);
    const check = new SpeechSynthesisUtterance("");
    speechSynthesis.speak(utterance);
    speechSynthesis.speak(check);
    document.querySelector("[alt='Smiling face']").src = "../assets/images/smiling-open.png";
    
    document.querySelector("[alt='Smiling face']").src = "../assets/images/smiling.png";
  });
}