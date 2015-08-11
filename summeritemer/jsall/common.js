function menuTab (obj) {
$(obj).each(function(){
	var targetHight=$(this).find('.main-nav-nav').height();
	$(this).hover(function(){
		
		$(this).find('.main-nav-nav').stop().show().animate({height:targetHight},300);
	},
		function(){
			$(this).find('.main-nav-nav').stop().animate({height:0},300,function(){
				$(this).css('display','none');
			})
		})
})
}
