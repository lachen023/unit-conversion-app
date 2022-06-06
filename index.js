const convertBtn = document.getElementById("convert-btn")

let len = document.getElementById("length")
let vol = document.getElementById("volume")
let m = document.getElementById("mass")

let userInput = document.getElementById("user-input")

convertBtn.addEventListener("click", function() {
    let inputValue = userInput.value
    lengthConversion(inputValue)
    volumeConversion(inputValue)
    massConversion(inputValue)
    userInput.value = ""
})


function lengthConversion(num) {
    let ftToM = (num / 3.281).toFixed(3)
    let mToFt = (num * 3.281).toFixed(3)
    let string = `${num} meters = ${mToFt} feet | ${num} feet = ${ftToM} meters`

    len.textContent = `${string}`   
}

function volumeConversion(num) {
    let lToG = (num / 3.785).toFixed(3)
    let gtoL = (num * 3.785).toFixed(3)
    let string = `${num} liters = ${lToG} gallons | ${num} gallons = ${gtoL} liters`

    vol.textContent = `${string}`
}

function massConversion (num) {
    let kToP = (num * 2.205).toFixed(3)
    let pToK = (num / 2.205).toFixed(3)
    let string = `${num} kilos = ${kToP} pounds | ${num} pounds = ${pToK} kilos`

    m.textContent = `${string}`
}