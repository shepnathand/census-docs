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

$('div.tag-container').children().click('change', function() {
    var value = ($(this).text());
    sessionStorage.setItem('tag', value);
}).trigger('change');

$(document).ready(function() {
    var elements = $('div.posts').children().hide();
    var pageTitle = $('div h2');
    if ( sessionStorage.getItem('tag') ) {
        var value = sessionStorage.getItem('tag');
        sessionStorage.removeItem('tag');

        if (value.length > 0) { // if somethings' selected
            pageTitle.text('Posts tagged "'+value+'"').show();
            elements.filter('.' + value).show(); // show the ones we want
        } else {
            pageTitle.show();
            elements.show();
        };
    } else {
        pageTitle.show();
        elements.show();
    };
});