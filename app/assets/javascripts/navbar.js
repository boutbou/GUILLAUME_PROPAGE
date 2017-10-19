  var  mn = $(".navbar.navbar-default");
  var  mns = "navbar-fixed-top";
  var  hdr = $('.banner').height();

  $(window).scroll(function() {
    if( $(this).scrollTop() > (hdr+0) ) {
      mn.addClass(mns);
    } else {
      mn.removeClass(mns);
    }
  });

  $('.navbar-toggle').click(function() {
    $('.navbar-nav').toggleClass('is-tapped');
    $('#hamburger').toggleClass('open');
  });

// // on document ready
// $(document).ready(function() {

//     // handle touch device events on drop down, first tap adds class, second navigates
//     $('.touch .sitenavigation li.nav-dropdown > a').on('touchend',
//         function(e) {
//             if ($('.navbar-toggle').is(':hidden')) {
//                 var parent = $(this).parent();
//                 $(this).find('.clicked').removeClass('clicked');
//                 if (parent.hasClass('clicked')) {
//                     window.location.href = $(this).attr('href');
//                 } else {
//                     $(this).addClass('linkclicked');

//                     // close other open menus at this level
//                     $(this).parent().parent().find('.clicked').removeClass('clicked');

//                     parent.addClass('clicked');
//                     e.preventDefault();
//                 }
//             }
//         });

//     // handle the expansion of mobile menu drop down nesting
//     $('.sitenavigation li.nav-dropdown').click(
//         function(event) {
//             if (event.stopPropagation) {
//                 event.stopPropagation();
//             } else {
//                 event.cancelBubble = true;
//             }

//             if ($('.navbar-toggle').is(':visible')) {
//                 $(this).find('> ul').toggle();
//                 $(this).toggleClass('expanded');
//             }
//         }
//     );

//     // prevent links for propagating click/tap events that may trigger hiding/unhiding
//     $('.sitenavigation a.nav-dropdown, .sitenavigation li.nav-dropdown a').click(
//         function(event) {
//             if (event.stopPropagation) {
//                 event.stopPropagation();
//             } else {
//                 event.cancelBubble = true;
//             }
//         }
//     );

//     // javascript fade in and out of dropdown menu
//     $('.no-touch .sitenavigation li').hover(
//         function() {
//             if (!$('.navbar-toggle').is(':visible')) {
//                 $(this).find('> ul').fadeIn(100);
//             }
//         },
//         function() {
//             if (!$('.navbar-toggle').is(':visible')) {
//                 $(this).find('> ul').fadeOut(100);
//             }
//         }
//     );
// });
