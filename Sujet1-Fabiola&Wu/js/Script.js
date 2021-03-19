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
     stock[i].textContent = getRandomArbitrary(10,60);
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

  function augmenter(e){
    console.log(e.target);
    var quantite = parseInt(document.querySelector(".qte").value,10);
    //quantite = isNaN(quantite) ? 0 : quantite;
    quantite+=1;
    document.querySelector(".qte").value=quantite;
  }

var elements = document.getElementsByClassName("plus"); 

for(var i=0; i<elements.length; i++){

  elements[i].addEventListener("click", function(e){

    var limite= e.target.parentNode.previousSibling.previousSibling.lastChild.textContent;  
    var quantite= e.target.previousSibling.previousSibling; 
    if(parseInt(quantite.value)<parseInt(limite)){
      quantite.value=parseInt(quantite.value)+1;
    }
    else {
      
    }
    

  });
}

var element2 = document.getElementsByClassName("moins"); 

for(var j=0; j<element2.length; j++){

  element2[j].addEventListener("click", function(e){

     
    var quantite2= e.target.nextSibling.nextSibling; 
    if(parseInt(quantite2.value)>0){
      quantite2.value=parseInt(quantite2.value)-1;
    }
    else {
      element2[j].style.backgroundcolor="red";
    }
    

  });
}

var images = document.getElementsByClassName("produit");

for(var k=0; k<images.length; k++){
  //console.log(images[k]);
  images[k].addEventListener("mouseover", function(e){
    
	 //console.log(e.target.width);
    e.target.style.width=e.target.width*1.2+'px';
    e.target.style.height=e.target.height*1.2+'px';
  });

  images[k].addEventListener("mouseout", function(e){
    
    //console.log(e.target.width);
     e.target.style.width=e.target.width/1.2+'px';
     e.target.style.height=e.target.height/1.2+'px';
   });

}

  
	
	
/*document.getElementById("produits").addEventListener("click",function (e){
	e.preventDefault();
	afficherStock();
	cacherStock();
	
});*/

