$(function () {
    $('#bgndVideo').YTPlayer({
        videoURL: 'https://youtu.be/W0eiqqAdaeA?list=PLvjr4SLUAy2UTjzXs2PltS7KZeVkuD3qw',
        containment: '.main_video',
        autoPlay: true,
        mute: true,
        playOnlyIfVisible: true,
        loop: true,
        abundance: 0,
    });

    // $('a').on('click', function (e) {
    //     e.preventDefault();
    //     // console.log($(this.hash).offset().top);
    //     var hash = $(this.hash).offset().top;
    //     $('html,body').animate({ scrollTop: hash }, 500)
    // });

    $('.tab_menu>li>a').on('click', function (e) {
        e.preventDefault();
        // console.log($(this).parent().index());
        var idx = $(this).parent().index();
        $('.tab_content>li').removeClass('on');
        $('.tab_content>li').eq(idx).addClass('on');
        $('.tab_menu>li').removeClass('on');
        $(this).parent().addClass('on');
    });

    $('.shop_slider').slick({
        arrows: false,
        slidesToShow: 4,
        slidesToScroll: 3,
    });

    $('.shop_arrow i:nth-child(1)').on('click', function () {
        $('.shop_slider').slick('slickPrev');
    })

    $('.shop_arrow i:nth-child(2)').on('click', function () {
        $('.shop_slider').slick('slickNext');
    })
})