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
var boxes = Array.from(document.getElementsByClassName("boxes"))

//event listener for showing text
elBox.addEventListener('click', function(e) {
  var text = document.getElementById("loslibros")
  text.setAttribute("visible", "true")
  setTimeout(() => text.setAttribute("visible", "false"), 3000)
});

//event listener for pronouncing object's name
boxes.forEach(box => box.addEventListener('click', (e) => {
  speak(box.getAttribute("object"))
}));

//event listener for highlighting area
elBox.addEventListener('mouseenter', function(e) {
  elBox.setAttribute("opacity", "0.3")
});

//event listener for unhighlighting area
elBox.addEventListener('mouseleave', function(e) {
  elBox.setAttribute("opacity", "0")
});
