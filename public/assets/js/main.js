$(function() {
 $(".burger-button").on("click", function(event) {
    event.preventDefault();
     let newBurger = {
        burger_name: $(".burger-input").val().trim(),
        devoured: false
     }
     $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
     }).then(() => {
    });
    location.reload();
 });
 $(".devour").on("click", function() {
     id = $(this).data("id");
     console.log(id);
     devoured = {
         devoured: true
     }
    $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: devoured
    }).then(function() {
        console.log("devoured that burger!");
        location.reload();
    });
 });
});