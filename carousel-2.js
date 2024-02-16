const carousel2 = document.querySelector(".carousel-2"),
firstImg2 = carousel2.querySelectorAll("img")[0],
arrowIcons2 = document.querySelectorAll(".wrapper-2 i");
let isDragStart2 = false, isDragging2 = false, prevPageX2, prevScrollLeft2, positionDiff2;
const showHideIcons2 = () => {
    let scrollWidth2 = carousel2.scrollWidth2 - carousel2.clientWidth; 
    arrowIcons2[0].style.display = carousel2.scrollLeft == 0 ? "none" : "block";
    arrowIcons2[1].style.display = carousel2.scrollLeft == scrollWidth ? "none" : "block";
}
arrowIcons2.forEach(icon => {
    icon.addEventListener("click", () => {
        let firstImgWidth = firstImg2.clientWidth + 14; 
        carousel2.scrollLeft += icon.id == "left2" ? -firstImgWidth : firstImgWidth;
        setTimeout(() => showHideIcons(), 60);
    });
});
const autoSlide2 = () => {
    if(carousel2.scrollLeft - (carousel2.scrollWidth2 - carousel2.clientWidth) > -1 || carousel2.scrollLeft <= 0) return;
    positionDiff2 = Math.abs(positionDiff2);
    let firstImgWidth2 = firstImg2.clientWidth + 14;
    let valDifference2 = firstImgWidth - positionDiff2;
    if(carousel2.scrollLeft > prevScrollLeft2) { 
        return carousel2.scrollLeft += positionDiff2 > firstImgWidth / 3 ? valDifference : -positionDiff2;
    }
    carousel2.scrollLeft -= positionDiff2 > firstImgWidth2 / 3 ? valDifference2 : -positionDiff2;
}
const dragStart2 = (e) => {
    isDragStart2 = true;
    prevPageX2 = e.pageX || e.touches[0].pageX;
    prevScrollLeft2 = carousel2.scrollLeft;
}
const dragging2 = (e) => {
    if(!isDragStart2) return;
    e.preventDefault();
    isDragging2 = true;
    carousel2.classList.add("dragging2");
    positionDiff2 = (e.pageX || e.touches[0].pageX) - prevPageX2;
    carousel2.scrollLeft = prevScrollLeft2 - positionDiff2;
    showHideIcons2();
}
const dragStop2 = () => {
    isDragStart2 = false;
    carousel2.classList.remove("dragging2");
    if(!isDragging2) return;
    isDragging2 = false;
    autoSlide2();
}
carousel2.addEventListener("mousedown", dragStart2);
carousel2.addEventListener("touchstart", dragStart2);
document.addEventListener("mousemove", dragging2);
carousel2.addEventListener("touchmove", dragging2);
document.addEventListener("mouseup", dragStop2);
carousel2.addEventListener("touchend", dragStop2);