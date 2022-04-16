var window_width = $(window).width() - $('#object').width();
console.log(window_width);

var document_height = $(document).height() - $(window).height();
console.log(document_height);
document_height = 3000;

$(function () {
    $(window).scroll(function () {
        var scroll_position = $(window).scrollTop();
        console.log("scrolling")
        var object_position_left = window_width * (scroll_position / document_height) + 500;
        console.log(object_position_left)
        $('#object').css({
            'left': object_position_left
        });
    });
});