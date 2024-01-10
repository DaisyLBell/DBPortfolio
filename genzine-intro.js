const image1 = "carousel-1.jpg";
const image2 = "genzineSocial-1.jpg";
const image3 = "carousel-2.jpg";
const image4 = "carousel-3.jpg";
const image5 = "carousel-4.jpg";
const image6 = "carousel-5.jpg";
const image7 = "carousel-7.jpg";
const image8 = "carousel-8.jpg";
const image9 = "carousel-11.jpg";
const image10 = "carousel-12.jpg";
const image11 = "carousel-14.jpg";
const image12 = "carousel-15.jpg";
const image13 = "carousel-16.jpg";
const image14 = "carousel-18.jpg";
const image15 = "gd-spectrum-footer.jpg";
const image16 = "gd-renaissance-footer.jpg";
const image17 = "spectrum-gdHome-2.jpg";
const image18 = "gd-renaissance-header.jpg";
const image19 = "alt-spectrum.jpg";
const image20 = "zine3-open-zine-2.jpg";
const image21 = "zine2_open-zines.jpg";


const images = [image1, image18, image19, image16, image5, image20, image15, image21, image13, image6, image7, image8, image2, image3, image4, image9, image10, image11, image12, image13, image14];

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







//var particles = [];		
//var faces = [];	
//var canvas;
//
//
//function windowResized (){
//    resizeCanvas();
//}
//
//function preload() { 
//	faces[0] = loadImage( "carousel-1.jpg" );
//	faces[1] = loadImage( "carousel-11.jpg" );
//	faces[2] = loadImage( "carousel-12.jpg" );
//  faces[3] = loadImage( "carousel-14.jpg" );
//  faces[4] = loadImage( "carousel-15.jpg" );
//
//}
//
//
//
//function setup(){ 
//
//    canvas = createCanvas(windowWidth, windowHeight);
//    canvas.position(0,0);
//    canvas.style('z-index', '5');
//
//    
//  
//  imageMode(CENTER);
//} 
//
//function draw(){ 
//    
//  for (var i = particles.length-1; i >= 0; i--) {
//  	particles[i].show();
//  	
//
//    if (particles[i].y > height) {
//    	particles.splice(i,1);
//    }
//
//    if (particles.length > 1000) {
//      particles.shift();
//    }
//  }
//  
//}
//
//function mouseMoved(){
//	var newParticle = new Particle(faces[round(random(0,4))], mouseX, mouseY, 50);
//	particles.push(newParticle);
//}
//
//function Particle(t, x, y, si) {
//  this.content = t;
//	this.x = x; 
//  this.y = y;
//  this.size = si;
//}
//
//Particle.prototype = {
//	constructor: Particle,
//  
//  show: function() {
//    image(this.content, this.x, this.y, this.size, this.size);
//  }
//}