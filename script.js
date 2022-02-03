var button1 = $(".buttonsWrapper > button:nth-child(1)");
var button2 = $(".buttonsWrapper > button:nth-child(2)");
var policka = $(".grid-item");
var pocitadlo = 0;
let pocetBodovX = 0;
let pocetBodovO = 0;
let pocetBodovRemiza = 0;
let restartButton = $(".newGameStart .gameStart button");
let whoTurn = $("#whoGo");

// zmeni sa hracia plocha

function checkFocus() {
    if (button1.is(":focus")) {
        $(".newGame").hide();
        $(".gameStart").show();
    } else if (button2.is(":focus")) {
        $(".newGame").hide();
        $(".gameStart").show();
    } else {
        alert("PICK PLAYER 1'S MARK");
    }
}

//na kliknutie buttonu sa zmeni meno hracov
$(".blue, .yellow").on("mousedown", function () {
    whoTurn.attr("src", "assets/icon-x-outline.svg");
    if (button1.is(":focus") && $(this).hasClass("yellow")) {
        $("p")[1].textContent = "X (YOU)";
        $("p")[3].textContent = "O (CPU)";
        $(this).addClass("pressed");
        button1.addClass("players");
        button2.addClass("cpu");
    } else if (button2.is(":focus") && $(this).hasClass("yellow")) {
        $("p")[1].textContent = "X (CPU)";
        $("p")[3].textContent = "O (YOU)";
        $(this).addClass("pressed");
        button1.addClass("cpu");
        button2.addClass("players");
    } else if (button1.is(":focus") && $(this).hasClass("blue")) {
        $("p")[1].textContent = "X (PLAYER 1)";
        $("p")[3].textContent = "O (PLAYER 2)";
        $(this).addClass("pressed");
        button1.addClass("players");
        button2.addClass("players");
    } else if (button2.is(":focus") && $(this).hasClass("blue")) {
        $("p")[1].textContent = "X (PLAYER 2)";
        $("p")[3].textContent = "O (PLAYER 1)";
        $(this).addClass("pressed");
        button1.addClass("players");
        button2.addClass("players");
    }
})

//skontroluje sa ci je policko obsadene ak ano hodi hlasku ak nie tak prida znak a skontroluje ci nevyhral.
$(".grid-item").on("click", function () {
    if ($(".yellow").hasClass("pressed") && $("p")[1].textContent == "X (YOU)") {
        novaHraCpu($(this));
    } else if ($(".blue").hasClass("pressed") && $("p")[1].textContent == "X (PLAYER 1)") {
        novaHraTwo($(this));
    }
})


function novaHraTwo(objekt) {
    if (pocitadlo == 8) {
        zahrajTahHrac(objekt);
    }

    if (pocitadlo < 8) {
        zahrajTahHrac(objekt);
        zahrajTahHrac(objekt);
    }

    skontrolujVysledok(pocitadlo);
}

function novaHraCpu(objekt) {
    zahrajTah(objekt);
    skontrolujVysledok(pocitadlo);
}

function zahrajTahHrac(objekt) {
    predTah(objekt);
}

function zahrajTah(objekt) {
    if (predTah(objekt) == false) {
        alert("Policko je obsadene");
    } else if (pocitadlo < 8){
        predTah(objekt);
        zahrajTahPC("o");
    } else if (pocitadlo == 8) {
        predTah(objekt);
    }
}

function predTah(objekt) {
    if (whoTurn.attr("src") == "assets/icon-x-outline.svg") {
        if (objekt.find("img").length > 0) {
           // alert("Policko je obsadene");
            return false;
        } else {
            objekt.prepend('<img src="assets/icon-x.svg" id="x" alt="icon-x">');
            whoTurn.attr("src", "assets/icon-o-outline.svg");
            pocitadlo++;
        }
    } else if (whoTurn.attr("src") == "assets/icon-o-outline.svg") {
        if (objekt.find("img").length > 0) {
           // alert("Policko je obsadene");
            return false;
        } else {
            objekt.prepend('<img src="assets/icon-o.svg" id="o" alt="icon-o">');
            whoTurn.attr("src", "assets/icon-x-outline.svg");
            pocitadlo++;
        }
    }
    return true;
}

function zahrajTahPC(znak) {
    var nahodneCislo = getRandomNumber(0, 8);
    console.log(nahodneCislo);

    while (policka[nahodneCislo].children.length != 0) {
        if (policka[nahodneCislo].children.length > 0) {
            nahodneCislo = getRandomNumber(0, 8);
            console.log(nahodneCislo);
        }
    }

    if (znak == "o") {
        policka.eq(nahodneCislo).prepend('<img src="assets/icon-o.svg" id="o" alt="icon-o">');
        whoTurn.attr("src", "assets/icon-x-outline.svg");
    } else if (znak == "x") {
        policka.eq(nahodneCislo).prepend('<img src="assets/icon-x.svg" id="x" alt="icon-x">');
        whoTurn.attr("src", "assets/icon-o-outline.svg");
    }
    pocitadlo++;
}



// pri prechode mysou skontroluj hover
$(".grid-item").mouseenter(function () {
    if ($(this).find("img").length > 0) {
        //ak je policko obsadene tak nehoveruj
    } else {
        if (whoTurn.attr("src") == "assets/icon-x-outline.svg") {
            $(this).css('background-image', 'url(' + "assets/icon-x-outline-blue.svg" + ')').css('background-repeat', 'no-repeat').css('background-position', '50% 50%');
        } else {
            $(this).css('background-image', 'url(' + "assets/icon-o-outline-yellow.svg" + ')').css('background-repeat', 'no-repeat').css('background-position', '50% 50%');
        }
    }
});

//ked odidem mysou tak default
$(".grid-item").mouseleave(function () {
    $(this).css({ background: "#1F3641" });
});


function skontrolujVysledok(pocitadlo) {
    if (pocitadlo == 9) {
        if (checkCombinations(0, 1, 2) == "x" || checkCombinations(3, 4, 5) == "x" || checkCombinations(6, 7, 8) == "x"
            || checkCombinations(1, 4, 7) == "x" || checkCombinations(2, 5, 8) == "x" || checkCombinations(0, 4, 8) == "x" ||
            checkCombinations(2, 4, 6) == "x" || checkCombinations(0, 3, 6) == "x") {
                $(".popup .wrapper p").text("YOU WON!");
                changePopupX();
            return true;
        } else if (checkCombinations(0, 1, 2) == "o" || checkCombinations(3, 4, 5) == "o" || checkCombinations(6, 7, 8) == "o"
            || checkCombinations(1, 4, 7) == "o" || checkCombinations(2, 5, 8) == "o" || checkCombinations(0, 4, 8) == "o" ||
            checkCombinations(2, 4, 6) == "o" || checkCombinations(0, 3, 6) == "o") {
            //defaultne vyhral O cize x prehral
            $(".popup .wrapper p").text("OH NO, YOU LOST...");
            changePopupO();
            return true;
        } else {
            $(".popup .wrapper p").text("");
            changePopupTied();
            return true;
        }
    } else {
        if (checkCombinations(0, 1, 2) == "x" || checkCombinations(3, 4, 5) == "x" || checkCombinations(6, 7, 8) == "x"
            || checkCombinations(1, 4, 7) == "x" || checkCombinations(2, 5, 8) == "x" || checkCombinations(0, 4, 8) == "x" ||
            checkCombinations(2, 4, 6) == "x" || checkCombinations(0, 3, 6) == "x") {
                $(".popup .wrapper p").text("YOU WON!");
                changePopupX();
            return true;
        } else if (checkCombinations(0, 1, 2) == "o" || checkCombinations(3, 4, 5) == "o" || checkCombinations(6, 7, 8) == "o"
            || checkCombinations(1, 4, 7) == "o" || checkCombinations(2, 5, 8) == "o" || checkCombinations(0, 4, 8) == "o" ||
            checkCombinations(2, 4, 6) == "o" || checkCombinations(0, 3, 6) == "o") {
            //defaultne vyhral O cize x prehral
            $(".popup .wrapper p").text("OH NO, YOU LOST...");
            changePopupO();
            return true;
        } else {

        }
    }
}

function checkCombinations(first, second, third) {
    if (policka[first].children.length == 0 || policka[second].children.length == 0 || policka[third].children.length == 0) {

    } else {
        if (policka[first].children.item("").id == policka[second].children.item("").id && policka[second].children.item("").id == policka[third].children.item("").id) {
            return policka[first].children.item("").id;
        } else {
            return false;
        }
    }
}

function getRandomNumber(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}

function changePopupX() {
    $(".popup .flexRow h1").css("color", "#31C3BD").text("TAKES THE ROUND");
    $(".popup .flexRow img").attr("src", "assets/icon-x.svg").show();
    $(".popup .flexRow:nth-child(3) button:nth-child(1)").text("QUIT").css("width", "76px");
    $(".popup .flexRow:nth-child(3) button:nth-child(2)").text("NEXT ROUND");
    checkScore();
    $(".popup").css("display", "flex");
}

function changePopupO() {
    $(".popup .flexRow h1").css("color", "#F2B137").text("TAKES THE ROUND");
    $(".popup .flexRow img").attr("src", "assets/icon-o.svg").show();
    $(".popup .flexRow:nth-child(3) button:nth-child(1)").text("QUIT").css("width", "76px");
    $(".popup .flexRow:nth-child(3) button:nth-child(2)").text("NEXT ROUND");
    checkScore();
    $(".popup").css("display", "flex");

}

function changePopupTied() {
    $(".popup .flexRow h1").css("color", "#A8BFC9").text("TIED GAME");
    $(".popup .flexRow img").attr("src", "").hide();
    $(".popup .flexRow img").css("display", "none");
    $(".popup .flexRow:nth-child(3) button:nth-child(1)").text("QUIT").css("width", "76px");
    $(".popup .flexRow:nth-child(3) button:nth-child(2)").text("NEXT ROUND");
    checkScore();
    $(".popup").css("display", "flex");
}

function quit(){
    if ($(".popup .flexRow:nth-child(3) button:nth-child(1)").text() == "NO, CANCEL") {
        $(".popup").hide();
    } else {
        $(".popup").hide();
        $(".gameStart").hide();
        $(".newGame").show();
        pocetBodovX = 0;
        pocetBodovO = 0;
        pocetBodovRemiza = 0;
        $(".newGameStart .gameStart .grid-item1 h3").text(pocetBodovX);
        $(".newGameStart .gameStart .grid-item1 h3").text(pocetBodovO);
        $(".newGameStart .gameStart .grid-item1 h3").text(pocetBodovRemiza);   
        cleanGame();
    }
    
}

function nextRound(){
    if ($(".popup .flexRow:nth-child(3) button:nth-child(2)").text() == "YES, RESTART") {
        pocetBodovX = 0;
        pocetBodovO = 0;
        pocetBodovRemiza = 0;
        $(".newGameStart .gameStart .grid-item1 h3").text(pocetBodovX);
        $(".newGameStart .gameStart .grid-item1 h3").text(pocetBodovO);
        $(".newGameStart .gameStart .grid-item1 h3").text(pocetBodovRemiza); 
    }
    $(".popup").hide();
    whoTurn.attr("src", "assets/icon-x-outline.svg");
    cleanGame();
}

function cleanGame() {
    var obrazky = $(".grid-item").find("img");
    pocitadlo = 0;
    obrazky.remove();
}

function checkScore() {
    let winImage = $(".popup .flexRow img");
    if (winImage.attr("src") == "assets/icon-o.svg") {
        pocetBodovO++;
        $(".newGameStart .gameStart .grid-item1.gridYellow h3").text(pocetBodovO); 
    } else if (winImage.attr("src") == "assets/icon-x.svg") {
        pocetBodovX++;
        $(".newGameStart .gameStart .grid-item1.gridBlue h3").text(pocetBodovX); 
    } else {
        pocetBodovRemiza++;
        $(".newGameStart .gameStart .grid-item1.gridSilver h3").text(pocetBodovRemiza); 
    }
}

restartButton.on("click", function() {
    $(".popup .wrapper p").text("");
    $(".popup .flexRow h1").css("color", "#A8BFC9").text("RESTART GAME?");
    $(".popup .flexRow img").attr("src", "").hide();
    $(".popup .flexRow img").css("display", "none");
    $(".popup .flexRow:nth-child(3) button:nth-child(1)").text("NO, CANCEL").css("width", "139px");
    $(".popup .flexRow:nth-child(3) button:nth-child(2)").text("YES, RESTART");
    $(".popup").css("display", "flex");
})