const elements = document.querySelectorAll(".nav-list a");
const showcase_elements = document.querySelectorAll(".showcase-grid div");

const navigate = function(evt) {
    Array.from(evt.target.parentNode.parentNode.children).forEach((el)=>{
        el.firstChild.classList.remove("chosen")
    })
    evt.target.classList.add("chosen")

};
const choose_elements = function(evt) {
    Array.from(evt.target.parentNode.parentNode.children).forEach((el)=>{
        el.classList.remove("chosen")
    })
    evt.target.parentNode.classList.add("chosen")

};
Array.from(elements).forEach(el => {
    el.addEventListener('click', navigate);
});
Array.from(showcase_elements).forEach(el => {
    el.addEventListener('click', choose_elements);
});

document.querySelector(".menu").onclick = function(){
    document.querySelector("header nav").classList.toggle("d-none")
}