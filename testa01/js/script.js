$(document).ready(function () {
    // 가로 메뉴 유형 //    
    $(".nav > ul > li").mouseover(function () {
        $(this).find(".submenu").stop().slideDown(200);
    });
    $(".nav > ul > li").mouseout(function () {
        $(this).find(".submenu").stop().slideUp(200);
    });

    // 이미지 슬라이드//
    var currentIndex = 0;
    setInterval(function () {
        if (currentIndex < 2) {
            currentIndex++;
        } else {
            currentIndex = 0;
        }
        var slidePosition = currentIndex * (-360) + "px";
        $(".slideList").animate({
            top: slidePosition
        }, 400);
    }, 3000);

    // 탭메뉴 //
    var tabBtn = $(".tab-btn > ul > li");
    var tabCont = $(".tab-cont > div");

    tabCont.hide().eq(0).show();

    tabBtn.click(function (e) {
        e.preventDefault();
        var target = $(this);
        var index = target.index();
        tabBtn.removeClass("active");
        target.addClass("active");
        tabCont.css("display", "none");
        tabCont.eq(index).css("display", "block");
    });

    // 팝업 //
    $(".layerPopup").click(function () {
        $(".layer").css("display", "block");
        $(".layer-bg").css("display", "block");
    });
    $(".layer .close").click(function () {
        $(".layer").css("display", "none");
        $(".layer-bg").css("display", "none");
    });

});