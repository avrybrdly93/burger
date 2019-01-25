$(function() {
 $(".burger-button").on("click", function() {
     let pDiv = $("<p>");
     let newBurger = $(".burger-input").val();
     pDiv.text(newBurger);
     pDiv.appendTo(".main-content");
 })
});