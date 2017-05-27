/**
 * Created by waber on 2017/5/26.
 */
$(function () {
   // 购物车
    $('.shopping-cart').hover(function () {
        $('.shopping-box').css({
            'background-color':'#fff',
            'color':'#ff6700'
        });
        $('.shopping-detail').slideDown('fast');
    },function () {
        setTimeout(function () {
            $('.shopping-box').css({
                'background-color':'#000',
                'color':'#A8A8A8'
            });
        },300);
        $('.shopping-detail').slideUp('fast');
    });
    
    
    //搜索框
    $('#search-text').focus(function () {
        $('.content-top .hot-word').css('display','none');
        $(this).css('border-color','#FF6700');
        $('#search-btn').css('border-color','#FF6700');
        $('.content-top .search-detail').show();
    });

    $('#search-text').blur(function () {
        $('.content-top .hot-word').css('display','inline-block');
        $(this).css('border-color','#E0E0E0');
        $('#search-btn').css('border-color','#E0E0E0');
        $('.content-top .search-detail').hide(100);
    })

});