	function a(){
		$.ajax({
					url:'../js/collect.json',
					type:'get',
					success:function(data){
						
						var html = '';
						for(var i = 0 ; i < data[0].child.length; i ++){	
							html += '<li class="goods_item1"><a href="#"><img src="'+data[0].child[i].img+'"/><p>'+data[0].child[i].p+'</p><div>'+data[0].child[i].div+'</div><span>'+data[0].child[i].span+'</span></a></li>'		
						}
						$("#center_inner_right ul").html(html);
					}
		});	
	}
	a()
window.onload = function(){
	var deng = document.getElementById("deng");
	deng .onclick = function(){
		setTimeout(function(){
			window.onload.href = "entry.html"
		},200)
	}
	
		
	
		
		$("#center_inner_right ul li").hover(function(){
		$(this).find("a:first").find("div").css("width","40px").css("height","40px").html("").css("background","url(../images/black.jpg)").hover(function(){
			$(this).css("background","url(../images/red.jpg)").click(function(){
				$(this).parent().parent().remove()
			})
		},function(){
			$(this).css("background","url(../images/black.jpg)")
		})
				},function(){
					$(this).find("a:first").find("div").css("width","70px").css("height","25px").html("保价双十一").css("background","red")
				})
		
		$("#deng").click(function(){
			window.location.href = "entry.html"
		})
	
	
		
}
