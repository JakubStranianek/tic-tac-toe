var button1 = $(".buttonsWrapper > button:nth-child(1)");
var button2 = $(".buttonsWrapper > button:nth-child(2)");
var policka = $(".grid-item");
var pocitadlo = 0;

// zmeni sa hracia plocha

function checkFocus() {
    if (button1.is(":focus")) {
        $(".newGame").hide();
        $(".gameStart").show();
    } else if (button2.is(":focus")){
        $(".newGame").hide();
        $(".gameStart").show();
    } else {
        alert("PICK PLAYER 1'S MARK");
    }
}

//na kliknutie buttonu sa zmeni meno hracov
$(".blue, .yellow").on("mousedown", function () {  
    if (button1.is(":focus") && $(this).hasClass("yellow")){
        $("p")[1].textContent = "X (YOU)";
        $("p")[3].textContent = "O (CPU)";
    } else if (button2.is(":focus") && $(this).hasClass("yellow")){
        $("p")[1].textContent = "X (CPU)";
        $("p")[3].textContent = "O (YOU)";
    } else if (button1.is(":focus") && $(this).hasClass("blue")){
        $("p")[1].textContent = "X (PLAYER 1)";
        $("p")[3].textContent = "O (PLAYER 2)";
    } else {
        $("p")[1].textContent = "O (PLAYER 1)";
        $("p")[3].textContent = "X (PLAYER 2)";
    }
})

//skontroluje sa ci je policko obsadene ak ano hodi hlasku ak nie tak prida znak a skontroluje ci nevyhral.
$(".grid-item").on("click", function(){
    //ak je na tahu x
    if ($("#whoGo").attr("src") == "assets/icon-x-outline.svg") {
        if ($(this).find("img").length > 0){
            alert("Policko je obsadene");
        } else {
            $(this).prepend('<img src="assets/icon-x.svg" id="x" alt="icon-x">');
            $("#whoGo").attr("src", "assets/icon-o.svg")
            pocitadlo++;
            skontrolujVysledok(pocitadlo);
        }
    } else {
        //ak je na tahu o
        if ($(this).find("img").length > 0){
            alert("Policko je obsadene");
        } else {
            $(this).prepend('<img src="assets/icon-o.svg" id="o" alt="icon-o">');
            $("#whoGo").attr("src", "assets/icon-x-outline.svg");
            pocitadlo++;
            skontrolujVysledok(pocitadlo);
        }
    }
})

// pri prechode mysou skontroluj hover
$(".grid-item").mouseenter(function () { 
    if ($(this).find("img").length > 0){
        //ak je policko obsadene tak nehoveruj
    } else {
        if ($("#whoGo").attr("src") == "assets/icon-x-outline.svg") {
            $(this).css('background-image', 'url(' + "assets/icon-x-outline-blue.svg" + ')').css('background-repeat', 'no-repeat').css('background-position', '50% 50%');
        } else {
            $(this).css('background-image', 'url(' + "assets/icon-o-outline-yellow.svg" + ')').css('background-repeat', 'no-repeat').css('background-position', '50% 50%');
        } 
    }
});

//ked odidem mysou tak default
$(".grid-item").mouseleave(function () { 
        $(this).css({background: "#1F3641"});
});


function skontrolujVysledok(pocitadlo) {
    if (pocitadlo == 9) {
        if (checkCombinations(0, 1, 2) || checkCombinations(3, 4, 5) || checkCombinations(6, 7, 8) || checkCombinations(1,4,7) || 
    checkCombinations(2,5,8) || checkCombinations(0,4,8) || checkCombinations(2,4,6)) {
        alert("Vyhral si!");    
    } else {
        alert("Remiza!");    
    }
    } else {
        if (checkCombinations(0, 1, 2) || checkCombinations(3, 4, 5) || checkCombinations(6, 7, 8) || checkCombinations(1,4,7) || 
        checkCombinations(2,5,8) || checkCombinations(0,4,8) || checkCombinations(2,4,6)) {
            alert("Vyhral si!");    
        } else {
    
        }
    }
    
}

function checkCombinations(first, second, third) {
    if (policka[first].children.length == 0 || policka[second].children.length == 0 || policka[third].children.length == 0) {

    } else {
        if (policka[first].children.item("").id == policka[second].children.item("").id && policka[second].children.item("").id == policka[third].children.item("").id) {
            return true;
        } else {
            return false;
        }
    }
}

