// JavaScript source code
function afficherStock(){
	document.getElementById("stock1").innerHTML="<p ><strong>8 euros</strong><br /><strong>10</strong></p>";
	document.getElementById("stock1").style.color="red";
	document.getElementById("stock2").innerHTML="<p ><strong>10 euros</strong><br /><strong>30</strong></p>";
	document.getElementById("stock2").style.color="red";
	document.getElementById("stock3").innerHTML="<p ><strong>9,08 euros</strong><br /><strong>9</strong></p>";
	document.getElementById("stock3").style.color="red";
	document.getElementById("stock4").innerHTML="<p ><strong>14,33 euros</strong><br /><strong>15</strong></p>";
	document.getElementById("stock4").style.color="red";
	document.getElementById("stock5").innerHTML="<p ><strong>5,90 euros</strong><br /><strong>20</strong></p>";
	document.getElementById("stock5").style.color="red";
}   

document.getElementById("produits").addEventListener("click",function (e){
	e.preventDefault();
	afficherStock();
});
