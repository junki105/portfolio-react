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
/* Onload demo - dirty timeout */
// let clickEvent = new Event('click');

// window.addEventListener('load', function(e) {
// 	burger.dispatchEvent(clickEvent);
	
// 	setTimeout(function(){
// 		burger.dispatchEvent(clickEvent);
    
// 	}, 5500);
// });