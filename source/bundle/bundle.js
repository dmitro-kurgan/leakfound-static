import '../components/scss/style.scss';

import '../components/js/bootstrap.min.js';

import '../components/js/map.js';

import fancybox from '../components/js/jquery.fancybox.min.js';

import 'slick-carousel';

var SlickServices = $('.slick-services');
var SlickYelp = $('.slick-yelp');
var SlickCompanies = $('.slick-companies');
var SlickComments = $('.slick-comments');
var SlickBlog = $('.slick-blog');

$(document).ready(function() {
	$('.slick-services').on('init', function(event, slick, currentSlide){
	  var nrCurrentSlide = slick.currentSlide + 1,
	      totalSlidesPerPage = nrCurrentSlide + 3;
		$('#services .controls .controls_current').html(nrCurrentSlide);
		$('#services .controls .controls_total').html(" / " + slick.slideCount);
	});

	SlickServices.slick({
		fade: true,
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1
	});

	var current = 0;
	$('.slick-services').on('afterChange', function(event, slick, currentSlide, nextSlide){
		current = currentSlide;
		var nrCurrentSlide = slick.currentSlide + 1,
			totalSlidesPerPage = nrCurrentSlide + 3;
		if(totalSlidesPerPage > slick.slideCount) {
			$('#services .controls .controls_current').html(nrCurrentSlide);
			$('#services .controls .controls_total').html(" / " + slick.slideCount);
		} else {
			$('#services .controls .controls_current').html(nrCurrentSlide);
			$('#services .controls .controls_total').html(" / " + slick.slideCount);
		}
	});
});

$(document).ready(function() {
	$('.slick-yelp').on('init', function(event, slick, currentSlide){
	  var nrCurrentSlide = slick.currentSlide + 1,
	      totalSlidesPerPage = nrCurrentSlide + 3;
		$('#yelp-comments .controls .controls_current').html(nrCurrentSlide);
		$('#yelp-comments .controls .controls_total').html(" / " + slick.slideCount);
	});

	SlickYelp.slick({
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1
	});

	var current = 0;
	$('.slick-yelp').on('afterChange', function(event, slick, currentSlide, nextSlide){
		current = currentSlide;
		var nrCurrentSlide = slick.currentSlide + 1,
			totalSlidesPerPage = nrCurrentSlide + 3;
		if(totalSlidesPerPage > slick.slideCount) {
			$('#yelp-comments .controls .controls_current').html(nrCurrentSlide);
			$('#yelp-comments .controls .controls_total').html(" / " + slick.slideCount);
		} else {
			$('#yelp-comments .controls .controls_current').html(nrCurrentSlide);
			$('#yelp-comments .controls .controls_total').html(" / " + slick.slideCount);
		}
	});
});

$(document).ready(function() {
	$('.slick-comments').on('init', function(event, slick, currentSlide){
	  var nrCurrentSlide = slick.currentSlide + 1,
	      totalSlidesPerPage = nrCurrentSlide + 3;
		$('#comments .controls .controls_current').html(nrCurrentSlide);
		$('#comments .controls .controls_total').html(" / " + slick.slideCount);
	});

	SlickComments.slick({
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1
	});

	var current = 0;
	$('.slick-comments').on('afterChange', function(event, slick, currentSlide, nextSlide){
		current = currentSlide;
		var nrCurrentSlide = slick.currentSlide + 1,
			totalSlidesPerPage = nrCurrentSlide + 3;
		if(totalSlidesPerPage > slick.slideCount) {
			$('#comments .controls .controls_current').html(nrCurrentSlide);
			$('#comments .controls .controls_total').html(" / " + slick.slideCount);
		} else {
			$('#comments .controls .controls_current').html(nrCurrentSlide);
			$('#comments .controls .controls_total').html(" / " + slick.slideCount);
		}
	});
});

$(document).ready(function() {
	$('.slick-blog').on('init', function(event, slick, currentSlide){
	  var nrCurrentSlide = slick.currentSlide + 1,
	      totalSlidesPerPage = nrCurrentSlide + 3;
	  $('#blog .controls .controls_current').html(nrCurrentSlide);
	  $('#blog .controls .controls_total').html(" / " + slick.slideCount);
	});

	SlickBlog.slick({
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1
	});

	var current = 0;
	$('.slick-blog').on('afterChange', function(event, slick, currentSlide, nextSlide){
		current = currentSlide;
		var nrCurrentSlide = slick.currentSlide + 1,
			totalSlidesPerPage = nrCurrentSlide + 3;
		if(totalSlidesPerPage > slick.slideCount) {
			$('#blog .controls .controls_current').html(nrCurrentSlide);
			$('#blog .controls .controls_total').html(" / " + slick.slideCount);
		} else {
			$('#blog .controls .controls_current').html(nrCurrentSlide);
			$('#blog .controls .controls_total').html(" / " + slick.slideCount);
		}
	});
});

SlickCompanies.slick({
	infinite: true,
	slidesToShow: 8,
	slidesToScroll: 1,
	dots: true,
	autoplay: true,
	autoplaySpeed: 1000,
	responsive: [
		{
			breakpoint: 1730,
			settings: {
				slidesToShow: 7
			}
		},
		{
			breakpoint: 1530,
			settings: {
				slidesToShow: 6
			}
		},
		{
			breakpoint: 1200,
			settings: {
				slidesToShow: 4
			}
		},
		{
			breakpoint: 992,
			settings: {
				slidesToShow: 3
			}
		},
		{
			breakpoint: 768,
			settings: {
				slidesToShow: 1
			}
		}
	]
});

function changeMobile() {
	if(matchMedia) {
		var screen = window.matchMedia('(max-width: 768px)');
		screen.addListener(changes);
		changes(screen);
	}
	function changes(screen) {
		if(screen.matches) {
		}
	};
};
changeTablet();

function changeTablet() {
	if(matchMedia) {
		var screen = window.matchMedia('(max-width: 992px)');
		screen.addListener(changes);
		changes(screen);
	}
	function changes(screen) {
		if(screen.matches) {
		}	
	};
};
changeTablet();

function FooterYear() {
	var dt = new Date();
	var year = dt.getFullYear();
	var yearnow = document.getElementById('year');
	yearnow.innerHTML = (' ' + year + ' ');
}
FooterYear();

function AnimatingNumbers() {
	var currentNumber1 = $('#DynamicNumber1').text();
		$({numberValue: currentNumber1}).animate({numberValue: 578}, {
			duration: 3000,
			easing: 'linear',
			step: function() { 
				$('#DynamicNumber1').text(Math.ceil(this.numberValue)); 
		}
	});
	var currentNumber2 = $('#DynamicNumber2').text();
		$({numberValue: currentNumber2}).animate({numberValue: 1077 }, {
			duration: 3000,
			easing: 'linear',
			step: function() { 
				$('#DynamicNumber2').text(Math.ceil(this.numberValue)); 
		}
	});
	var currentNumber3 = $('#DynamicNumber3').text();
		$({numberValue: currentNumber3}).animate({numberValue: 87}, {
			duration: 3000,
			easing: 'linear',
			step: function() { 
				$('#DynamicNumber3').text(Math.ceil(this.numberValue)); 
		}
	});
	var currentNumber4 = $('#DynamicNumber4').text();
		$({numberValue: currentNumber4}).animate({numberValue: 45}, {
			duration: 3000,
			easing: 'linear',
			step: function() { 
				$('#DynamicNumber4').text(Math.ceil(this.numberValue)); 
		}
	});	
};

$(function() {
	var one = $('.content');
	var two = $('.stats');
	var top;
	$(window).scroll(function() {
		top = $(this).scrollTop();
		if(top > 2300) {
			AnimatingNumbers();
		}
		if(document.URL.indexOf('about-us.html') >= 0) {
			if(top > 0) {
				AnimatingNumbers();
			}
		}
	});
});

$(window).scroll(function(){
	if ($(this).scrollTop()>0) {
		$('.header').addClass('fixed');
	} else {
		$('.header').removeClass('fixed');
	}
});

function ShowMenu() {
	$('.header_hamburger, #close').click(function() {
		$('.header_menu').toggleClass('opened');
	});
}
ShowMenu();