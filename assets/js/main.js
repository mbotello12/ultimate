/*
	Spectral by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function($) {

	var	$window = $(window),
		$body = $('body'),
		$wrapper = $('#page-wrapper'),
		$banner = $('#banner'),
		$header = $('#header');

	// Breakpoints.
		breakpoints({
			xlarge:   [ '1281px',  '1680px' ],
			large:    [ '981px',   '1280px' ],
			medium:   [ '737px',   '980px'  ],
			small:    [ '481px',   '736px'  ],
			xsmall:   [ null,      '480px'  ]
		});

	// Play initial animations on page load.
		$window.on('load', function() {
			window.setTimeout(function() {
				$body.removeClass('is-preload');
			}, 100);
		});

	// Mobile?
		if (browser.mobile)
			$body.addClass('is-mobile');
		else {

			breakpoints.on('>medium', function() {
				$body.removeClass('is-mobile');
			});

			breakpoints.on('<=medium', function() {
				$body.addClass('is-mobile');
			});

		}

	// Scrolly.
		$('.scrolly')
			.scrolly({
				speed: 1500,
				offset: $header.outerHeight()
			});

	// Menu.
		$('#menu')
			.append('<a href="#menu" class="close"></a>')
			.appendTo($body)
			.panel({
				delay: 500,
				hideOnClick: true,
				hideOnSwipe: true,
				resetScroll: true,
				resetForms: true,
				side: 'right',
				target: $body,
				visibleClass: 'is-menu-visible'
			});
// Carousel

		document.querySelectorAll(".carousel").forEach(carousel => {
			const items = carousel.querySelectorAll('.carousel-item');
			const buttonsHtml = Array.from(items, () => {
				return `<span class="carousel-button"></span>`;
			});	
			
			carousel.insertAdjacentHTML("beforeend", `
				<div class="carousel-nav">
					${buttonsHtml.join("")}
				</div>
			`);
			
			const buttons = carousel.querySelectorAll('.carousel-button');

			buttons.forEach((button, i) => {
				button.addEventListener('click', () => {
					items.forEach(item => item.classList.remove('carousel-item-selected'));
					buttons.forEach(button => button.classList.remove('carousel-button-selected'));

					items[i].classList.add('carousel-item-selected')
					button.classList.add('carousel-button-selected')
				})
			})
			items[0].classList.add('carousel-item-selected')
			buttons[0].classList.add('carousel-button-selected')
		});
		
		document.querySelector('#fiveByFive').addEventListener('click', show5x5)
		document.querySelector('#fiveByTen').addEventListener('click', show5x10)
		document.querySelector('#tenByTen').addEventListener('click', show10x10)
		document.querySelector('#tenByFifteen').addEventListener('click', show10x15)
		document.querySelector('#tenByTwenty').addEventListener('click', show10x20)
		document.querySelector('#tenByTwentyFive').addEventListener('click', show10x25)
		document.querySelector('#tenByForty').addEventListener('click', show10x40)


	function show5x5() {
    	document.querySelector('.question').style.backgroundImage = "url(images/5x5.jpg)"
	}
	function show5x10(){
		document.querySelector('.question').style.backgroundImage = "url(images/5x10.jpg)"
	}
	function show10x10(){
		document.querySelector('.question').style.backgroundImage = "url(images/10x10.jpg)"
	}
	function show10x15(){
		document.querySelector('.question').style.backgroundImage = "url(images/10x15.jpg)"
	}
	function show10x20(){
		document.querySelector('.question').style.backgroundImage = "url(images/10x20.jpg)"
	}
	function show10x25(){
		document.querySelector('.question').style.backgroundImage = "url(images/10x25.jpg)"
	}
	function show10x40(){
		document.querySelector('.question').style.backgroundImage = "url(images/10x40.jpg)"
	}

	// Header.
		if ($banner.length > 0
		&&	$header.hasClass('alt')) {

			$window.on('resize', function() { $window.trigger('scroll'); });

			$banner.scrollex({
				bottom:		$header.outerHeight() + 1,
				terminate:	function() { $header.removeClass('alt'); },
				enter:		function() { $header.addClass('alt'); },
				leave:		function() { $header.removeClass('alt'); }
			});

		}

})(jQuery);

