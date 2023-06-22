$(function(){
    
// 
// 
// 
// 
//     
    //메인슬라이드
    const mainSlide = new Swiper('.main-slide',{
        loop:true,
        autoplay: {
            delay: 1000,
            disableOnInteraction: false, //컨트롤 이후에 재생유무
        },
        navigation:{
            prevEl:'.prev',
            nextEl:'.next',
        },
        pagination:{
            el:'.fraction',
            type: 'fraction'
        }
    })

    $('.main-slide .autoplay').click(function(){
        // mainSlide.autoplay.stop();
        // mainSlide.autoplay.start();
        if ($(this).hasClass('on')) { //재생하고싶다.
            $(this).removeClass('on').attr('aria-label','자동재생 정지');
            mainSlide.autoplay.start();
        } else {//정지하고싶다.
            $(this).addClass('on').attr('aria-label','자동재생 적용');
            mainSlide.autoplay.stop();
        }
    })

    $('.sc-visual .slide-title .btn').click(function(){        
        idx = $(this).data('idx');
        $(this).addClass('active').siblings().removeClass('active');       
        mainSlide.slideToLoop(idx);
    })

    mainSlide.on('slideChange',function(){
        if(this.realIndex >= 2){
            $('.slide-citizens').addClass('active').siblings().removeClass('active');
        } else {
            $('.slide-news').addClass('active').siblings().removeClass('active');
        }
    })

    //링크
    $('#langBtn').click(function(){
        url = $('#langList').val();
        
        window.open(url); 

    })

    // 배너슬라이드
    const bannerSlide = new Swiper('.banner-slide',{
        slidesPerView: 3,
        spaceBetween: 43,
        navigation:{
            prevEl:'.prev',
            nextEl:'.next',
        },
        pagination:{
            el:'.swiper-pagination',
            type:'fraction',
        },
        autoplay: {
            delay: 4000,
        },
    })
    // top버튼
    $(window).scroll(function(){
        curr = $(this).scrollTop();
        if (curr > 1) {
            $('.btn-fix').addClass('show');
        } else {
            $('.btn-fix').removeClass('show');
        }
    })

    $('.btn-fix').click(function(e){
        e.preventDefault();
        window.scrollTo({top:0,behavior:"smooth"})
    })
    //하단 링크
    $('.related').click(function(e){
        if ($(this).siblings('.related-area').length > 0 ) {
            e.preventDefault();
            if ($(this).hasClass('on')) {
                $(this).removeClass('on').siblings('.related-area').stop().slideUp();
            } else {
                $('.related').removeClass('on').siblings('.related-area').stop().slideUp();
                $(this).addClass('on').siblings('.related-area').stop().slideDown();
            }
        }
    })

    $('.sc-related .sub-list .sub-item:first-child').keydown(function(e){
        code = e.keyCode;

        if (code === 9 && e.shiftKey) { //shift + tab 키  뒤로가는 키를 눌렀을때 
            $('.related').removeClass('on').siblings('.related-area').stop().slideUp();
        }
    })

    $('.sc-related .sub-list .sub-item:last-child').keydown(function(e){
        code = e.keyCode;

        if (code === 9 && !e.shiftKey) { // !!!!!!shift키가 안눌리고 tab 키  뒤로가는 키를 눌렀을때 
            $('.related').removeClass('on').siblings('.related-area').stop().slideUp();
        }
    })


})