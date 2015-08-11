var onoff = true;
$(function(){
	scrollAuto();
	$(".beginstop").click(function(){
		if(onoff)
			stopScroll();
		else
			beginScroll();

		return false;
	})
	$('.right').click(function(){
		scrollNext();
	})
	$('.left').click(function(){
		scrollPrev();
	})
	$('.content_body_nav_body strong,.content_body_nav_body ul').mouseover(function(){
		$(this).css('background-color','#494949');
		$('.content_body_nav_body ul').css('display','block');
	}).mouseout(function(){
		$(this).css('background-color','#919191');
		$('.content_body_nav_body ul').css('display','none');
	});
	$('.content_body_nav_body ul').mouseover(function(){
		$('.content_body_nav_body strong').css('background-color','#494949');
	}).mouseout(function(){
		$('.content_body_nav_body strong').css('background-color','#919191');
	});

	$('.Arts').mouseover(function(){
		$(this).css('background-color','#7053A7');
	}).mouseout(function(){
		$(this).css('background-color','#494949');
	});
		$('.Campus').mouseover(function(){
		$(this).css('background-color','#71AEE1');
	}).mouseout(function(){
		$(this).css('background-color','#494949');
	});
		$('.Global').mouseover(function(){
		$(this).css('background-color','#2ABB5B');
	}).mouseout(function(){
		$(this).css('background-color','#494949');
	});
		$('.Health').mouseover(function(){
		$(this).css('background-color','#826D30');
	}).mouseout(function(){
		$(this).css('background-color','#494949');
	});
		$('.Public').mouseover(function(){
		$(this).css('background-color','#144452');
	}).mouseout(function(){
		$(this).css('background-color','#494949');
	});
		$('.Science').mouseover(function(){
		$(this).css('background-color','#A5114C');
	}).mouseout(function(){
		$(this).css('background-color','#494949');
	});
		$('.Sustainability').mouseover(function(){
		$(this).css('background-color','#3F3440');
	}).mouseout(function(){
		$(this).css('background-color','#494949');
	});
		$('.Teaching').mouseover(function(){
		$(this).css('background-color','#207945');
	}).mouseout(function(){
		$(this).css('background-color','#494949');
	});
		$('.Unparalleled').mouseover(function(){
		$(this).css('background-color','');
	}).mouseout(function(){
		$(this).css('background-color','#494949');
	});
		$('.Social').mouseover(function(){
		$(this).css('background-color','#364B5D');
	}).mouseout(function(){
		$(this).css('background-color','#494949');
	});

	$('.content_body_last').mouseover(function(){
		$('.content_body_last span').css('background-position','right -124px');
	}).mouseout(function(){
		$('.content_body_last span').css('background-position','right 0px');
	})


})

function scrollNext(){
	var currentItem = $('.wrap.main');
	var children=$('#scroll > div.wrap');
	var imgNumber=children.length-1;

	if(imgNumber==0)
		return false;
	var itemWidth=currentItem.width();
	var windowWidth=$(window).width();
	var leftValue=(windowWidth-itemWidth)/2;
	var index=currentItem.index();

	if(currentItem.is(':animated'))
		return false;

	currentItem.children('.scrollImg').children('.prev-image').remove();
	currentItem.children('.scrollImg').children('.next-image').remove();

	var preImg = currentItem.children(".scrollImg")
							.children("a.current-image").clone();

	preImg.addClass("prev-image");
	preImg.removeClass("current-image");

	if(index==imgNumber){
		var nextItem=$('div.wrap:eq(0)');
	}else{
		var nextItem=currentItem.next();
	}

	nextItem.removeClass('hiddenLeft hide').addClass('hiddenRight').css('left',itemWidth+leftValue);

	if(nextItem.index()==imgNumber){
		var nextNextItem=$("div.wrap:eq(0)");
	}else{
		var nextNextItem=nextItem.next();
	}
	 var nextImg=nextNextItem.children('.scrollImg').children('.current-image').clone();

	 nextImg.addClass('next-image');
	 nextImg.removeClass('current-image');
	 nextImg.appendTo(nextItem.children('.scrollImg'));
	 
	 nextItem.animate({left:leftValue,opacity:'1'},1000,function(){
	 	nextItem.removeClass('hiddenRight').removeAttr('style').addClass('wrap main');
	 	preImg.appendTo(nextItem.children(".scrollImg"));
	 });

	 currentItem.animate({left:-itemWidth,opacity:'0.2'},1000,function(){
	 	currentItem.removeClass('main').removeAttr('style').addClass('hiddenLeft hide');
	 });
}

function scrollPrev(){
	var currentItem = $('.wrap.main');
	var children=$('#scroll > div.wrap');
	var imgNumber=children.length-1;

	if(imgNumber==0)
		return false;
	var itemWidth=currentItem.width();
	var windowWidth=$(window).width();
	var leftValue=(windowWidth-itemWidth)/2;
	var index=currentItem.index();

	if(currentItem.is(':animated'))
		return false;

	currentItem.children('.scrollImg').children('.prev-image').remove();
	currentItem.children('.scrollImg').children('.next-image').remove();

	var nextImg = currentItem.children(".scrollImg")
							.children("a.current-image").clone();

	nextImg.addClass("next-image");
	nextImg.removeClass("current-image");

	if(index==0){
		var prevItem=$("div.wrap:eq("+imgNumber+")");
	}else{
		var prevItem=currentItem.prev();
	}

	prevItem.removeClass('hide').css('left',leftValue-itemWidth);

	if(prevItem.index()==0){
		var prevPrevItem=$("div.wrap:eq("+imgNumber+")");
	}else{
		var prevPrevItem=prevItem.prev();
	}
	 var prevImg=prevPrevItem.children('.scrollImg').children('.current-image').clone();

	 prevImg.addClass('prev-image');
	 prevImg.removeClass('current-image');
	 prevImg.appendTo(prevItem.children('.scrollImg'));
	 
	 prevItem.animate({left:leftValue,opacity:'1'},1000,function(){
	 	prevItem.removeClass('hiddenLeft').removeAttr('style').addClass('wrap main');
	 	nextImg.appendTo(prevItem.children(".scrollImg"));
	 });

	 currentItem.animate({left:windowWidth,opacity:'0.2'},1000,function(){
	 	currentItem.removeClass('main').removeAttr('style').addClass('hiddenLeft hide');
	 }); 
}
function scrollAuto(){
	if(onoff)
		scrollNext();
	setTimeout("scrollAuto()",5000);
}

function stopScroll(){
	$(".beginstop").attr("src","../img/scrollPlay.jpg");
	onoff = false;
}

function beginScroll(){
	$(".beginstop").attr("src","../img/scrollStop.jpg");
	onoff = true;
}