

let dataPrvni = {
    photo: './fotky/IMG_20200410_094426.jpg',
    title: 'PEUGEOT 306, RZ 5S5 4242, color: Cyan',
    description: 'The car is before tire change'
  };
let dataDruhy = {
    photo: './fotky/IMG_20200410_111004.jpg',
    title: 'PEUGEOT 306, RZ 5S5 4242, color: Cyan',
    description: 'The car is after tire change'
  };
  let dataTreti = {
    photo: './fotky/IMG_20200410_113026.jpg',
    title: 'SUZUKI SWIFT, RZ 3AM 6833, color: Racing Red',
    description: 'The car is before tire change'
  };
   let dataCtvrty = {
    photo: './fotky/IMG_20200410_124004.jpg',
    title: 'SUZUKI SWIFT, RZ 3AM 6833, color: Racing Red',
    description: 'The car is after tire change'
  };
  let dataPaty = {
    photo: './fotky/IMG_20200410_125334.jpg',
    title: 'CITROEN GRAND PICASSO, RZ 2SC 4246, color: Purple Blue',
    description: 'The car is before tire change'
  };
  let dataSesty = {
    photo: './fotky/IMG_20200410_140607.jpg',
    title: 'CITROEN GRAND PICASSO, RZ 2SC 4246, color: Purple Blue',
    description: 'The car is after tire change'
  };
  let dataPosledni = {
    photo: './fotky/IMG_20200410_140644.jpg',
    title: 'Tires for 3 cars: Winter',
    description: 'Three sets of tires for 3 cars: season Winter'
  };

  
  $('#prvni-it').click(() => {
    // $('#id-photo-main').attr('src', dataPrvni.photo);
    // $('#photo-title').text(dataPrvni.title);
    // $('#photo-descripction').text(dataPrvni.description);
    currentPhoto = 0;
    loadPhoto(currentPhoto);
  })
  
  $('#druhy-it').click(() => {
    // $('#id-photo-main').attr('src', dataDruhy.photo);
    // $('#photo-title').text(dataDruhy.title);
    // $('#photo-descripction').text(dataDruhy.description);
     currentPhoto = 1;
    loadPhoto(currentPhoto);   
  })

   $('#treti-it').click(() => {
    // $('#id-photo-main').attr('src', dataTreti.photo);
    // $('#photo-title').text(dataTreti.title);
    // $('#photo-descripction').text(dataTreti.description);
    currentPhoto = 2;
    loadPhoto(currentPhoto);
  })

   $('#ctvrty-it').click(() => {
    // $('#id-photo-main').attr('src', dataCtvrty.photo);
    // $('#photo-title').text(dataCtvrty.title);
    // $('#photo-descripction').text(dataCtvrty.description);
    currentPhoto = 3;
    loadPhoto(currentPhoto);
  })
  
  $('#paty-it').click(() => {
    // $('#id-photo-main').attr('src', dataPaty.photo);
    // $('#photo-title').text(dataPaty.title);
    // $('#photo-descripction').text(dataPaty.description);
    currentPhoto = 4;
    loadPhoto(currentPhoto);
  })
    
  $('#sesty-it').click(() => {
    // $('#id-photo-main').attr('src', dataSesty.photo);
    // $('#photo-title').text(dataSesty.title);
    // $('#photo-descripction').text(dataSesty.description);
    currentPhoto = 5;
    loadPhoto(currentPhoto);
  })
      
  $('#posledni-it').click(() => {
    // $('#id-photo-main').attr('src', dataPosledni.photo);
    // $('#photo-title').text(dataPosledni.title);
    // $('#photo-descripction').text(dataPosledni.description);
    currentPhoto = 6;
    loadPhoto(currentPhoto);
  })




  let currentPhoto = 0;
  let imagesData = [dataPrvni, dataDruhy, dataTreti, dataCtvrty, dataPaty, dataSesty, dataPosledni];

  $('#id-photo-main').attr('src', imagesData[currentPhoto].photo);

  let loadPhoto = (photoNumber) => {
    $('#id-photo-main').attr('src', imagesData[photoNumber].photo);
    // ...
  }

  
  loadPhoto(currentPhoto);

  $('#sipka-vpravo').click(() => {
    currentPhoto++;
     if (currentPhoto >= 7) {
      currentPhoto = 0;
    }   
    loadPhoto(currentPhoto);
  })



  
  $('#sipka-vlevo').click(() => {
    (currentPhoto = currentPhoto - 1);
    if (currentPhoto <= -1) {
      currentPhoto = 6;
    }    
    
    loadPhoto(currentPhoto);
  })

