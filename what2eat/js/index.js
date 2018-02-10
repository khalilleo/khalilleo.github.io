var mainMenuUrl = "data/mainMenu.js";
$(function () {
    $('#chooseEat').one('click',function (){
        $.ajax({
            url:mainMenuUrl,
            type:"get",
            data:{

            },
            success:function(data){
                var maninMenu = JSON.parse(data);
                var typeNum = Math.floor(Math.random()*maninMenu.length);
                console.log(maninMenu);
                $('#mainChoose').html("您今天的幸运选择是：<br>"+maninMenu[typeNum].name + '');
                $('#chooseEat').text("不想吃，再来一次");
                $("#chooseEat").one('click',function (){
                    window.location.reload();
                })
            }
        })
    })
})