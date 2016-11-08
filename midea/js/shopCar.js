window.onload = function(){
	var none = document.getElementById("none")
	var header = document.getElementsByClassName('header')[0];
	var goodsList = document.getElementById('goodsList');
	var oAll = document.getElementById('all');
	var shopCar_box = document.getElementById("shopCar_box");
	var footer = document.getElementsByClassName("footer")[0];
	
	var all = 0;
	var coo = cookie();
	if(coo){
		footer.style.display = "block";
		none.style.display = "none";
		header.style.display = "block";
		goodsList.style.display = "block";
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
			var oDl = document.createElement('dl');
			//创建名称
			var oDt = document.createElement('dt');
			var oImg = document.createElement('img');
			oImg.src = obj.imgUrl;//照片路径
			
			var oText = document.createElement('span');
			oText.innerHTML = obj.name;//名字
			
			
			
			var oA = document.createElement('a');
			oA.href = obj.url;//链接
			
			
			var oCheck = document.createElement('input');
			oCheck.type = 'checkbox';//对勾
			oA.appendChild(oImg);
			oA.appendChild(oText);
			oDt.appendChild(oCheck);
			oDt.appendChild(oA);
			oDl.appendChild(oDt);
			//创建型号
			var oSize = document.createElement('dd');
			oSize.className = 'oSize';
			oSize.innerHTML = obj.size;
			oDl.appendChild(oSize);
			//创建单价
			var oPrice = document.createElement('dd');
			oPrice.className = 'oPrice';
			oPrice.innerHTML = obj.price;
			oDl.appendChild(oPrice);
			//创建数量
			var oNumber = document.createElement('dd');
			oNumber.className = 'oNumber';
			oNumber.innerHTML = obj.number;
			oDl.appendChild(oNumber);
			
			//创建总价
//			alert(parseInt(obj.price)*obj.number)
			var oAprice = document.createElement('dd');
			oAprice.className = 'oAprice';
			oAprice.innerHTML = parseInt(obj.price)*obj.number;
			oDl.appendChild(oAprice);
			//删除按钮
			var oDelet = document.createElement('dd');
			oDelet.className = 'oDelet';
			oDelet.innerHTML = '删除商品';
			oDelet.id = obj.id + obj.size;
			oDl.appendChild(oDelet);
			goodsList.appendChild(oDl);
		}
}else{
	    none.style.display = "block";
		header.style.display = "none";
		goodsList.style.display = "none";
		footer.style.display = "none";
}
	var oC = goodsList.getElementsByTagName('input');
		var oP = goodsList.getElementsByClassName('oPrice');
		var oN = goodsList.getElementsByClassName('oNumber');
		var oD = goodsList.getElementsByClassName('oDelet');
		for(var k = 0;k < oC.length;k++){
			oC[k].index = k;
			oD[k].index = k;
			oC[k].onchange = function(){
				var p = oP[this.index].innerHTML * oN[this.index].innerHTML;
				if(this.checked){
					all += p;
				}else{
					all -= p;
				}
				oAll.innerHTML = all;
			}
			oD[k].onclick = function(){
				cookie('goods'+this.id,'',-1);
				if(this.parentNode.childNodes[0].childNodes[0].checked){
					all -= oP[this.index].innerHTML * oN[this.index].innerHTML;
				}
				oAll.innerHTML = all;
				this.parentNode.style.display = 'none';
			}
		}
		$("#car").mouseover(function(){
			$(this).find("#car_detali").html("购物车有"+obj.number+"件商品").click(function(){
				window.location.href = "shopCar.html"
			})
		})
		$(".ipt1").click(function(){
			window.location.href = "../index.html"
		})
		$(".ipt2").click(function(){
			window.location.href = "collect.html"
		})
		$("#deng").click(function(){
			window.location.href = "entry.html"
		})
}