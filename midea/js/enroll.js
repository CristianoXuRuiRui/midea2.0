
	
	
window.onload = function(){


	$("#showyzm").html(testCode(5));
	$("#showyzm").click(function(){
		$(this).html(testCode(5));
	});
	
	var phone_test = document.getElementById("phone_test");
	var phone = document.getElementById("phoneNumber");
	
	phone.onblur = function(){
			var pValue = phone.value;
			
		
		if(/^1(3|4|5|7|8)\d{9}$/.test(pValue)){
			phone_test.style.display = "block";
			phone_test.innerHTML = "输入的手机号码格式正确";
			phone_test.style.color = "green";
		}else{
			phone_test.style.display = "block";
			phone_test.innerHTML = "输入的手机号码格式不正确";
			phone_test.style.color = "red";
		}
	}
	
	//验证码
	var showyzm = document.getElementById("showyzm");
	var yzm = document.getElementById("yzm");
	var cYzm = document.getElementsByClassName("yzm")[0];

	yzm.onblur = function(){
		var yValue = yzm.value;
		
		if(!(yValue == showyzm.innerHTML)){
			cYzm.style.color = "red";
			cYzm.style.display = "block";
			cYzm.innerHTML = "输入的验证码不正确";
		}else{
			cYzm.style.color = "green";
			cYzm.style.display = "block";
			cYzm.innerHTML = "输入的验证码正确";
		}
	}
	
	//密码
	var password = document.getElementById("password");
	var mima = document.getElementById("mima");
	 
	password.onblur = function(){
		if(this.value.length > 18 || this.value.length <6){
			mima.style.display = "block";
			mima.style.color = "red";
			mima.innerHTML = "请输入6-18位的密码"
		}else{
			if(/\d/.test(this.value) && /[a-z]/.test(this.value) && /[A-Z]/.test(this.value)){
				mima.innerHTML = "密码强度等级高";
				mima.style.display = "block";
				mima.style.color = "green";
			}else if(/^\d$/.test(this.value) || /^[a-z]$/.test(this.value) || /^[A-Z]$/.test(this.value)){
				mima.innerHTML = "密码的强度等级中";
				mima.style.display = "block";
				mima.style.color = "green";
			}
				mima.innerHTML = "密码的强度等级弱";
				mima.style.display = "block";
				mima.style.color = "green";
		}
	}
	//再次输入密码验证
	var repassword = document.getElementById("repassword");
	var confirmpass = document.getElementById("confirmpass");
	repassword.onblur = function(){
		var rValue = this.value;
		if(rValue == password.value){
			confirmpass.style.display = "block";
			confirmpass.style.color = "green";
			confirmpass.innerHTML = "输入密码一致";
		}else{
			confirmpass.style.display = "block";
			confirmpass.style.color = "red";
			confirmpass.innerHTML = "输入密码不一致";
		}
	}
	
	var btn = document.getElementById("btn");
		
	
			
			btn.onclick = function(){
				
				var p_value = password.value;
				var N_value = phone.value;
				var M_value = yzm.value;
				var rp1_value = repassword.value;
				
				if((p_value != "") && (N_value != "") && (M_value != "" )&& (rp1_value != "")){
			
					setCookie("password",p_value,getDate(15));
					setCookie("phoneNumber",N_value,getDate(15));

					setTimeout(function(){		
					    window.location.href="entry.html";
			     },2000)
				
				
			}
	}
}
