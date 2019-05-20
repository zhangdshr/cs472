$(
    function () {

        $("#puzzlearea").children().each(
            function (index) {

                var x = ((index % 4) * 100);
                var y = (Math.floor(index / 4) * 100);

                $(this).addClass("puzzlepiece");

                $(this).css({
                    left: x + 'px',
                    top: y + 'px',
                    backgroundPosition: -x + 'px ' + (-y) + 'px'
                })

            }
        );

        $('.puzzlepiece').click(function () {
            var t = $(this).clone(); //複製當前點擊的div
            $('.no_see').before($(this)); //在空白div的前面插入複製的div
            $(this).before($('.no_see')); //把空白div插入到點擊div的前面
            t.before($(this)) //把點擊的div插入到複製div的前面
            t.remove();  //移除複製的div
        })

    }
);


