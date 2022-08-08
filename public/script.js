// listen for click
// hide current img
// show next img 


function slide(){
    let img1 = document.getElementById( "img1");
    let img2 = document.getElementById( "img2");
    let img3 = document.getElementById( "img3");

    img1.addEventListener("click", ( )=> {
        img1.style.display = "none";
        img2.style.display = "unset";

     } 
     )

     img2.addEventListener("click", ( )=> {
        img2.style.display = "none";
        img3.style.display = "unset";

     } 
     )

     img3.addEventListener("click", ( )=> {
        img3.style.display = "none";
        img1.style.display = "unset";

     } 
     )

    
    }

    slide();