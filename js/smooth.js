$('.smooth').on('click', function() {
    $.smoothScroll({
        scrollElement: $('body'),
        scrollTarget: this.getAttribute('href')
    });
    
    return false;
});
