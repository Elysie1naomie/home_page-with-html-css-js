let image = document.getElementById("l1");
let image1 = document.getElementById("l2");
let image2 = document.getElementById("l3");
let image3 = document.getElementById("l4");

/* gestion des evennements */

image1.addEventListener("click",function(){
    var srcValue = image1.getAttribute('src');

    image.src = srcValue;

})
image2.addEventListener("click",function(){
    var srcValue = image2.getAttribute('src');

    image.setAttribute('src',srcValue);

})
image3.addEventListener("click",function(){
    var srcValue = image3.getAttribute('src');

    image.setAttribute('src',srcValue);

})