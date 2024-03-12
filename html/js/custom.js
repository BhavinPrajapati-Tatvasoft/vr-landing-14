$(document).ready(function() {
	//Prevent Page Reload on all # links
	$("body").on("click","a[href='#']", function(e){
		e.preventDefault();
	});

	//placeholder
	$("[placeholder]").each(function () {
		$(this).attr("data-placeholder", this.placeholder);
		$(this).bind("focus", function () {
			this.placeholder = '';
		});
		$(this).bind("blur", function () {
			this.placeholder = $(this).attr("data-placeholder");
		});
	});
	
	// On scroll Add Class
	$(window).scroll(function(e) {
		if($(window).scrollTop() > 200){
			$(".wrapper").addClass('page-scrolled');
		}
		else{
			$(".wrapper").removeClass('page-scrolled');
		}
	});	
	
	// Add remove class when window resize finished
	var $resizeTimer;
	$(window).on("resize", function(e) {
		if(!$("body").hasClass("window-resizing")){
			$("body").addClass("window-resizing");
		}
		clearTimeout($resizeTimer);
		$resizeTimer = setTimeout(function() {    
			$("body").removeClass("window-resizing");
		}, 250);
	});	

	// Add new js functions here -----------------------------------------------------------------
	$(".hero-banner-slider").slick({
		infinite: true,
		arrows: true,
		 prevArrow:"<button type='button' class='btn slick-prev pull-left'><img src='images/leftArrow-icon.svg' alt='Prev'></button>",
         nextArrow:"<button type='button' class='btn slick-next pull-right'><img src='images/rightArrow-icon.svg' alt='Next'></button>"
    });
	$(".review-slider").slick({
		infinite: true,
		arrows: true,
		 prevArrow:"<button type='button' class='btn slick-prev pull-left'><img src='images/left-arrow-icon-black.svg' alt='Prev'></button>",
         nextArrow:"<button type='button' class='btn slick-next pull-right'><img src='images/right-arrow-icon-black.svg' alt='Next'></button>"
    });

	$(window).scroll(function(e) {
		if($(window).scrollTop() > 50){
			$(".wrapper").addClass('add-header-bg');
		}
		else{
			$(".wrapper").removeClass('add-header-bg');
		}
	});	
	$('.video-btn').click(function(e){
	 if ($("video").get(0).paused) {
        	$("video").trigger('play');
        } else {
        		$("video").trigger('pause');
        		}
				$('.video-btn').toggleClass("pause");
	});
	// Don't add anything below this --------------------------------------------------------------
	// Add Class on Window Load
	$("body").addClass("page-loaded");
});