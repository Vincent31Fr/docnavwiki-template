function openNav() {
	document.getElementById("navbar").style.width = "18em";
	console.log("test");
	document.getElementById("main").style.left = "18em";
	document.getElementById("openbtn").style.visibility = "hidden";
	document.getElementById("navbar").style.padding = "15px";
}

function closeNav() {
	document.getElementById("navbar").style.width = "0";
	document.getElementById("navbar").style.padding = "0";
	document.getElementById("main").style.left = "0";
	document.getElementById("openbtn").style.visibility = "unset";
	
}
