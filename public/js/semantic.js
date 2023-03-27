// Arrow button functions to change pet profiles
$("#rollback_left").click(function () {
  $(".ui.shape").shape("flip left");
});

$("#rollback_right").click(function () {
  $(".ui.shape").shape("flip right");
});

//Dropdown for modals
$("#dropdown").dropdown();

//Product card animation
$(".special.cards .image").dimmer({
  on: "hover",
});

for (let i = 0; i < 100; i++) {
  let id = `dimmer-${i}`;
  let dimmer = "#" + id;
  let modalid = `ui.modal.${i}`;
  let modal = "." + modalid;

  $(dimmer).on("click", function () {
    $(modal).modal("show");
  });
}

// Register new pet modal
$("#new-pet").on("click", function () {
  $(".ui.modal").modal("show");
});

// Add to bio modal
$("#new-bio").on("click", function () {
  $(".ui.modal.2").modal("show");
});

// Filter popup menu
$("#filter").popup({
  inline: true,
  hoverable: true,
  position: "bottom left",
  delay: {
    show: 300,
    hide: 800,
  },
});

// Nav functions
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
}
