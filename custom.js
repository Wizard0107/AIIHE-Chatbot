// Academic Programs Section Slider
setTimeout(function () { 
	var swiper = new Swiper(".academic-slider", {
		slidesPerView: 1,
		slidesPerGroup: 1,
		spaceBetween: 30,
		freeMode: true,
		
		pagination: {
			el: ".swiper-pagination",
			clickable: true,
		},
		breakpoints: {
			// when window width is <= 1024px
			1025: {
				slidesPerView: 3,
				slidesPerGroup: 1,
			},
			// when window width is <= 767px
			768: {
				slidesPerView: 2,
				slidesPerGroup: 2,
				spaceBetween: 15,
			},
		}
	});
}, 10);

// Testimonial Section Slider
setTimeout(function () { 
	var swiper = new Swiper(".testimonial-slider", {
		slidesPerView: 1,
		slidesPerGroup: 1,
		centeredSlides: true,
		spaceBetween: 30,
		freeMode: true,
		pagination: {
			el: ".swiper-pagination",
			clickable: true,
		},
		breakpoints: {
			// when window width is <= 1024px
			1025: {
				slidesPerView: 3,
				slidesPerGroup: 1,
			},
			// when window width is <= 767px
			768: {
				slidesPerView: 2,
				slidesPerGroup: 2,
				spaceBetween: 15,
			},
		}
	});
}, 10);

// Latest News & Articles Section Slider
setTimeout(function () { 
	var swiper = new Swiper(".latest-blog-posts-slider", {
		slidesPerView: 1,
		slidesPerGroup: 1,
		spaceBetween: 30,
		freeMode: true,
		pagination: {
			el: ".swiper-pagination",
			clickable: true,
		},
		breakpoints: {
			// when window width is <= 1024px
			1022: {
				slidesPerView: 3,
				slidesPerGroup: 1,
			},
			// when window width is <= 767px
			768: {
				slidesPerView: 2,
				slidesPerGroup: 2,
				spaceBetween: 15,
			},
		}
	});
}, 10);

// Remove The Swiper Slider Classes For News Listing Inner Page
document.addEventListener('DOMContentLoaded', () => {
    if (document.querySelector('.freez-slider')) {
        const swiperContainers = document.querySelectorAll('.freez-slider .latest-blog-posts-slider');
        swiperContainers.forEach(container => {
            container.classList.remove('swiper-container', 'swiper-initialized');
            const swiperWrapper = container.querySelector('.swiper-wrapper');
            if (swiperWrapper) {
                swiperWrapper.classList.remove('swiper-wrapper');
                // Add custom classes for styling
                swiperWrapper.classList.add('news-grid');
            }
            const swiperSlides = container.querySelectorAll('.swiper-slide');
            swiperSlides.forEach(slide => slide.classList.remove('swiper-slide'));
        });
    }
});