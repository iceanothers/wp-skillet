$ = jQuery;
$(document).ready(function () {
    var width = document.body.clientWidth;

    $("#menuOpen").click(function (e) {
        $(this).toggleClass("opened");
    });

    /*$("#mainSlider .slider").bxSlider({
        pager: false,
        controls: false,
        prevText: '',
        nextText: '',
        breaks: [{
            screen:0, slides:1
        },{
            screen:1024, slides:2
        }]
    });*/

    $("select").selbel();
    stretch();

    $(this).on('click', '.wpcf7-not-valid-tip', function () {
        $(this).prev().trigger('focus');
        $(this).fadeOut(500, function () {
            $(this).remove();
        });
    });

    $(window).bind("resize", function () {
        stretch();
    });
});

function stretch(){
    $('[data-bg]').each(function() {
        if ($(this).attr('data-bg').length) {
            $(this).backstretch($(this).attr('data-bg'));
        }
    });
}

(function($){
    $.fn.selbel = function(settings) {
        var defaults = {
                onChange: function(){},
                label: ''
            },
            options = $.extend(defaults, settings);

        return this.each(function () {
            var el = $(this),
                sb_label = options.label ? '<label>' + options.label + '</label>' : '';
            if (!el.hasClass('selbel')) { el.addClass('selbel'); }
            el.each(function() {
                $(this).wrap("<span class='selbel_w' />").after(sb_label + '<span>' + $('*:selected', this).text() + '</span>');
            });
            el.change(function() {
                $(this).next().text($('*:selected', this).text());
                if(options.onChange) options.onChange.call(this);
            });
        });
    };
})(jQuery);

