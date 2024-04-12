let childElement = document.querySelectorAll(".gallery-item");

let imageURLs = ["WDC-12-compressed.jpg",  "gd-renaissance-header.jpg",  "Playlist-SQUARE.jpg", "carousel-2.jpg"];

let zIndex = 1;

childElement.forEach((element, index) => {
    let img = document.createElement("img");
    img.setAttribute("src", imageURLs[index]);
    img.setAttribute("class", "image");
    element.appendChild(img);
    
    
//        element.addEventListener("click", () => {  
//           
//                   zIndex++;
//        element.style.left = "60em";
//        element.style.zIndex = zIndex.toString();
//        element.style.transform = "rotate(0deg)";
//        
//        element.style.transition = "left 0.3s ease"; 
//            
//    
//        
//        setTimeout( () => {
//            zIndex -= 70;
//            element.style.left = "";
//            element.style.zIndex = zIndex.toString();
//            element.style.transform = "";
//            
//            element.style.transition = "all 0.3s ease";
//            
//            setTimeout(() => {
//                element.style.transition = "";
//            }, 1000);
//        }, 3000);
//        
//        });
    
    
    
    
    
    
    element.addEventListener("click", () => {
        zIndex++;
        element.style.marginLeft = "60em";
        element.style.zIndex = zIndex.toString();
        element.style.transform = "rotate(0deg)";
        
        element.style.transition = " left 0.7s ease";
        
        setTimeout(() => {
            zIndex -= 3;
            element.style.marginLeft = "";
            element.style.zIndex = zIndex.toString();
            element.style.transform = "";
            
            element.style.transition = "all 0.7s ease";
            
            setTimeout(() => {
                element.style.transition = "";
            }, 1000);
        }, 200);
    });
});