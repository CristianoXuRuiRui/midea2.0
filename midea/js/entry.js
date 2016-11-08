window.onload = function(){
	var phone = document.getElementById("phone");
	var password = document.getElementById("password");
	var phoneNumber1 = getCookie("phoneNumber");
	var password1 = getCookie("password");
	var btn = document.getElementById("btn");
	var error = document.getElementById("error");
	$("#enroll").click(function(){
		setTimeout(function(){
			window.location.href = "enroll.html"
		},2000)
		
	})
	btn.onclick = function(){
		
		var N_value = phone.value;
		var P_value = password.value;
		if((N_value == phoneNumber1) && (P_value == password1)){
			error.style.display = "block";
			error.style.color = "green";
			error.innerHTML ="手机号及密码验证成功";
			setTimeout(function(){
				window.location.href = "../index.html"					
			},1000)
		}
		else{
			error.style.display = "block";
			error.style.color = "red";
			error.innerHTML = "不存在此账户或账号密码错误  请重新输入"
		}
	}
}
