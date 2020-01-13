const result = document.getElementById("current-result");
const btnLess = document.getElementById("btn_less");
const btnMore = document.getElementById("btn_more");
const btnEnd = document.getElementById("btn_end");
const endGame = document.getElementById("end-game");
const maxTry = document.getElementById("max-try");
const logTry = document.getElementById("log-try");



let maxNum = parseInt(prompt("Загадайте число от 0 до ","100"));
let cheat = 0;
let logTryNum = 0;
let directionSymbol = "";
let tryCount = 0;

if (isNaN(maxNum) || maxNum < 1) {
    alert("Какую-то фигню ввели. Макс число будет 100");
    maxNum = 100;
}

maxNum +=1;
let currentNum = maxNum;
let jump = Math.round(currentNum / 2);
maxTry.textContent = Math.round(Math.log2(maxNum));
play (-1);

function play(direction) { 
    if ( 
        direction===-1 && jump<10 && currentNum-jump < 0 ||
        direction===1 && jump<10 && currentNum+jump >= maxNum){
        alert("Не может быть )");
    } else if (cheat == 2){
        end();
    } else {
        tryCount += 1;
        currentNum = currentNum + direction * jump;
        showResult(currentNum);
        directionSymbol = direction>0?" > ":" < ";
        logTryNum = jump===Math.round(maxNum / 2)?currentNum:(logTryNum + directionSymbol + currentNum);
        showLogTry(logTryNum);
        
        jump=Math.round(jump / 2);
        if (jump === 1){cheat++};
        console.log(`cheat= ${cheat} currentNum=${currentNum} jump=${jump}`);
    }
}

function doLess (){
    play(-1);
}

function doMore (){
    play(1);
}

function doMore (){
    play(1);
}

function showResult(tryNum) {
    result.textContent = tryNum;
}

function showLogTry(Num) {
    logTry.textContent = Num;
}

function end() {
    endGame.textContent = "Потребовалось попыток: " + tryCount+ ". Было загадано число "+currentNum;
    btnLess.hidden = true;
    btnMore.hidden = true;
    btnEnd.hidden = true;
    document.getElementById("results").hidden = true;


}

btnLess.addEventListener ('click',doLess);
btnMore.addEventListener ('click',doMore);
btnEnd.addEventListener ('click',end);