// JavaScript source code

var barre = document.getElementsByTagName("aside");

function zoom(image){
    var pas=50; 
	image.width+=pas; 
	image.height+=pas; 
	}

function getRandomArbitrary(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}


	function cacherStock(){
    var stock= document.getElementsByClassName("stockv");
    for(var i=0; i< stock.length; i++){
      stock[i].textContent = ""
    }
	}
	
function afficherStock(){
  
   var stock= document.getElementsByClassName("stockv"); 
 
          

   for(var i=0; i< stock.length; i++){
     stock[i].textContent = getRandomArbitrary(10,100);
     stock[i].style.color="red";
   }	
 
  	}

  afficher=false
  document.getElementById('valid').addEventListener("click", function(e){
    if(!afficher){
      afficherStock()
      e.target.textContent = "Cacher stock"
      
    } 
    else{
      cacherStock()
      e.target.textContent = "stock"
    } 
    afficher=!afficher
  })

	
	
	
document.getElementById("produits").addEventListener("click",function (e){
	e.preventDefault();
/*	afficherStock();
	cacherStock();*/
	zoom(this); 
});

