$("#rollback_left").click(function () {
  $(".ui.shape").shape("flip left");
});
$("#rollback_right").click(function () {
  $(".ui.shape").shape("flip right");
});

$("#dropdown").dropdown();

$(".special.cards .image").dimmer({
  on: "hover",
});

for (let i = 0; i < 100; i++) {
  let id = `dimmer-${i}`;
  let dimmer = ('#' + id);
  let modalid = `ui.modal.${i}`;
  let modal =('.' + modalid)
  
  $(dimmer).on("click", function () {
    $(modal).modal("show");
  });
}

for (let i = 0; i < 100; i++) {
  let id = `add-${i}`;
  let add = ('#' + id);
  let hiddenId = `hidden-${i}`;
  let show = ('#' + hiddenId);

  $(add).on("click", function () {
    $(show).removeClass("hidden")
  })
}

  
$('#new-pet').on('click', function() {
  $('.ui.modal')
  .modal('show');
});

$('#cart').on("click", function() {
  $('.ui.sidebar')
  .sidebar('toggle')
});

// Nav functions
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
}
