// Меню бургер
$('.btn__menu, header .nav__list-link').on('click', function () {
    window.innerWidth < 1300 ? $('.header .nav, .header, body, .btn__menu').toggleClass('tab_active') : '';
});

AOS.init({ offset: 100, duration: 1500, });


$('.fr__slider').slick({
    slidesToShow: 4,
    infinite: false,
    slidesToScroll: 1,
    arrows: false,
    swipeToSlide: true,
    // centerMode: true,
    centerPadding: '6px',
    responsive: [
        {
            breakpoint: 1300,
            settings: {
                slidesToShow: 3,
            }
        },
        {
            breakpoint: 992,
            settings: {
                dots: true,
                slidesToShow: 2,
            }
        }
    ]
});

$('.fr__slider--second').slick({
    slidesToShow: 5,
    infinite: false,
    slidesToScroll: 1,
    arrows: false,
    swipeToSlide: true,
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
                variableWidth: true,
                infinite: false,
                centerMode: false,
            }
        },
        {
            breakpoint: 1120,
            settings: {
                variableWidth: true,
                infinite: false,
                centerMode: false,
                slidesToShow: 2,
            }
        },
        {
            breakpoint: 720,
            settings: {
                variableWidth: true,
                infinite: false,
                dots: true,
                centerMode: false,
                slidesToShow: 1,
            }
        }
    ]
});

// custom select 
$('select').each(function () {
    const $this = $(this).hide().wrap('<div class="select-wrap"></div>');
    const $wrapper = $this.parent();
    $wrapper.addClass($this.attr('class'));

    const $selectedOption = $this.find('option[selected]');
    const hasSelected = $selectedOption.length > 0;
    const defaultOption = hasSelected ? $selectedOption : $this.find('option').eq(0);
    const defaultText = defaultOption.text().replace(/[^+\d]/g, '');

    const $customSelect = $('<div class="select"></div>')
        .addClass($this.attr('class'))
        .insertAfter($this)
        .html(`<span>${defaultText}</span>`);
    const $optionlist = $('<ul class="select-options"></ul>').insertAfter($customSelect);
    $this.children('option').each(function () {
        $('<li />', {
            text: $(this).text(),
            rel: $(this).val(),
            class: $(this).attr('hidden'),
            selected: $(this).attr('selected')
        }).appendTo($optionlist);
    });
    $customSelect.click(function (e) {
        e.stopPropagation();
        $('.select.active').not(this).removeClass('active').next('.select-options').hide();
        $(this).toggleClass('active').next('.select-options').slideToggle(300);
    });
    $optionlist.on('click', 'li', function (e) {
        e.stopPropagation();
        const sanitizedValue = $(this).text().replace(/[^+\d]/g, '');
        $customSelect.html('<span>' + sanitizedValue + '</span>').removeClass('active');
        $customSelect.removeClass('active');
        $this.val($(this).attr('rel')).trigger('change');
        $optionlist.hide();
    });
    $(document).click(function () {
        $customSelect.removeClass('active');
        $optionlist.hide();
    });
});
