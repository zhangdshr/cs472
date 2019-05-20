$(document).ready(function () {

    let cheatingFlag = false;

    $(".boundary").mouseover(
        function () {
            $(".boundary").addClass("youlose");
            $("h2").text("You Lose!");

        });

    $("#start").click(
        function () {
            cheatingFlag = false;
            $(".boundary").removeClass("youlose")
            $("h2").text("Click the S to begin.");
        }
    );

    $("#end").mouseover(
        function () {

            if (cheatingFlag === false) {
                $("h2").text("You Win!");
            } else {
                alert('Stop cheating')
            }

        }
    );

    $("#maze").mouseleave(
        function () {
            cheatingFlag = true;
        }
    );
});