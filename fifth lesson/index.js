// var myName = "Odili Chinedum Christian";
// alert ("My name is " + myName + " and i  love programming.");

// let num1 = 6;
// let num2 = 4;
// let num3 = 2;
// let num4 = 8;

// let media = (num1 + num2 + num3 + num4)/4

// console.log('Num1: ', num1)
// console.log('Num2: ', num2)
// console.log('Num3: ', num3)
// console.log('Num4: ', num4)
// console.log("The media is " + media)

// let number = prompt("Input a number");

// if (number > 1){
//     console.log('Number is greater than 1');
// }else{
//     console.log("Number is less than 1 ");
// }

// let cidade = prompt("Input a city");

// if(cidade === "Luanda"){
//     console.log("Capital");
// }else{
//     console.log("Not a capital")
// }

// if(cidade === "Luanda" || cidade === "luanda"){
//     console.log("Capital");
// }else{
//     console.log("Not a capital")
// }


// function sum(n1,n2){
//     return n1 + n2;
// }

// console.log(sum(3,5));

const text = document.getElementById('text');
const btn = document.getElementById('btn');

function changeText(){
    text.innerHTML = 'Welcome to the world of Javascript';
    text.style.color = 'red';
}

function returnText(){
    text.innerHTML = 'Javascript Tutorial';
    text.style.color = 'black';
    // text.style.backgroundColor = 'blue'
}

btn.onclick = changeText;
// text.onmouseover = returnText
text.addEventListener("mouseover", returnText)