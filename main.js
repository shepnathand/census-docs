$(document).ready(function() {
    $('div.tag-container').children().click('change', function() {
        var elements = $('div.posts').children().hide(); // hide all the elements
        var value = ($(this).text());

        if (value.length > 0) { // if somethings' selected
            elements.filter('.' + value).show(); // show the ones we want
            $("div h2").text('Posts tagged "'+value+'"');
        }
    }).trigger('change');

    $('div.tag-container span').hover(function() {
        $(this).css("background-color", "#efefef");
    },function () {
        $(this).css("background-color", "#dfdfdf");
    });
});