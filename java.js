	
$(document).ready(function() {
  
 $(window).scroll(function () {
      //if you hard code, then use console
      //.log to determine when you want the 
      //nav bar to stick.  
     console.log($(window).scrollTop())
 if ($(window).scrollTop() > 280) {
    $('#nav_bar').addClass('navbar-fixed');
   }
    if ($(window).scrollTop() < 281) {
     $('#nav_bar').removeClass('navbar-fixed');
  }
 });
});
if( /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ) {
    // some code..

var previousScroll = 0,
    headerOrgOffset = $('#nav_bar').height();

$('#nav_bar').height($('#nav_bar').height());

$(window).scroll(function () {
    var currentScroll = $(this).scrollTop();
    if (currentScroll > headerOrgOffset) {
        if (currentScroll > previousScroll) {
            $('#nav_bar').slideUp();
        } else {
            $('#nav_bar').slideDown();
        }
    } 
    previousScroll = currentScroll;
    });
});