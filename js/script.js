$(function() { 
    // menu
    $(".js-burger-btn").on("click", function() {
        $(".p-header__nav").toggleClass("menu-open");
        $(".p-header__burger-btn").toggleClass("menu-open");
        $(".p-header__burger-btn__bar").toggleClass("menu-open");
    });

    //ページ内リンクスムーススクロール
    $('a[href^="#"]').on('click', function () {
        var href = $(this).attr("href");
        var target = $(href == "#" || href == "" ? 'html' : href);
        var position = target.offset().top;
        $("html, body").animate({scrollTop: position}, 550, "swing");
        return false;
    });

    // メニュー押したときメニュー閉じる
    $('a[href^="#"]').on('click', function() {
        $('.p-header__nav').removeClass("menu-open");
        $('.p-header__burger-btn').removeClass("menu-open");
        $('.p-header__burger-btn__bar').removeClass("menu-open");

        return false; //a要素のリンク先移動防ぐ
    });

    // 上からfade in
    $(window).scroll(function (){
        $('.c-fade-in').each(function(){
            let targetElement = $(this).offset().top;
            let scroll = $(window).scrollTop();
            let windowHeight = $(window).height();
            if (scroll > targetElement - windowHeight + 200){
                $(this).css('opacity','1');
                $(this).css('transform','translateY(0)');
            }
        });
    });

    // headerの色変更
    $(window).on("scroll", function () {
        const sliderHeight = $(".p-fv").height();
        if (sliderHeight - 30 < $(this).scrollTop()) {
          $(".p-header__title__txt").addClass("js-color");
          $(".p-header__burger-btn__bar").addClass("js-color");
        } else {
          $(".p-header__title__txt").removeClass("js-color");
          $(".p-header__burger-btn__bar").removeClass("js-color");
        }
    });
    
    // slider
    $('.js-slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.js-thumb' //サムネイルのクラス名
    });
    $('.js-thumb').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        asNavFor: '.js-slider', //スライダー本体のクラス名
        focusOnSelect: true,
    });
});