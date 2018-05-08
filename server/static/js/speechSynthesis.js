function loadVoices() {
  var voices = speechSynthesis.getVoices();
}

async function speak(text) {
  var msg = new SpeechSynthesisUtterance();
  msg.lang = 'es-ES'
  console.log(msg)
  msg.text = text;
  msg.voice = await speechSynthesis.getVoices().find((voice) => voice.name == "Jorge");
  console.log("msg.voice", msg.voice)
  window.speechSynthesis.speak(msg);
}

var elBox = document.getElementById("books");
elBox.addEventListener('click', function(e) {
  var text = document.getElementById("loslibros")
  text.setAttribute("visible", "true")
  setTimeout(() => text.setAttribute("visible", "false"), 3000)
  speak("los libros")
  console.log("In event listener")
});

elBox.addEventListener('mouseenter', function(e) {
  elBox.setAttribute("opacity", "0.3")
});

elBox.addEventListener('mouseleave', function(e) {
  elBox.setAttribute("opacity", "0")
});
