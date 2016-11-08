
$(function(){
					//登录
					$("#deng").click(function(){
						alert(22)
						window.location.href = "html/entry.html"
					})
	//空调
				$("#main_left_in").find("ul:first").find("#cainter").find("#cainter_hide").css("display","none")
				$.ajax({
					url:'js/index.json',
					type:'get',
					success:function(data){
					
						var html = '';
						for(var i = 0 ; i < data[0].child.length; i ++){	
							html += '<li class="goods_item"><img src="'+data[0].child[i].img+'" alt=""><div>'+data[0].child[i].title+'</div><span>'+data[0].child[i].price+'</span></li>'		
						}
						$('#cainter_hide_left').html(html);
					}
			});
				$.ajax({
					url:'js/index.json',
					type:'get',
					success:function(data){
					
						var html = '';
						for(var i = 0 ; i < data[1].child.length; i ++){	
							html += '<li class="goods_item1"><a href="#">'+data[1].child[i].a+'</a></li>'		
						}
						$('#cainter_hide_right ul').html(html);
					}
			});
			//冰箱
			$.ajax({
					url:'js/index.json',
					type:'get',
					success:function(data){
					
						var html = '';
						for(var i = 0 ; i < data[2].child.length; i ++){	
							html += '<li class="goods_item"><img src="'+data[2].child[i].img+'" alt=""><div>'+data[2].child[i].title+'</div><span>'+data[2].child[i].price+'</span></li>'		
						}
						$('#icebox_hide_left').html(html);
					}
			});
			$.ajax({
					url:'js/index.json',
					type:'get',
					success:function(data){
					
						var html = '';
						for(var i = 0 ; i < data[3].child.length; i ++){	
							html += '<li class="goods_item1"><a href="#">'+data[3].child[i].a+'</a></li>'		
						}
						$('#icebox_hide_right ul').html(html);
					}
			});
			//洗衣机
			$.ajax({
					url:'js/index.json',
					type:'get',
					success:function(data){
					
						var html = '';
						for(var i = 0 ; i < data[4].child.length; i ++){	
							html += '<li class="goods_item"><img src="'+data[4].child[i].img+'" alt=""><div>'+data[4].child[i].title+'</div><span>'+data[4].child[i].price+'</span></li>'		
						}
						$('#washer_hide_left').html(html);
					}
			});
			$.ajax({
					url:'js/index.json',
					type:'get',
					success:function(data){
						
						var html = '';
						for(var i = 0 ; i < data[5].child.length; i ++){	
							html += '<li class="goods_item1"><a href="#">'+data[5].child[i].a+'</a></li>'		
						}
						$('#washer_hide_right ul').html(html);
					}
			});
			//厨房小电
			$.ajax({
					url:'js/index.json',
					type:'get',
					success:function(data){
					
						var html = '';
						for(var i = 0 ; i < data[6].child.length; i ++){	
							html += '<li class="goods_item"><img src="'+data[6].child[i].img+'" alt=""><div>'+data[6].child[i].title+'</div><span>'+data[6].child[i].price+'</span></li>'		
						}
						$('#small_hide_left').html(html);
					}
			});
			$.ajax({
					url:'js/index.json',
					type:'get',
					success:function(data){
						
						var html = '';
						for(var i = 0 ; i < data[7].child.length; i ++){	
							html += '<li class="goods_item1"><a href="#">'+data[7].child[i].a+'</a></li>'		
						}
						$('#small_hide_right ul').html(html);
					}
			});
			//厨房大电
			$.ajax({
					url:'js/index.json',
					type:'get',
					success:function(data){
					
						var html = '';
						for(var i = 0 ; i < data[8].child.length; i ++){	
							html += '<li class="goods_item"><img src="'+data[8].child[i].img+'" alt=""><div>'+data[8].child[i].title+'</div><span>'+data[8].child[i].price+'</span></li>'		
						}
						$('#big_hide_left').html(html);
					}
			});
			$.ajax({
					url:'js/index.json',
					type:'get',
					success:function(data){			
						var html = '';
						for(var i = 0 ; i < data[9].child.length; i ++){	
							html += '<li class="goods_item1"><a href="#">'+data[9].child[i].a+'</a></li>'		
						}
						$('#big_hide_right ul').html(html);
					}
			});
			//生活家电
			$.ajax({
					url:'js/index.json',
					type:'get',
					success:function(data){
					
						var html = '';
						for(var i = 0 ; i < data[10].child.length; i ++){	
							html += '<li class="goods_item"><img src="'+data[10].child[i].img+'" alt=""><div>'+data[10].child[i].title+'</div><span>'+data[10].child[i].price+'</span></li>'		
						}
						$('#live_hide_left').html(html);
					}
			});
			$.ajax({
					url:'js/index.json',
					type:'get',
					success:function(data){			
						var html = '';
						for(var i = 0 ; i < data[11].child.length; i ++){	
							html += '<li class="goods_item1"><a href="#">'+data[11].child[i].a+'</a></li>'		
						}
						$('#live_hide_right ul').html(html);
					}
			});
			//热水器/净水机
			$.ajax({
					url:'js/index.json',
					type:'get',
					success:function(data){
					
						var html = '';
						for(var i = 0 ; i < data[12].child.length; i ++){	
							html += '<li class="goods_item"><img src="'+data[12].child[i].img+'" alt=""><div>'+data[12].child[i].title+'</div><span>'+data[12].child[i].price+'</span></li>'		
						}
						$('#clear_hide_left').html(html);
					}
			});
			$.ajax({
					url:'js/index.json',
					type:'get',
					success:function(data){			
						var html = '';
						for(var i = 0 ; i < data[13].child.length; i ++){	
							html += '<li class="goods_item1"><a href="#">'+data[13].child[i].a+'</a></li>'		
						}
						$('#clear_hide_right ul').html(html);
					}
			});
			//配件及周边
			$.ajax({
					url:'js/index.json',
					type:'get',
					success:function(data){
					
						var html = '';
						for(var i = 0 ; i < data[14].child.length; i ++){	
							html += '<li class="goods_item"><img src="'+data[14].child[i].img+'" alt=""><div>'+data[14].child[i].title+'</div><span>'+data[14].child[i].price+'</span></li>'		
						}
						$('#round_hide_left').html(html);
					}
			});
			$.ajax({
					url:'js/index.json',
					type:'get',
					success:function(data){			
						var html = '';
						for(var i = 0 ; i < data[15].child.length; i ++){	
							html += '<li class="goods_item1"><a href="#">'+data[15].child[i].a+'</a></li>'		
						}
						$('#round_hide_right ul').html(html);
					}
			});
			$("#main_left_in ul").find("li").hover(function(){
				$(this).find("div:first").animate({width:680},300)
				$(this).css("background","#f3f3f3")
				$(this).find("div").css("display","block").find("ul").find("li").hover(function(){		
					$(this).css("color","red")		
						
				},function(){
					$(this).css("color","black")
					
				})

			},function(){
				$(this).find("div:first").animate({width:650},300)
				$(this).css("background","#ffffff")
				$(this).find("div").css("display","none")
			});
					//alert($("#foot").find("#foot_top").children())
					
					
					
})
	
			

//轮播图效果
			
			
$(function(){
//				$().extend("size",function(){
//				return this.elements.length;
//				alert(2)
//			})
//轮播图
$.ajax({
					url:'js/index.json',
					type:'get',
					success:function(data){
					
						var html = '';
						for(var i = 0 ; i < data[16].child.length; i ++){	
							html += '<li class="lbpic"><a href="#"><img src="'+data[16].child[i].img+'" alt=""></a></li>'
						}
						$('#main_top_right ul').html(html);
					}
			});
				var btn = $("#main_top_right").find("#dote").find("a");
				var oul = $("#main_top_right").find("ul:first");
				var ali = oul.find("li");
				
				var iNow = 0;
				var timer = 0;
				btn.click(function(){
					iNow = $(this).index();
					tab();
				})
				timer=setInterval(gotimer,2000);
				function gotimer(){
					iNow++;
					tab();

				}
				$("#main_top_right").hover(function(){
					$(this).find("#left").css("opacity","0.6")
					$(this).find("#right").css("opacity","0.6")
					clearInterval(timer);
				},function(){
					timer=setInterval(gotimer,2000);
					$(this).find("#left").css("opacity","0")
					$(this).find("#right").css("opacity","0")
				})
				$("#main_top_right").find("#left").click(function(){
					oul.animate({left:left += 1000})
					iNow++;
					btn.css("background","white");
					btn.eq(iNow).css("background","blue")
					
				})
				$("#main_top_right").find("#right").click(function(){
					oul.animate({left:left -= 1000})
					iNow--;
					btn.css("background","white");
					btn.eq(iNow).css("background","blue")
					if(iNow == 0){
						iNow = 0;
						oul.css("left",0)
					}
				})
				function tab(){
					btn.css("background","white");
					btn.eq(iNow).css("background","blue");
					if(iNow == ali.size()-1){
						btn.eq(0).css("background","blue");
					}
					
					oul.animate({left:-1000*iNow},function(){
						
						if(iNow == ali.size()-1){
							iNow = 0;
							console.log(iNow)
							oul.css("left",0)
						}
					})
				}
});
//			$(function(){
//				$("#main_center").find("ul").mouseenter(function(){
//					$(this).animate({top:-5},30)
//				})
//				$("#main_center").find("ul").mouseleave(function(){
//					$(this).animate({top:0},30)
//				})
//			
//			})
			$.ajax({
					url:'js/index.json',
					type:'get',
					success:function(data){			
						var html = '';
						for(var i = 0 ; i < data[17].child.length; i ++){	
							html += '<li class="goods_item1"><a href="#"><img src="'+data[17].child[i].img+'"/></a></li>'		
						}
			       $('#main_center').find("ul").html(html);
					}
			
			});
	$(function(){
				$.ajax({
					url:'js/index.json',
					type:'get',
					success:function(data){			
						var html = '';
						for(var i = 0 ; i < data[18].child.length; i ++){	
							html += '<a href="#"><img src="'+data[18].child[i].img+'"/><div>'+data[18].child[i].price+'</div></a><p>'+data[18].child[i].yh+'</p>'		
						}
			       $('#center_top_left').html(html);
					}
			});
			$("#center_top_left").hover(function(){
				$(this).find("div:first").css("color","red");
				$(this).find("a:first").animate({top:-5},30)
			},function(){
				$(this).find("div:first").css("color","black");
				$(this).find("a:first").animate({top:0},30)
			})
	})
		$(function(){
				$.ajax({
					url:'js/index.json',
					type:'get',
					success:function(data){			
						var html = '';
						for(var i = 0 ; i < data[19].child.length; i ++){	
							html += '<li><a href="#"><img src="'+data[19].child[i].img+'"/></a><p>'+data[19].child[i].action+'</p><span><a>'+data[19].child[i].title+'</a></span><div><a>'+data[19].child[i].price+'</a></div></li>'		
						}
			       $('#center_top_right ul').html(html);
					}
			})
			//console.log($("#center_top_right").find("ul:first").find("li"))
			$("#center_top_right").find("ul:first").hover(function(){
				//alert(1)
				//$(this).find("span").find("a").css("color","red");
				$("li").find("div").find("a").css("color","red");
				//$(this).animate({top:-5},30)
			},function(){
				$(this).find("div").find("a").css("color","black");
				//$(this).animate({top:0},30)
			})
		});
	$(function(){
				$.ajax({
					url:'js/index.json',
					type:'get',
					success:function(data){			
						var html = '';
						for(var i = 0 ; i < data[20].child.length; i ++){	
							html += '<a href="#"><img src="'+data[20].child[i].img+'"/></a><p>'+data[20].child[i].action+'</p><span><a>'+data[20].child[i].price+'</a></span>'		
						}
			       $('#center_bottom_left_top').html(html);
					}
			});
			$("#center_bottom_left_top").hover(function(){
				$(this).find("p").find("a").css("color","red");
				$(this).find("span").find("a").css("color","red");
				$(this).find("a:first").animate({top:-5},30)
			},function(){
				$(this).find("span").find("a").css("color","black");
				
				$(this).find("a:first").animate({top:0},30)
			})
	})
	$(function(){
				$.ajax({
					url:'js/index.json',
					type:'get',
					success:function(data){			
						var html = '';
						for(var i = 0 ; i < data[21].child.length; i ++){	
							html += '<li><a href="#"><img src="'+data[21].child[i].img+'"/></a><a><p>'+data[21].child[i].title+'</p></a><div><a>'+data[21].child[i].price+'</a></div></li>'		
						}
			       $("#center_bottom_left_bottom").html(html);
					}
			}); 
//			$("#center_bottom_left_bottom").find("li").find("div").mouseover(function(){
//			//alert($("#center_bottom_left_bottom").find("li").find("div"))
//				$(this).find("a").css("color","red")
//			});
//			
//			$("#center_bottom_left_bottom").find("li").find("div").mouseout(function(){
//				$(this).find("a").css("color","black")
//			})
	})
			$(function(){
				$.ajax({
								url:'js/index.json',
								type:'get',
								success:function(data){			
									var html = '';
									for(var i = 0 ; i < data[22].child.length; i ++){	
										html += '<a href="#"><img src="'+data[22].child[i].img+'"/></a><a><div>'+data[22].child[i].price+'</div></a>'		
									}
						       $('#center_bottom_right').html(html);
								}
						});
						$('#center_bottom_right').hover(function(){
							$(this).find("a:first").animate({top:-5},10)
							$(this).find("a").css("color","red")
						},function(){
							$(this).find("a:first").animate({top:0},30)
							$(this).find("a").css("color","black")
						})
			})
			
			
			//会员
			$(function(){
				$.ajax({
								url:'js/index.json',
								type:'get',
								success:function(data){			
									var html = '';
									for(var i = 0 ; i < data[23].child.length; i ++){	
										html += '<li><a href="#"><img src="'+data[23].child[i].img+'"/></a><a class="join">'+data[23].child[i].value+'</a></li>'		
									}
						       $('#member_pic ul').html(html);
								}
						});
						 
			})
			
	$(function(){
		$.ajax({
					url:'js/index.json',
					type:'get',
					success:function(data){			
						var html = '';
						for(var i = 0 ; i < data[24].child.length; i ++){	
							html += '<div class="next"><h3><a>'+data[24].child[i].title+'</a></h3><ul></ul></div>'		
						}
					
			       $('#foot_top').html(html);
					}
			
			});
			//$('#foot_top').find("div:last").html("<p id="next2"><a>∨</a></p>")
			$.ajax({
					url:'js/index.json',
					type:'get',
					success:function(data){			
						var html = '';
						for(var i = 0 ; i < data[25].child.length; i ++){	
							html += '<li ><a>'+data[25].child[i].title+'</a></li>'		
						}
			       $('#foot_top').children().eq(0).find("ul").html(html);
					}
			
			});
			$.ajax({
					url:'js/index.json',
					type:'get',
					success:function(data){			
						var html = '';
						for(var i = 0 ; i < data[26].child.length; i ++){	
							html += '<li ><a>'+data[26].child[i].title+'</a></li>'		
						}
			       $('#foot_top').children().eq(1).find("ul").html(html);
					}
			
			});
			$.ajax({
					url:'js/index.json',
					type:'get',
					success:function(data){			
						var html = '';
						for(var i = 0 ; i < data[27].child.length; i ++){	
							html += '<li ><a>'+data[27].child[i].title+'</a></li>'		
						}
			       $('#foot_top').children().eq(2).find("ul").html(html);
					}
			
			});
			$.ajax({
					url:'js/index.json',
					type:'get',
					success:function(data){			
						var html = '';
						for(var i = 0 ; i < data[28].child.length; i ++){	
							html += '<li ><a>'+data[28].child[i].title+'<a></li>'		
						}
			       $('#foot_top').children().eq(3).find("ul").html(html);
					}
			
			});
			$.ajax({
					url:'js/index.json',
					type:'get',
					success:function(data){			
						var html = '';
						for(var i = 0 ; i < data[29].child.length; i ++){	
							html += '<li ><a>'+data[29].child[i].title+'</a></li>'		
						}
			       $('#foot_top').children().eq(4).find("ul").html(html);
					}
			
			});
			$.ajax({
					url:'js/index.json',
					type:'get',
					success:function(data){			
						var html = '';
						for(var i = 0 ; i < data[30].child.length; i ++){	
							html += '<li ><a>'+data[30].child[i].title+'</a></li>'		
						}
			       $('#foot_top').children().eq(5).find("ul").html(html);
					}
			
			});
			$.ajax({
					url:'js/index.json',
					type:'get',
					success:function(data){			
						var html = '';
						for(var i = 0 ; i < data[31].child.length; i ++){	
							html += '<li ><a>'+data[31].child[i].title+'</a></li>'		
						}
			       $('#foot_top').children().eq(6).find("ul").html(html);
					}
			
			});
			
			$.ajax({
					url:'js/index.json',
					type:'get',
					success:function(data){			
						var html = '';
						for(var i = 0 ; i < data[32].child.length; i ++){	
							html += '<li ><a>'+data[32].child[i].title+'</a></li>'		
						}
			       $('#foot_top').children().eq(7).find("ul").html(html);
					}
			
			});
			$("#foot").find("#foot_top").click(function(){					
						$("#foot_top").css("overflow","")
						$("#foot_top").css("height","auto")
				
			})
			
			$(document).dblclick(function(){
				$("#foot_top").css("overflow","hidden")
				$("#foot_top").css("height","42px")
			    })	
			
//		$("#foot").find("#foot_top").hover(function(){
//			alert(1)
//			$(this).find("div:first").find("div").find("h3").find("a").css("color","red")
//			},function(){
//				$(this).css("color","black")
//			})
	})
	
			
			
