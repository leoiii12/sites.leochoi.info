var page = $("#page");

/*
Main Navigation
Main navigation hover event.It will make main navigation change color by hovering.
*/
$("#main-nav a").hover(
    function () {
        $(this).animate({ backgroundColor: "#000", color: "#FFF" }, 70);
    },
    function () {
        $(this).animate({ backgroundColor: "#FFF", color: "#000" }, 70);
    }
);

/*
Article Navigation
Article navigation click event.It will scroll to the article.
*/
$("#article-nav a").click(                              //當按下其中一個連結時
    function () {
        var navid = $("#article-nav a").index(this);    //先以變數紀錄連結的排列次序
        $("body,html").animate({ scrollTop: $(".article").eq(navid).offset().top }, "fast");    //流暢地、快速地滾動
    }
);

/*
Backtop Button
Backtop click event.It will scroll to the top.
*/
var backtop = $("#backtop");                    // 先以變數 backtop 記錄 #backtop ，這可減少讀取次數。
backtop.css({ opacity: 0.75 });                 // 以 jQuery 方式設定 #backtop 為透明。
backtop.hover(                                  // 每當滑經過就會將 #backtop 在 100ms 中以動晝形式設置為不透明。
    function () {
        $(this).animate({ opacity: 1 }, 100);
    },
    function () {
        $(this).animate({ opacity: 0.75 }, 100);
    }
);
backtop.click(                                  //每當按下 #backtop，會以 "fast" 的形式回到頁首。
    function () {
        $("body,html").animate({ scrollTop: 0 }, "fast");
    }
);
$(window).scroll(                               //每當頁面滾動超過 300 px，會在 200ms 漸現出來。
    function () {
        if ($(window).scrollTop() > 300) {
            backtop.fadeIn(200);
        }
        else {
            backtop.fadeOut(100);
        }
    }
);

/*
Footer Opacity Change
*/
var sitemap = $("#footer #sitemap");
sitemap.css({ opacity: 0.4 });
sitemap.hover(
    function () {
        $(this).animate({ opacity: 1 }, 100);
    },
    function () {
        $(this).animate({ opacity: 0.4 }, 100);
    }
);

/*
Font Bigger And Fade In
The font size and line height will be set 30px and 36px. (Bigger)
All things will fadeIn when loaded.
*/
if (jQuery.browser.mobile) {
    page.css("font-size", "30px");
    page.css("line-height", "36px");
    backtop.css("font-size", "44px");
    page.show();
}
else {
    page.slideDown(page.height()/2 + 300);
}

/*
Videos Load
Not every page will use.
*/
var videos = $("#page .videos");
function videosResizeEvent() {
    $(window).bind("resize load", function () {
        pageWidth = page.width();
        videos.width(pageWidth);
        videos.height(pageWidth / 16 * 9);
        $(".videoDescriptions").css("padding-top", videos.height() + 10);
    });
}
function loadVideos(count, url) {
    videos.eq(count).delay(count * 300 + 500).queue(function () {
        $(this).attr("src", url);
        
    });
}