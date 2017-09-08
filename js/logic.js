$ = jQuery;
$(document).ready(function () {
    var width = document.body.clientWidth;

    $("#menuOpen").click(function (e) {
        $(this).toggleClass("opened");
    });

    if (width <= 1024) {
        $("#mainMenu .menu-item-has-children > a").append("<span></span>");
        $("#mainMenu .menu-item-has-children span").click(function() {
            $(this).parent().next().slideToggle(300);
            $(this).toggleClass("active");
            return false;
        });
    }

    /*var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        paginationClickable: true,
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        spaceBetween: 30
    });*/

    //WPCF7
    $(this).on('click', '.wpcf7-not-valid-tip', function () {
        $(this).prev().trigger('focus');
        $(this).fadeOut(500, function () {
            $(this).remove();
        });
    });

    $(window).bind("resize", function () {

    });

    if (!$(".woocommerce-checkout")[0]) {
        $("select").selbel();
    }

    //WOOOOOOOO

    /*initQuantityInput();
    $('body').on('click','.minus', function (e) {
        var val = parseInt($(this).next('input').val());
        if (val !== 0) {
            $(this).next('input').val(val - 1).change();
        }
    });
    $('body').on('click','.plus', function (e) {
        var val = parseInt($(this).prev('input').val());
        $(this).prev('input').val(val + 1).change();

    });
    $( document.body ).on('updated_cart_totals', function(){
        initQuantityInput();
    });
    function initQuantityInput() {
        $("form .quantity").prepend('<div class="minus qControls i-minus"></div>');
        $("form .quantity").append('<div class="plus qControls i-plus"></div>');
    }*/
});