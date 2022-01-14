window.onload = () => {
    document.getElementById("amphibiansButton").onclick = function() {
        location.href = "amphibians.html";
    }

    document.getElementById("birdsButton").onclick = function() {
        location.href = "birds.html";
    }

    document.getElementById("mammalsButton").onclick = function() {
        location.href = "mammals.html";
    }

    document.getElementById("reptilesButton").onclick = function() {
        location.href = "reptiles.html";
    }

    document.getElementById("fishButton").onclick = function() {
        location.href = "fish.html";
    }

    var categMap = new Map();
    categMap.set(1, ['amphibians/bullfrog', 'amphibiansCell']);
    categMap.set(2, ['birds/tucan', 'birdsCell']);
    categMap.set(3, ['fish/nemo', 'fishCell']);
    categMap.set(4, ['mammals/tiger', 'mammalsCell']);
    categMap.set(5, ['reptiles/komodoDragons', 'reptilesCell']);
    var pictures = ['bullfrog', 'tucan', 'nemo', 'tiger', 'komodoDragons'];

    // pictures.forEach(x => loadPicture(x));
   
    // a map will return an array of 2 elements for each entry in Javascript
    categMap.forEach(x => loadPictureUsingMap(x[0], x[1]));
    
    var categMap = new Map();
    var canvasNameList = ['amphibiansCell', 'birdsCell', 'fishCell', 'mammalsCell', 'reptilesCell'];

    var amphibian = document.getElementById("amphibiansCell");
    var birds = document.getElementById("birdsCell");
    var fish = document.getElementById("fishCell");
    var mammals = document.getElementById("mammalsCell");
    var reptiles = document.getElementById("reptilesCell");

    
}   


// playAudio = (type) => {
//     var audio = new Audio(`audio/${type}.wav`);
//     audio.play();
// }

function loadPictureUsingMap(name, cellName){
    var img = new Image();
    img.src = `animals/resized/${name}.jpg`;
    var canvas = document.getElementById(cellName);
    var ctx = canvas.getContext("2d");

    img.onload = function(){
        var width = img.width;
        var height = img.height;
        canvas.setAttribute("width", width);
        canvas.setAttribute("height", height);
        ctx.drawImage(img, 0, 0);
    }
}

