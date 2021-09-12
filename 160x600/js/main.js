var bgimg = [];
var logo = [];
var copy = [];
var maincopy = [];
var cta = [];
var exiturl = [];
var fadeOutSpeed = [];
var fadeInSpeed = [];

window.onload = function() {
    if (!Enabler.isInitialized()) {
        Enabler.addEventListener(studio.events.StudioEvent.INIT, getData);
    } else {
        getData();
    }
}

function getData() {

    bgimg.push("images/background_160x600_x2.jpg");
    logo.push("images/logo_hogarth_160x600_x2.png");

    maincopy.push("We're");
    maincopy.push("The world's<br>leading");
    maincopy.push("production company.");
    copy.push("digital");
    copy.push("print");
    copy.push("broadcast");
    copy.push("conceptual");
    copy.push("transcreation");
    copy.push("creative");
    cta.push("Find out more");
    exiturl.push("https://www.hogarthww.com/");
    fadeOutSpeed.push("0.3");
    fadeInSpeed.push("1");

    setData();
}

function setData() {
    document.getElementById('container').addEventListener('click', adExit);
    document.getElementById('replay-btn').addEventListener('click', reload);
    document.getElementById('container').style.display = "block";

    document.getElementById("copy-frame01").innerHTML = copy[0];
    document.getElementById("copy-frame02").innerHTML = copy[1];
    document.getElementById("copy-frame03").innerHTML = copy[2];
    document.getElementById("copy-frame04").innerHTML = copy[3];
    document.getElementById("copy-frame05").innerHTML = copy[4];
    document.getElementById("copy-frame06").innerHTML = copy[5];
    document.getElementById("cta-copy").innerHTML = cta[0];

    document.getElementById("maincopy1").innerHTML = maincopy[0];
    ;document.getElementById("maincopy2").innerHTML = maincopy[1];
    ;document.getElementById("maincopy3").innerHTML = maincopy[2];
    ;
    document.getElementById("img-bg").src = bgimg[0];
    document.getElementById("logo-hogarth").src = logo[0];

    checkAdvisible();
}

function checkAdvisible() {
    if (!Enabler.isVisible()) {
        Enabler.addEventListener(studio.events.StudioEvent.VISIBLE, startAnimation);
    } else {
        startAnimation();
    }
}

function adExit() {
    Enabler.exitOverride("creativeblock", exiturl[0]);
}
function reload() {
    tl.restart();
}
var tl = gsap.timeline();

function startAnimation() {

    tl.addLabel("ad", 0)
    // show frame content
    .to("#container", {
        duration: fadeInSpeed[0],
        alpha: 1,
        ease: "easeIn"
    }, "ad");

    tl.addLabel("frame01", 0)
    // show frame content
    .to("#copy-frame01", {
        duration: fadeOutSpeed[0],
        alpha: 1,
        ease: "easeIn"
    }, "frame01+=" + fadeOutSpeed[0]);

    tl.addLabel("frame012", 0)
    // show frame content
    .to("#maincopy1", {
        duration: fadeInSpeed[0],
        alpha: 1,
        ease: "easeIn"
    }, "frame01");

    tl.addLabel("frame013", 0)
    // show frame content
    .to("#maincopy2", {
        duration: fadeInSpeed[0],
        alpha: 1,
        ease: "easeIn"
    }, "frame01");

    tl.addLabel("frame014", 0)
    // show frame content
    .to("#maincopy3", {
        duration: fadeInSpeed[0],
        alpha: 1,
        ease: "easeIn"
    }, "frame01");

    tl.addLabel("imgBG", 0)//bg zoom effect
    .to("#img-bg", {
        duration: 16,
        scale: 2,
        ease: "linear"
    }, "imgBG+=" + fadeOutSpeed[0]);

    tl.addLabel("frame02", 3)
    // remove prev frame content
    .to("#copy-frame01", {
        duration: fadeOutSpeed[0],
        alpha: 0,
        ease: "easeIn"
    }, "frame02")
    // show frame content
    .to("#copy-frame02", {
        duration: fadeInSpeed[0],
        alpha: 1,
        ease: "easeIn"
    }, "frame02+=" + fadeOutSpeed[0]);

    tl.addLabel("frame03", 6)
    // remove prev frame content
    .to("#copy-frame02", {
        duration: fadeOutSpeed[0],
        alpha: 0,
        ease: "easeIn"
    }, "frame03")
    // show frame content
    .to("#copy-frame03", {
        duration: fadeInSpeed[0],
        alpha: 1,
        ease: "easeIn"
    }, "frame03+=" + fadeOutSpeed[0]);

    tl.addLabel("frame04", 9)
    // remove prev frame content
    .to("#copy-frame03", {
        duration: fadeOutSpeed[0],
        alpha: 0,
        ease: "easeIn"
    }, "frame04")
    // show frame content
    .to("#copy-frame04", {
        duration: fadeInSpeed[0],
        alpha: 1,
        ease: "easeIn"
    }, "frame04+=" + fadeOutSpeed[0]);

    tl.addLabel("frame05", 12)
    // remove prev frame content
    .to("#copy-frame04", {
        duration: fadeOutSpeed[0],
        alpha: 0,
        ease: "easeIn"
    }, "frame05")
    // show frame content
    .to("#copy-frame05", {
        duration: fadeInSpeed[0],
        alpha: 1,
        ease: "easeIn"
    }, "frame05+=" + fadeOutSpeed[0])

    tl.addLabel("frame06", 15)
    // remove prev frame content
    .to("#copy-frame05", {
        duration: fadeOutSpeed[0],
        alpha: 0,
        ease: "easeIn"
    }, "frame06")
    // show frame content
    .to("#copy-frame01", {
        duration: fadeInSpeed[0],
        alpha: 1,
        ease: "easeIn"
    }, "frame06+=" + fadeOutSpeed[0]).to("#cta-copy, #cta-circle", {
        duration: fadeInSpeed[0],
        alpha: 1,
        ease: "easeIn"
    }, "frame06+=" + fadeOutSpeed[0]);

    tl.addLabel("refreshBtn", 16)
    // remove prev frame content
    .to("#replay-btn", {
        duration: fadeOutSpeed[0],
        alpha: 1,
        ease: "easeIn"
    }, "refreshBtn")
}
