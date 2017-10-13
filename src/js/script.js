var request = require('request');
request('http://www.google.com', function (error, response, body) {
  console.log('www.google.com request statusCode:', response && response.statusCode); // Print the response status code if a response was received
});

$(document).ready(function() {
  //Load homepage
  setupHomeView();
  setupButtons();
})


function setupHomeView(){
  $.get( "views/home.html", function( data ) {
    $( "#container" ).html( data );
  });
}

function setupButtons(){
  $('body').on('click', '#home', function() {
    setupHomeView();
  })
  $('body').on('click', '#other-page', function() {
    $.get( "views/otherpage.html", function( data ) {
      $( "#container" ).html( data );
    });

  })
}
