
$(document).ready(function() {

    var $square = ".t3-square";
    var currentSymbol = "x";

    $(document).on("click tap", $square, function() {
        if ($(this).html() === "") {
            if (currentSymbol === "x") {
                $(this).html("x");
                currentSymbol = "o";
            } else {
                $(this).html("o");
                currentSymbol = "x";
            }
        }
    });
});