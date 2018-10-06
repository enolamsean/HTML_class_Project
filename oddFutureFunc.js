
function menuToggle(){
	var y = document.getElementById("menu")
	var x = document.getElementById("nav");
	if(x.style.top == "-93.25%"){
		x.style.top = "0%";
		y.style.display = "0";
		y.style.display = "none";

	} else{
		x.style.top = "-93.25%";
		y.style.opacity = "1";
		y.style.display = "block";
	}
}

//document.getElementById('rightHere').focus();

