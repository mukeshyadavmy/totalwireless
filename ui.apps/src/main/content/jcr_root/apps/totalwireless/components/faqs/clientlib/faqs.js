$(document).ready(function() {
  // Check if the 'open-all' class is applied to the container
  if ($('.accordion-container').hasClass('open-all')) {
    // If 'open-all' is present, open all sections by default
    $('.accordion-content').show();
    $('.arrow').addClass('open');
  }

  $('.accordion-header').click(function() {
    const content = $(this).next('.accordion-content');
    const arrow = $(this).find('.arrow');

    // If the container has the 'open-all' class, don't close other sections
    if ($('.accordion-container').hasClass('open-all')) {
      content.stop(true, true).slideToggle();
      arrow.toggleClass('open');
    } else {
      // If not 'open-all', close other sections and toggle the clicked section
      if (!content.is(':visible')) {
        $('.accordion-content').slideUp();
        $('.arrow').removeClass('open');
      }

      content.stop(true, true).slideToggle();
      arrow.toggleClass('open');
    }
  });
});
