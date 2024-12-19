"use strict";


const yearElement = document.getElementById("year");
const resolutionElement = document.getElementById("resolution")
const willMeetResolutionElement = document.getElementById("will-meet-resolution")
const submissionBtn = document.getElementById("submission-btn")


const resolution = "BetterBody";
const currentYear = "2024";
let willMeetResolution = "YES";


function updateYear() {
    yearElement.innerText = currentYear;
}

function updateResolution() {
    resolutionElement.innerText = resolution;
}

function updateWillMeetResolution() {
    willMeetResolutionElement.innerText = willMeetResolution;  
}

function render() {
    updateYear(); 
    updateResolution();
    updateWillMeetResolution();
}

submissionBtn.addEventListener("click", function() {
    render();
})
