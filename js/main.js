$(function () {
    $(".form-search-submit").bind('click', function (e) {
        $('.navbar').addClass('opened');
        $('.form-search-field').focus();

        e.preventDefault();
    })

    if ($('.slider-slc').length) {
        $('.slider-slc').slick({
            dots: false,
            infinite: true,
            speed: 300,
            slidesToShow: 1,
            fade: true,
            autoplay: true,
            nextArrow: '.slick-next',
            prevArrow: '.slick-prev'
        });
    }

    $('.goods-slider').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        dots: false,
        infinite: true,
        centerMode: true,
        nextArrow: '.next-slider1',
        prevArrow: '.previous-slider1',
        speed: 500,
        autoplay: true,
        responsive: [
            {
                breakpoint: 1400,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4,
                }
            },
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerMode: false,
                    infinite: true,
                    dots: true,
                }
            }
        ]
    });


    if ($('.slider-news').length) {
        $('.slider-news').slick({
            dots: false,
            infinite: true,
            speed: 300,
            slidesToShow: 1,
            fade: true,
            autoplay: true,
            arrows: false,
            responsive: [
                {
                    breakpoint: 767,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        centerMode: false,
                        infinite: true,
                        dots: true,
                    }
                }
            ]
        });
    }

    $(".show-btn").click(function () {
        $(".hidden-block").show();
        $(this).css("display", "block");
        return false;
    });

    $(".menu-header li").mouseover(function () {
        $('.drop-down').stop().fadeIn(200);
    });

    $(".drop-down").mouseleave(function () {
        $('.drop-down').stop().fadeOut(200);
    });

    $(".menu-header li").mouseleave(function () {
        $(".drop-down").fadeOut(200);
    });

    $(".drop-down").mouseover(function () {
        $(this).stop().fadeIn(200);
    });

    $(".btn-back").click(function () {
        $(".menu-header").fadeOut(100);
        $(".menu-header").css("visibility", "hidden")
    });
    $(".submenu-toggle").click(function () {
        $(".menu-header").fadeIn(100);
        $(".menu-header").css("visibility", "visible")
    });

    $('.gallery-thumbs-box a').on("click", function (eventObject) {
        eventObject.preventDefault();
        var img = $('.gallery-thumbs-big img');
        img.hide();
        img.attr('src', $(this).children('img').attr('src'));
        img.fadeIn(700);
    });

    $('ul.i-tab li:first').addClass('active');
    $('ul.tab-content li:first').css('display', 'block');
    $('ul.i-tab').delegate('li:not(.active)', 'click', function () {
        $(this).addClass('active').siblings().removeClass('active')
            .parents('.product-tabs').find('ul.tab-content > li').hide()
            .eq($(this).index()).fadeIn('slow');
    });

    if ($('.js-example-basic-single').length) {
        $('.js-example-basic-single').select2();
    }
	
	$('.navbar-toggle').click(function () {
        $(this).parent().toggleClass('opened');
        $(this).toggleClass('opened');
        $('.navbar, .menu-header').slideToggle();
    });


    function myFunction() {
        if (window.pageYOffset > sticky) {
            header.classList.add("sticky");
        } else {
            header.classList.remove("sticky");
        }
    }

    $('#manual-ajax').click(function (event) {
        event.preventDefault();
        this.blur();
        $.get(this.href, function (html) {
            $(html).appendTo('body').modal({
                fadeDuration: 250,
                fadeDelay: 0.80
            });
        });
    });

});


 


