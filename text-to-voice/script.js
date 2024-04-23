var speech = new SpeechSynthesisUtterance();

var voices = [];

window.speechSynthesis.onvoiceschanged = () => {
    voices = window.speechSynthesis.getVoices();
  
    // speech.voice = voices.find(voice => voice.name === "Microsoft George - English (United Kingdom)");
    speech.voice = voices.find(voice => voice.name.includes('Male'));
}

document.querySelector("button").addEventListener("click" , ()=>{
    speech.text = document.querySelector("textarea").value;
    window.speechSynthesis.speak(speech)
})