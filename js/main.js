$(function () {

    $('.main_slide').slick({
        arrows: false,
        dots: true,
        autoplay: true,
        autoplaySpeed: 3000,
        fade: true,
        speed: 1500,

    });


    // 패밀리링크 주소 받고 창 오픈
    $('#fl').on('change', function () {
        const lnk = $(this).val();
        // console.log(lnk, '바뀌네~~~');
        //val() 이 있을 때만...
        // if (lnk) { window.open(lnk); }
        // 리액트에서 쓰는 방식
        lnk && window.open(lnk);
    });

})