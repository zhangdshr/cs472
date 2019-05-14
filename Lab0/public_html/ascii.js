(function () {
    "use strict";

    var speed = 500;
    let intervalID = 0;

    window.onload = function () {
        // Select onchange event
        // document.getElementById("animation").onchange = selectChanged;

        // Play control event
        document.getElementById("start").onclick = startButton;

        // Stop control event
        document.getElementById("stop").onclick = stopButton;

        // Change Size
        document.getElementById("fontsize").onchange = changeSize;

        // Turbo speed checkbox
        document.getElementById("turbo").onchange = function () {
            if (document.getElementById("turbo").checked) {
                speed = 120;
            } else {
                speed = 500;
            }
            startButton();
        };
    };


    // Animation work function
    function animationWork(workingArray) {
        let arr = workingArray.split("=====\n");
        let currentMove = 0;

        intervalID = setInterval(function () {
            currentMove++;
            if (currentMove == arr.length) {
                currentMove = 0;
            }
            document.getElementById("text-area").value = arr[currentMove];
        }, speed);
    }

    // Start button function
    function startButton() {

        // Enable stop button
        document.getElementById("stop").disabled = false;

        // Stop the current drawing
        stopButton();

        // Font size
        changeSize();

        // Draw
        selectChanged();
    }

    // Stop button function
    function stopButton() {
        // clear the interval
        clearInterval(intervalID);

        document.getElementById("text-area").value = "";
    }

    // Animation select changed
    function selectChanged() {
        let selected = document.getElementById("animation").value;

        animationWork(ANIMATIONS[selected]);
    }

    // Change font size
    function changeSize() {
        let selected = document.getElementById("fontsize").value;
        document.getElementById("text-area").style.fontSize = selected + "px";
    }

})();




























