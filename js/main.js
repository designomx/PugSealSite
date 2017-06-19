$(document).ready(function() {
			
			$('.hamburger').click(function(){
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

		});