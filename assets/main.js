// Smooth scroll to content
const $root = $('html, body');
$('a[href^="#"]').click(function () {
    let distance = $( $.attr(this, 'href') ).offset().top - 124 + 'px';
    $root.animate({
        scrollTop: distance
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