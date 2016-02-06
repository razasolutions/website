$(window).mousewheel(MouseWheelHandler);

function MouseWheelHandler(e, delta) {
	if (delta > 0){
		var target = $('.current').data('previous');
		if(target == null) return;
		$.smoothScroll({
        scrollElement: $('body'),
        scrollTarget: "#" + target
		});
		$('.current').removeClass('current');
		$('#menu-'+target).addClass('current');
	} else if (delta < 0){
		var target = $('.current').data('next');
		if(target == null) return;
		$.smoothScroll({
        scrollElement: $('body'),
        scrollTarget: "#" + target
		});
		$('.current').removeClass('current');
		$('#menu-'+target).addClass('current');
	}
	return false;
}