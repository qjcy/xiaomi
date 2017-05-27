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

});