// 本文件用于设置浏览器标题文字
// 浏览器标题
var OriginTitle = document.title;
var titleTime;
document.addEventListener('visibilitychange', function () {
    if (document.hidden) {
        $('[rel="icon"]').attr('href', "/img/sad.png");
        document.title = '呜呜，你不要我了哇';
        clearTimeout(titleTime);
    }
    else {
        $('[rel="icon"]').attr('href', "/img/favicon.png");
        document.title = '嘻嘻，你终于回来啦';
        titleTime = setTimeout(function () {
            document.title = OriginTitle;
        }, 2000);
    }
});
