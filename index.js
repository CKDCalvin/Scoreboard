let scoreHome = document.getElementById("scorehm-el");
let scoreAway = document.getElementById("scoregst-el");
let newGame = document.getElementById("newGame-el");

let scoreH = 0;
let scoreG = 0;
function addOneH () {
    scoreH += 1;
    scoreHome.textContent = scoreH;
}

function addTwoH () {
    scoreH += 2;
    scoreHome.textContent = scoreH;
}

function addThreeH () {
    scoreH += 3;
    scoreHome.textContent = scoreH;
}

function addOneG () {
    scoreG += 1;
    scoreAway.textContent = scoreG;
}

function addTwoG () {
    scoreG += 2;
    scoreAway.textContent = scoreG;
}

function addThreeG () {
    scoreG += 3;
    scoreAway.textContent = scoreG;
}
 
 function resetGame() {
    scoreH = 0;
    scoreG = 0;
    scoreHome.textContent = scoreH;
    scoreAway.textContent = scoreG;
 }