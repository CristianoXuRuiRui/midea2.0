$(function(){
	//第一页
	//默认情况下加载第一页
	$.ajax({
					url:'../js/detali.json',
					type:'get',
					
					success:function(data){		
						
						var html = '';
						for(var i = 0 ; i < data[0].child.length; i ++){	
							html += '<li><a href="#"><img src="'+data[0].child[i].img+'"/></a><p>'+data[0].child[i].p+'</p><div><a>'+data[0].child[i].div+'</a></div><span>'+data[0].child[i].span+'</span></li>'		
						}
			       $("#bottom_right").find('#center_pic').html(html);
					}
	});
		$("#one").css("background","blue").css("color","white")
		
		
		//按下第一页
	$("#one").click(function(){
				$.ajax({
						url:'../js/detali.json',
						type:'get',
						
						success:function(data){		
							
							var html = '';
							for(var i = 0 ; i < data[0].child.length; i ++){	
								html += '<li><a href="#"><img src="'+data[0].child[i].img+'"/></a><p>'+data[0].child[i].p+'</p><div><a>'+data[0].child[i].div+'</a></div><span>'+data[0].child[i].span+'</span></li>'		
							}
				       $("#bottom_right").find('#center_pic').html(html);
						}
		});
		$("#one").css("background","blue").css("color","white");
		$("#three").css("background","").css("color","")
		$("#three").css("background","").css("color","")
			$("#right_left_number").html(1)	
		
	})
		
	$(function(){
			//按下第二页
	$("#two").click(function(){
			$.ajax({
					url:'../js/detali.json',
					type:'get',
					
					success:function(data){		
						
						var html = '';
						for(var i = 0 ; i < data[1].child.length; i ++){	
							html += '<li><a href="#"><img src="'+data[1].child[i].img+'"/></a><p>'+data[1].child[i].p+'</p><div><a>'+data[1].child[i].div+'</a></div><span>'+data[1].child[i].span+'</span></li>'		
						}
			       $("#bottom_right").find('#center_pic').html(html);
					}
					
		});
		$("#three").css("background","").css("color","")
		$("#one").css("background","").css("color","")
		$("#two").css("background","blue").css("color","white")
			$("#right_left_number").html(2)	
			
	})
		
	})
	
	  
	  
	  //按下第三页
	$(function(){
		$("#three").click(function(){
			$.ajax({
					url:'../js/detali.json',
					type:'get',
					
					success:function(data){		
						
						var html = '';
						for(var i = 0 ; i < data[2].child.length; i ++){	
							html += '<li><a href="#"><img src="'+data[2].child[i].img+'"/></a><p>'+data[2].child[i].p+'</p><div><a>'+data[2].child[i].div+'</a></div><span>'+data[2].child[i].span+'</span></li>'		
						}
			       $("#bottom_right").find('#center_pic').html(html);
					}
					
		});
		$("#two").css("background","").css("color","")
		$("#one").css("background","").css("color","")
		$("#three").css("background","blue").css("color","white")
			$("#right_left_number").html(3)	
		
	})
	})
	
		
		//alert($("center_pic").find("li").size())
		var center_pic = document.getElementById("center_pic");
		var ali = center_pic.getElementsByTagName("li");
		for(var i = 0;i < ali.length;i++){
			
			
			ali[i].like = i
			ali[i].onmouseover = function(){	
				startMove(ali[this.like],{opacity:60})
			}
			ali[i].onmouseout = function(){	
				startMove(ali[this.like],{opacity:100})
			}
		}
		//显示与消失
		var goods = document.getElementById("goods");
		var select = document.getElementById("select");
		select.addEventListener("click",toBlue,false);
		function toBlue(){
			this.style.background="blue";
			this.removeEventListener("click",toBlue)
			this.addEventListener("click",toNone,false)
		}
		function toNone(){
			this.style.background="";
			this.removeEventListener("click",toNone)
			this.addEventListener("click",toBlue,false)
		}
		var address = document.getElementById("address");
		var detali_address = document.getElementById("detali_address")
		address.onclick = function(event){
			if(detali_address.style.display == "block"){
				detali_address.style.display = "none";
			}else{
				
				detali_address.style.display = "block";
				$('#detali_address').find('ul').find("li").click(function(){
//					alert($(this).find("a:first").html())
//					alert($("#address").find("a:first").html())
					$("#address").find("a:first").html( $(this).find("a:first").html())
				})
			}
			//detali_address.style.display = "block";
//			var e = event||window.event;
//			e.stopPropagation?e.stopPropagation():e.cancelBubble = true;
		}
//		address.onclick = function(){
//			alert(1)
//			detali_address.style.display = "none";
//		}
		//照片的淡入淡出
//		$("#center_pic").find("li").hover(function(){
//			$(this).find("img").css("opacity","1")
//		},function(){
//			$(this).find("a").find("img").css("opacity","0.6")
//		})
		
		
		
		
		//按左右键进行翻页
		var number = document.getElementById("number");
		//var aS = number.getElementsByTagName("a");
		var big = document.getElementById("big");
		var small = document.getElementById("small");
		var Page = 1;
		var left1 = document.getElementById("left1");
		var right1 = document.getElementById("right1");
	//alert(number)
	//alert(aS)
    //alert(right1)
		big.onclick = function(){
			//alert(Page)			
			$("#right_left_number").html(Page)	
				
			Page ++;
			$("#number").children().eq(Page).click();
			if(Page >= 3){
				Page = 3;
				$("#number").children().eq(3).click();
			}
			
		}
		right1.onclick = function(){
			//alert(Page)			
			$("#right_left_number").html(Page)	
				
			Page ++;
			$("#number").children().eq(Page).click();
			if(Page >= 3){
				Page = 3;
				$("#number").children().eq(3).click();
			}
			
		}
		small.onclick = function(){
			//alert(Page)			
			$("#right_left_number").html(Page)	
				
			Page --;
			$("#number").children().eq(Page).click();
			if(Page <= 1){
				Page = 1;
				$("#number").children().eq(1).click();
			}
			
		}
		left1.onclick = function(){
			//alert(Page)			
			$("#right_left_number").html(Page)	
				
			Page --;
			$("#number").children().eq(Page).click();
			if(Page <= 1){
				Page = 1;
				$("#number").children().eq(1).click();
			}
			
		}
		$("#deng").click(function(){
			setTimeout(function(){
				window.location.href = 'entry.html'
				},100)
		})
		
		
})
