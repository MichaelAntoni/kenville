(function( win ){
	var doc = win.document;

	// If there's a hash, or addEventListener is undefined, stop here
	if( !location.hash && win.addEventListener ){

		//scroll to 1
		window.scrollTo( 0, 1 );
		var scrollTop = 1,
			getScrollTop = function(){
				return win.pageYOffset || doc.compatMode === "CSS1Compat" && doc.documentElement.scrollTop || doc.body.scrollTop || 0;
			},

			//reset to 0 on bodyready, if needed
			bodycheck = setInterval(function(){
				if( doc.body ){
					clearInterval( bodycheck );
					scrollTop = getScrollTop();
					win.scrollTo( 0, scrollTop === 1 ? 0 : 1 );
				}	
			}, 15 );

		win.addEventListener( "load", function(){
			setTimeout(function(){
				//at load, if user hasn't scrolled more than 20 or so...
				if( getScrollTop() < 20 ){
					//reset to hide addr bar at onload
					win.scrollTo( 0, scrollTop === 1 ? 0 : 1 );
				}
			}, 0);
		} );
	}
})( this );





$(document).ready(function(){
		
	
		

	/*	Image Slider Init --------------------------------------	 */ 

	$(window).load(function(){
	  $('.imgSlider').flexslider({
	  	namespace: "flex-", 
	  	selector: ".slides > li",
	    animation: "slide",
	    easing: "swing",
	    slideshow: false,
	    animationLoop: true,
	    slideshowSpeed: 7000,
	    animationSpeed: 600,
	    pauseOnAction: true,
		pauseOnHover: true,
		itemWidth: 0, 
		itemMargin: 0,
		minItems: 0,
		maxItems: 0,
	    controlNav: true, 
	    pausePlay: false,
	    prevText: "Previous",
	    nextText: "Next",
	    pauseText: 'Pause',
	    playText: 'Play',
	    start: function(slider){
	      $('body').removeClass('loading');
	    }
	  });
	});

	
	

	/*	Service Slider Init ----------------------------*/

	
	var slideQuery = $('#content').data('slidenumber');

	$(window).load(function(){
	  $('#serviceSlider').flexslider({
	  	namespace: "flex-", 
	  	selector: ".slides > li",
	    animation: "slide",
	    easing: "swing",
	    slideshow: false,
	    animationLoop: true,
	    slideshowSpeed: 7000,
	    animationSpeed: 600,
	    pauseOnAction: true,
		pauseOnHover: true,
		smoothHeight: true, /*Works well on android mobile to remove space created by longest content in slider*/
		itemWidth: 0, 
		itemMargin: 0,
		minItems: 0,
		maxItems: 0,
	    controlNav: false,              
		directionNav: false,
	    pausePlay: false,
	    startAt: slideQuery,
	    start: function(slider){
	      $('body').removeClass('loading');
	    }
	  });
	});

	/*Buttons for Services slider navigation*/

	/*Web*/
	$('#servBtn1').click(function (e) {
	    $('#serviceSlider').flexslider(0);
	    e.preventDefault();
	});
	/*strategy*/
	$('#servBtn2').click(function (e) {
	    $('#serviceSlider').flexslider(1);
	    e.preventDefault();
	});
	/*film*/
	$('#servBtn3').click(function (e) {
	    $('#serviceSlider').flexslider(2);
	    e.preventDefault();
	});
	/*training*/
	$('#servBtn4').click(function (e) {
	    $('#serviceSlider').flexslider(3);
	    e.preventDefault();
	});
	/*mobile*/
	$('#servBtn5').click(function (e) {
	    $('#serviceSlider').flexslider(4);
	    e.preventDefault();
	});
	/*interactive*/
	$('#servBtn6').click(function (e) {
	    $('#serviceSlider').flexslider(5);
	    e.preventDefault();
	});

	//-------------------------------------------

	$('#home-slider').flexslider({
	    animation: "slide",
	    slideToStart: 0,
	    //controlNav: false,
	    directionNav: false,
	    slideshow: false,
	    animationSpeed: 1000,
	    start: function(slider) {
	        $('a.slide_thumb').click(function() {
	            $('.flexslider').show();
	            var slideTo = $(this).attr("rel")//Grab rel value from link;
	            var slideToInt = parseInt(slideTo)//Make sure that this value is an integer;
	            if (slider.currentSlide != slideToInt) {
	                slider.flexAnimate(slideToInt)//move the slider to the correct slide (Unless the slider is also already showing the slide we want);
	            }
	        });
	    }

	});

	$('#home-info-slider').flexslider({
	    animation: "fade",
	    slideToStart: 0,
	    controlNav: false,
	    directionNav: false, 
	    slideshow: false,
	    animationSpeed: 1500,
	    start: function(slider) {
	        $('a.slide_thumb').click(function() {
	            $('.flexslider').show();
	            var slideTo = $(this).attr("rel")//Grab rel value from link;
	            var slideToInt = parseInt(slideTo)//Make sure that this value is an integer;
	            if (slider.currentSlide != slideToInt) {
	                slider.flexAnimate(slideToInt)//move the slider to the correct slide (Unless the slider is also already showing the slide we want);
	            }
	        });
	    }
	});



	/** 
	* Create the children flexsliders. Must be array of jquery objects with the
	* flexslider data. Easiest way is to place selector group in a var.
	*/
	var children_slides = $('.flexslider_children').flexslider({
	  slideshow: false, 
	  controlNav : false,
	  directionNav: false,
	  slideshow: false,
	  animationSpeed: 750,
	  smoothHeight: false,
	  animation: "fade"
	}); 

	/** 
	* Set up the main flexslider
	*/
	$('.mainflexslider').flexslider({
	  pauseOnHover : true,
	  animationSpeed: 1000,
	  slideshowSpeed: 5000,
	  slideshow: false,
	  animation: "slide",
	  // Call the update_children_slides which itterates through all children slides 
	  'before' : function(slider){ // Hijack the flexslider
	    update_children_slides(slider.animatingTo);
	  }   
	}); 

	/** 
	* Method that updates children slides
	* fortunetly, since all the children are not animating,
	* they will only update if the main flexslider updates. 
	*/
	var update_children_slides = function (slide_number){
	  for (i=0;i<children_slides.length;i++) {
	    // Run the animate method on the child slide
	    $(children_slides[i]).data('flexslider').flexAnimate(slide_number);
	  }   
	}



}); // End Doc Ready 






















