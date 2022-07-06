/* 轮播图动画 */
// 固定圆点位置
var position = ($(".outer").width() - $(".list_a").width())/2;
$(".list_a").css("left", position);
/* 平滑移动 */
//给左右添加响应事件
var $list = $(".list");
var $imgWidth = $("img").width();
var $imgLength = $("img").length;
$(".left").click(function(){
    move(false);
});
$(".right").click(function(){
    move(true);
});
// 移动函数
function move(next){
    // 目前位置
    var cPosition = $list.position().left;
    // 总路程
    var target = next?(cPosition - $imgWidth):(cPosition + $imgWidth);
    // 总时间
    var allTime = 1000;
    // 时间间隔
    var interval = 20;
    // 间隔移动距离
    var spacing = $imgWidth/(allTime / interval);
    // alert(spacing);
    var timer = setInterval(function(){
        if(target == -1800){
            if(next){
                var xxx = $list.position().left - spacing;
            }
            else{
                var xxx = $list.position().left + spacing;
            }
            $list.css("left", -300);
            clearInterval(timer); 
        }
        else if(target == 0){
            $list.css("left", -1500);
            clearInterval(timer);
        }
        else{
            if(next){
                var xxx = $list.position().left - spacing;
            }
            else{
                var xxx = $list.position().left + spacing;
            }
            
            $list.css("left", xxx);
            // alert(1);
            if($list.position().left == target){
                clearInterval(timer);
            }
        }
    }, interval);
    
    
}