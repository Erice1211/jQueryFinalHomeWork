$(document).ready(function () {

    $('.dropdown').click(function (event) {
        /* Act on the event */
        event.preventDefault();
        //   $('.dropdown').toggleClass('active');
        $('.dropdown-open').slideToggle();
    });

    // lightbox 效果 (以2秒的方式顯示出圖片)
    lightbox.option({
        'resizeDuration': 300, //圖片飛入出現的效果
        //'fadeDuration':2000,   //圖片淡出
        'wrapAround': true
    });

    const swiper = new Swiper('.swiper', { //在swiper的class下swiper的效果
        // Optional parameters
        //direction: 'vertical',  /*上下切換(預設為左右切換)*/
        direction: 'horizontal',
        speed: 1000, //輪播速度
        loop: true, //是否重複輪播
        autoplay: { //自動撥放圖片
            delay: 1500,
        },
        //effect:'cube',   //輪播的特效(立方體)
        effect: 'slide', //輪播的特效(立方體)
        // If we need pagination (頁碼)
        pagination: {
            el: '.swiper-pagination',
        },

        // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },

        // And if we need scrollbar (加入捲軸)
        // scrollbar: {
        //   el: '.swiper-scrollbar',
        // },
    });

    //goTop
    function showBtnCondition() {
        if ($(this).scrollTop() > 250) {
            $('.goTop').fadeIn();
        } else {
            $('.goTop').fadeOut();
        }
    }

    /*移動scrollbar開始跑函數*/
    $(window).scroll(showBtnCondition);

    $('.goTop').click(function (e) {
        e.preventDefault();
        $('html,body').animate({
            scrollTop: 0
        }, 500);
    });



});