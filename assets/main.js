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

// Toggle menu
jQuery(function() {
    $('#menu-toggle').on('click', function() {
        $('html').toggleClass('stop');
        $('#menu').toggleClass('simsalabim');
    });
    $('#menu a').on('click', function() {
        $('html').toggleClass('stop');
        $('#menu').toggleClass('simsalabim');
    });
    $('#close').on('click', function() {
        $('html').toggleClass('stop');
        $('#menu').toggleClass('simsalabim');
    });
    $('#content').on('click', function() {
        if ($("#menu").hasClass("simsalabim")) {
            $('html').toggleClass('stop');
            $('#menu').toggleClass('simsalabim');
        }
    });
});