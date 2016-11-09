//$(function(){
//	alert(2)
//	$("#goods_detali").find("#goods_detali_left").find("ul").find("li").click({
//		//$("#goods_detali_left_center").find("li").attr('class','')
//			
//		
//		//$(this).attr('class','act')
//		$("#goods_detali").find("#goods_detali_left").find("#goods_detali_left_top").find("div").eq($(this).index()).css("display","block")
//	})
//})
window.onload = function(){
	var nav1 = document.getElementById("nav1");
	window.onscroll = function(){
		var top = document.documentElement.scrollTop||document.body.scrollTop;
		if(
			top >= 921
		){
			nav1.style.position = "fixed";
			nav1.style.top = 0;
			nav1.style.left = 0; 
			
		}else{
			nav1.style.position = "relative"
		}
	}
		//alert(document.documentElement.scrollTop)
	//tab切换
	var goods_detali_left_center = document.getElementById("goods_detali_left_center");
	var goods_detali_left_top = document.getElementById("goods_detali_left_top");
	var odiv = goods_detali_left_top.getElementsByTagName("div");
	var ali = goods_detali_left_center.getElementsByTagName("li");
	

	var small_box = goods_detali_left_top.getElementsByClassName("small_box")[0];
	
	
	for(var i = 0; i<ali.length;i++ ){
		
		ali[i].index = i;
		ali[i].onmouseover = function(){
//			if(this.index = 0){
//				small_box.style.left = 0;
//				//small_box.style.top = 0;
//			}
//			small_box.style.left = 500*(this.index) + "px";
//			//small_box.style.top = 500*(this.index) + "px";
			for(var i = 0;i<odiv.length;i++){
				odiv[i].style.display = "none";
			}odiv[this.index].style.display = "block"
			
			//this.style.border = "1px solid red";
			
			$("#big_pic").find("img").attr("src","../images/bigpic"+(this.index+1)+".jpg")
			$("#goods_detali_left_center").find("li").removeClass("a")
			$(this).addClass("a")
			}
		}
	
	var big_pic = document.getElementById("big_pic");
	var showbig_img = big_pic.getElementsByTagName("img")[0];
	//alert(showbig_img)
	goods_detali_left_top.onmousemove = function(event){
		
	        var e = event || window.event;
		    small_box.style.display = "block";
		    big_pic.style.display = "block";
		
		    var b_left = (e.offsetX || e.layerX) - small_box.offsetWidth/2;
	    	var b_top =( e.offsetY || e.layerY) - small_box.offsetHeight/2;

			if(b_left <= 0){
				b_left = 0
			}else if(b_left >goods_detali_left_top.clientWidth - small_box.offsetWidth){
				b_left =goods_detali_left_top.clientWidth - small_box.offsetWidth
			}
			if(b_top <= 0){
				b_top = 0
			}else if(b_top >=goods_detali_left_top.clientHeight - small_box.offsetHeight){
				b_top = goods_detali_left_top.clientHeight - small_box.offsetHeight
			}
			small_box.style.left = b_left + "px";
			small_box.style.top = b_top + "px";
//			console.log(small_box.style.left)
			//比例
			
	       
	        var proporation=showbig_img.offsetWidth/big_pic.offsetWidth;
	       
	        showbig_img.style.left=-b_left*proporation+"px";
	        showbig_img.style.top=-b_top*proporation+"px";
			
		
		goods_detali_left_top.onmouseout = function(){
			
			small_box.style.display = "none";
		    big_pic.style.display = "none";
		
	   }
		

	}
//	$("#gotop1").hover(function(){
//		$(this).html("在线客服").css("background","black").css("color","white").css("padding","15px").css("textAlign","center").css("textDecoration","none")
//	},function(){
//		$(this).unbind("mouseover")
//	})

	
//置顶菜单
	var gotop1= document.getElementById("gotop1");
	var gotop11 = document.getElementById("gotop11");
	var gotop2= document.getElementById("gotop2");
	var gotop22 = document.getElementById("gotop22");
	gotop1.onmouseover = function(){
		gotop11.style.display = "block"
	}
	gotop1.onmouseout = function(){
		gotop11.style.display = "none"
		
	}
	gotop2.onmouseover = function(){
		gotop22.style.display = "block"
	}
	gotop2.onmouseout = function(){
		gotop22.style.display = "none"
		
	}
	gotop4.onmouseover = function(){
		gotop44.style.display = "block"
	}
	gotop4.onmouseout = function(){
		gotop44.style.display = "none"
		
	}
	$("#gotop3").hover(function(){
		$(this).find("#two").css("display","block")
	},function(){
		$("#two").css("display","none")
	})
	
	var speed = 0;
	$("#gotop4").click(function(){
	
		var scrollTop = document.documentElement.scrollTop||document.body.scrollTop;
	speed=(0-scrollTop)/10;
		//alert(scrollTop)
		timer=setInterval(function(){
		document.documentElement.scrollTop += speed;
		},10)
		if(scrollTop==0){
			clearInterval(timer)
		}
	})
	var goodsId = document.getElementById("goodsId");
	var goods_detali_left_center = document.getElementById("goods_detali_left_center");
	var oli = goods_detali_left_center.getElementsByTagName("li")[0];
	var oimg = oli.getElementsByTagName("img")[0];
	$("#star").click(function(){
		$("#coll").html("已收藏");
		
		var	val='id#'+goodsId.value+'|name#'+name.innerHTML+'|imgUrl#'+oimg.src+'|price#'+price.innerHTML+'|url#'+window.location.href;
		cookie('goods'+goodsId.value,val,10);
		//window.location.href = "collect.html";
		alert('goods'+goodsId.value)
				
		})
	//评论栏、商品图片栏切换
	$("#navbottom").find("li").click(function(){
		$("#navbottom1").children().css("display","none")
		$("#navbottom1").children().eq($(this).index()).css("display","block")
	})
	//加入购物车
	var goodsId = document.getElementById("goodsId");
	var name = document.getElementById("name");
	var bigpic11  = document.getElementById("bigpic11");
	var price  = document.getElementById("price");
	var color1  = document.getElementById("color1");
	var number2  = document.getElementById("number2");
	var shopCar = document.getElementById("shopCar");
	
	var val=null;
	
	
//	$("#buttons").find("#shopCar").
        shopCar.onclick=function(){
		
var	val='id#'+goodsId.value+'|name#'+name.innerHTML+'|imgUrl#'+bigpic11.src+'|price#'+price.innerHTML+'|size#'+color1.innerHTML+'|number#'+number2.value+'|url#'+window.location.href;
	//alert(val)
	cookie('goods'+goodsId.value+color1.innerHTML,val,10);
	
	}
        
        
        
        $("#car").mouseover(function(){
			$(this).find("#car_detali").html("购物车有"+number2.value+"件商品").click(function(){
				window.location.href = "shopCar.html"
			})
		})
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
	$("#deng").click(function(){
		window.location.href = "entry.html"
	})
	
}

	

