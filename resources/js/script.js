$(document).ready(function() {

/* Scrolling Effect */
$('.js--scroll-to-intro').click(function () {
  $('html, body').animate({scrollTop: $('.js--section-intro').offset().top}, 1000);
});

$('.js--scroll-to-form').click(function () {
  $('html, body').animate({scrollTop: $('.js--section-form').offset().top}, 2750);
});

$('.js--scroll-to-locker').click(function () {
  $('html, body').animate({scrollTop: $('.js--section-intro').offset().top}, 1000);
});


/* Sticky Navigation */
    $('.js--section-intro').waypoint(function(direction) {
        if (direction == "down")
        {  $('nav').addClass('sticky');
        $('nav').removeClass('top-sticky');}
        
        else
        {   $('nav').removeClass('sticky');
        $('nav').addClass('top-sticky');}
        
        },
        {   offset: '59px;'}
        );


    $('.js--section-intro').waypoint(function(direction) {
        if (direction == "down")
        {  $('#sticky-nav-bg').addClass('dropdown-content-ele-sticky');
        $('#sticky-nav-bg').removeClass('dropdown-content-ele');}
        
        else
        {   $('#sticky-nav-bg').removeClass('dropdown-content-ele-sticky');
        $('#sticky-nav-bg').addClass('dropdown-content-ele');}
        
        },
        {   offset: '59px;'}
        );

    $('.js--section-intro').waypoint(function(direction) {
        if (direction == "down")
        {  $('#sticky-adv-bg').addClass('dropdown-content-adv-sticky');
        $('#sticky-adv-bg').removeClass('dropdown-content-adv');}
        
        else
        {   $('#sticky-adv-bg').removeClass('dropdown-content-adv-sticky');
        $('#sticky-adv-bg').addClass('dropdown-content-adv');}
        
        },
        {   offset: '59px;'}
        );

    $('.js--section-intro').waypoint(function(direction) {
        if (direction == "down")
        {  $('#sticky-ele-nav').addClass('dropbtn-ele-sticky');
        $('#sticky-ele-nav').removeClass('dropbtn-ele');}
        
        else
        {   $('#sticky-ele-nav').removeClass('dropbtn-ele-sticky');
        $('#sticky-ele-nav').addClass('dropbtn-ele');}
        
        },
        {   offset: '59px;'}
        );

    $('.js--section-intro').waypoint(function(direction) {
        if (direction == "down")
        {  $('#sticky-adv-nav').addClass('dropbtn-adv-sticky');
        $('#sticky-adv-nav').removeClass('dropbtn-adv');}
        
        else
        {   $('#sticky-adv-nav').removeClass('dropbtn-adv-sticky');
        $('#sticky-adv-nav').addClass('dropbtn-adv');}
        
        },
        {   offset: '59px;'}
        );
});



/* Mobile Nav */
$('.js--nav-icon').click(function() {
  var nav = $('.js--main-nav');
  var icon = $('.js--nav-icon i');

  nav.slideToggle(200);
  if (icon.hasClass('ion-md-reorder')) {
      icon.addClass('ion-md-close');
      icon.removeClass('ion-md-reorder');
  } else {
      icon.addClass('ion-md-reorder');
      icon.removeClass('ion-md-close');
  }

});


var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}