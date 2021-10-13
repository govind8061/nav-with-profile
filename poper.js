let isDrawerOpen=false;

let menu=document.getElementById("nav-3");
let nav_img=document.getElementById("nav-img");
let nav_cmp=document.getElementById("nav-cmp");

window.addEventListener("resize", function(event) {
	if (window.innerWidth>480) {
		nav_img.style.visibility = "collapse";
		nav_cmp.style.visibility = "collapse";
		menu.style.visibility = "visible";
	}else if(window.innerWidth<=480){
		menu.style.visibility = "collapse";
	}
});


function toggleDrawer() {
	if (isDrawerOpen) {
		menu.style.visibility = "collapse";
		nav_img.style.visibility = "collapse";
		nav_cmp.style.visibility = "collapse";
		isDrawerOpen=false;
	}else{
		menu.style.visibility = "visible";
		nav_img.style.visibility = "visible";
		nav_cmp.style.visibility = "visible";
		isDrawerOpen=true;
	}
}

function closeDrawer(){
	if (window.innerWidth<480) {
		menu.style.visibility = "collapse";
		nav_img.style.visibility = "collapse";
		nav_cmp.style.visibility = "collapse";
		isDrawerOpen=false;	
	}
}
function profileGone(){
	alert("Width is : "+window.innerWidth);
}