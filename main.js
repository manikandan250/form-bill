var btn=document.getElementById("btn");
btn.addEventListener("click",myFunction);
function myFunction(){
	var bill=document.getElementById("bill").value;
	var tips=document.getElementById("tips").value;
	
	var tipsrss=(tips/100)*bill;
	
	document.getElementById("tips-rs").value=tipsrss;
	var total=bill+tipsrss;
	document.getElementById("total").value=total;
	
	document.getElementById("result").innerHTML="This amoun is" + total;
	
}

