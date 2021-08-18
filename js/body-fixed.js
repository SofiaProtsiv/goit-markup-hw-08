$(document).ready(function() {
    $('.menu__button').click(function(event) {
        $('body').toggleClass('lock');
    });
});

$(function () {
    $(document).scroll(function () {
      var $nav = $(".page-header");
      $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
      $('.logo--color').toggleClass('secondary-logo', $(this).scrollTop() > $nav.height());
      $('.menu-icon').toggleClass('menu-icon--color', $(this).scrollTop() > $nav.height());
    });
  });