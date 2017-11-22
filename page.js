// NAVBAR
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-50px";
  }
}

// TYPEWRITER EFFECT
var i = 0;
var text = 'Hey, Im Stephanie';
var speed = 50;

function typeWriter() {
  if (i < text.length) {
    document.getElementById("intro").innerHTML += text.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}