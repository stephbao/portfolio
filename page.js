/* Open Home Page onClick */
function openHome() {
    document.getElementById("about").style.display = "none";
    document.getElementById("portfolio").style.display = "none";
    document.getElementById("contact").style.display = "none";
    document.getElementById("home").style.display = "block";
    document.getElementById("cmlh").style.display = "none";
    document.getElementById("todo").style.display = "none";


    document.getElementById("linkabout").style.color = "dimgrey";
    document.getElementById("linkportfolio").style.color = "dimgrey";
    document.getElementById("linkcontact").style.color = "dimgrey";
}


/* Open About Page onClick */
function openAbout() {
    document.getElementById("about").style.display = "block";
    document.getElementById("portfolio").style.display = "none";
    document.getElementById("contact").style.display = "none";
    document.getElementById("home").style.display = "none";
    document.getElementById("cmlh").style.display = "none";
    document.getElementById("todo").style.display = "none";


    document.getElementById("linkabout").style.color = "#EB8888";
    document.getElementById("linkportfolio").style.color = "dimgrey";
    document.getElementById("linkcontact").style.color = "dimgrey";
}

/* Open Portfolio Page onClick */
function openPortfolio() {
    document.getElementById("about").style.display = "none";
    document.getElementById("portfolio").style.display = "block";
    document.getElementById("contact").style.display = "none";
    document.getElementById("home").style.display = "none";
    document.getElementById("cmlh").style.display = "none";
    document.getElementById("todo").style.display = "none";


    document.getElementById("linkabout").style.color = "dimgrey";
    document.getElementById("linkportfolio").style.color = "#EB8888";
    document.getElementById("linkcontact").style.color = "dimgrey";
}

/* Open Contact Page onClick */
function openContact() {
    document.getElementById("about").style.display = "none";
    document.getElementById("portfolio").style.display = "none";
    document.getElementById("contact").style.display = "block";
    document.getElementById("home").style.display = "none";
    document.getElementById("cmlh").style.display = "none";
    document.getElementById("todo").style.display = "none";

    document.getElementById("linkabout").style.color = "dimgrey";
    document.getElementById("linkportfolio").style.color = "dimgrey";
    document.getElementById("linkcontact").style.color = "#EB8888";
}

function pCMLH() {
    document.getElementById("cmlh").style.display = "block";
    document.getElementById("portfolio").style.display = "none";
}

function pTODO() {
    document.getElementById("todo").style.display = "block";
    document.getElementById("portfolio").style.display = "none";
}