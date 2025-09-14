// Desktop Header Sticky
window.addEventListener("scroll", () => {
  const toggleClass = "is-sticky";
  const targetElement = document.querySelector(".main-header");

  if (targetElement) {
    if (window.pageYOffset > 150) {
      targetElement.classList.add(toggleClass);
    } else {
      targetElement.classList.remove(toggleClass);
    }
  }
});

// Mobile Header Sticky
window.addEventListener("scroll", () => {
  const toggleClass = "is-sticky";
  const targetElement = document.querySelector(".elementor-hidden-desktop");

  if (targetElement) {
    if (window.pageYOffset > 150) {
      targetElement.classList.add(toggleClass);
    } else {
      targetElement.classList.remove(toggleClass);
    }
  }
});

// Search Input PlaceHolder
jQuery(document).ready(function() {
  jQuery('.hfe-search-form__input').attr('placeholder', 'Search Courses...');
});


jQuery(document).ready(function() {
    jQuery(document).on("click", ".view-pdf-btn", function() {
        var pdfurl = jQuery(this).attr('data-pdf-url');
        var newurl = 'https://docs.google.com/viewer?url='+pdfurl+'&embedded=true';
        jQuery("#pdfViewer").attr('src', newurl);
        setTimeout(function(){
          jQuery('#pdfModal').fadeIn();
        }, 1500);
    });

    jQuery("#closeModal, #pdfModal").on("click", function(event) {
        if (event.target === this) {
            jQuery('#pdfModal').fadeOut();
            jQuery("#pdfViewer").attr('src', ""); // Clear PDF after closing
        }
    });
});


jQuery(document).ready(function ($) {
    if (jQuery('.careers-widget .career-item').length > 0) {
        jQuery('#no-career').hide();
    }
    else
    {
      jQuery('#no-career').show();
    }
});