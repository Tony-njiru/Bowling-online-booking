var show = document.getElementById("nav-links");
function showMenu() {
  show.style.right = "0";
}
function closeMenu() {
  show.style.right = "-275px";
}

var covid19 = document.getElementById("pullout");
function showCovid19() {
  covid19.classList.toggle("active");
}
