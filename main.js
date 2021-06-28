function openMenu() {
 document.getElementById("aside").style.height = "300px";
}

var close = document.getElementById("x");

close.addEventListener("click", function() {
 document.getElementById("aside").style.height = "0";
})
