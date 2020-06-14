// !this functionality is basically we are building for the hex color
const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const btn = document.getElementById('btn');
const color = document.querySelector('.color');
btn.addEventListener('click', function () {
 // for hex color # is prefixed always it is a requirement, so simply saving it into a variable
 let hexColor = '#';
 for (let i = 0; i < 6; ++i) {
  // hexColor += hex[0]; 
  // todo always before setting up the full function always setup the hardcoded data firstly and then start the real function coding as we have dome above always this is the right way of setting up the function
  hexColor += hex[getRandomNumber()];
  // the above operator means that left + right value = the left value
  // console.log(getRandomNumber);  
 }
 color.textContent = hexColor;
 document.body.style.backgroundColor = hexColor;
});

function getRandomNumber() {
 return Math.floor(Math.random() * hex.length);
}