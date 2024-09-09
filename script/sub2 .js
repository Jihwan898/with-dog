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

//하트 아이콘 변경

document.addEventListener('DOMContentLoaded', () => {
    // 초기 heart 아이콘 이미지 URL
    const heartIconUrl = './images/sub2/item1/heart.png';
    // 변경할 heart 아이콘 이미지 URL
    const heartIconActiveUrl = './images/sub2/item1/heart1'; // 변경할 이미지 URL

    const heartIcon = document.getElementById('heart-icon').querySelector('img');

    heartIcon.addEventListener('click', (event) => {
        event.preventDefault(); // 링크의 기본 동작을 막음

        // 클릭 시 이미지 URL을 변경
        if (heartIcon.src.endsWith(heartIconUrl)) {
            heartIcon.src = heartIconActiveUrl;
        } else {
            heartIcon.src = heartIconUrl;
        }
    });
});


$(function () {
  var swiper = new Swiper('.gallery .gallery_inner ', {
    slidesPerView: 4,//보여지는 갤러리 수
    spaceBetween: 5,//갤러리 사이 간격
    speed: 1500,//버튼을 슬라이드가 넘어가는 시간
    autoplay: {
      delay: 2500,//자동으로 넘어가기 전 머무르는 시간
      disableOnInteraction: false,
    },
    loop: true,//슬라이드 무한반복
    navigation: {//화살표 버튼
      nextEl: '.gallery .swiper-button-next',
      prevEl: '.gallery .swiper-button-prev',
    },
    pagination: {//블릿 버튼
      el: '.gallery .swiper-pagination',
      clickable: true,
    },
  });
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
