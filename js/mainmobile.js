!function(a){var b=/iPhone/i,c=/iPod/i,d=/iPad/i,e=/(?=.*\bAndroid\b)(?=.*\bMobile\b)/i,f=/Android/i,g=/(?=.*\bAndroid\b)(?=.*\bSD4930UR\b)/i,h=/(?=.*\bAndroid\b)(?=.*\b(?:KFOT|KFTT|KFJWI|KFJWA|KFSOWI|KFTHWI|KFTHWA|KFAPWI|KFAPWA|KFARWI|KFASWI|KFSAWI|KFSAWA)\b)/i,i=/IEMobile/i,j=/(?=.*\bWindows\b)(?=.*\bARM\b)/i,k=/BlackBerry/i,l=/BB10/i,m=/Opera Mini/i,n=/(CriOS|Chrome)(?=.*\bMobile\b)/i,o=/(?=.*\bFirefox\b)(?=.*\bMobile\b)/i,p=new RegExp("(?:Nexus 7|BNTV250|Kindle Fire|Silk|GT-P1000)","i"),q=function(a,b){return a.test(b)},r=function(a){var r=a||navigator.userAgent,s=r.split("[FBAN");return"undefined"!=typeof s[1]&&(r=s[0]),s=r.split("Twitter"),"undefined"!=typeof s[1]&&(r=s[0]),this.apple={phone:q(b,r),ipod:q(c,r),tablet:!q(b,r)&&q(d,r),device:q(b,r)||q(c,r)||q(d,r)},this.amazon={phone:q(g,r),tablet:!q(g,r)&&q(h,r),device:q(g,r)||q(h,r)},this.android={phone:q(g,r)||q(e,r),tablet:!q(g,r)&&!q(e,r)&&(q(h,r)||q(f,r)),device:q(g,r)||q(h,r)||q(e,r)||q(f,r)},this.windows={phone:q(i,r),tablet:q(j,r),device:q(i,r)||q(j,r)},this.other={blackberry:q(k,r),blackberry10:q(l,r),opera:q(m,r),firefox:q(o,r),chrome:q(n,r),device:q(k,r)||q(l,r)||q(m,r)||q(o,r)||q(n,r)},this.seven_inch=q(p,r),this.any=this.apple.device||this.android.device||this.windows.device||this.other.device||this.seven_inch,this.phone=this.apple.phone||this.android.phone||this.windows.phone,this.tablet=this.apple.tablet||this.android.tablet||this.windows.tablet,"undefined"==typeof window?this:void 0},s=function(){var a=new r;return a.Class=r,a};"undefined"!=typeof module&&module.exports&&"undefined"==typeof window?module.exports=r:"undefined"!=typeof module&&module.exports&&"undefined"!=typeof window?module.exports=s():"function"==typeof define&&define.amd?define("isMobile",[],a.isMobile=s()):a.isMobile=s()}(this);

$(document).ready(function() {

	var DESKTOP_SITE = '/index.html'; // site to redirect to

	// I only want to redirect iPhones, Android phones and a handful of 7" devices
	if (!isMobile.any || $(window).width()>1023) {

		document.location = DESKTOP_SITE;
	}

	$('.hamburgermobile').click(function(){
		$(this).toggleClass('is-active');
	});
	$('.hamburgermobilenav').click(function(){
		$(this).toggleClass('is-active');
	});

	$('.parallax-bx').parallax();

	//			Casas Animations

	$('.belisario-a img').mouseover(function(){
		$('.belisario-img').toggleClass('animatedx pulse');
	});

	$('.belisario-a img').mouseleave(function(){
		$('.belisario-img').toggleClass('animatedx pulse');
	});

	$('.tennyson-a img').mouseover(function(){
		$('.tennyson-img').toggleClass('animatedx pulse');
	});

	$('.tennyson-a img').mouseleave(function(){
		$('.tennyson-img').toggleClass('animatedx pulse');
	});

	$('.allanpoe-a img').mouseover(function(){
		$('.allanpoe-img').toggleClass('animatedx pulse');
	});

	$('.allanpoe-a img').mouseleave(function(){
		$('.allanpoe-img').toggleClass('animatedx pulse');
	});

	//			var Wwidth = window.innerWidth;
	var Wheight = window.innerHeight;
	var useHam = 0;

	$('.hamburgermobile').on('click', function() {
		$('.overlay-hamburgermobile').height(Wheight);

		if (useHam==0) {
			$('.overlay-hamburgermobile').addClass('open');
			useHam=1;
		}else {
			$('.overlay-hamburgermobile').removeClass('open');
			useHam=0;
		}

	});
	$('.hamburgermobilenav').on('click', function() {
		$('.overlay-hamburgermobile').height(Wheight);

		if (useHam==0) {
			$('.overlay-hamburgermobile').addClass('open');
			useHam=1;
		}else {
			$('.overlay-hamburgermobile').removeClass('open');
			useHam=0;
		}
	});

	$('.close-ovrly, .overlay-menu ul a').on('click', function() {
		
		if($('.navbar-fixed').is(":visible")){
			$('.hamburgermobilenav').toggleClass('is-active');
		}else{
			$('.hamburgermobile').toggleClass('is-active');
		}
		$('.overlay').removeClass('open');
		checkx();
		useHam=0;
		
	});
	$('.close-ovrly2').on('click', function() {
		
		$('.overlay').removeClass('open');
		checkx();
		useHam=0;
	});

	$('.booknowmodal').on('click', function() {
		$('.overlay-book').height(Wheight);

		if (useHam==0) {
			$('.overlay-book').addClass('open');
			//useHam=1;
		}else {
			$('.overlay-book').removeClass('open');
			//useHam=0;
		}
		checkx();
	});

	var checkx = function(){
		setTimeout(function(){
			if($('.overlay').is(":visible")){
				$('.hamburgermobilenav').removeClass('is-active');
				$('.hamburgermobile').removeClass('is-active');
			}else{
				$('.hamburgermobilenav').addClass('is-active');
				$('.hamburgermobile').addClass('is-active');
			}
		},500);
	}




});

$(window).on('resize', function () {

});