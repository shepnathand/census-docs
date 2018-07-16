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

      if (value.length > 0) { // if somethings' selected
          elements.filter('.' + value).show(); // show the ones we want
      }
    }).trigger('change');
});

//////////////////////////////////////////////////////////
// HTTP Request
document.addEventListener('click', function(e){
  if( e.target.value.indexOf("https") > -1 ) {
    httpGetAsync(e.target.value,function (val) { 
      var file = val.valueOf();
      var rule = "[]";
      newFile = "";
      for (char in file) {
        if ( file[char] == "," ) {
          if (file[char - 1] != "]") {
            newFile += file[char];
          }
        } else if ( rule.indexOf(file[char]) == -1 ) {
          newFile += file[char];
        }
      }
      var blob = new Blob([newFile]);
      if (window.navigator.msSaveOrOpenBlob)  // IE hack; see http://msdn.microsoft.com/en-us/library/ie/hh779016.aspx
      window.navigator.msSaveBlob(blob, "filename.csv");
      else
      {
        var a = window.document.createElement("a");
        a.href = window.URL.createObjectURL(blob, {type: "text/plain"});
        a.download = "filename.csv";
        document.body.appendChild(a);
    a.click();  // IE: "Access is denied"; see: https://connect.microsoft.com/IE/feedback/details/797361/ie-10-treats-blob-url-as-cross-origin-and-denies-access
    document.body.removeChild(a);
  }
});
  };
}, false);

function httpGetAsync(theUrl, callback)
{
  var xmlHttp = new XMLHttpRequest();
  xmlHttp.onreadystatechange = function() { 
    if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
      callback(xmlHttp.responseText);
  }
    xmlHttp.open("GET", theUrl, true); // true for asynchronous
    xmlHttp.send(null);
  }

//////////////////////////////////////////////////////////