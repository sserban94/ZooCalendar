$(document).ready(() => {
    var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition;
    var recognition = new SpeechRecognition();
    recognition.lang = 'en-US';

    var animalTypes = ['amphibians', 'birds', 'fish', 'mammals', 'reptiles'];

    $("#searchVoiceBtn").click(() => {
        recognition.start();
    })

    recognition.onresult = (event) => {
        // the first 0 is for the result and the second 0 is for the alternatives
        console.log(event.results);
        var choice = event.results[0][0].transcript;
        diagnostic.textContent = 'Result received: ' + choice + '.';
        for (var i = 0; i < animalTypes.length; i++){
            if (choice === animalTypes[i]){
                location.href = (choice + '.html');
            }
        }
        console.log('Confidence: ' + event.results[0][0].confidence);
    }

    recognition.onspeechend = () => {
        recognition.stop();
    }

    recognition.onnomatch = (event) => {
        diagnostic.textContent = "Animal type doesn't exist";
    }

    recognition.onerror = (event) => {
        diangostic.textContent = 'Error occurred in recognition: ' + event.error;
    }
})