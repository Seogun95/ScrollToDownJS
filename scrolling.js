function smoothScroll() {
    $('a').click(function () {
        var regExp = /[\{\}\[\]\/?.,;:|\)*~`!^\-_+<>@\#$%&\\\=\(\'\"]/gi;
        var aHref = $.attr(this, 'href');
        if (aHref.length > 1 && aHref.indexOf('#') > -1) {
            var windowTop = $(window).scrollTop();
            var offsetTop = $('#' + aHref.substr(1).replace(regExp, "\\$&")).offset().top;
            var distance = Math.abs(windowTop - offsetTop);
            var calcSpeed = 400 * distance / 2000;
            var speed = calcSpeed < 300 ? 300 : (calcSpeed > 800 ? 800 : calcSpeed);
            $('html, body').animate({
                scrollTop: offsetTop
            }, speed, 'swing');
            return false;
        }
    });
}

$(document).ready(function () {
    smoothScroll();
});