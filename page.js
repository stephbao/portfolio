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