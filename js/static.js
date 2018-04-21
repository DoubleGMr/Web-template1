(function($){
	$('.DownButton').click(function(){
		$('.downmenu').slideToggle(200);
	});
	$('.mobile-button').click(function(){
		$('.link').slideToggle(200);
	});
	$('.notice_close').click(function(){
		$('.notice_m').fadeOut(200);
	});
	$('.notice_button').click(function(){
		$('.notice_m').fadeToggle(200);
	});
	$(window).scroll(function(){
		if($('.top').length>0){
			if($(window).scrollTop() > 50){
				$('.top').css('display','block');
			}else{
				$('.top').css('display','none');
			};
			var t1 = $(window).scrollTop() - $('.list').offset().top;
			var w = $(window).width();
			if( t1 >= 0 && w > 768){
				$('.list>ul').css('marginTop',t1);
			}else{
				$('.list>ul').css('marginTop',0);
			}
		}	
	});
	$('.top').click(function(){
		$('body,html').animate({scrollTop:0},500);
	});
	$('.reply_button').click(function(e){
		var to = $(e.target);
		var parent = to.parent().parent();
		var reply = $(parent).siblings('.reply');
		reply.slideToggle(300,function(){
			if (reply.css('display')=='none') {
				to.css('backgroundColor','#26abe2');
				to.text('回复');
			}else{
				to.css('backgroundColor','red');
				to.text('收起');
			}
		});

	});
	$('.reply_list_button').click(function(e){
		var to = $(e.target);
		var parent = $(e.target).parent().parent();
		var reply_c = $(parent).siblings('.reply_content');
		reply_c.slideToggle(300,function(){
			if (reply_c.css('display')=='none') {
				to.css('backgroundColor','#26abe2');
				to.text('查看回复');
			}else{
				to.css('backgroundColor','red');
				to.text('收起回复');
			}
		});
	});
})($)