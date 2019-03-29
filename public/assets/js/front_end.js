  /* shorthand for jquery $(document).ready()... */
  $(function() {
      console.log("DOM is ready for jQuery.");

  // ---------------------------------------------------------------------

  $(".create-form").on("submit", function(event) {
    event.preventDefault();//using .on("submit") 
    
    /*var newBurger = {
      name: $("#burg").val().trim(),
      devoured: $("[name=devoured]:checked").val().trim()
    };*/

    var newBurger = {
      name: $("#burg").val().trim()
    };

    console.log("newBurger (object) = ", newBurger);

    // Send the POST request.
    $.ajax("/api/burgers", { type: "POST", data: newBurger }).then(function() {
        console.log("created new burger");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });  

// ---------------------------------------------------------------------

$(".change-devour").on("click", function(event) {
  var id = $(this).data("id");
  var name = $("#burg").val().trim(); //???
  var newDevour = $(this).data("newdevour");

  var newDevouredState = {
    id: id,
    burgerName: name,
    devoured: newDevour
  };

  console.log("\n$(this).data('id'); = ", id);
  console.log("\n$(this).data('newdevour'); = ", newDevour);
  console.log("\nvar newDevouredState (object) = ", newDevouredState);

  // Send the PUT request.
  $.ajax("/api/burgers/" + id, { type: "PUT", data: newDevouredState }).then(function() {
      console.log("changed devoured to", newDevour);
      // Reload the page to get the updated list
      location.reload();
    }
  );

});

// ---------------------------------------------------------------------


  });
