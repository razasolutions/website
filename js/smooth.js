$('.smooth').on('click', function() {
    $.smoothScroll({
        scrollElement: $('body'),
        scrollTarget: '#'+this.getAttribute('href')
    });
    $('.current').removeClass('current');
	$('#menu-'+this.getAttribute('href')).addClass('current');
    return false;
});