/* Open when someone clicks on the span element */
function openNav() {
    document.getElementById("nav").style.width = "100%";
    document.getElementById("open").style.display = "none";
    document.getElementById("close").style.display = "block";
}

/* Close when someone clicks on the "x" symbol inside the overlay */
function closeNav() {
    document.getElementById("nav").style.width = "0%";
    document.getElementById("open").style.display = "block";
    document.getElementById("close").style.display = "none";
}

$(document).ready(function(){
  // Add smooth scrolling to all links
  $("a").on('click', function(event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 700, function(){
        window.location.hash = hash;
      });
    } // End if
  });
});
