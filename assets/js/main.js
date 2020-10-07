let burger = document.querySelector("#burger");
let menu_wrapper = document.querySelector("#menu-wrapper");

burger.onclick = function() {
    menu_wrapper.classList.toggle("unfolded");
}
