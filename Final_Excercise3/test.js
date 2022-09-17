var result1= document.getElementById("result");
var number1 = 0;
var number2 = 0;
var sum = 0;
var subtract = 0;
var multiply = 0;
var devide = 0;

function updateNum1(val) {
    number1 = parseInt(val.target.value);
    console.log(typeof number1);
}

function updateNum2(val) {
    number2 = parseInt(val.target.value);
    console.log(typeof number2);
}

function addition() {
    sum = number1 + number2;
    result1.value = sum;
} 

function subtraction() {
    subtract = number1 - number2;
    result1.value = subtract;
}

function multiplication() {
    multiply = number1 * number2;
    result1.value = multiply;
}

function devision() {
    devide = number1 / number2;
    result1.value = devide;
}

