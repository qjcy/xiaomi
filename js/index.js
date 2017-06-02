/**
 * Created by waber on 2017/5/26.
 */
$(function () {
    // 购物车
    $('.shopping-cart').hover(function () {
        $('.shopping-box').css({
            'background-color': '#fff',
            'color': '#ff6700'
        });
        $('.shopping-detail').slideDown('fast');
    }, function () {
        setTimeout(function () {
            $('.shopping-box').css({
                'background-color': '#000',
                'color': '#A8A8A8'
            });
        }, 300);
        $('.shopping-detail').slideUp('fast');
    });


    //搜索框
    $('#search-text').focus(function () {
        $('.content-top .hot-word').css('display', 'none');
        $(this).css('border-color', '#FF6700');
        $('#search-btn').css('border-color', '#FF6700');
        $('.content-top .search-detail').show();
    });

    $('#search-text').blur(function () {
        $('.content-top .hot-word').css('display', 'inline-block');
        $(this).css('border-color', '#E0E0E0');
        $('#search-btn').css('border-color', '#E0E0E0');
        $('.content-top .search-detail').hide(100);
    });

    /* ===轮播图 ===*/
    // 代码初始化
    var size = $('.focus .focus-img li').size();
    for (var i = 0; i < size; i++) {
        var li = "<li></li>";
        $('.focus .num').append(li);
    }

    //手动控制轮播
    $('.focus-img li').eq(0).show();
    $('.num li').eq(0).addClass('active');
    $('.num li').click(function () {
        $(this).addClass('active').siblings().removeClass('active');

        var index = $(this).index();
        i = index;

        $('.focus-img li').eq(index).stop().fadeIn(300).siblings().stop().fadeOut(300);
    });

    //自动轮播
    var i = 0;
    var t = setInterval(moveR, 3000);
    //核心向右运动函数
    function moveR() {
        i++;
        if (i == size) {
            i = 0;
        }
        $('.num li').eq(i).addClass('active').siblings().removeClass('active');
        $('.focus-img li').eq(i).fadeIn(300).siblings().fadeOut(300);
    }

    //核心向左运动函数
    function moveL() {
        i--;
        if (i == -1) {
            i = size - 1;
        }
        $('.num li').eq(i).addClass('active').siblings().removeClass('active');
        $('.focus-img li').eq(i).fadeIn(300).siblings().fadeOut(300);
    }

    //左边按钮的点击事件
    $('.focus .left').click(function () {
        moveL();
    });

    //右边按钮的点击事件
    $('.focus .right').click(function () {
        moveR();
    });


    //定时器的结束
    $('.focus .focus-img,.focus .num,.focus .btn').hover(function () {
        clearInterval(t);
    },function () {
        t = setInterval(moveR,3000);
    });

});