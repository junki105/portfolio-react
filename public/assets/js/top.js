
let burger = document.getElementById('burger'),
nav = document.getElementById('main-nav');

burger.addEventListener('click', function(e){
this.classList.toggle('is-open');
nav.classList.toggle('is-open');
});

let burger_m = document.getElementById('burger_m');
burger_m.addEventListener('click', function(e){
nav.classList.toggle('is-open');
document.getElementById('burger').classList.toggle('is-open')
});


var header = document.getElementById("header");
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
if (document.body.scrollTop > 1 || document.documentElement.scrollTop > 1) {
 header.classList.add("header-small");
}
else {
 header.classList.remove("header-small");
}
}
const swiper = new Swiper('.hero-swiper-container', {
  loop: true,
  speed: 3000,
  autoplay: {
      delay: 4000,
      disableOnInteraction: false
  },
  effect: 'fade',
  fadeEffect: {
    crossFade: true
  },
  // If we need pagination
  pagination: {
    el: '.swiper-pagination-hero',
  },

});
const swiper_business = new Swiper('.business-swiper-container', {
  loop: true,
  speed: 500,
  autoplay: {
      delay: 4000,
      disableOnInteraction: false
  },
  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next-business',
    prevEl: '.swiper-button-prev-business',
  },


});
const swiper_business_text = new Swiper('.text-swiper-container', {
  loop: true,
  speed: 500,
  autoplay: {
      delay: 4000,
      disableOnInteraction: false
  },
  effect: 'fade',
  fadeEffect: {
    crossFade: true
  },
  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next-business',
    prevEl: '.swiper-button-prev-business',
  },
  // If we need pagination
  pagination: {
    el: '.swiper-pagination-text',
  }

});
const swiper_work = new Swiper('.swiper-container-work', {
  loop: true,
  speed: 500,
  spaceBetween: 40,
   
  breakpoints: {
    300: {
      slidesPerView: 1.2,
    },
    767: {
      slidesPerView: 2.8, 
    }
  },
  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next-work',
    prevEl: '.swiper-button-prev-work',
  }

});

//テキストのカウントアップ+バーの設定
var bar = new ProgressBar.Line(splash_text, {//id名を指定
  easing: 'easeInOut',//アニメーション効果linear、easeIn、easeOut、easeInOutが指定可能
  duration: 1000,//時間指定(1000＝1秒)
  strokeWidth: 0.2,//進捗ゲージの太さ
  color: '#fff',//進捗ゲージのカラー
  trailWidth: 0.2,//ゲージベースの線の太さ
  trailColor: '#aaa',//ゲージベースの線のカラー
  text: {//テキストの形状を直接指定       
    style: {//天地中央に配置
      position: 'absolute',
      left: '50%',
      top: '50%',
      padding: '0',
      margin: '-30px 0 0 0',//バーより上に配置
      transform:'translate(-50%,-50%)',
      'font-size':'32px',
      color: '#fff',
    },
    autoStyleContainer: false //自動付与のスタイルを切る
  },
  step: function(state, bar) {
    bar.setText(Math.round(bar.value() * 100) + ' %'); //テキストの数値
  }
});

//アニメーションスタート
bar.animate(1.0, function () {//バーを描画する割合を指定します 1.0 なら100%まで描画します
  $("#splash").delay(500).fadeOut(800);//アニメーションが終わったら#splashエリアをフェードアウト
});  


var header = document.getElementById("header");
var contact_btn = document.getElementById('contact_btn');
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 1 || document.documentElement.scrollTop > 1) {
    header.classList.add("header-small");
    contact_btn.style.opacity = 1;
  }
  else {
    header.classList.remove("header-small");
    contact_btn.style.opacity = 0;
  }
}

var header_mail_btn = document.getElementById('header_mail_btn');
var ico_mail_blue = document.getElementById('ico_mail_blue');
var ico_mail_white = document.getElementById('ico_mail_white');
header_mail_btn.onmouseover = function() {
  ico_mail_blue.style.display = "block";
  ico_mail_white.style.display = "none";
}

header_mail_btn.onmouseout = function() {
  ico_mail_blue.style.display = "none";
  ico_mail_white.style.display = "block";
}


var info_btn = document.getElementById('info_btn');
var ico_info_arrow_blue = document.getElementById('info_arrow_blue');
var ico_info_arrow_white = document.getElementById('info_arrow_white');
info_btn.onmouseover = function() {
  ico_info_arrow_blue.style.display = "none";
  ico_info_arrow_white.style.display = "block";
}

info_btn.onmouseout = function() {
  ico_info_arrow_blue.style.display = "block";
  ico_info_arrow_white.style.display = "none";
}

var contact_btn = document.getElementById('contact_btn');
var ico_contact_arrow_blue = document.getElementById('contact_arrow_blue');
var ico_contact_arrow_white = document.getElementById('contact_arrow_white');
contact_btn.onmouseover = function() {
  ico_contact_arrow_blue.style.display = "block";
  ico_contact_arrow_white.style.display = "none";
}

contact_btn.onmouseout = function() {
  ico_contact_arrow_blue.style.display = "none";
  ico_contact_arrow_white.style.display = "block";
}