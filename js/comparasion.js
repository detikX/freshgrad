let container = document.querySelector(".containerx");
let maskContainer = document.querySelector(".mask-container");
let maskImageContainer = document.querySelector(".mask-image-container");

let border = document.querySelector(".border");
let circle = document.querySelector(".circle");

circle.style.draggable = true;

circle.addEventListener("touchstart", handleStart, false);
circle.addEventListener("touchend", handleEnd, false);
circle.addEventListener("touchcancel", handleCancel, false);
circle.addEventListener("touchleave", handleEnd, false);
circle.addEventListener("touchmove", handleMove, false);

circle.click(function () {
    alert(1)
})

circle.ondrag = function (event) {
    maskContainer.style.width = event.pageX + "px";
    border.style.left = event.pageX + "px";
    circle.style.left = event.pageX + "px";
}

circle.ondragend = function (event) {
    maskContainer.style.width = event.pageX + "px";
    border.style.left = event.pageX + "px";
    circle.style.left = event.pageX + "px";
}
