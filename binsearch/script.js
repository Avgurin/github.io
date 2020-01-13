const result = document.getElementById("current-result");
const btnLess = document.getElementById("btn_less");
const btnMore = document.getElementById("btn_more");

let maxNum = parseInt(prompt("Загадайте число от 1 до ","100"));
let cheat = 0;

if (isNaN(maxNum) || maxNum < 1) {
    alert("Какую-то фигню ввели. Макс число будет 100");
    maxNum = 100;
}

let currentNum = maxNum;
let jump = Math.round(currentNum / 2);
play (-1);

function play(direction) { 
    if (cheat == 2 || 
        jump<10 && currentNum-jump < 0 ||
        jump<10 && currentNum+jump > maxNum){
        alert("Не может быть )");
    } else {
        currentNum = currentNum + direction * jump;
        showResult(currentNum);
        jump=Math.round(jump / 2);
        if (jump === 1){cheat++};
        console.log(`cheat= ${cheat} currentNum=${currentNum} jump=${jump}`);
    }
}


/*
let currentNum = maxNum-Math.round(maxNum / 2);
let jump = currentNum;
let cheat = 0;

showResult(currentNum);

function play(direction) {
    jump=Math.round(jump / 2);
    console.log(`cheat= ${cheat} currentNum=${currentNum} jump=${jump}`);
    if (jump === 1){cheat++};
    if (cheat === 2 || currentNum+jump > maxNum || currentNum-jump < 0){
        alert("Не может быть )");
    } else {
        currentNum = currentNum + direction * jump;
        showResult(currentNum);
    }
}
*/

function doLess (){
    play(-1);
}

function doMore (){
    play(1);
}

function showResult(tryNum) {
    result.textContent = tryNum;
}

btnLess.addEventListener ('click',doLess);
btnMore.addEventListener ('click',doMore);