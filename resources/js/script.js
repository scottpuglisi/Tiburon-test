$(document).ready(function() {

/* Scrolling Effect */
$('.js--scroll-to-intro').click(function () {
  $('html, body').animate({scrollTop: $('.js--section-intro').offset().top}, 1000);
});

$('.js--scroll-to-form').click(function () {
  $('html, body').animate({scrollTop: $('.js--section-form').offset().top}, 2000);
});

$('.js--scroll-to-locker').click(function () {
  $('html, body').animate({scrollTop: $('.js--section-intro').offset().top}, 1000);
});


$('.js--scroll-cs-1').click(function () {
  $('html, body').animate({scrollTop: $('.js--cs-1').offset().top}, 900);
});

$('.js--scroll-cs-2').click(function () {
  $('html, body').animate({scrollTop: $('.js--cs-2').offset().top}, 1500);
});

$('.js--scroll-cs-3').click(function () {
  $('html, body').animate({scrollTop: $('.js--cs-3').offset().top}, 1600);
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
        {  $('#sticky-advant-bg').addClass('dropdown-content-advant-sticky');
        $('#sticky-advant-bg').removeClass('dropdown-content-advant');}
        
        else
        {   $('#sticky-advant-bg').removeClass('dropdown-content-advant-sticky');
        $('#sticky-advant-bg').addClass('dropdown-content-advant');}
        
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
        {  $('#sticky-advant-nav').addClass('dropbtn-advant-sticky');
        $('#sticky-advant-nav').removeClass('dropbtn-advant');}
        
        else
        {   $('#sticky-advant-nav').removeClass('dropbtn-advant-sticky');
        $('#sticky-advant-nav').addClass('dropbtn-advant');}
        
        },
        {   offset: '59px;'}
        );

      $('.js--section-intro').waypoint(function(direction) {
        if (direction == "down")
        {  $('#js--sticky-get-locker-btn').addClass('btn-get-lockers-nav-sticky');
        $('#js--sticky-get-locker-btn').removeClass('btn-get-lockers-nav');}
        
        else
        {   $('#js--sticky-get-locker-btn').removeClass('btn-get-lockers-nav-sticky');
        $('#js--sticky-get-locker-btn').addClass('btn-get-lockers-nav');}
        
        },
        {   offset: '59px;'}
        );

      $('.js--section-intro').waypoint(function(direction) {
        if (direction == "down")
        {  $('#js--sticky-get-locker-btn2').addClass('btn-border-trans2');
        $('#js--sticky-get-locker-btn2').removeClass('btn-border-trans');}
        
        else
        {   $('#js--sticky-get-locker-btn2').removeClass('btn-border-trans2');
        $('#js--sticky-get-locker-btn2').addClass('btn-border-trans');}
        
        },
        {   offset: '59px;'}
        );

      $('.js--section-intro').waypoint(function(direction) {
        if (direction == "down")
        {  $('#js--sticky-nav-update').addClass('sticky-nav-update-link');
        $('#js--sticky-nav-update').removeClass('nav-update-link');}
        
        else
        {   $('#js--sticky-nav-update').removeClass('sticky-nav-update-link');
        $('#js--sticky-nav-update').addClass('nav-update-link');}
        
        },
        {   offset: '59px;'}
        );
        
});


/* Mobile Nav */
$('.js--nav-icon').click(function() {
  var nav = $('.js--main-nav');
  var icon = $('.js--nav-icon i');
  var update = $('.js--nav-update');

  nav.slideToggle(200);
  if (icon.hasClass('ion-md-reorder')) {
      icon.addClass('ion-md-close');
      icon.removeClass('ion-md-reorder');
  } else {
      icon.addClass('ion-md-reorder');
      icon.removeClass('ion-md-close');
  }

  if (icon.hasClass('ion-md-reorder')) {
      update.addClass('nav-update-text');
      update.removeClass('nav-update-text-2');
  } else {
      update.addClass('nav-update-text-2');
      update.removeClass('nav-update-text');
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

/* Animation */

$('.js--fade-in-1').waypoint(function(direction)  {
  $('.js--fade-in-1').addClass('animate__fadeIn');
}, {
  offset: '60%'
});

$('.js--fade-in-2').waypoint(function(direction)  {
  $('.js--fade-in-2').addClass('animate__fadeIn');
}, {
  offset: '90%'
});

$('.js--fade-in-3').waypoint(function(direction)  {
  $('.js--fade-in-3').addClass('animate__fadeIn');
}, {
  offset: '90%'
});

$('.js--fade-in-4').waypoint(function(direction)  {
  $('.js--fade-in-4').addClass('animate__fadeIn');
}, {
  offset: '90%'
});

$('.js--zoom-in-1').waypoint(function(direction)  {
  $('.js--zoom-in-1').addClass('animate__zoomIn');
}, {
  offset: '99%'
});

$('.js--back-in-up-1').waypoint(function(direction)  {
  $('.js--back-in-up-1').addClass('animate__backInUp');
}, {
  offset: '99%'
});

$('.js--back-in-up-2').waypoint(function(direction)  {
  $('.js--back-in-up-2').addClass('animate__backInUp');
}, {
  offset: '99%'
});

$('.js--fade-in-up-1').waypoint(function(direction)  {
  $('.js--fade-in-up-1').addClass('animate__fadeInUp');
}, {
  offset: '80%'
});

$('.js--fade-in-up-2').waypoint(function(direction)  {
  $('.js--fade-in-up-2').addClass('animate__fadeInUp');
}, {
  offset: '60%'
});

$('.js--fade-in-up-3').waypoint(function(direction)  {
  $('.js--fade-in-up-3').addClass('animate__fadeInUp');
}, {
  offset: '30%'
});

$('.js--fade-in-up-4').waypoint(function(direction)  {
  $('.js--fade-in-up-4').addClass('animate__fadeInUp');
}, {
  offset: '80%'
});

$('.js--fade-in-up-5').waypoint(function(direction)  {
  $('.js--fade-in-up-5').addClass('animate__fadeInUp');
}, {
  offset: '80%'
});

$('.js--fade-in-up-6').waypoint(function(direction)  {
  $('.js--fade-in-up-6').addClass('animate__fadeInUp');
}, {
  offset: '80%'
});


$('.js--in-down-big-1').waypoint(function(direction)  {
  $('.js--in-down-big-1').addClass('animate__fadeInDownBig');
}, {
  offset: '105%'
});

$('.js--fade-in-left-1').waypoint(function(direction)  {
  $('.js--fade-in-left-1').addClass('animate__fadeInLeft');
}, {
  offset: '90%'
});

$('.js--fade-in-left-2').waypoint(function(direction)  {
  $('.js--fade-in-left-2').addClass('animate__fadeInLeft');
}, {
  offset: '80%'
});

$('.js--fade-in-left-3').waypoint(function(direction)  {
  $('.js--fade-in-left-3').addClass('animate__fadeInLeft');
}, {
  offset: '90%'
});

$('.js--fade-in-left-4').waypoint(function(direction)  {
  $('.js--fade-in-left-4').addClass('animate__fadeInLeft');
}, {
  offset: '90%'
});

$('.js--fade-in-left-5').waypoint(function(direction)  {
  $('.js--fade-in-left-5').addClass('animate__fadeInLeft');
}, {
  offset: '87%'
});

$('.js--fade-in-left-6').waypoint(function(direction)  {
  $('.js--fade-in-left-6').addClass('animate__fadeInLeft');
}, {
  offset: '86%'
});

$('.js--fade-in-left-7').waypoint(function(direction)  {
  $('.js--fade-in-left-7').addClass('animate__fadeInLeft');
}, {
  offset: '85%'
});

$('.js--fade-in-right-1').waypoint(function(direction)  {
  $('.js--fade-in-right-1').addClass('animate__fadeInRight');
}, {
  offset: '90%'
});

$('.js--fade-in-right-2').waypoint(function(direction)  {
  $('.js--fade-in-right-2').addClass('animate__fadeInRight');
}, {
  offset: '83%'
});

$('.js--fade-in-right-3').waypoint(function(direction)  {
  $('.js--fade-in-right-3').addClass('animate__fadeInRight');
}, {
  offset: '80%'
});

$('.js--fade-in-right-4').waypoint(function(direction)  {
  $('.js--fade-in-right-4').addClass('animate__fadeInRight');
}, {
  offset: '87%'
});

$('.js--fade-in-right-5').waypoint(function(direction)  {
  $('.js--fade-in-right-5').addClass('animate__fadeInRight');
}, {
  offset: '86%'
});

$('.js--fade-in-right-6').waypoint(function(direction)  {
  $('.js--fade-in-right-6').addClass('animate__fadeInRight');
}, {
  offset: '85%'
});

$('.js--fade-in-right-7').waypoint(function(direction)  {
  $('.js--fade-in-right-7').addClass('animate__fadeInRight');
}, {
  offset: '90%'
});

$('.js--fade-in-right-8').waypoint(function(direction)  {
  $('.js--fade-in-right-8').addClass('animate__fadeInRight');
}, {
  offset: '90%'
});

$('.js--fast-in-right-1').waypoint(function(direction)  {
  $('.js--fast-in-right-1').addClass('animate__lightSpeedInRight');
}, {
  offset: '90%'
});

$('.js--fast-in-right-2').waypoint(function(direction)  {
  $('.js--fast-in-right-2').addClass('animate__lightSpeedInRight');
}, {
  offset: '50%'
});

$('.js--flip-in-x-1').waypoint(function(direction)  {
  $('.js--flip-in-x-1').addClass('animate__flipInX');
}, {
  offset: '105%'
});

$('.js--flip-in-x-2').waypoint(function(direction)  {
  $('.js--flip-in-x-2').addClass('animate__flipInX');
}, {
  offset: '105%'
});

$('.js--tada-1').waypoint(function(direction)  {
  $('.js--tada-1').addClass('animate__tada');
}, {
  offset: '100%'
});