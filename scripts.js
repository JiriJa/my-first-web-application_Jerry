

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

  
  $('#prvni-it').click(() => {
    $('#id-photo-main').attr('src', dataPrvni.photo);
    $('#photo-title').text(dataPrvni.title);
    $('#photo-descripction').text(dataPrvni.description);
  })

  $('#druhy-it').click(() => {
  $('#id-photo-main').attr('src', dataDruhy.photo);
  $('#photo-title').text(dataDruhy.title);
  $('#photo-descripction').text(dataDruhy.description);
})