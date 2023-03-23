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
