$(document).ready(function() {
  $('#Dataset').bind('change', function() {
      var elements = $('div.first-level-container').children().hide(); // hide all the elements
      var value = $(this).val();

      if (value.length > 0) { // if somethings' selected
          elements.filter('.' + value).show(); // show the ones we want
      }
  }).trigger('change');
  
  $('.second-level-select').bind('change', function() {
      var elements = $('div.second-level-container').children().hide(); // hide all the elements
      var value = $(this).val();

      if (value.length > 0) { // if somethings' selected
          elements.filter('.' + value).show(); // show the ones we want
      }
  }).trigger('change');
  
  $('.third-level-select').bind('change', function() {
      var elements = $('div.third-level-container').children().hide(); // hide all the elements
      var value = $(this).val();
      console.log($(this).val());

      if (value.length > 0) { // if somethings' selected
          elements.filter('.' + value).show(); // show the ones we want
      }
  }).trigger('change');
});

//////////////////////////////////////////////////////////
// HTTP Request
document.getElementById("clickMe").onclick = function(){
  httpGetAsync(clickMe.value,function (val) { console.log(val); });
};

function httpGetAsync(theUrl, callback)
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function() { 
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
            callback(xmlHttp.responseText);
    }
    var file = xmlHttp.open("GET", theUrl, true); // true for asynchronous 
    xmlHttp.send(null);
    console.log(file);
}

//////////////////////////////////////////////////////////