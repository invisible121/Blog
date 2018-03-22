// 一言调用
$.post("https://sslapi.hitokoto.cn/",null,function(e){
	$('.content').html(e.hitokoto+" —— <strong>"+e.from+"</strong>")
},'JSON');
// // 鼠标滑入事件
// $('.mask-window').mousemove(function(e){
// 	var x = e.originalEvent.x || e.originalEvent.layerX || 0;
// 	var widthWin = $(window).width();
// 	var widths = $('.mask-window').css('background-position-x');
// 	var widths = widths.split('%');
// 	if(widthWin/2 >= x){
// 		if($('.mask-window').css('background-position-x')!="0px")$('.mask-window').css('background-position-x',0);
// 		$('.mask-window').css('transition',"all "+ widths[0] * 0.6 +"s linear");
// 	}else{
// 		if($('.mask-window').css('background-position-x')!="100%")$('.mask-window').css('background-position-x',"100%");
// 		$('.mask-window').css('transition',"all "+ (100 - widths[0]) * 0.6 +"s linear");
// 	}
// });
// // 鼠标未滑入则执行
// setTimeout(function(){
// 	if($('.mask-window').css('background-position-x')!="0px")$('.mask-window').css('background-position-x',"100%");
// },100);
