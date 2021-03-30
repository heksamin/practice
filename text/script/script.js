$(document).ready(function(){
     /* 메뉴 1줄씩 */ 
     $(".mainmenu > ul > li").mouseover(function(){
        $(this).find(".submenu").stop().slideDown(300);
      });
      $(".mainmenu > ul > li").mouseout(function(){
        $(this).find(".submenu").stop().slideUp(300);
      });
    
    /* 메뉴 전체
    $(".mainmenu > ul > li").mouseover(function(){
        $(".mainmenu > ul > li > ul").stop().slideDown(300);
    });
    $(".mainmenu > ul > li").mouseleave(function(){
        $(".mainmenu > ul > li > ul").stop().slideUp(300);
    }); */ 

    /* 메뉴 헤더
    $(".mainmenu > ul > li").mouseover(function(){
        $(".mainmenu > ul > li > ul").show();
    });
    $(".mainmenu > ul > li").mouseleave(function(){
        $(".mainmenu > ul > li > ul").hide();
    }); */

    /* 슬라이드 상하 */
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

    /* 슬라이드 페이드
    $(".slideList").children("div:gt(0)").hide();
    var current = 0;
    setInterval(function(){
        var next = (current + 1) % 3;
        $(".slideList").find("div").eq(current).fadeOut();
        $(".slideList").find("div").eq(next).fadeIn();
        current = next;
    },3000); */
    
    /* 슬라이드 좌우
    var slideCount = $(".slideImg").length;
    var currentIndex = 0;
    var slidePosition;
     setInterval(function(){
         if(currentIndex < slideCount - 1) {
            currentIndex++; 
         } else {
            currentIndex = 0;
         }
    slidePosition = currentIndex * (-1200) + "px";
    $(".slideList").animate({left:slidePosition},400);
     },3000); */
    
    /* 탭 메뉴 */
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
    
    $(".layerPopup").click(function(){
        $("#layer").css("display", "block");
    });
    $("#layer .close").click(function(){
        $("#layer").css("display", "none");
    });
});