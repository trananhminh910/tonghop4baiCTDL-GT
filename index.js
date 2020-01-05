// slide show
		var slideIndex = 1;
		showSlides(slideIndex);

		// Next/previous controls
		function plusSlides(n) {
		  showSlides(slideIndex += n);
		}

		// Thumbnail image controls
		function currentSlide(n) {
		  showSlides(slideIndex = n);
		}

		function showSlides(n) {
		  var i;
		  var slides = document.getElementsByClassName("mySlides");
		  var dots = document.getElementsByClassName("demo");
		  var captionText = document.getElementById("caption");
		  if (n > slides.length) {slideIndex = 1}
		  if (n < 1) {slideIndex = slides.length}
		  for (i = 0; i < slides.length; i++) {
		    slides[i].style.display = "none";
		  }
		  for (i = 0; i < dots.length; i++) {
		    dots[i].className = dots[i].className.replace(" active", "");
		  }
		  slides[slideIndex-1].style.display = "block";
		  dots[slideIndex-1].className += " active";
		  // captionText.innerHTML = dots[slideIndex-1].alt;
		}

		
		// function autoSlide() {
		// 	setTimeout(function(){
		// 		$(".mySlides").hide();
		// 		$(".demo").removeClass("active");
		// 		$(".mySlides").eq(0).show();
		// 		$(".demo").eq(0).addClass("active");
		// 	},2000);
		// 	setTimeout(function(){
		// 		$(".mySlides").hide();
		// 		$(".demo").removeClass("active");
		// 		$(".mySlides").eq(1).show();
		// 		$(".demo").eq(1).addClass("active");
		// 	},4000);
		// 	setTimeout(function(){
		// 		$(".mySlides").hide();
		// 		$(".demo").removeClass("active");
		// 		$(".mySlides").eq(2).show();
		// 		$(".demo").eq(2).addClass("active");
		// 	},6000);
		// 	setTimeout(function(){
		// 		$(".mySlides").hide();
		// 		$(".demo").removeClass("active");
		// 		$(".mySlides").eq(3).show();
		// 		$(".demo").eq(3).addClass("active");
		// 	},8000);
		// 	setTimeout(function(){
		// 		$(".mySlides").hide();
		// 		$(".demo").removeClass("active");
		// 		$(".mySlides").eq(4).show();
		// 		$(".demo").eq(4).addClass("active");
		// 	},10000);
		// 	setTimeout(function(){
		// 		$(".mySlides").hide();
		// 		$(".demo").removeClass("active");
		// 		$(".mySlides").eq(5).show();
		// 		$(".demo").eq(5).addClass("active");
		// 	},12000);
		// }
		// autoSlide();
		// setInterval(() => {
		// 	autoSlide();
		// },12000);

		$(".column").click(function() {
			$("#image").addClass("animated flipOutY ");
				setTimeout(function() {
					$("#image").removeClass("animated flipOutY ");
					$("#image").addClass("animated flipInY ");
				},1000);
				setTimeout(function() {
					$("#image").removeClass("animated flipInY ");
				},1450);
				
				setTimeout(function() {
					$(".title").addClass("animated rubberBand slow");
				},2000);
				setTimeout(function() {
					$(".title").removeClass("animated rubberBand ");
				},3500);
			
		})