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


// 
document.querySelector('.selected').addEventListener('click', function() {
  // 선택된 영역을 클릭하면 옵션 목록이 열리도록 .open 클래스를 토글
  this.parentElement.classList.toggle('open');
});

document.querySelectorAll('.option').forEach(function(option) {
  option.addEventListener('click', function() {
    const selectedImage = this.querySelector('img').outerHTML; // 선택된 옵션의 이미지 HTML을 가져옴
    document.querySelector('.selected').innerHTML = selectedImage; // 선택된 영역에 이미지를 표시
    document.querySelector('.custom-select').classList.remove('open'); // 옵션 목록을 다시 숨김
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

// 찜하기 버튼
$(function () {
  // heart 클릭 시 heart1 나타내기
  $('.heart').click(function () {
    $(this).toggleClass('off');  // heart 숨기기
    $('.heart1').toggleClass('on');  // heart1 나타내기
  });

  // heart1 클릭 시 다시 heart 나타내기
  $('.heart1').click(function () {
    $(this).toggleClass('on');  // heart1 숨기기
    $('.heart').toggleClass('off');  // heart 나타내기
  });

// 제품 목록 옵션 선택
  $('.price').click(function () {
    $('.sub1').toggle();  // heart1 숨기기
  });

  $('.sub1 li:nth-child(1)').click(function () {
    $('.price> span').text('-성장기 강아지 베이비 케어 시리즈 - 2kg +32,000원'); 
  });
  
  $('.sub1 li:nth-child(2)').click(function () {
    $('.price> span').text('-성장기 강아지 베이비 케어 시리즈 - 4kg +64,000원'); 
  });

});