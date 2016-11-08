$(function(){
	$("#head").find("#head_in").find("#head_right").find("ul:first").find("#search").mouseover(function(){
				$(this).find("div:first").css("display","block");
				var obj = this;
				$(document).click(function(){
					$(obj).find("div:first").css("display","none")
				})
			})
			$("#head").find("#head_in").find("#head_right").find("ul:first").find("#wm").hover(function(){
				$(this).find("div:first").css("display","block")
			},function(){
				$(this).find("div:first").css("display","none")
			})
			$("#head").find("#head_in").find("#head_right").find("ul:first").find("#car").hover(function(){
				$(this).find("p:first").css("display","block")
			},function(){
				$(this).find("p:first").css("display","none")
			})
			$("#head").find("#head_in").find("#head_right").find("ul:first").find("#deng").hover(function(){
				$(this).find("div:first").css("display","block")
			},function(){
				$(this).find("div:first").css("display","none")
			})
}) 


///尾部/
$(function(){
	
		$.ajax({
					url:'../js/index.json',
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
					url:'../js/index.json',
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
					url:'../js/index.json',
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
					url:'../js/index.json',
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
					url:'../js/index.json',
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
					url:'../js/index.json',
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
					url:'../js/index.json',
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
					url:'../js/index.json',
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
					url:'../js/index.json',
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
 })