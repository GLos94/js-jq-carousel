$(document).ready(function() {
  var nextButton = $('.next');
  var prevButton = $('.prev');

// per andare a destra
  nextButton.click(nextImage);


// per andare a sinistra
  prevButton.click(prevImage)

// controllo tastiera
$(document).keydown(function(){
  var key = event.which;
  if (key == 39) {
    nextImage();
  } else if (key == 37) {
    prevImage();
  }
  });

});


// FUNCTIONS

function nextImage() {
  var imgActive = $('.slider-wrapper img.active');
  imgActive.removeClass('active');

  // se arrivo all'ultima immagine devo ritornare alla prima
  if (imgActive.hasClass('last') == true) {
    $('.slider-wrapper img.first').addClass('active');
  } else {
    imgActive.next().addClass('active');
  }
  // scroll
  var iActive = $('.slider-wrapper i.active');
  iActive.removeClass('active');
  iActive.next().addClass('active');

  if (iActive.hasClass('last') == true) {
    $('.slider-wrapper i.first').addClass('active');
  } else {
    iActive.next().addClass('active');
  }
}


function prevImage() {
  var imgActive = $('.slider-wrapper img.active');
  imgActive.removeClass('active');

  if (imgActive.hasClass('first') == true) {
    $('.slider-wrapper img.last').addClass('active');
  } else {
    imgActive.prev().addClass('active');
  }
  // scroll
  var iActive = $('.slider-wrapper i.active');
  iActive.removeClass('active');
  iActive.prev().addClass('active');

  if (iActive.hasClass('first') == true) {
    $('.slider-wrapper i.last').addClass('active');
  } else {
    iActive.prev().addClass('active');
  }

}
