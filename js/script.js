// Меню бургер
$('.btn__menu').on('click', function () {
    $(this).toggleClass('active');
    $('.header .nav, .header').toggleClass('active');
});

$('.fr__slider').slick({
    slidesToShow: 5,
    infinite: true,
    slidesToScroll: 1,
    arrows: false,
    swipeToSlide: true,
    centerMode: true,
    centerPadding: '6px',
    responsive: [
        {
            breakpoint: 1600,
            settings: {
                slidesToShow: 4,
            }
        },
        {
            breakpoint: 1300,
            settings: {
                slidesToShow: 3,
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
