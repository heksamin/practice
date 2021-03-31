$(document).ready(function(){
    $(".mainmenu > ul > li").mouseover(function(){
        $(".mainmenu > ul > li > ul").stop().slideDown(300);
    });
    $(".mainmenu > ul > li").mouseleave(function(){
        $(".mainmenu > ul > li > ul").stop().slideUp(300);
    });

    var currentIndex = 0;
    setInterval(function(){
        if(currentIndex < 2) {
            currentIndex++;
        } else {
            currentIndex = 0;
        }
        var slidePosition = currentIndex * (-360) + "px";
        $(".slideList").animate({top:slidePosition},400);
    },3000);

    var tabBtn = $(".tab-btn > ul > li");
    var tabCont = $(".tab-cont > div");
    tabCont.hide().eq(0).show();

    tabBtn.click(function(e){
        e.preventDefault();
        var target = $(this);
        var index = target.index();
        tabBtn.removeClass("active");
        target.addClass("active");
        tabCont.css("display", "none");
        tabCont.eq(index).css("display", "block");
    });

    $(".layerPopup").click(function(){
        $("#layer").css("display", "block");
    });
    $("#layer .close").click(function(){
        $("#layer").css("display", "none");
    });
});