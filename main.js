$(document).ready(function() {
    var values = [];
    $('div.tag-container').children().click('change', function() {
        var elements = $('div.posts').children().hide(); // hide all the elements
        values.push($(this).text());

        if (values.length > 0) { // if somethings' selected
            for ( index in values ) {
                var value = values[index];
                elements.filter('.' + value).show(); // show the ones we want
            };
            var tag = '<p><span id="tag" value="' + value + '">' + value + '</span></p>';

            if ( $('div.active-tags p span').text().indexOf( value ) == -1 ) {
                $('div.active-tags').append(tag);
            };
        }
    }).trigger('change');

    $('div.tag-container span').hover(function() {
        $(this).css("cursor", "pointer");
        $(this).css("background-color", "#efefef");
    },function () {
        $(this).css("background-color", "#dfdfdf");
    });
});