$(function () {


    //comment-slider

    $('.comment-slider').slick({

        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3500,
        button: false,
        arrows: true,
        prevArrow: '.left',
        nextArrow: '.right',
        speed: 2000,
        responsive: [
            {
                breakpoint: 481,
                settings: {
                    slidesToShow: 1,
                    centerMode: false,
                    centerPadding: 0,
                }
    },
            {
                breakpoint: 321,
                settings: {
                    slidesToShow: 1,
                }
    },
            {
                breakpoint: 769,
                settings: {
                    slidesToShow: 2,
                    centerMode: false,
                    centerPadding: 0,
                }
    },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                }
    }

  ]

    });



    //ring_slider

    $('.ring_slider').slick({

        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        autoplay: true,
        autoplaySpeed: 3500,
        button: false,
        arrows: false,
        prevArrow: '.ring_left',
        nextArrow: '.ring_right',
        dots: false,
        speed: 2500,
        responsive: [
            {
                breakpoint: 481,
                settings: {
                    slidesToShow: 1,
                    centerMode: false,
                    centerPadding: 0,
                }
    },
            {
                breakpoint: 321,
                settings: {
                    slidesToShow: 1,
                }
    },
            {
                breakpoint: 769,
                settings: {
                    slidesToShow: 1,
                    centerMode: false,
                    centerPadding: 0,
                }
    },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 1,
                }
    }

  ]

    });




    //"explore_homepage_slider

    $('.explore_homepage_slider').slick({

        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2500,
        fade:true,
    
        button: false,
        arrows: false,
        dots: false,
        speed: 2500,
        responsive: [
            {
                breakpoint: 481,
                settings: {
                    slidesToShow: 1,
                    centerMode: false,
                    centerPadding: 0,
                }
    },
            {
                breakpoint: 321,
                settings: {
                    slidesToShow: 1,
                }
    },
            {
                breakpoint: 769,
                settings: {
                    slidesToShow: 1,
                    centerMode: false,
                    centerPadding: 0,
                }
    },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 1,
                }
    }

  ]

    });



});
