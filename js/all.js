$(document).ready(function() {

    //導航菜單
    $('.menu li a').on('click', function(e) {
        e.preventDefault();
        $(this).addClass('active');
        $(this).parent().siblings().find('a').removeClass('active');
        $(this).parent().find('ul').slideToggle(100);
        $(this).parent().siblings().find('ul').slideUp(100);
    })

    $('.mobile-menu-btn').on('click', function() {
        $('body').toggleClass('open');
    })

    //輪播
    const swiper = new Swiper('.swiper-container', {
        // Optional parameters
        direction: 'horizontal',
        loop: true,
        loop: true, //是否循環輪播

        speed: 1000, //播放速度，單位毫秒

        autoplay: { //自動輪播

            delay: 3000, //自動輪播時間

        },

        // If we need pagination
        pagination: {
            el: '.swiper-pagination',
        },

        // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },

        // And if we need scrollbar
        scrollbar: {
            el: '.swiper-scrollbar',
        },

    });

    //pageup
    $('.pageup').on('click', function() {
        $("html,body").animate({ scrollTop: 0 }, 500);
    });

    // RWD側選單
    $('.mobile-menu li a').on('click', function() {
        $(this).addClass('active');
        $(this).parent().siblings().find('a').removeClass('active');
        $(this).parent().find('ul').slideToggle();
        $(this).parent().siblings().find('ul').slideUp();
    })
});