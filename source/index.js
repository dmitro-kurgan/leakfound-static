import './components/scss/style.scss';

import './components/js/bootstrap.min.js';

// import './components/js/jquery.fullpage.min.js';

// $(document).ready(function() {
//     $('#fullpage').fullpage({
//         scrollBar: true,
// 		scrollOverflow: true,
// 		scrollOverflowReset: true,
//         responsiveWidth: 992,
//         responsiveHeight: 680,
//         scrollingSpeed: 900
//     });
// });

import 'slick-carousel';

var SlickServices = $('.slick-services');
var SlickYelp = $('.slick-yelp');
var SlickCompanies = $('.slick-companies');
var SlickComments = $('.slick-comments');
var SlickBlog = $('.slick-blog');

$(document).ready(function() {
	$('.slick-services').on('init', function(event, slick, currentSlide){
	  var nrCurrentSlide = slick.currentSlide + 1, // din cauza ca e array si incepe de la 0
	      totalSlidesPerPage = nrCurrentSlide + 3; // daca ai 5 thumb-uri pe pagina pui + 4
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
		var nrCurrentSlide = slick.currentSlide + 1, // din cauza ca e array si incepe de la 0
			totalSlidesPerPage = nrCurrentSlide + 3; // daca ai 5 thumb-uri pe pagina pui + 4
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
	  var nrCurrentSlide = slick.currentSlide + 1, // din cauza ca e array si incepe de la 0
	      totalSlidesPerPage = nrCurrentSlide + 3; // daca ai 5 thumb-uri pe pagina pui + 4
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
		var nrCurrentSlide = slick.currentSlide + 1, // din cauza ca e array si incepe de la 0
			totalSlidesPerPage = nrCurrentSlide + 3; // daca ai 5 thumb-uri pe pagina pui + 4
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
	  var nrCurrentSlide = slick.currentSlide + 1, // din cauza ca e array si incepe de la 0
	      totalSlidesPerPage = nrCurrentSlide + 3; // daca ai 5 thumb-uri pe pagina pui + 4
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
		var nrCurrentSlide = slick.currentSlide + 1, // din cauza ca e array si incepe de la 0
			totalSlidesPerPage = nrCurrentSlide + 3; // daca ai 5 thumb-uri pe pagina pui + 4
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
	  var nrCurrentSlide = slick.currentSlide + 1, // din cauza ca e array si incepe de la 0
	      totalSlidesPerPage = nrCurrentSlide + 3; // daca ai 5 thumb-uri pe pagina pui + 4
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
		var nrCurrentSlide = slick.currentSlide + 1, // din cauza ca e array si incepe de la 0
			totalSlidesPerPage = nrCurrentSlide + 3; // daca ai 5 thumb-uri pe pagina pui + 4
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
			$(window).scroll(function(){
		  		if ($(this).scrollTop()>0) {
		  			$('.header').addClass('fixed');
		  		} else {
		  			$('.header').removeClass('fixed');
		  		}
			});
		}
	};
};
changeMobile();

function changeTablet() {
	if(matchMedia) {
		var screen = window.matchMedia('(max-width: 991px)');
		screen.addListener(changes);
		changes(screen);
	}
	function changes(screen) {
		if(screen.matches) {
			$('#nav-tab1 > li > a').click(function(event) {
				event.preventDefault();
				var id = $('#nav-tab-content1'),
				top = $(id).offset().top;
				$('body, html').animate({scrollTop: top}, 600);
			});
			$('#nav-tab2 > li > a').click(function(event) {
				event.preventDefault();
				var id = $('#nav-tab-content2'),
				top = $(id).offset().top - 40;
				$('body, html').animate({scrollTop: top}, 600);
			});
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

// $(function() {
//   var isAnimating = false,
//       $wrapper = $('.wrapper'),
//       $hipster = $('.banner'),
//       hipsterHeight,
//       { handleTouchStart, createTouchMoveHandler } = touchHandleModule(),
//       touchMoveHandler = createTouchMoveHandler({up: scrollToNextBlock.bind(null, touchMoveCb)});
//   $wrapper.css({
//     overflow: 'hidden'
//   });
//   window.addEventListener('wheel', handleInitialScroll);
//   window.addEventListener('touchstart', handleTouchStart);
//   window.addEventListener('touchmove', touchMoveHandler);

//   function handleScroll(e) {
//     if (!isAnimating && e.deltaY < 0 && $wrapper.scrollTop() === 0) {
//       isAnimating = true;
//       $wrapper.css({
//         overflow: 'hidden'
//       });
//       $hipster.show();
//       $wrapper.scrollTop(hipsterHeight);
//       $wrapper.animate({
//         scrollTop: 0
//       }, 1000, function () {
//         window.addEventListener('wheel', handleInitialScroll);
//         window.addEventListener('touchmove', touchMoveHandler);
//         $wrapper[0].removeEventListener('wheel', handleScroll);
//         isAnimating = false;
//       });
//     }
//   }

//   function handleInitialScroll(e) {
//     if (e.deltaY > 0) {
//       scrollToNextBlock(function() {
//         window.removeEventListener('wheel', handleInitialScroll);
//         $wrapper[0].addEventListener('wheel', handleScroll);
//       });
//     }
//   }
  
//   function touchMoveCb() {
//       window.removeEventListener('touchmove', touchMoveHandler);
//       $wrapper[0].addEventListener('scroll', handleScroll);
//   }
  
//   function scrollToNextBlock(cb) {
//     if (!isAnimating) {
//       isAnimating = true;
//       $wrapper.animate({
//         scrollTop: $('.content').offset().top + 15
//       }, 1000, function() {
//         isAnimating = false;
//         $wrapper.css({
//           overflow: 'auto'
//         });
//         hipsterHeight = $hipster.outerHeight();
//         $hipster.hide();
//         cb();
//       });
//     }
//   }
// });

// function touchHandleModule() {

//   var xDown = null;
//   var yDown = null;

//   function handleTouchStart(e) {
//     xDown = e.touches[0].clientX;
//     yDown = e.touches[0].clientY;
//   };

//   function createTouchMoveHandler(
//     {
//       left = Function,
//       right = Function,
//       up = Function,
//       down = Function
//     } = {}) {
//     return function handleTouchMove(e) {
//       if (!xDown || !yDown) {
//         return;
//       }

//       var xUp = e.touches[0].clientX;
//       var yUp = e.touches[0].clientY;

//       var xDiff = xDown - xUp;
//       var yDiff = yDown - yUp;

//       if (Math.abs(xDiff) > Math.abs(yDiff)) {
//         if (xDiff > 0) {
//           /* left swipe */
//           left()
//         } else {
//           /* right swipe */
//           right()
//         }
//       } else {
//         if (yDiff > 0) {
//           /* up swipe */
//           up();
//         } else {
//           /* down swipe */
//           down();
//         }
//       }
//       /* reset values */
//       xDown = null;
//       yDown = null;
//     };
//   }
  
//   return {
//     handleTouchStart,
//     createTouchMoveHandler
//   }
// }



$(function () {
	if(screen.height > 900) {
	    var lastScrollTop = $(window).scrollTop(),
	        delta = 5,
	        eleH = $('.banner').outerHeight(),
	        isScolling = false ;
	    $(window).scroll(function () {
	        if(isScolling)
	            return;
	            
	        var nowScrollTop = $(this).scrollTop();
	        if (Math.abs(lastScrollTop - nowScrollTop) >= delta) {
	            if (nowScrollTop <= eleH && nowScrollTop >= lastScrollTop) {
	                isScolling = true;
	                $('html,body').animate({
	                    scrollTop: $('body section:first-of-type').offset().top
	                }, 600, function() {
	                    isScolling = false;
	                    lastScrollTop = $(window).scrollTop();
	                });
	                $('.header').addClass('fixed');
	                console.log('Scroll down');
	            } else if (nowScrollTop <= eleH && nowScrollTop < lastScrollTop) {
	                isScolling = true;
	                $('html,body').animate({
	                    scrollTop: 0
	                }, 600, function() {
	                    isScolling = false;
	                    lastScrollTop = $(window).scrollTop();
	                });
	                $('.header').removeClass('fixed');
	                console.log('Scroll up');
	            }
	            lastScrollTop = nowScrollTop;
	        }
	    });
	}
});

function AnimatingNumbers() {
	var currentNumber1 = $('#DynamicNumber1').text();
		$({numberValue: currentNumber1}).animate({numberValue: 578}, {
			duration: 2000,
			easing: 'linear',
			step: function() { 
				$('#DynamicNumber1').text(Math.ceil(this.numberValue)); 
		}
	});
	var currentNumber2 = $('#DynamicNumber2').text();
		$({numberValue: currentNumber2}).animate({numberValue: 1077 }, {
			duration: 2000,
			easing: 'linear',
			step: function() { 
				$('#DynamicNumber2').text(Math.ceil(this.numberValue)); 
		}
	});
	var currentNumber3 = $('#DynamicNumber3').text();
		$({numberValue: currentNumber3}).animate({numberValue: 87}, {
			duration: 2000,
			easing: 'linear',
			step: function() { 
				$('#DynamicNumber3').text(Math.ceil(this.numberValue)); 
		}
	});
	var currentNumber4 = $('#DynamicNumber4').text();
		$({numberValue: currentNumber4}).animate({numberValue: 45}, {
			duration: 2000,
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

$(document).ready(function() {
	$('#scroll-down').click(function(event) {
		event.preventDefault();
		var id = $(this).attr('href'),
		top = $(id).offset().top;
		$('body, html').animate({scrollTop: top}, 600);
	});
});

function ShowMenu() {
	$('.header_hamburger, #close').click(function() {
		$('.header_menu').toggleClass('opened');
	});
}
ShowMenu();

function load() {
    var dot = $(".dot"),
    
        len2 = dot.length,

        indx2 = 0;

    ! function go2() {
        dot.eq(indx2).show(0, function() {

            $(this).delay(600).hide(0, go2)

        });

        indx2 = ++indx2 % len2
    }()
}
load();