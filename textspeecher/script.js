function speak(){
  let text=document.getElementById('input').value;
  let utterence = new SpeechSynthesisUtterance(text);
  speechSynthesis.speak(utterence);
}