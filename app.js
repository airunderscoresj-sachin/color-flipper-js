// !this code is for the simple setup that we, r building
// this basically tells us the kind of the colors we, r going to accept or have in the project
const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
// targeting the button
const btn = document.getElementById('btn');
const color = document.querySelector('.color');

btn.addEventListener('click', function () {
 // body can be targeted using this as its the part of the document object
 // *get random number bw 0 - 3 as the arrays are 0 index based so we, are basically choosing values from the above index
 // const randomNumber = 2;
 const randomNumber = getRandomNumber();
 // console.log(randomNumber);
 document.body.style.backgroundColor = colors[randomNumber];
 color.textContent = colors[randomNumber];
});

// *making a function for generating the random number
function getRandomNumber() {
 return Math.floor(Math.random() * colors.length);
}