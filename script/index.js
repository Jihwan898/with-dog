document.addEventListener('DOMContentLoaded', function () {
    const elements = [
      document.getElementById('animatedText1'),
    

    ];
  
    const speed = 50; // 타이핑 속도 (ms)
  
    function typeWriter(textElement, text, callback) {
      let i = 0;
      textElement.innerText = '';
  
      function type() {
        if (i < text.length) {
          textElement.innerText += text.charAt(i);
          i++;
          setTimeout(type, speed);
        } else if (callback) {
          callback(); // 타이핑이 끝난 후 콜백 함수 실행
        }
      }
      type();
    }
  
    // Intersection Observer 설정
    const observer = new IntersectionObserver(function(entries) {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // 해당 요소가 화면에 보이면 타이핑 애니메이션 시작
          const index = elements.indexOf(entry.target);
          typeWriter(entry.target, entry.target.innerText, function() {
            observer.unobserve(entry.target); // 애니메이션이 끝나면 관찰 중지
  
            // 다음 요소가 있다면 다음 요소의 타이핑 애니메이션 시작
            if (index + 1 < elements.length) {
              observer.observe(elements[index + 1]);
            }
          });
          // 현재 요소 관찰을 중지하여 중복 실행 방지
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 }); // 50% 이상 보일 때 애니메이션 실행
  
    // 첫 번째 요소를 관찰 시작
    observer.observe(elements[0]);
  });
  function handleScroll() {
    const h1 = document.querySelector('.logo_h1');
  
    const p = document.querySelector('.logo_p');

    // 각 요소의 위치와 화면 상의 위치를 비교
    const h1Position = h1.getBoundingClientRect().top;

    const pPosition = p.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.2;

    // 화면에 요소가 나타났을 때 opacity를 1로 변경
    if (h1Position < screenPosition) {
        h1.style.opacity = '1';
    }

    if (pPosition < screenPosition) {
        p.style.opacity = '1';
    }
}

// 스크롤 이벤트 리스너 추가
window.addEventListener('scroll', handleScroll);


AOS.init({
  duration: 1500 //aos 나타나는 속도
});

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
// 슬라이드
var swiper1 = new Swiper(".mySwiper_mb", {
  slidesPerView: 1,
  spaceBetween: 0,
  mousewheel: true,
  on: {
    slideChange: function () {
      setTimeout(function () {
        swiper1.params.touchReleaseOnEdges = false;
        swiper1.params.mousewheel.releaseOnEdges = false;
      });
    },
    reachEnd: function () {
      setTimeout(function () {
        swiper1.params.touchReleaseOnEdges = true;
        swiper1.params.mousewheel.releaseOnEdges = true;
      }, 500);
    },
    reachBeginning: function () {
      setTimeout(function () {
        swiper1.params.touchReleaseOnEdges = true;
        swiper1.params.mousewheel.releaseOnEdges = true;
      }, 500);
    }
  }


});
// 봉사 카드 슬라이드
var swiper2 = new Swiper(".mySwiper_act", {
  direction: "vertical",
  slidesPerView: 1,
  spaceBetween: 30,
  mousewheel: true,
  pagination: {
    el: ".mySwiper_act .swiper-pagination",
    clickable: true,
  },
  on: {
    slideChange: function () {
      setTimeout(function () {
        swiper2.params.touchReleaseOnEdges = false;
        swiper2.params.mousewheel.releaseOnEdges = false;
      });
    },
    reachEnd: function () {
      setTimeout(function () {
        swiper2.params.touchReleaseOnEdges = true;
        swiper2.params.mousewheel.releaseOnEdges = true;
      }, 500);
    },
    reachBeginning: function () {
      setTimeout(function () {
        swiper2.params.touchReleaseOnEdges = true;
        swiper2.params.mousewheel.releaseOnEdges = true;
      }, 500);
    }
  }
});


// 타이핑효과
document.addEventListener('DOMContentLoaded', function () {
  const textElement = document.getElementById('animatedText');
  const text = textElement.innerText;
  textElement.innerText = '';

  let i = 0;
  const speed = 100; // 타이핑 속도 (ms)

  function typeWriter() {
    if (i < text.length) {
      textElement.innerText += text.charAt(i);
      i++;
      setTimeout(typeWriter, speed);
    }
  }

  typeWriter();
});
// 리뷰슬라이드
$(function () {
  var swiper = new Swiper('.review .gallery_inner', {
    slidesPerView: 3,//보여지는 갤러리 수
    spaceBetween: 0,//갤러리 사이 간격
    speed: 1500,//버튼을 슬라이드가 넘어가는 시간
    autoplay: {
      delay: 2500,//자동으로 넘어가기 전 머무르는 시간
      disableOnInteraction: false,
    },
    loop: true,//슬라이드 무한반복
    navigation: {//화살표 버튼
      nextEl: '.review .gallery_inner .swiper-button-next',
      prevEl: '.review .gallery_inner .swiper-button-prev',
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
