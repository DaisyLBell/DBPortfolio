const image1 = "marginalia-plants2.jpg";
const image5 = "marginalia-ticket.png";
const image2 = "marginalia-lizard.png";
const image3 = "marginalia-stubs.png";
const image4 = "marginalia-spread2.png";
const image6 = "marginalia2.png";
const image7 = "marginalia-barnums.png";
const image8 = "marginalia-bug3.png";
const image9 = "marginalia-cookbook.png";
const image10 = "marginalia-cover.png";
const image11 = "marginalia-plants1.jpg";
const image12 = "marginalia-ticket.png";
const image13 = "marginalia-postcard1.png";
const image14 = "marginalia-bug2.png";
const image15 = "marginalia-playlist.png";
const image16 = "marginalia-cover4.png";
const image17 = "marginalia-spread1.png";
const image18 = "marginalia-lizard.png";
const image19 = "marginalia-bug1.png";
const image20 = "marginalia-collage.png";
const image21 = "marginalia-postcard2.png";
const image22 = "marginalia-cover2.png";
const image23 = "marginalia-collage.jpg";
const image24 = "marginalia-cover3.png";


const image25 = "marginalia-spread4.png";
const image26 = "marginalia-spread5.png";
const image27 = "marginalia-spread6.png";
const image28 = "marginalia-spread7.png";
const image29 = "marginalia-spread8.png";
const image30 = "marginalia-spread9.png";
const image31 = "marginalia-spread10.png";
const image32 = "marginalia-spread11.png";
const image33 = "marginalia-spread12.png";


const images = [image4, image3, image2, image5, image7,  image9, image10, image27, image12, image13, image28, image15, image29, image16, image30, image17, image18, image20, image32, image22, image33];

var imageSize;

if (window.matchMedia("(max-with:800px)").matches) {
    console.log('500');
    imageSize = 0.8;
}else{
    console.log('500 above');
    imageSize = 0.8;
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