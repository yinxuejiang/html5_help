/*
自定义公用文件js
*/
$(function() {
    //加激活
    $("body").on("click", ".add-active", function() {
        $(this).addClass("active");
    });
    //去激活
    $("body").on("click", ".remove-active", function() {
        $(this).removeClass("active");
    });
    //切换激活
    $("body").on("click", ".toggle-active", function() {
        $(this).toggleClass("active");
    });

    //父  加激活
    $("body").on("click", ".addp-active", function() {
        $(this).parent().addClass("active");
    });
    //父  去激活
    $("body").on("click", ".removep-active", function() {
        $(this).parent().removeClass("active");
    });
    //父  切换激活
    $("body").on("click", ".togglep-active", function() {
        $(this).parent().toggleClass("active");
    });

    //关闭 父泡泡
    $("body").on("click", ".pub-closed-btn", function() {
        $(this).parents(".pub-popup").fadeOut();
    });
});

/*
页面尺寸变化时，重新格式化的东西
*/

$(function() {
    $(window).resize(function() {});
});

/*
点击空白处，要处理的东西
*/

$(function() {
    $(document).click(function(e) {

    });
});



/*
测试js
*/
$(function() {



});
