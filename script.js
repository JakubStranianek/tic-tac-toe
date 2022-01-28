var button1 = $(".buttonsWrapper > button:nth-child(1)");
var button2 = $(".buttonsWrapper > button:nth-child(2)");


function checkFocus() {
    if (button1.is(":focus") || button2.is(":focus")) {
        $(".box").hide();
    } else {
        alert("PICK PLAYER 1'S MARK");
    }
}


