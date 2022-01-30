var button1 = $(".buttonsWrapper > button:nth-child(1)");
var button2 = $(".buttonsWrapper > button:nth-child(2)");


function checkFocus() {
    if (button1.is(":focus") || button2.is(":focus")) {
        $(".newGame").hide();
        $(".gameStart").show();
    } else {
        alert("PICK PLAYER 1'S MARK");
    }
}

$(".grid-item").on("click", function(){
    //ak je na tahu x
    if ($("#whoGo").attr("src") == "assets/icon-x-outline.svg") {
        if ($(this).find("img").length > 0){
            alert("Policko je obsadene");
        } else {
            $(this).prepend('<img src="assets/icon-x.svg" id="x" alt="icon-x">');
            $("#whoGo").attr("src", "assets/icon-o.svg")
        }
    } else {
        //ak je na tahu o
        if ($(this).find("img").length > 0){
            alert("Policko je obsadene");
        } else {
            $(this).prepend('<img src="assets/icon-o.svg" id="o" alt="icon-o">');
            $("#whoGo").attr("src", "assets/icon-x-outline.svg");
        }
    }
})

$(".grid-item").mouseenter(function () { 
    if ($("#whoGo").attr("src") == "assets/icon-x-outline.svg") {
        $(this).css('background-image', 'url(' + "assets/icon-x-outline-blue.svg" + ')').css('background-repeat', 'no-repeat').css('background-position', '50% 50%');
    } else {
        $(this).css('background-image', 'url(' + "assets/icon-o-outline-yellow.svg" + ')').css('background-repeat', 'no-repeat').css('background-position', '50% 50%');
    } 
});

$(".grid-item").mouseleave(function () { 
        $(this).css({background: "#1F3641"});
});

function skontrolujVysledok() {
     
}

