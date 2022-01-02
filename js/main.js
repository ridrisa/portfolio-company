$(function () {
  // list items navbar click item to move section
  $('.nav-header .container .nav-links > li a').on('click', function () {
    $('html,body').animate(
      {
        scrollTop: $('#' + $(this).data('value')).offset().top - 60,
      },
      400
    );
    $(this).parent().addClass('active').siblings().removeClass('active');
  });
  // -------------------------------------------------------------------------->
});
