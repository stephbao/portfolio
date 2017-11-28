/* Open when button is clicked */
function openNav() {
    document.getElementById("nav").style.width = "100%";
    document.getElementById("open").style.display = "none";
    document.getElementById("close").style.display = "block";
}

/* Close when button is clicked */
function closeNav() {
    document.getElementById("nav").style.width = "0%";
    document.getElementById("open").style.display = "block";
    document.getElementById("close").style.display = "none";
}

/* Smooth Scrolling - credit to online source*/
$(document).ready(function(){
  $("a").on('click', function(event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 700, function(){
        window.location.hash = hash;
      });
    }
  });
});

/* Rotate circle button on scroll */
$(window).scroll(function() {
  var theta = $(window).scrollTop()/300 % (Math.PI);
  $('#open').css({ transform: 'rotate(' + theta + 'rad)' });
  $('#arrow').css({ transform: 'rotate(-' + theta + 'rad)' });
  $('#open').css({ transform: 'rotate(-' + theta + 'rad)' });
  $('#arrow').css({ transform: 'rotate(' + theta + 'rad)' });
});