var hamburger = document.querySelector(".hamburger");
let tester = false;



function myFunction() {
    var menu = document.getElementById("mynav");
    if (tester == false) {
        menu.style.display = "flex";
        tester = true;
    } else if (tester == true) {
        menu.style.display = "none";
        tester = false;
    }

}