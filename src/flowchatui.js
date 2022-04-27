d = document.createElement('div'); //This JQuery is for chaticon
$(d).addClass('chat_icon')
    .html('<img src="icon.png" alt="" id="icon" style="height: 80px; width: 80px; float:right;">')
    .appendTo($("body")) //main div

$("body").append(function() {
    return ($("<div>")
        .attr("id", "flowchat")
        .addClass("container")
        .html('<button id="btn-submit" type="submit">Start</button>')
    )
});

$(document).ready(function() {
    $('#icon').on('click', function() {
        if ($('.container').is(':visible')) {
            $('.container').fadeIn(400, function() {
                $('.container').animate({
                    'width': 'hide'
                }, 1000);
            });
        } else {
            $('.container').animate({
                'width': 'show'
            }, 1000, function() {
                $('.container').fadeIn(400);
            });
        };
    });
});