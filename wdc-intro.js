const image1 = "WDC-4-compressed.jpg";
const image2 = "wdc-img1.png";
const image3 = "WDC-6-compressed.jpg";
const image4 = "wdc-img2.png";
const image5 = "WDC-10-compressed.jpg";
const image6 = "WDC-5-compressed.jpg";
const image7 = "wdc-img8.png";
const image8 = "WDC-11-compressed.jpg";
const image9 = "wdc-img7.png";
const image10 = "WDC-7-compressed.jpg";
const image11 = "wdc-img4.png";
const image12 = "wdc-img5.png";
const image13 = "WDC-12-compressed.jpg";
const image15 = "WDC-3-compressed.jpg";
const image16 = "wdc-img3.png";
const image17 = "WDC-8-compressed.jpg";
const image18 = "wdc-img6.png";
const image19 = "WDC-9-compressed.jpg";



const images = [image1, image2, image3, image4, image5, image6, image7, image8, image9, image10, image11, image12, image13, image15, image16, image17, image18, image19];

var imageSize;

if (window.matchMedia("(max-with:800px)").matches) {
    console.log('500');
    imageSize = 0.2;
}else{
    console.log('500 above');
    imageSize = 0.2;
}


let i = 0;

function addToCollage(x, y) {
    const nextInCollage = images[i];
    
    const img = document.createElement("img");
    img.setAttribute("src", nextInCollage);
    img.style.left = x + "px";
    img.style.top = y + "px";
    img.style.transform = "translate(random(-100%, -50%), random(-100%, -50%)) scale(" + imageSize + ") rotate(" + (Math.random() * 20 - 10) + "deg)";
    
    document.getElementById("p5-sketch").appendChild(img);
    
    i = i + 1;
    
    if (i >= images.length) {
        i = 0;
    }
}

let mouse = 0;

document.addEventListener("mousemove", function(event) {
    event.preventDefault();
    mouse = mouse + 1;
    if (mouse % 10 == 0 && mouse < 1800) {
        addToCollage(event.pageX, event.pageY);
    }
})

document.addEventListener("touchmove", function(event) {
    event.preventDefault();
    event.preventDefault();
    mouse = mouse + 1;
    if (mouse % 15 == 0 && mouse < 1000) {
        addToCollage(event.pageX, event.pageY);
    }
})