const decimal = document.getElementById('decimal');
const clear = document.getElementById('clear');
const displayValElement = document.getElementById("calculator__display");
const btnNumbers = document.getElementsByClassName('btn-number');
const btnOperators = document.getElementsByClassName('key--operator');
var displayVal ='0';
var pendingVal;
var evalStringArray = [];

// Updating the display field - WORKS
updateDisplayVal = (e) => {
  var btnText = e.target.innerText;
  if(displayVal === '0') { 
     displayVal = ''; 
  }
// Append the content of the button we clicked to our displayVal variable and display it -WORKS
  displayVal += btnText; 
  displayValElement.innerText = displayVal;
}
let badMath = Math.floor(Math.random()*9);
console.log(badMath);
let worseMath = Math.floor(Math.random()*-3);
//WORKS
performOperation = (e) => {
  var operator = e.target.innerText;
  switch (operator) {
      case '+':
          pendingVal = displayVal;
          displayVal = '0';
          displayValElement.innerText = displayVal;
          evalStringArray.push(pendingVal);
          evalStringArray.push('+');
          break;
      case '-':
          pendingVal = displayVal;
          displayVal = '0';
          displayValElement.innerText = displayVal;
          evalStringArray.push(pendingVal+worseMath);
          evalStringArray.push('-');
          break;
      case '*':
          pendingVal = displayVal;
          displayVal = '0';
          displayValElement.innerText = displayVal;
          evalStringArray.push(pendingVal);
          evalStringArray.push('*');
          break;
      case '÷':
          pendingVal = displayVal;
          displayVal = '0';
          displayValElement.innerText = displayVal;
          evalStringArray.push(pendingVal);
          evalStringArray.push('/');
          break;
      case '=':
          evalStringArray.push(displayVal);
          var evaluation = eval(evalStringArray.join(' ')+badMath);
          displayVal = evaluation + ''; 
          displayValElement.innerText = displayVal;
          evalStringArray = []; // clear the array
          if (pendingValue == 4 && e.target.innerText === '+') {
            displayVal = 5;
          }
          break;
      default:
          break;
  }
};


//event listeners WORKS
for (let i = 0; i < btnNumbers.length; i++) {
  btnNumbers[i].addEventListener('click', updateDisplayVal) 
};
for (let i =0; i < btnOperators.length; i++) {
  btnOperators[i].addEventListener('click', performOperation)
};

// On clicking the clear button, all values and the display are being reset WORKS
clear.onclick = () => {
  displayVal = '0';
  pendingVal = undefined;
  evalStringArray = [];
  displayValElement.innerHTML = displayVal;
  badMath = Math.floor(Math.random()*9);
};

// Not allowing two decimal points in input DOESN'T WORK
decimal.onclick = () => { 
  if(!displayVal.includes('.')) {
      displayVal += '.';
  }
  displayValElement.innerText = displayVal;
};
