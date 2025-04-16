const cookie = document.getElementById("cookie");
const counter = document.getElementById("clicker__counter");

cookie.addEventListener('mousedown',(event) => {
    counter.textContent = Number(counter.textContent) + 1;
    cookie.classList.add("img_big");
})

cookie.addEventListener("mouseup", function(e) {
    cookie.classList.remove("img_big");
})