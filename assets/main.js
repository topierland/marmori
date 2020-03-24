// Smooth scroll to content
const $root = $('html, body');
$('a[href^="#"]').click(function () {
    $root.animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top
    }, 500);
    return false;
});

// Open secret content
jQuery(function() {
    $('.we-do').on('click', function() {
        $(this).toggleClass('revealed');
        $(this).find('.secret-content').slideToggle(400);
    });
});