$(document).ready(function () {
  var screenValue = "";

  $(".number").on("click", function () {
    var value = $(this).text();
    screenValue += value;
    $(".screen").val(screenValue);
  });

  $(".operator").on("click", function () {
    var operator = $(this).text();
    screenValue += operator;
    $(".screen").val(screenValue);
  });

  $(".equal").on("click", function () {
    var result = eval(screenValue);
    $(".screen").val(result);
    screenValue = result;
  });

  $(".clear").on("click", function () {
    screenValue = "";
    $(".screen").val("");
  });
});
