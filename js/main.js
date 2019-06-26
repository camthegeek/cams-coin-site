jQuery(function($) {
	"use strict";

	var ratio = 2;

	// Window Load
	$(window).on('load', (function() {
		// Preloader
		$('.preloader').addClass('animated fadeOut').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
			$('.preloader').hide();
			$('.parallax, header').addClass('animated fadeIn').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
				$('.intro-tables').addClass('animated fadeInUp').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend');
			});
		});

		// Header Init
		if ($(window).height() > $(window).width()) {
			var ratio = $('.parallax').width() / $('.parallax').height();
			$('.parallax img').css('height', ($(window).height()) + 'px');
			$('.parallax img').css('width', $('.parallax').height() * ratio + 'px');
		}

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
	}));
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
});
// --------------------------------------------------------
//	Language Dropdown
// -------------------------------------------------------- 
$(function() {
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
  	//console.log(navigator.appVersion);
  	var os = navigator.platform;
  	console.log(os);

  	switch (os) { 

  		case 'Win32':
  			opsys = "Windows"
  			dl = $('.download').data('win-dl');
  			console.log(dl);
  		break;

  		case 'Android':
  			opsys = "Android"
  			dl = $('.download').data('android-dl');
  			console.log(dl);
  		break;

  		case 'Linux x86_64': 
  			opsys = "Linux";
  			dl = $('.download').data('linux-dl');
  			console.log(dl);
  		break;

  		case 'iPhone':
  			dl = "#downloads";
  		break;

  		case 'iPad': 
  			dl = "#downloads";
  		break;


  		case 'Macintosh':
  			opsys = 'Mac OS';
  			dl = $('.download').data('mac-dl');
  			console.log(dl);
  		break;
  	}	


  	/*if (navigator.appVersion.indexOf("Win64") != -1) { 
  		opsys = "Windows 64-bit"
  		dl = $('.download').data('win-dl');
  		console.log(dl);
  	}
  	if (navigator.appVersion.indexOf("Linux") != -1) { 
  		opsys = "Linux"
  		dl = $('.download').data('linux-dl');
  		console.log(dl);
  	} 
  	if (navigator.appVersion.indexOf("Android") != -1) { 
  		opsys = "Android"
  		dl = $('.download').data('android-dl');
  		console.log(dl);
  	} 
  	if (navigator.appVersion.indexOf("Apple") != -1) { 
  		opsys = "Mac"
  		dl = $('.download').data('mac-dl');
  		console.log(dl);
  	} */

  	$('.opsys').text(opsys);
  	$('.download').attr('href',dl);
  	$('.testarea123').text(os);
});

// --------------------------------------------------------
//	Exchange Information
// --------------------------------------------------------
// grab exchange info 2 seconds after site loads.
setTimeout(getOgre, 2000);
setTimeout(getCrex, 2000);
setTimeout(getSouthEx, 2000);
setTimeout(getStex, 2000);
// call for fresh info after an hour.
setInterval(getOgre,3600000)
setInterval(getCrex, 3600000)
setInterval(getSouthEx, 3600000)
setInterval(getStex, 3600000)

// CORS proxy
// may be rate limited
// proxy can be set up somewhere else
var proxy = 'https://cors-anywhere.herokuapp.com/';

// could probably consolidate these functions into one. this works too.
function getOgre() { 
	var api = 'https://tradeogre.com/api/v1/ticker/btc-msr';
	$.ajax({
		dataType: "json",
		url: proxy + api,
		success: function(resp) {
			var v = resp.volume;
			var b = resp.price;
			$('.ogre-btc').html('<i class="fa fa-btc" aria-hidden="true"></i>'+b);
			getVolume(v, function(res) {
				$('.ogre-usd').text('$'+res.toFixed(2));
			});
		}
	});
}

function getCrex() {
	var api = 'https://api.crex24.com/v2/public/tickers?instrument=MSR-BTC';
	$.ajax({
		dataType: "json",
		url: proxy + api,
		success: function(resp) {
			console.log('crex: ' +resp);
			var v = resp['0'].volumeInBtc;
			var b = resp['0'].last;
			$('.crex-btc').html('<i class="fa fa-btc" aria-hidden="true"></i>'+b);
			getVolume(v, function(res) {
				$('.crex-usd').text('$'+res.toFixed(2));
			});
		},
		error: function( req, status, err ) {
		    console.log( 'something went wrong', status, err );
		 }
	});
}

function getSouthEx() {
	var api = 'https://www.southxchange.com/api/price/msr/btc';
	$.ajax({
		dataType: "json",
		url: proxy + api,
		success: function(resp) {
			console.log('getSouthEx: ' +resp);
			var v = resp.Volume24Hr*resp.Last;
			var b = resp.Last;
			$('.southex-btc').html('<i class="fa fa-btc" aria-hidden="true"></i>'+b);
			getVolume(v, function(res) {
				$('.southex-usd').text('$'+res.toFixed(2));
			});
		}
	});
}

function getStex() {
	var api = 'https://api3.stex.com/public/ticker/51';
	$.ajax({
		dataType: "json",
		url: proxy + api,
		success: function(resp) {
			console.log('stex: ' +resp);
			var v = resp.data.volume;
			var b = resp.data.last;
			if (b == null) { 
				b = 'No trades in last 24 hours';
			}
			$('.stex-btc').html('<i class="fa fa-btc" aria-hidden="true"></i>'+b);
			getVolume(v, function(res) {
				$('.stex-usd').text('$'+res.toFixed(2));
			});
		}
	});
}

// 
function getVolume(satoshis, callback) { 
	$.getJSON('https://api.coincap.io/v2/assets/bitcoin', function(btc) { 
		callback(parseFloat(btc.data.priceUsd).toFixed(2)*satoshis);
	});
}