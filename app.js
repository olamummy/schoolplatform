document.addEventListener("DOMContentLoaded", function(){
    const links = document.querySelectorAll(".link");
    for (let i in links){
        links[i].addEventListener('click', route, false);
    }
 });

function route() {
    location.href = this.getAttribute("to");
}