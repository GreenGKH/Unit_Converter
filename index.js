/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const feetConversionEl = document.getElementById("feet-conversion")
const meterConversionEl = document.getElementById("meter-conversion")

const gallonConversionEl = document.getElementById("gallon-conversion")
const literConversionEl = document.getElementById("liter-conversion")

const kilogramConversionEl = document.getElementById("kilogram-conversion")
const poundConversionEl = document.getElementById("pound-conversion")

const inputEl = document.getElementById("input-el")
const inputField = document.querySelectorAll("#input-field")
const buttonEl = document.getElementById("button-el")

const ratioMeterFeet = 3.281
const ratioLiterGallon = 0.264
const ratioKilogramPound = 2.204

buttonEl.addEventListener("click", function () {
    const input = Number(inputEl.value)

    for (let i = 0; i < inputField.length; i++) {
        inputField[i].textContent = input
    }

    feetConversionEl.textContent = (input * ratioMeterFeet).toFixed(3)
    meterConversionEl.textContent = (input / ratioMeterFeet).toFixed(3)

    literConversionEl.textContent = (input * ratioLiterGallon).toFixed(3)
    gallonConversionEl.textContent = (input / ratioLiterGallon).toFixed(3)

    kilogramConversionEl.textContent = (input * ratioKilogramPound).toFixed(3)
    poundConversionEl.textContent = (input / ratioKilogramPound).toFixed(3)

    inputEl.value = ""
})
