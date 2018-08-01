$(document).ready(function($) {
    $('ul.components li a').click(function(event) {
        event.preventDefault();
        console.log($(this).attr('href'));
        $('html,body').animate( {
            scrollTop: $($(this).attr('href')).offset().top
        },1700 );
    })
})