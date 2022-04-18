d = document.createElement('div'); //This JQuery is for chaticon
$(d).addClass('chat_icon')
    .html('<img src="icon.png" alt="" id="icon" style="height: 80px; width: 80px; float:right;">')
    .appendTo($("body")) //main div

/*.click(function() {
    $('.chat_icon').fadeToggle('active');

});*/

$("body").append(function() {
    return ($("<div/>")
        .attr("id", "flowchat")
        .attr('onclick', 'openform()')
        .html("<div class='input-form'><form action='contact.php'></form><div class='header'><p>Bele Technologies Pvt Ltd </p></div><input type='text' placeholder='Enter Your Name' required><input type='email' placeholder='Enter Your Email' required><button type='submit' id='btn-submit'>Submit</button></div>")
        //.html("<div class='chatbot_div'><div class='wrapper'><div class='head-text'>Let vhat</div><div class='chat-box'><div class='desc-text'>Please fill out the form below to start chatting with the next available agent.</div><form action='#''><div class='field'><input type='text' placeholder='Your Name' required></div><div class='field'><input type='email' placeholder='Email Address' required></div><div class='field'><button type='submit' id='submitID'>Start Chat</button></div></form></div></div></div>")
        .addClass("container"))


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