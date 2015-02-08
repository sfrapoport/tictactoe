var gameCounter;
gameCounter = {
    turns: 0,
    xlist: [],
    olist: []
}


function cellClick() {
    gameCounter.turns++;
    if (this.classList.contains("o") || this.classList.contains("x")) {
        alert("Click a different cell");
    } else {
        if (gameCounter.turns % 2 === 0) {
            this.classList.add("o");
            gameCounter.olist.push(this.id);
            if (win(gameCounter.olist)) {
                alert("O has won the game! Click to restart!");
                reset(gameCounter);
            }

        } else {
            this.classList.add("x");
            gameCounter.xlist.push(this.id);
            if (win(gameCounter.xlist)) {
                alert("X has won the game! Click to restart!");
                reset(gameCounter);
            }

        }
        if (gameCounter.turns >= 9) {
            reset(gameCounter);
        }

    }
}


var cells = document.getElementsByClassName("cell");
Array.prototype.forEach.call(cells, function(element) {
    element.addEventListener("click", cellClick, false);
});


function win(list) {
    if (list.indexOf("1") >= 0 && list.indexOf("2") >= 0 && list.indexOf("3") >= 0 ||
        list.indexOf("4") >= 0 && list.indexOf("5") >= 0 && list.indexOf("6") >= 0 ||
        list.indexOf("7") >= 0 && list.indexOf("8") >= 0 && list.indexOf("9") >= 0 ||
        list.indexOf("1") >= 0 && list.indexOf("4") >= 0 && list.indexOf("7") >= 0 ||
        list.indexOf("2") >= 0 && list.indexOf("5") >= 0 && list.indexOf("8") >= 0 ||
        list.indexOf("3") >= 0 && list.indexOf("6") >= 0 && list.indexOf("9") >= 0 ||
        list.indexOf("1") >= 0 && list.indexOf("5") >= 0 && list.indexOf("9") >= 0 ||
        list.indexOf("3") >= 0 && list.indexOf("5") >= 0 && list.indexOf("7") >= 0) {
        return true;
    } else return false;
}


function reset(counter) {
    alert("New game!");
    for (var i =1; i<=9; i++) {
        document.getElementById(i.toString()).classList.remove("x");
        document.getElementById(i.toString()).classList.remove("o");
    }
    counter.turns = 0;
    counter.xlist=[];
    counter.olist=[];
}









