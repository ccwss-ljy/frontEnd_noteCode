window.onload = function(){
    var ul = document.getElementsByTagName("ul")[0];
    var li = document.getElementsByTagName("li");
    // 根据图片构造ul大小
    ul.style.width = li.length * 320 + "px";
    var img_a = document.getElementsByClassName("img_a")[0];
    var outer = document.getElementsByClassName("outer")[0];
    // 将超链接始终居中
    img_a.style.left = (outer.offsetWidth - img_a.offsetWidth) / 2 + "px";
    var a = document.getElementsByTagName("a");
    // 将第一个初始图片的超链接选中
    a[0].style.backgroundColor = "black";
    // 超链接点击颜色变化函数
    function setA(num){
        for(var i = 0;i < a.length;i++){
            a[i].style.backgroundColor = "";
        }
        a[num].style.backgroundColor = "black";
    }
    // 超链接的响应事件
    for(var i = 0;i < a.length;i++){
        a[i].num = i;
        a[i].onclick = function(){           
            setA(this.num);
            clearInterval(timer1);
            ul.style.left = this.num * -320 + "px";
            console.log(ul.offsetLeft / -320);
            index = (ul.offsetLeft / -320);
            timer1 = setInterval(function(){
                if(index < 6){
                    setA(a[index].num);
                }
                else{
                    setA(a[0].num);
                }       
                move(ul, 20 , -320 * index, function(){});
                console.log(index++);
                if(index > 6){
                    index = 0;
                }
            }, 1000);
        }
    }
    // 移动函数
    var timer;
    var timer1;
    function move(obj, speed, target, callback){      
        clearInterval(timer);
        timer = setInterval(function(){
            var oL = obj.offsetLeft;           
            if(oL == target){
                clearInterval(timer);
                callback();
            }
            if((oL - speed) > target){               
                obj.style.left = oL - speed + "px";
            }
            else{
                obj.style.left = target + "px";
            }          
        },90);     
        
    }
    var index = 0;
    // 自动移动
    
    timer1 = setInterval(function(){
        if(index < 6){
            setA(a[index].num);
        }
        else{
            setA(a[0].num);
        } 

        // if(index > 6){
        //     index = 0;
        //     ul.style.left = 0;
        // } 
        move(ul, 10 , -320 * index, function(){});
        if(index > 6){
            index = 0;
            // alert(ul.offsetLeft);
            ul.style.left = 0;
        } 
        index++;     
        
    }, 3000);
}