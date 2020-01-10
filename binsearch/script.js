const result = document.getElementById("current-result");
const btnLess = document.getElementById("btn_less");
const btnMore = document.getElementById("btn_more");

function showResult(tryNum) {
    result.textContent = tryNum;
}


btnLess.addEventListener ('click',doLess);
btnMore.addEventListener ('click',doMore);

const maxNum = parseInt(prompt("Загадайте число от 0 до ","50"));

function doLess (){
    showResult(maxNum);
}

function doMore (){
    showResult(maxNum);
}