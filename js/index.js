/**
 * Created by waber on 2017/5/26.
 */
$(function () {
   // 购物车
    $('.shopping-box').hover(function () {
        $(this).next().slideDown();
    },function () {
        $(this).next().slideUp();
    });

});