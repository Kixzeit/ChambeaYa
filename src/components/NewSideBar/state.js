let side_menu = document.getElementById("menu_side");
let body = document.getElementById("body");

// Event listeners
document.getElementById("btn_open").addEventListener("click", open_close_menu);

//  functions
function open_close_menu() {
  body.classList.toggle("body_move");
  side_menu.classList.toggle("menu__side_move");
}

// if screen width is < 768 px

if (window.innerWidth > 760) {
  body.classList.remove("body_move");
  side_menu.classList.remove("menu__side_move");
}

if (window.innerWidth < 760) {
  body.classList.add("body_move");
  side_menu.classList.add("menu__side_move");
}

//menu responsive
window.addEventListener("resize", function () {
  if (window.innerWidth > 760) {
    body.classList.remove("body_move");
    side_menu.classList.remove("menu__side_move");
  }
});
