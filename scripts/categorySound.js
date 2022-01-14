$("#amphibiansCell").mouseover = playAudio("amphibians");
$("#birdsCell").mouseover = playAudio('birds');
$("#fishCell").mouseover = playAudio('fish');
$("#mammalsCell").mouseover= playAudio('mammals');
$("#reptilesCell").mouseover = playAudio('reptiles');

// TODO - use on for these events 

// why is this playing automaticaly regardless of the events???
function playAudio(type) {
    var audio = new Audio(`audio/${type}.wav`);
    audio.play();
}