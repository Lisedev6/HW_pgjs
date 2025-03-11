/*Name this external file gallery.js*/

// function upDate(previewPic){
//  /* In this function you should 
//     1) change the url for the background image of the div with the id = "image" 
//     to the source file of the preview image
    
//     2) Change the text  of the div with the id = "image" 
//     to the alt text of the preview image 
//     */
//     // Sélection de l'élément avec l'id 'image'
//     let imageDiv = document.getElementById("image");
    
//     // Mise à jour du texte avec l'attribut alt de l'image survolée
//     imageDiv.innerHTML = previewPic.alt;
    
//     // Mise à jour de l'image de fond avec le src de l'image survolée
//     imageDiv.style.backgroundImage = `url('${previewPic.src}')`;
  
// 	}

// 	function unDo(){
//      /* In this function you should 
//     1) Update the url for the background image of the div with the id = "image" 
//     back to the orginal-image.  You can use the css code to see what that original URL was
    
//     2) Change the text  of the div with the id = "image" 
//     back to the original text.  You can use the html code to see what that original text was
//     */
//    // Sélection de l'élément avec l'id 'image'
//    let imageDiv = document.getElementById("image");
    
//    // Réinitialisation du texte original
//    imageDiv.innerHTML = "Hover over an image below to display here.";
   
//    // Réinitialisation de l'image de fond
//    imageDiv.style.backgroundImage = "url('')";
		
// 	}

function upDate(previewPic) {
   let imageDiv = document.getElementById("image");
   imageDiv.innerHTML = previewPic.alt;
   imageDiv.style.backgroundImage = `url('${previewPic.src}')`;
}

function unDo() {
   let imageDiv = document.getElementById("image");
   imageDiv.innerHTML = "Hover over an image below to display here.";
   imageDiv.style.backgroundImage = "url('')";
}

function handleFocus(previewPic) {
   upDate(previewPic);
}

function handleBlur() {
   unDo();
}

function addTabFocus() {
   console.log("Tab focus function triggered");
   let images = document.querySelectorAll(".preview");
   for (let i = 0; i < images.length; i++) {
       images[i].setAttribute("tabindex", "0");
       images[i].addEventListener("focus", function() { handleFocus(images[i]); });
       images[i].addEventListener("blur", handleBlur);
   }
}

window.onload = addTabFocus;