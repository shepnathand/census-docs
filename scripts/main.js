$(document).ready(function() {
    $('ul.components li a').click(function(event) {
        event.preventDefault();
        $(window).scrollTop($("*:contains('".concat($(event.target).text(),"'):last")).offset().top);
		window.scrollBy(0,-60);   
    });
});