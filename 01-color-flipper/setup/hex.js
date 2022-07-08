const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];


/*
    * Generate random hex value
    * Limit hex values to 6
    * Add event listener
    * add generated hex value to body
    * display hex color inside span
*/

const btn = document.getElementById('btn')
const color = document.querySelector('.color')

btn.addEventListener("click", function () {
    let hexColor = "#";
    
    for (let i = 0; i < 6; i++) {
        hexColor += hex[returnRandomHex()]
    }

    document.body.style.backgroundColor = hexColor
    color.textContent = hexColor
})

function returnRandomHex() {
    return Math.floor(Math.random() * hex.length);
}