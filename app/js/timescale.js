/**
 * Created by fcm on 16/8/12.
 */
var timescaleNum = 190;
var timescaleWidth = 15 + (timescaleNum *9.16);
$("#timescale").css({"width":timescaleWidth});
for(var l= 0 ; l < timescaleNum ; l++){
    var i = l+1;

    $("#timescale").append("<li id='"+ i +"'></li>");
    if(i % 5 == 0){
        $("#"+ i +"").css({"height":"35px"});
        var n = i*100;
        $("#"+ i +"").append("<span>"+ n +"</span>");
    }else if (i == 1){
        $("#"+ i +"").css({"height":"35px"});
        var n = i*100;
        $("#"+ i +"").append("<span>"+ n +"</span>");
    }
    var s = $("#"+ i +"").position().left;
    $("#"+ i +"").attr("data-num",s);
}
var x= 0;
$(".timescale").scroll(function () {
    var y = x+=100;
    for(var m= 0 ; m < timescaleNum ; m++){
        var k = m+1;
        var g = k*100;
        var o = $("#"+ k +"").position().left;
        if(y == g){
            $(this).scrollLeft(o);
            console.log(y);
        };
    }

    $("#timescaleValue").html(y);
});