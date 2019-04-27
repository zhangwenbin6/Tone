$(document).ready(function() {
    var mySwiper = new Swiper('.swiper-container', {
        direction: 'horizontal',
        loop: true, // 循环模式选项
        autoplay: true, // 循环模式选项
        speed: 2000,

        // 如果需要分页器
        pagination: {
            el: '.swiper-pagination',
        },

        // 如果需要前进后退按钮
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },

        // 如果需要滚动条
        scrollbar: {
            el: '.swiper-scrollbar',
        },
    })
});

;
(function($) {
    $(".my-li").on("mouseover", function() {
        $(".my-ul").show()
        $(".my-li").css("background", "none")
    });
    $(".my-li").on("mouseout", function() {
        $(".my-ul").hide();
    })

    $(".big-img-left-one").on("mouseover", function() {
        $(".my-div").show();
    });
    $(".big-img-left-one").on("mouseout", function() {
        $(".my-div").hide();
    });

    $(".big-img-left-two").on("mouseover", function() {
        $(".big-div").show();
    });
    $(".big-img-left-two").on("mouseout", function() {
        $(".big-div").hide();
    });

    $(".big-img-left-three").on("mouseover", function() {
        $(".big-div-one").show();
    });
    $(".big-img-left-three").on("mouseout", function() {
        $(".big-div-one").hide();
    });

    $(".big-img-left-four").on("mouseover", function() {
        $(".work-div").show();
    });
    $(".big-img-left-four").on("mouseout", function() {
        $(".work-div").hide();
    });







})($);


;
(function($) {
    $.fn.extend({
        Scroll: function(opt, callback) {
            //参数初始化
            if (!opt) var opt = {};
            var _this = this.eq(0).find("ul:first");
            var lineH = _this.find("li:first").height(), //获取行高
                line = opt.line ? parseInt(opt.line, 10) : parseInt(this.height() / lineH, 10), //每次滚动的行数，默认为一屏，即父容器高度
                speed = opt.speed ? parseInt(opt.speed, 10) : 500, //卷动速度，数值越大，速度越慢（毫秒）
                timer = opt.timer ? parseInt(opt.timer, 10) : 3000; //滚动的时间间隔（毫秒）
            if (line == 0) line = 1;
            var upHeight = 0 - line * lineH;
            //滚动函数
            scrollUp = function() {
                    _this.animate({
                        marginTop: upHeight
                    }, speed, function() {
                        for (i = 1; i <= line; i++) {
                            _this.find("li:first").appendTo(_this);
                        }
                        _this.css({ marginTop: 0 });
                    });
                }
                //鼠标事件绑定
            _this.hover(function() {
                clearInterval(timerID);
            }, function() {
                timerID = setInterval("scrollUp()", timer);
            }).mouseout();
        }
    })

    $(document).ready(function() {
        $("#scrollDiv").Scroll({ line: 1, speed: 1000, timer: 4000 });

    });

})($);

;
(function() {
    var btn = document.getElementById('btn');
    var scrollTop;
    var timer = null;
    window.onscroll = function() {
        scrollTop = document.documentElement.scrollTop || document.body.scrollTop; //兼容性写法，并且在滚动事件内可以实时获得滚动条距顶部的距离
        //console.log(scrollTop)
        return scrollTop;
    }
    btn.onclick = function() {
        clearInterval(timer);
        //        var now = scrollTop;
        //        var speed = (0-now)/10;
        //        speed = speed>0?Math.ceil(speed):Math.floor(speed);
        timer = setInterval(function() {
            var now = scrollTop;
            var speed = (0 - now) / 10;
            speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed); //这三步设置是定时器里面可以使速度动态变化，达到有缓冲的效果，如果房子定时器外面的话，返回顶部的速度是匀速的。

            if (scrollTop == 0) {
                clearInterval(timer);
            }
            document.documentElement.scrollTop = scrollTop + speed;
            document.body.scrollTop = scrollTop + speed;

        }, 20)

    }

})();