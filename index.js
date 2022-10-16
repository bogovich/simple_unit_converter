/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

let lengthArea = document.getElementById("length-conversion")
let volumeArea = document.getElementById("volume-conversion")
let massArea = document.getElementById("mass-conversion")
const convertBtn = document.getElementById("convert_btn")
const conversionInput = document.getElementById("conversion_amount")

function convertLength() {
    if (conversionInput.value) {
        const metersToFeet = (conversionInput.value * 3.281).toFixed(3)
        const feetToMeters = (conversionInput.value / 3.281).toFixed(3)
        const feetOutput = `${conversionInput.value} meters = ${metersToFeet} feet`
        const meterOutput = `${conversionInput.value} feet = ${feetToMeters} meters`
        const conversionOutput = `${feetOutput} | ${meterOutput}`

        return conversionOutput
    }
}

function convertVolume() {
    if (conversionInput.value) {
        const litersToGalon = (conversionInput.value * 0.264).toFixed(3)
        const galonToLiters = (conversionInput.value / 0.264).toFixed(3)
        const galonOutput = `${conversionInput.value} liters = ${litersToGalon} galons`
        const literOutput = `${conversionInput.value} gallons = ${galonToLiters} liters`
        const conversionOutput = `${galonOutput} | ${literOutput}`

        return conversionOutput
    }
}

function convertMass() {
    if (conversionInput.value) {
        const kilosToPounds = (conversionInput.value * 2.204).toFixed(3)
        const poundsToKilos = (conversionInput.value / 2.204).toFixed(3)
        const poundsOutput = `${conversionInput.value} kilos = ${kilosToPounds} pounds`
        const kilosOutput = `${conversionInput.value} pounds = ${poundsToKilos} kilos`
        const conversionOutput = `${poundsOutput} | ${kilosOutput}`

        return conversionOutput
    }
}

function convertAmount() {
    const lengthOutput = convertLength()
    const volumeOutput = convertVolume()
    const massOutput = convertMass()

    lengthArea.textContent = lengthOutput
    volumeArea.textContent = volumeOutput
    massArea.textContent = massOutput
}

convertBtn.addEventListener("click", function () {
    convertAmount()
})

