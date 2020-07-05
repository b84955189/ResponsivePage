/*
* Author：Jason.
* Describe: 工具集，依赖JQuery。
*
* */

/*清除轮播底部按钮样式*/
function clearRotationItemStyle(array){
    for(let item of array){
        $(item).css('background-color','rgba(255,255,255,0.3)');
    }
}
/*设置轮播底部按钮点击样式*/
function rotationItemClickStyle(item){
    $(item).css('background-color','rgba(255,255,255,0.7)');
}


/*然并没有什么东西~*/