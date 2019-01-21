
$(".nav-home").click(function (){
	$.scrollTo('#home', 700, { easing:'easeInOutExpo'});
});

$(".nav-about, #logo").click(function (){
	$.scrollTo('#about', 700, { easing:'easeInOutExpo'});
});

$(".nav-portfolio").click(function (){
	$.scrollTo('#portfolio', 700, { easing:'easeInOutExpo'});
});

$(".nav-clients").click(function (){
	$.scrollTo('#clients', 700, { easing:'easeInOutExpo'});
});

$(".nav-contact").click(function (){
	$.scrollTo('#contact', 700, { easing:'easeInOutExpo'});
});

$("#main-nav li").click(function(){
	$("#main-nav li").removeClass("current");
	$(this).addClass("current");
});




$(function($) {
    $('.modal-inner').on('scroll', function() {
        if(this.scrollTop > 0)
        {
          $('.scroll-modal-button').addClass('hide');
        } else {
   $('.scroll-modal-button').removeClass('hide');
         
        }
    });
});




// Waypoint

$(document).ready(function() {

  $('.flipY01').waypoint(function() {$(this).addClass('animated_flipY01');}, {offset: '100%'});
  $('.flipY02').waypoint(function() {$(this).addClass('animated_flipY02');}, {offset: '100%'});
  $('.flipY03').waypoint(function() {$(this).addClass('animated_flipY03');}, {offset: '100%'});
  $('.flipY04').waypoint(function() {$(this).addClass('animated_flipY04');}, {offset: '100%'});
  $('.flipY05').waypoint(function() {$(this).addClass('animated_flipY05');}, {offset: '100%'});
  $('.flipY06').waypoint(function() {$(this).addClass('animated_flipY06');}, {offset: '100%'});

  $('.flipX01').waypoint(function() {$(this).addClass('animated_flipX01');}, {offset: '100%'});
  $('.flipX02').waypoint(function() {$(this).addClass('animated_flipX02');}, {offset: '100%'});
  $('.flipX03').waypoint(function() {$(this).addClass('animated_flipX03');}, {offset: '100%'});
  $('.flipX04').waypoint(function() {$(this).addClass('animated_flipX04');}, {offset: '100%'});
  $('.flipX05').waypoint(function() {$(this).addClass('animated_flipX05');}, {offset: '100%'});
  $('.flipX06').waypoint(function() {$(this).addClass('animated_flipX06');}, {offset: '100%'});

  $('.fadeL01').waypoint(function() {$(this).addClass('animated_fadeL01');}, {offset: '100%'});
  $('.fadeL02').waypoint(function() {$(this).addClass('animated_fadeL02');}, {offset: '100%'});
  $('.fadeL03').waypoint(function() {$(this).addClass('animated_fadeL03');}, {offset: '100%'});
  $('.fadeL04').waypoint(function() {$(this).addClass('animated_fadeL04');}, {offset: '100%'});
  $('.fadeL05').waypoint(function() {$(this).addClass('animated_fadeL05');}, {offset: '100%'});
  $('.fadeL06').waypoint(function() {$(this).addClass('animated_fadeL06');}, {offset: '100%'});

  $('.fadeR01').waypoint(function() {$(this).addClass('animated_fadeR01');}, {offset: '100%'});
  $('.fadeR02').waypoint(function() {$(this).addClass('animated_fadeR02');}, {offset: '100%'});
  $('.fadeR03').waypoint(function() {$(this).addClass('animated_fadeR03');}, {offset: '100%'});
  $('.fadeR04').waypoint(function() {$(this).addClass('animated_fadeR04');}, {offset: '100%'});
  $('.fadeR05').waypoint(function() {$(this).addClass('animated_fadeR05');}, {offset: '100%'});
  $('.fadeR06').waypoint(function() {$(this).addClass('animated_fadeR06');}, {offset: '100%'});

  $('.fadeT01').waypoint(function() {$(this).addClass('animated_fadeT01');}, {offset: '100%'});
  $('.fadeT02').waypoint(function() {$(this).addClass('animated_fadeT02');}, {offset: '100%'});
  $('.fadeT03').waypoint(function() {$(this).addClass('animated_fadeT03');}, {offset: '100%'});
  $('.fadeT04').waypoint(function() {$(this).addClass('animated_fadeT04');}, {offset: '100%'});
  $('.fadeT05').waypoint(function() {$(this).addClass('animated_fadeT05');}, {offset: '100%'});
  $('.fadeT06').waypoint(function() {$(this).addClass('animated_fadeT06');}, {offset: '100%'});

  $('.fadeB01').waypoint(function() {$(this).addClass('animated_fadeB01');}, {offset: '100%'});
  $('.fadeB02').waypoint(function() {$(this).addClass('animated_fadeB02');}, {offset: '100%'});
  $('.fadeB03').waypoint(function() {$(this).addClass('animated_fadeB03');}, {offset: '100%'});
  $('.fadeB04').waypoint(function() {$(this).addClass('animated_fadeB04');}, {offset: '100%'});
  $('.fadeB05').waypoint(function() {$(this).addClass('animated_fadeB05');}, {offset: '100%'});
  $('.fadeB06').waypoint(function() {$(this).addClass('animated_fadeB06');}, {offset: '100%'});


});



$(function(){


	$(".modal-inner").fadeOut();
	$(".wrap").click(function (){
		$("#modal-nav").removeClass("hidden");
		var X = $(this).attr('id');
		$(".modal-portfolio#modal-" + X).addClass("open-modal");
		$(".modal-inner").delay(700).queue(function(){
		    $(this).fadeIn(500, 'easeInCubic').dequeue();
		});
		$("body").delay(700).queue(function(){
		    $(this).css('overflowY', 'hidden').dequeue();
		});
		return false;
	});



	$(".close-modal-button").click(function (){
		$('.modal-inner').scrollTo(0, 200, 'easeOutCubic');
		$("#modal-nav").addClass("hidden");
		$(".modal-inner").fadeOut(500, 'easeOutCubic');
		$(".modal-portfolio").delay(500).queue(function(){
		    $(this).removeClass("open-modal").dequeue();
		});
		$("body").delay(450).queue(function(){
		    $(this).css('overflowY', 'auto').dequeue();
		});		
		//$(".modal-inner").scrollTop(0);	
		return false;
	});	

});	


$(function(){
	var $first = $('li:first', 'ul#modals'),
			$last = $('li:last', 'ul#modals');

	$(".next-modal-button").click(function () {
		$('.modal-inner').scrollTo(0, 200, 'easeOutCubic');
		$(".modal-inner").fadeOut(500, 'easeOutCubic');
		var $next, $selected = $(".open-modal");
		$next = $selected.next('li').length ? $selected.next('li') : $first;
		$next.delay(500).queue(function(){
			$(this).addClass("open-modal").dequeue();
		});
		$selected.delay(1000).queue(function(){
			$(this).removeClass("open-modal").dequeue();
		});
		$(".modal-inner").delay(700).queue(function(){
		    $(this).fadeIn(500, 'easeInCubic').dequeue();
		});
	});
	
	$(".prev-modal-button").click(function () {
		$('.modal-inner').scrollTo(0, 200, 'easeOutCubic');
		$(".modal-inner").fadeOut(500, 'easeOutCubic');
		var $prev, $selected = $(".open-modal");
		$prev = $selected.prev('li').length ? $selected.prev('li') : $last;
		$selected.delay(500).queue(function(){
			$(this).removeClass("open-modal").dequeue();
		});
		$prev.delay(0).queue(function(){
			$(this).addClass("open-modal").dequeue();
		});
		$(".modal-inner").delay(500).queue(function(){
		    $(this).fadeIn(500, 'easeInCubic').dequeue();
		});
	});

});

$(".scroll-modal-button").click(function () {
		$('.modal-inner').scrollTo('600px', 700, 'easeOutCubic');
});


$(function(){
	$(".send").click(function (){
		$(".loading").removeClass("hidden");
		$(this).addClass("shrink");
		$("#human-label").addClass("error");

		$(".send-ok").delay(3000).queue(function(){
		    $(this).removeClass("shrink").dequeue();
		});

		$(".loader").delay(3500).queue(function(){
		    $(this).addClass("hidden").dequeue();
		});

		$(".send-ok").delay(2500).queue(function(){
		    $(this).addClass("shrink").dequeue();
		});

		$(".send").delay(5500).queue(function(){
		    $(this).removeClass("shrink").dequeue();
		});

		$(".loading").delay(5500).queue(function(){
		    $(this).addClass("hidden").dequeue();
		});

		$(".loader").delay(3000).queue(function(){
		    $(this).removeClass("hidden").dequeue();
		});

	});
});






$(function(){
    $(window).load(function() {

          if(!(/Android|iPhone|iPad|iPod|BlackBerry|Windows Phone/i).test(navigator.userAgent || navigator.vendor || window.opera)){
              $('#pyramids').parallax();
          }
          
    }); 
});


