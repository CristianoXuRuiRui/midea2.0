	
//		$.ajax({
//					url:'../js/collect.json',
//					type:'get',
//					success:function(data){
//						
//						var html = '';
//						for(var i = 0 ; i < data[0].child.length; i ++){	
//							html += '<li class="goods_item1"><a href="#"><img src="'+data[0].child[i].img+'"/><p>'+data[0].child[i].p+'</p><div>'+data[0].child[i].div+'</div><span>'+data[0].child[i].span+'</span></a></li>'		
//						}
//						$("#center_inner_right ul").html(html);
//					}
//		});	
	

	
	
	
	
window.onload = function(){
	var right_bottom =document.getElementById("right_bottom")
	var deng = document.getElementById("deng");
	deng .onclick = function(){
		setTimeout(function(){
			window.onload.href = "entry.html"
		},200)
	}
	var coo = cookie();
	if(coo){
		for(var key in coo){
			var arr1 = coo[key].split('|');
			var arr2 = [];
			var obj = {};
			for(var i = 0;i < arr1.length;i++){
				arr2.push(arr1[i].split('#'));
			}
			for(var j = 0;j < arr2.length;j++){
				obj[arr2[j][0]] = arr2[j][1];
			}
		}
		var right_bottom =document.getElementById("right_bottom")
		var oLi = document.createElement("li");
		var oP = document.createElement("p");
		var oSpan = document.createElement("span");
		var oImg = document.createElement("img");
		var oA = document.createElement("a");
		var oDiv = document.createElement("div");
		oP.innerHTML = obj.name;
		oImg.src = obj.imgUrl;
		oSpan.innerHTML = obj.price;
		oDiv.innerHTML = "11.11狂欢";
		oDiv.id = obj.id;
//		alert(oSpan );
//		alert(oImg.href)
		alert(obj.id)
         oA.appendChild(oImg);
		 oA.appendChild(oP);
		 oA.appendChild(oSpan);
		  oA.appendChild(oDiv);
		oLi.appendChild(oA);
		right_bottom.appendChild(oLi);
		oDiv.onclick = function(){
			this.parentNode.parentNode.style.display = "none";
			alert(this.id)
			cookie('goods'+this.id,"",-4)
		}
	}else{
		right_bottom.innerHTML = "还没有商品                    <a href='../index.html'>立即去逛逛~</a>"
	}
	
	
	
	
	
		$("#center_inner_right ul li").hover(function(){
		$(this).find("a:first").find("div").css("width","40px").css("height","40px").html("").css("background","url(../images/black.jpg)").hover(function(){
		$(this).css("background","url(../images/red.jpg)")
		},function(){
			$(this).css("background","url(../images/black.jpg)")
		})
				},function(){
					$(this).find("a:first").find("div").css("width","70px").css("height","25px").html("保价双十一").css("background","red")
				})
		
		
	
		
}
