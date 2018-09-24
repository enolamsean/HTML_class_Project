
function menuToggle(){
	var y = document.getElementById("menu")
	var x = document.getElementById("nav");
	if(x.style.top === "-96.25%"){
		x.style.top = "0%";
		y.style.opacity = "0";
	} else{
		x.style.top = "-96.25%";
		y.style.opacity = "1";
	}
}
