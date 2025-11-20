/*
Curtis Bickham
script.js
11/13/2025
*/
//document.querySelector(".hamburger").addEventListener("click", HamburgerClick);

function HamburgerClick(){
	const list = document.querySelector(".hamburger-list");
	
	if (list){
		if (list.style.display === "flex"){
			list.style.display = "none";
		}
		else{
			list.style.display = "flex";
		}
	}
}