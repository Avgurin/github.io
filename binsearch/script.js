const result = document.getElementById("current-result");
const btnLess = document.getElementById("btn_less");
const btnMore = document.getElementById("btn_more");

const maxNum = parseInt(prompt("Загадайте число от 0 до ","100"));
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