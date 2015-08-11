$(function(){
	var li=$('.footer_tableBox_body_itemone li');
	var length=li.length;
	getLeft();
	$('.controls_next').click(function(){
			moveLeft();
	})
	$('.controls_prev').click(function(){
		moveRight();
	})
})

function getLeft(){
	var li=$('.footer_tableBox_body_itemone li');
	var length=li.length;
	var num=0;
	for(var i=0; i<length;i++){
		num=li.outerWidth(true)*i;
		$(li[i]).css('left',num);
	}
}

function moveLeft(){
	var li=$('.footer_tableBox_body_itemone li');
	var currentItem = $('.footer_tableBox_body_itemone_active');
	var nextItem = $('.current_last').next();
	var index=nextItem.index();
	var leftValue = 2*li.outerWidth(true);
	$(currentItem[0]).removeClass('footer_tableBox_body_itemone_active current_first')
				  .animate({left:-li.outerWidth(true)},500,function(){
				  	$(currentItem[1]).addClass('current_first').animate({left:0},500,function(){
				 				   $(currentItem[2]).removeClass('current_last').animate({left:li.outerWidth(true)},500,function(){
				  								  
				  								  	nextItem.addClass('footer_tableBox_body_itemone_active').addClass('current_last')
				  								  			.animate({left:leftValue},500);
				  								  	if(index== 6){
				  								  		nextItem.addClass('footer_tableBox_body_itemone_active').addClass('current_last')
				  								  			.animate({left:leftValue},500);
				  											$('.controls_next').unbind('click');
				  								  	}else{
				  								  		$('.controls_next').bind('click');
				  								  	}
				  							});
				  						});
				 				   });	  
}
function moveRight(){
	var li=$('.footer_tableBox_body_itemone li');
	var currentItem = $('.footer_tableBox_body_itemone_active');
	var prevItem = $('.current_first').prev();
	var index=prevItem.index();
	var leftValue = 3*li.outerWidth(true);
	var leftValuemin = 2*li.outerWidth(true);

	if(index != -1){
		$(currentItem[2]).removeClass('footer_tableBox_body_itemone_active current_last')
				  .animate({left:leftValue},500,function(){
				  	$(currentItem[1]).addClass('current_last').animate({left:leftValuemin},500,function(){
				 				   $(currentItem[0]).removeClass('current_first').animate({left:li.outerWidth(true)},500,function(){
				  								  
				  								  	prevItem.addClass('footer_tableBox_body_itemone_active current_first')
				  								  			.animate({left:0},500);
				  							});
				  						});
				 				   });	  
		$('.controls_prev').bind('click');
	}else{
		$('.controls_prev').unbind('click');
	}
}
