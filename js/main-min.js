!function(e){var i=/iPhone/i,o=/iPod/i,n=/iPad/i,a=/(?=.*\bAndroid\b)(?=.*\bMobile\b)/i,t=/Android/i,l=/(?=.*\bAndroid\b)(?=.*\bSD4930UR\b)/i,s=/(?=.*\bAndroid\b)(?=.*\b(?:KFOT|KFTT|KFJWI|KFJWA|KFSOWI|KFTHWI|KFTHWA|KFAPWI|KFAPWA|KFARWI|KFASWI|KFSAWI|KFSAWA)\b)/i,d=/IEMobile/i,r=/(?=.*\bWindows\b)(?=.*\bARM\b)/i,c=/BlackBerry/i,u=/BB10/i,b=/Opera Mini/i,h=/(CriOS|Chrome)(?=.*\bMobile\b)/i,v=/(?=.*\bFirefox\b)(?=.*\bMobile\b)/i,p=new RegExp("(?:Nexus 7|BNTV250|Kindle Fire|Silk|GT-P1000)","i"),f=function(e,i){return e.test(i)},m=function(e){var m=e||navigator.userAgent,g=m.split("[FBAN");return void 0!==g[1]&&(m=g[0]),g=m.split("Twitter"),void 0!==g[1]&&(m=g[0]),this.apple={phone:f(i,m),ipod:f(o,m),tablet:!f(i,m)&&f(n,m),device:f(i,m)||f(o,m)||f(n,m)},this.amazon={phone:f(l,m),tablet:!f(l,m)&&f(s,m),device:f(l,m)||f(s,m)},this.android={phone:f(l,m)||f(a,m),tablet:!f(l,m)&&!f(a,m)&&(f(s,m)||f(t,m)),device:f(l,m)||f(s,m)||f(a,m)||f(t,m)},this.windows={phone:f(d,m),tablet:f(r,m),device:f(d,m)||f(r,m)},this.other={blackberry:f(c,m),blackberry10:f(u,m),opera:f(b,m),firefox:f(v,m),chrome:f(h,m),device:f(c,m)||f(u,m)||f(b,m)||f(v,m)||f(h,m)},this.seven_inch=f(p,m),this.any=this.apple.device||this.android.device||this.windows.device||this.other.device||this.seven_inch,this.phone=this.apple.phone||this.android.phone||this.windows.phone,this.tablet=this.apple.tablet||this.android.tablet||this.windows.tablet,"undefined"==typeof window?this:void 0},g=function(){var e=new m;return e.Class=m,e};"undefined"!=typeof module&&module.exports&&"undefined"==typeof window?module.exports=m:"undefined"!=typeof module&&module.exports&&"undefined"!=typeof window?module.exports=g():"function"==typeof define&&define.amd?define("isMobile",[],e.isMobile=g()):e.isMobile=g()}(this),$(document).ready(function(){isMobile.any&&$(window).width()<1024&&(document.location="m/index.html"),$(".hamburger").click(function(){$(this).toggleClass("is-active")}),$(".parallax-bx").parallax(),$(".belisario-a, .belisario-v").mouseover(function(){$(".belisario-img").toggleClass("animatedx pulse")}),$(".belisario-a, .belisario-v").mouseleave(function(){$(".belisario-img").toggleClass("animatedx pulse")}),$(".tennyson-a, .tennyson-v").mouseover(function(){$(".tennyson-img").toggleClass("animatedx pulse")}),$(".tennyson-a, .tennyson-v").mouseleave(function(){$(".tennyson-img").toggleClass("animatedx pulse")}),$(".allanpoe-a, .allanpoe-v").mouseover(function(){$(".allanpoe-img").toggleClass("animatedx pulse")}),$(".allanpoe-a, .allanpoe-v").mouseleave(function(){$(".allanpoe-img").toggleClass("animatedx pulse")});var e=window.innerHeight,i=0;$(".hamburger").on("click",function(){$(".overlay").height(e-100),0==i?($(".overlay").addClass("open"),i=1):($(".overlay").removeClass("open"),i=0)}),$(".close-ovrly, .overlay-menu ul a").on("click",function(){$(".hamburger").toggleClass("is-active"),$(".overlay").removeClass("open"),i=0});var o=0;$(".boo-king-a, .show-booking-nav").on("click",function(e){e.preventDefault(),0==i?($(".overlay-book").addClass("opened"),o=1):($(".overlay-book").removeClass("opened"),o=0)}),$(".close-ovrly-book").on("click",function(){$(".overlay-book").removeClass("opened"),o=0});var n=function(){$(".container-xfade").hide(),$.each($(".container-xfade"),function(e,i){$("div",i).each(function(){$(this).hide()})}),setTimeout(function(){$(".container-xfade").fadeIn();var e=0,i=1;$.each($(".container-xfade"),function(o,n){var a=5e3;$("div",n).each(function(){$(this).css("z-index",i).delay(e).fadeIn(600),e+=5e3,i++})}),setTimeout(function(){$(".container-xfade").fadeOut(600),setTimeout(function(){n()},600)},e+600)},5e3)};n()});