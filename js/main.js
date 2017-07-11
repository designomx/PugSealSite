!function(a){var b=/iPhone/i,c=/iPod/i,d=/iPad/i,e=/(?=.*\bAndroid\b)(?=.*\bMobile\b)/i,f=/Android/i,g=/(?=.*\bAndroid\b)(?=.*\bSD4930UR\b)/i,h=/(?=.*\bAndroid\b)(?=.*\b(?:KFOT|KFTT|KFJWI|KFJWA|KFSOWI|KFTHWI|KFTHWA|KFAPWI|KFAPWA|KFARWI|KFASWI|KFSAWI|KFSAWA)\b)/i,i=/IEMobile/i,j=/(?=.*\bWindows\b)(?=.*\bARM\b)/i,k=/BlackBerry/i,l=/BB10/i,m=/Opera Mini/i,n=/(CriOS|Chrome)(?=.*\bMobile\b)/i,o=/(?=.*\bFirefox\b)(?=.*\bMobile\b)/i,p=new RegExp("(?:Nexus 7|BNTV250|Kindle Fire|Silk|GT-P1000)","i"),q=function(a,b){return a.test(b)},r=function(a){var r=a||navigator.userAgent,s=r.split("[FBAN");return"undefined"!=typeof s[1]&&(r=s[0]),s=r.split("Twitter"),"undefined"!=typeof s[1]&&(r=s[0]),this.apple={phone:q(b,r),ipod:q(c,r),tablet:!q(b,r)&&q(d,r),device:q(b,r)||q(c,r)||q(d,r)},this.amazon={phone:q(g,r),tablet:!q(g,r)&&q(h,r),device:q(g,r)||q(h,r)},this.android={phone:q(g,r)||q(e,r),tablet:!q(g,r)&&!q(e,r)&&(q(h,r)||q(f,r)),device:q(g,r)||q(h,r)||q(e,r)||q(f,r)},this.windows={phone:q(i,r),tablet:q(j,r),device:q(i,r)||q(j,r)},this.other={blackberry:q(k,r),blackberry10:q(l,r),opera:q(m,r),firefox:q(o,r),chrome:q(n,r),device:q(k,r)||q(l,r)||q(m,r)||q(o,r)||q(n,r)},this.seven_inch=q(p,r),this.any=this.apple.device||this.android.device||this.windows.device||this.other.device||this.seven_inch,this.phone=this.apple.phone||this.android.phone||this.windows.phone,this.tablet=this.apple.tablet||this.android.tablet||this.windows.tablet,"undefined"==typeof window?this:void 0},s=function(){var a=new r;return a.Class=r,a};"undefined"!=typeof module&&module.exports&&"undefined"==typeof window?module.exports=r:"undefined"!=typeof module&&module.exports&&"undefined"!=typeof window?module.exports=s():"function"==typeof define&&define.amd?define("isMobile",[],a.isMobile=s()):a.isMobile=s()}(this);

$(document).ready(function() {
			$("body").imagesLoaded(function(){
				$(".page-loader div").fadeOut();
				$(".page-loader").delay(200).fadeOut("slow");
			});


			 var MOBILE_SITE = 'm/index.html'; // site to redirect to

            // I only want to redirect iPhones, Android phones and a handful of 7" devices
            if (isMobile.any && $(window).width()<1024) {

                document.location = MOBILE_SITE;
            }

			$('.hamburger').click(function(){
				$(this).toggleClass('is-active');
			});

			$('.parallax-bx').parallax();

//			Casas Animations

			$('.belisario-a, .belisario-v').mouseover(function(){
				$('.belisario-img').toggleClass('animatedx pulse');
			});

			$('.belisario-a, .belisario-v').mouseleave(function(){
				$('.belisario-img').toggleClass('animatedx pulse');
			});

			$('.tennyson-a, .tennyson-v').mouseover(function(){
				$('.tennyson-img').toggleClass('animatedx pulse');
			});

			$('.tennyson-a, .tennyson-v').mouseleave(function(){
				$('.tennyson-img').toggleClass('animatedx pulse');
			});

			$('.allanpoe-a, .allanpoe-v').mouseover(function(){
				$('.allanpoe-img').toggleClass('animatedx pulse');
			});

			$('.allanpoe-a, .allanpoe-v').mouseleave(function(){
				$('.allanpoe-img').toggleClass('animatedx pulse');
			});

//			var Wwidth = window.innerWidth;
			var Wheight = window.innerHeight;
			var useHam = 0;

			$('.hamburger').on('click', function() {
				 $('.overlay').height(Wheight-100);

				 if (useHam==0) {
				 	$('.overlay').addClass('open');
				 	useHam=1;
				 }else {
				 	$('.overlay').removeClass('open');
				 	useHam=0;
				 }

			  });

			$('.close-ovrly, .overlay-menu ul a').on('click', function() {
			  $('.hamburger').toggleClass('is-active');
			  $('.overlay').removeClass('open');
			  useHam=0;
			});
			
			var useHamBook = 0;
			
			$('.boo-king-a, .show-booking-nav').on('click', function(ev) {
			
				ev.preventDefault();
				
				 if (useHam==0) {
				 	$('.overlay-book').addClass('opened');
				 	useHamBook=1;
				 }else {
				 	$('.overlay-book').removeClass('opened');
				 	useHamBook=0;
				 }

			  });
			  
			$('.close-ovrly-book').on('click', function() {
			  $('.overlay-book').removeClass('opened');
			  useHamBook=0;
			});
			
			var interSlide = function(){
			    $('.container-xfade').hide();
			    $.each( $('.container-xfade'), function(i, este) {
			        $('div', este).each(function() {
			            $(this).hide();
			        });
			    });
			    setTimeout(function(){
			        $('.container-xfade').fadeIn();
			        var _tiempo=0;
			        var zindex = 1;
			        $.each( $('.container-xfade'), function(i, este) {
			            var _tiempo1=1500;
			            $('div', este).each(function() {
			                $(this).css('z-index',zindex).delay(_tiempo).fadeIn(600);
			                _tiempo+=1500;
			                zindex++;
			            });
			        });
			        setTimeout(function(){
			            $('.container-xfade').fadeOut(600);
			            setTimeout(function(){interSlide()},600);
			        },_tiempo+600);
			    },1500);
			}
			interSlide();
			
			

		});