// 스크롤 이벤트 리스너 추가


// 헤더 숨기기
$(function () {
  //숨긴 메뉴 보이기 
  var didScroll;
  var lastScrollTop = 0;
  var delta = 5;
  var navbarHeight = $('.top').outerHeight();

  $(window).scroll(function (event) {
    didScroll = true;
  });

  setInterval(function () {
    if (didScroll) {
      hasScrolled();
      didScroll = false;
    }
  }, 250);

  function hasScrolled() {
    var st = $(this).scrollTop();


    if (Math.abs(lastScrollTop - st) <= delta) return;


    if (st > lastScrollTop && st > navbarHeight) {
      // Scroll Down 
      $('.top').addClass('nav-up');
    } else {
      // Scroll Up 
      if (st + $(window).height() < $(document).height()) {
        $('.top').removeClass('nav-up');
      }
    }

    lastScrollTop = st;
  }
});




// 배너 슬라이드
$(function () {
  var swiper = new Swiper('.slide_main_banner ', {
    speed: 3000,//버튼을 슬라이드가 넘어가는 시간
    autoplay: {
      delay: 5000,//자동으로 넘어가기 전 머무르는 시간
      disableOnInteraction: false,
    },
    loop: true,//슬라이드 무한반복
    navigation: {//화살표 버튼
      nextEl: '.slide_main_banner .swiper-button-next',
      prevEl: '.slide_main_banner .swiper-button-prev',
    },
    pagination: {//블릿 버튼
      el: '.slide_main_banner .swiper-pagination',
      clickable: true,
    },
  });
});


//제품 슬라이더
$(function () {
  var swiper = new Swiper('.gallery_item1 .gallery_inner ', {
    slidesPerView: 4,//보여지는 갤러리 수
    spaceBetween: 10,//갤러리 사이 간격
    speed: 1500,//버튼을 슬라이드가 넘어가는 시간
    autoplay: {
      delay: 2500,//자동으로 넘어가기 전 머무르는 시간
      disableOnInteraction: false,
    },
    loop: true,//슬라이드 무한반복
    navigation: {//화살표 버튼
      nextEl: '.gallery_item1 .swiper-button-next',
      prevEl: '.gallery_item1 .swiper-button-prev',
    },
    // pagination: {//블릿 버튼
    //   el: '.gallery_item1 .swiper-pagination',
    //   clickable: true,
    // },
  });
});


// 리뷰슬라이더
var swiper = new Swiper(".mySwiper_best_review", {
  effect: "cards",
  grabCursor: true,
});

















//탑버튼
$(window).scroll(function () {
  var height = $(window).scrollTop();
  if (height > 100) {
    $('.top_button1').fadeIn();
  } else {
    $('.top_button1').fadeOut();
  }
});

$('.top_button1').click(function () {
  $('html, body').animate({ scrollTop: 0 }, 400);
  return false;
});

//카카오버튼
$(window).scroll(function () {
  var height = $(window).scrollTop();
  if (height > 100) {
    $('.top_button2').fadeIn();
  } else {
    $('.top_button2').fadeOut();
  }
});
