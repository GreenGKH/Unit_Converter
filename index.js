/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const lenghtEl = document.getElementById("length-box")
const volumeEl = document.getElementById("volume-box")
const massEl = document.getElementById("mass-box")
const inputEl = document.getElementById("input-el")
const buttonEl = document.getElementById("button-el")

// Initial state
let inputVal = 0

// Functions
buttonEl.addEventListener("click", function () {
    inputVal = inputEl.value
    render()
})

// Meter | feet
function convertMtoF(inputVal) {
    return inputVal * 3.281
}
function convertFtoM(inputVal) {
    return inputVal / 3.281
}

//Liter | gallon
function convertLtoG(inputVal) {
    return inputVal * 0.264
}
function convertGtoL(inputVal) {
    return inputVal / 0.264
}

// Kilogram | pound
function convertKtoP(inputVal) {
    return inputVal * 2.204
}
function convertPtoK(inputVal) {
    return inputVal / 2.204
}

// Rendering
function render() {
}