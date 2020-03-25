// @codekit-prepend "jquery.vidbacking.js";

$( document ).ready(function() {
  $( ".nav-item04" ).addClass( "active" );
  $( ".header-heart" ).addClass( "adopt-heart" );
});

$(document).ready(function() {
  console.log("fire");
  $('.video-back').vidbacking({
    'masked': true
  });
});

// @codekit-append "adopt-form.js";
