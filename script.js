$(document).ready(function() {
    console.log("Scripts loaded successfully");
    let cartCount = 0;

    $('.add-to-cart').click(function() {
        cartCount++;
        $('#cart-count').text(cartCount);
        $(this).text('Added').prop('disabled', true).css('background-color', '#666666');
        setTimeout(() => {
            $(this).text('Add to Cart').prop('disabled', false).css('background-color', '#4A4A4A');
        }, 2000);
    });

    $('.info-btn').click(function() {
        const $info = $(this).next('.product-info, .service-info');
        $info.slideToggle();
    });

    $('#toggle-menu').click(function() {
        $('#nav-menu').slideToggle();
    });

   $('#contact-form').submit(function(e) {
    e.preventDefault();

    let name = $('#name').val().trim();
    let email1 = $('#email1').val().trim();
    let phone = $('#phone').val().trim();
    let message = $('#message').val().trim();
    let errorMsg = '';

    if (name === '') errorMsg += 'Name is required. ';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email1)) errorMsg += 'Valid email is required. ';
    if (phone === '') errorMsg += 'Phone is required. ';
    if (message === '') errorMsg += 'Comment is required. ';

    if (errorMsg) {
        $('#error-message').text(errorMsg).show();
    } else {
        $('#error-message').hide();

        $('#thankYouMessage').show();

        $('#contact-form')[0].reset();

        setTimeout(() => {
            $('#thankYouMessage').fadeOut();
        }, 3000);
    }
});
 
});
 