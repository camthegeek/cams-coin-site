// --------------------------------------------------------
//	Language Dropdown
// -------------------------------------------------------- 
$(function() {
	var ratio = 2;
	// Preloader
		$('.preloader').addClass('animated fadeOut').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
			$('.preloader').hide();
		});

		$('header').height($(window).height() + 80);
		$('section .cut').each(function() {
			if ($(this).hasClass('cut-top'))
				$(this).css('border-right-width', $(this).parent().width() + "px");
			else if ($(this).hasClass('cut-bottom'))
				$(this).css('border-left-width', $(this).parent().width() + "px");
		});

		// Navbar Init
		$('nav').addClass('original').clone().insertAfter('nav').addClass('navbar-fixed-top').css('position', 'fixed').css('top', '0').css('margin-top', '0').removeClass('original');
		$('.mobile-nav ul').html($('nav .navbar-nav').html());
		$('nav.navbar-fixed-top .navbar-brand img').attr('src', $('nav.navbar-fixed-top .navbar-brand img').data("active-url"));

		// Onepage Nav
		$('.navbar.navbar-fixed-top .navbar-nav').onePageNav({
			currentClass: 'active',
			changeHash: false,
			scrollSpeed: 400,
			filter: ':not(.btn)'
		});

	// Window Scroll
	function onScroll() {
		if ($(window).scrollTop() > 50) {
			$('nav.original').css('opacity', '0');
			$('nav.navbar-fixed-top').css('opacity', '1');
			$('.navbar-dark .navbar-toggler').css('color', '##658289');
		} else {
			$('nav.original').css('opacity', '1');
			$('nav.navbar-fixed-top').css('opacity', '0');
			$('.navbar-dark .navbar-toggler').css('color', '#658289');
		}
	}

	window.addEventListener('scroll', onScroll, false);

	// Window Resize
	$(window).resize(function() {
		$('header').height($(window).height());
	});

	// Mobile Nav
	$('body').on('click', 'nav .navbar-toggle', function() {
		event.stopPropagation();
		$('.mobile-nav').addClass('active');
	});

	$('body').on('click', '.mobile-nav a', function(event) {
		$('.mobile-nav').removeClass('active');
		if(!this.hash) return;
		event.preventDefault();
		if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
			event.stopPropagation();
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
			if (target.length) {
				$('html,body').animate({
					scrollTop: target.offset().top
				}, 1000);
				return false;
			}
		}
	});

	$('body').on('click', '.mobile-nav a.close-link', function(event) {
		$('.mobile-nav').removeClass('active');
		event.preventDefault();
	});

	$('body').on('click', 'nav.original .navbar-nav a:not([data-toggle])', function() {
		if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
			event.stopPropagation();
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
			if (target.length) {
				$('html,body').animate({
					scrollTop: target.offset().top
				}, 1000);
				return false;
			}
		}
	});


	$('body').on("click", ".langbtn", function(e){
    	$('.lang-dropdown-child').addClass('show-child');
    	e.stopPropagation();
	})
	$('body').click(function(){
    	$('.lang-dropdown-child').removeClass('show-child');
  	});
  	var opsys = "";
  	var dl = "";
  	var infoLine = navigator.appVersion;
  	var os = navigator.platform;

  	switch (os) { 
  		case 'Win32':
  			opsys = "Windows"
  			dl = $('.download').data('win-dl');
  			ver = $('.download').data('win-dl-ver');
  			$('.for-text').removeClass('hidden');
  		break;

  		case 'Android':
  			opsys = "Android"
  			dl = $('.download').data('android-dl');
  			ver = $('.download').data('android-dl-ver');
  			$('.for-text').removeClass('hidden');
  		break;

  		case 'Linux x86_64': 
  			opsys = "Linux";
  			dl = $('.download').data('linux-dl');
  			ver = $('.download').data('linux-dl-ver');
  			$('.for-text').removeClass('hidden');
  		break;

  		case 'iPhone':
  			dl = "#downloads";
  		break;

  		case 'iPad': 
  			dl = "#downloads";
  		break;

  		case 'MacIntel':
  			opsys = 'Mac OS';
  			dl = $('.download').data('mac-dl');
  			ver = $('.download').data('mac-dl-ver');
  			$('.for-text').removeClass('hidden');
  		break;
  		
  		default:
  			dl = '#downloads';
  		break;
  	}	

  	$('.opsys').text(opsys);
  	$('.dlversion').text(ver);
  	$('.download').attr('href',dl);
  	$('.download-btn-logo').addClass('fa-'+opsys.toLowerCase());
});