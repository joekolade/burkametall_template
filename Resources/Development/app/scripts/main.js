$(function () {
	'use strict';

	var
		$menu = $('.container.nav'),
		$subnav = $('ul.subnav', $menu),

		// Scroller
		$scroller = $('.scroller')
	;

	// Menu
	if ($menu.length) {
		$menu.affix({
			offset: {
				top: $('header.container').first().outerHeight(true),
				bottom: function () {
					return $('footer.container').first().height() + $('footer.superfooter').height() - $menu.height();
				}
			}
		});
	}

	// Subnav for mobile
	if ($subnav.length) {
		$subnav.each(function () {
			var $sn = $(this);
			$sn.prev('a').append(function () {
				var $i;
				$i = $('<i />')
					.addClass('fa fa-angle-down')
					.click(function (e) {
						e.preventDefault();
						$(this).parent('a').toggleClass('open')
							.next('ul.subnav').toggleClass('open');
					});
				return $i;
			});
		});
	}

	if ($scroller.length) {
		$(window).scroll(function () {
			var
				height = $(document).height(), // 1915
				scrollTop = $(document).scrollTop(),
				windowH = $(window).height(),
				navbarHeight = $menu.height() - $scroller.height() - 2
			;

			$scroller.css({
				top: navbarHeight * scrollTop / (height - windowH)
			});

		});
	}


	var
		carouselSelector = '#weCarousel',
		$carousel = $(carouselSelector),
		$carouselInner = $('.carousel-inner', $carousel),
		$carouselItems = $('.item', $carouselInner),
		$carouselIndicators = $('.carousel-indicators', $carousel),

		initCarousel = function () {
			// Get rid of csc-Frames
			$('> .csc-default', $carouselInner).each(function () {
				$(this).replaceWith($(this).html());
			});
			$carouselItems = $('.item', $carouselInner);
			// First = active
			$carouselItems.each(function (idx) {
				var
					$li = $('<li />').attr({
						'data-target': carouselSelector,
						'data-slide-to': idx
					})
				;
				if (!idx) {
					$li.addClass('active');
					$(this).addClass('active');
				}

				$li.appendTo($carouselIndicators);

			});
			// if($carouselItems.length > 1) {
			//   addArrows();
			// }
		},

		addArrows = function () {
			var
				$left = function () {
					return getLink('left');
				},
				$right = function () {
					return getLink('right');
				},
				getLink = function (dir) {
					return $('<a />').addClass('carousel-control').addClass(dir).attr({
						'href': carouselSelector,
						'role': 'button',
						'data-slide': (dir == 'left') ? 'prev' : 'next'
					}).html('<span class="glyphicon glyphicon-circle-arrow-' + dir + '" aria-hidden="true"></span> <span class="sr-only">' + ((dir == 'left') ? 'Zurück' : 'Weiter') + '</span>');

				}
			;
			$carousel.append([$left(), $right()]);
		}
	;
	if ($carousel.length) {
		initCarousel();
	}

});
