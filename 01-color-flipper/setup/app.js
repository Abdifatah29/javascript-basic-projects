/*
    * Get btn by ID
    * Get span by query selector
    * Add event listener
    * Get colors array values randomly
    * Set the body background color
    * set the text to the asigned color
*/

const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
const btn = document.getElementById('btn');
const color = document.querySelector('.color');

btn.addEventListener("click", function () {
    const randomNumber = returnRandomNumber();

    document.body.style.backgroundColor = colors[randomNumber]
    color.textContent = colors[randomNumber]
})

function returnRandomNumber() {
    return Math.floor(Math.random() * colors.length)
}