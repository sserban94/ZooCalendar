$(document).ready(() => {
    var amphibians = ['bullfrog', 'europeanToad', 'newt', 'salamander'];
    var birds = ['eagle', 'hedwig', 'kingPenguin', 'redHawk', 'tucan'];
    var fish = ['hammer', 'lionFish', 'nemo', 'pufferFish'];
    var mammals = ['cheetah', 'giraffe', 'grizzly', 'tiger', 'wolf'];
    var reptiles = ['anaconda', 'chameleon', 'cobra', 'europeanGreenLizard', 'komodoDragons'];

    var animals = amphibians.concat(birds).concat(fish).concat(mammals).concat(reptiles);

    $(animals).each((index, animal) => {
        console.log(animal);

        
        if (index === 0) {
            var status = $('<div class="carousel-item active">');
            var buttonNumber = $(`<button type="button" data-bs-target="#carouselExampleCaptions"
             data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>`);
        } else {
            status = $('<div class="carousel-item">');
            var buttonNumber = $(`<button type="button" data-bs-target="#carouselExampleCaptions"
             data-bs-slide-to="${index}" aria-label="Slide ${index+1}"></button>`);
        };

        var imgSource = $(`<img src="animals/resized/all/${animal}.jpg" class="d-block w-100" alt="..."></img>`);
        var carouselCaption = $('<div class="carousel-caption d-none d-md-block"></div>');
        var label = $(`<h5>${animal}</h5>`);
        var placeholder = $(`<p>This is a/an ${animal}</p>`);
        var div1 = $('</div>');
        var div2 = $('</div>');

        status.append(imgSource);
        status.append(carouselCaption);
        status.append(label);
        status.append(placeholder);
        status.append(div1);
        status.append(div2);
        
        $('#addButtons').append(buttonNumber);
        $('#addElements').append(status);
    })

    // $(birds).each((index, bird) => {
    //     console.log(bird);
        
    //     if (index === 0) {
    //         var status = $('<div class="carousel-item active">');
    //     } else {
    //         status = $('<div class="carousel-item">');
    //     };
    //     var imgSource = $(`<img src="animals/resized/birds/${bird}.jpg" class="d-block w-100" alt="..."></img>`);
    //     var carouselCaption = $('<div class="carousel-caption d-none d-md-block"></div>');
    //     var label = $(`<h5>${bird}</h5>`);
    //     var placeholder = $(`<p>This is a/an ${bird}</p>`);
    //     var div1 = $('</div>');
    //     var div2 = $('</div>');

    //     status.append(imgSource);
    //     status.append(carouselCaption);
    //     status.append(label);
    //     status.append(placeholder);
    //     status.append(div1);
    //     status.append(div2);
        
    //     $('#addElements').append(status);
    // })
    // $(fish).each((index, aFish) => {
    //     console.log(aFish);
    //     console.log(aFish);
    //     var status = $('<div class="carousel-item">');
    //     var imgSource = $(`<img src="animals/resized/fish/${aFish}.jpg" class="d-block w-100" alt="..."></img>`);
    //     var carouselCaption = $('<div class="carousel-caption d-none d-md-block"></div>');
    //     var label = $(`<h5>${aFish}</h5>`);
    //     var placeholder = $(`<p>This is a/an ${aFish}</p>`);
    //     var div1 = $('</div>');
    //     var div2 = $('</div>');

    //     status.append(imgSource);
    //     status.append(carouselCaption);
    //     status.append(label);
    //     status.append(placeholder);
    //     status.append(div1);
    //     status.append(div2);
        
    //     $('#addElements').append(status);
    // })
    // $(mammals).each((index, mammal) => {
    //     console.log(mammal);
    //     console.log(mammal);
    //     var status = $('<div class="carousel-item">');
    //     var imgSource = $(`<img src="animals/resized/mammals/${mammal}.jpg" class="d-block w-100" alt="..."></img>`);
    //     var carouselCaption = $('<div class="carousel-caption d-none d-md-block"></div>');
    //     var label = $(`<h5>${mammal}</h5>`);
    //     var placeholder = $(`<p>This is a/an ${mammal}</p>`);
    //     var div1 = $('</div>');
    //     var div2 = $('</div>');

    //     status.append(imgSource);
    //     status.append(carouselCaption);
    //     status.append(label);
    //     status.append(placeholder);
    //     status.append(div1);
    //     status.append(div2);
        
    //     $('#addElements').append(status);
    // })
    // $(reptiles).each((index, reptile) => {
    //     console.log(reptile);
    //     console.log(reptile);
    //     var status = $('<div class="carousel-item">');
    //     var imgSource = $(`<img src="animals/resized/reptiles/${reptile}.jpg" class="d-block w-100" alt="..."></img>`);
    //     var carouselCaption = $('<div class="carousel-caption d-none d-md-block"></div>');
    //     var label = $(`<h5>${reptile}</h5>`);
    //     var placeholder = $(`<p>This is a/an ${reptile}</p>`);
    //     var div1 = $('</div>');
    //     var div2 = $('</div>');

    //     status.append(imgSource);
    //     status.append(carouselCaption);
    //     status.append(label);
    //     status.append(placeholder);
    //     status.append(div1);
    //     status.append(div2);
        
    //     $('#addElements').append(status);
    // })


})