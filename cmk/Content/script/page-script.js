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
$("#article-nav a").click(                              //����U�䤤�@�ӳs����
    function () {
        var navid = $("#article-nav a").index(this);    //���H�ܼƬ����s�����ƦC����
        $("body,html").animate({ scrollTop: $(".article").eq(navid).offset().top }, "fast");    //�y�Z�a�B�ֳt�a�u��
    }
);

/*
Backtop Button
Backtop click event.It will scroll to the top.
*/
var backtop = $("#backtop");                    // ���H�ܼ� backtop �O�� #backtop �A�o�i���Ū�����ơC
backtop.css({ opacity: 0.75 });                 // �H jQuery �覡�]�w #backtop ���z���C
backtop.hover(                                  // �C��Ƹg�L�N�|�N #backtop �b 100ms ���H�ʱާΦ��]�m�����z���C
    function () {
        $(this).animate({ opacity: 1 }, 100);
    },
    function () {
        $(this).animate({ opacity: 0.75 }, 100);
    }
);
backtop.click(                                  //�C����U #backtop�A�|�H "fast" ���Φ��^�쭶���C
    function () {
        $("body,html").animate({ scrollTop: 0 }, "fast");
    }
);
$(window).scroll(                               //�C�����u�ʶW�L 300 px�A�|�b 200ms ���{�X�ӡC
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