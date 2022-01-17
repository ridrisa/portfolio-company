$(function () {
  'use strict';
  // move to top postilion after reload page
  $('html , body').animate({ scrollTop: 0 }, 300);
  // -------------------------------------------------------------------------
  let scrollButton = $('#scroll-top');
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      scrollButton.show();
    } else {
      scrollButton.hide();
      $('.nav-header').css({});
    }
  });
  // ------------------------------------------------------------------------->
  // click button to scroll top
  scrollButton.on('click', function () {
    $('html ,body').animate(
      {
        scrollTop: 0,
      },
      400
    );
  });
  // -------------------------------------------------------------------------->
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
  // ------------------------------------------------------------------------->
  // trigger aos animate
  AOS.init();
  // -------------------------------------------------------------------------->
  // all top videos
  const topVideos = [
    {
      title: 'How to create Subdomains ?',
      url: 'https://www.youtube.com/embed/AU7qkiXTiH4',
      desc: 'It is not always necessary to register a new domain name if you already have one and you are interested to have a separate site apart from the main one. Rather than registering a new domain name, you can always create a subdomain using a domain you already own, for example blog.domain.tld or forum.domain.tld (assuming you already hold domain.tld). You can also add multiple levels of subdomains, for instance info.blog.domain.tld.',
    },
    {
      title: 'Playing with the DNS',
      url: 'https://www.youtube.com/embed/mpQZVYPuDGU',
      desc: "What changing your DNS server on your Xbox's Network Settings will NOT do is improve gameplay. DNS servers have practically nothing to do with multiplaye",
    },
    {
      title: 'Everything about the virtual hosts',
      url: 'https://www.youtube.com/embed/iBjirLD5X7Q',
      desc: 'The latter variant of virtual hosts is sometimes also called host-based or non-IP virtual hosts. Below is a list of documentation pages which explain all',
    },
    {
      title: 'How to monitor your website ?',
      url: 'https://www.youtube.com/embed/mdXdaBQJBmM',
      desc: 'Modern website monitoring to identify issues causing slow and frustrating load times. Detect, diagnose and resolve performance issues with greater speed and accuracy. Track JavaScript Errors. Find Bugs Before Users Do. Just Add Snippet To Start. Build Healthier Apps.',
    },
    {
      title: 'Uncharted Beating The Last Boss',
      url: 'https://www.youtube.com/embed/shGmhXCsVbg',
      desc: 'This is an extremely easy way to beat final boss on Uncharted 2. You can do this in Crushing mode or Brutal. Just stand in the same point all the time. He will not throw you and just keep punching him until the tree sap spawns for you to shoot.',
    },
    {
      title: 'Ys Oath In Felghana Overview',
      url: 'https://www.youtube.com/embed/ObDHDDIxfZ0',
      desc: "Synopsis. As in Ys III, Adol Christin and his friend Dogi are traveling to Dogi's hometown of Felghana three years after the events of the first two games. Upon arriving, they discover that evil happenings are threatening the townspeople, and it is up to Adol to put a stop to it",
    },
    {
      title: 'Ys Series All Games Ending',
      url: 'https://www.youtube.com/embed/68U_AQ_LhJY',
      desc: 'Games — In terms of the number of game releases, the Ys series is second only ... (who had ported all three previous games to that platform)',
    },
  ];
  // -------------------------------------------------------------------------->
  // click item to show video and sow details video
  $('.top-videos .box .list-item li:not(:first-of-type) .title').on(
    'click',
    function () {
      let title = $(this).text();
      console.log(title);
      topVideos.map((video) => {
        if (title === video.title) {
          $('.top-videos .box .video .info .title').text($(this).text());
          $('.top-videos .box .video .info .desc').text(video.desc);
          $('.top-videos .box .video iframe').attr('src', video.url);
        }
      });
    }
  );
  // -------------------------------------------------------------------------->
  // count down until events date
  setInterval(() => {
    const events = countdown(new Date(2022, 9, 10));
    $('.events .items .info .time .unit:first-of-type .count').text(
      events.days
    );
    $('.events .items .info .time .unit:nth-of-type(2) .count').text(
      events.hours
    );
    $('.events .items .info .time .unit:nth-of-type(3) .count').text(
      events.minutes
    );
    $('.events .items .info .time .unit:last-of-type .count').text(
      events.seconds
    );
  }, 1000);
  // -------------------------------------------------------------------------->
  // Show Loading
  $('.loading-overlay .spinner').fadeOut(400, function () {
    $('body').css('overflow', 'hidden');
    $(this)
      .parent()
      .fadeOut(400, function () {
        $(this).remove();
      });
  });
});
