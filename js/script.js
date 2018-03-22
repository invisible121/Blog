$(document).ready(function () {
    var url=window.location.host;
    var myurl="aorz.cc";
    if (url!=myurl) {
        $(".record").addClass("hidden");
    }else{
       $(".record").removeClass("hidden"); 
    }
    new Vidage('#VidageVideo');
    var delay = 1;
    var DELAY_STEP = 200;
    var animationOptions = { opacity: 1, top: 0};

    $('h1').animate(animationOptions).promise()
            .pipe(animateMain)
            .pipe(animateLocationIcon);

    function animateMain() {
        var dfd = $.Deferred();
        var els = $('.animate-init');
        var size = els.size();

        els.each(function (index, el) {
            delay++;
            $(el).delay(index * DELAY_STEP)
                    .animate(animationOptions);
            (size - 1 === index) && dfd.resolve();
        });
        return dfd.promise();
    }

    function animateLocationIcon() {
        $('.location-icon').delay(delay * DELAY_STEP).animate({
            opacity: 1,
            top: 0
        }).promise().done(animationQuote);
    }

    function animationQuote() {}
    $(".location-text").mouseover(function(){
        $('.tip').tipso({
            width: 260,
            position: 'top',
            background: 'rgba(0,0,0,0.1)',
            color: '#FFF'
        });
    });

    $(document.body).on('keydown', function (event) {
        // Press 'b' key
        if (event.which === 88) {
            $('.go-location').text("Going to Moexin's blog");
            $('.go').css('opacity', 1);

            window.setTimeout(function () {
                window.location.href = '//lmeoo.com';
            }, 1000);
        }
    });
});
