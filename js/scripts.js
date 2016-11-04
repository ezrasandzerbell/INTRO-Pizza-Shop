function Pizza(size, toppings) {
  this.pizzaSize = size;
  this.pizzaToppings = toppings;
}

Pizza.prototype.pizzaSizeSentence = function() {
  return "You've ordered a " + this.pizzaSize + " pizza with the following toppings:";
}

// user interface logic
$(document).ready(function() {

  $("#firstButton").click(function(event)) {
    event.preventDefault();
    var pizzaDelivery = $("select.pizzaDelivery").val();

    if (pizzaDelivery === "Yes") {
      $("#firstButton").hide();
      $("#addressEntry").show();
    } else if (pizzaDelivery === "No"){
      $("#landingPage").hide();
      $("#mainPage").show();
    }
  }

  $("form#orderPizza").submit(function(event) {
    event.preventDefault();

    var pizzaSize = $("select.pizzaSize").val();
    var pizzaToppings = []

    $("input:checkbox[name=toppings]:checked").each(function(){
      var oneTopping = $(this).val();
      pizzaToppings.push(oneTopping);
    });

    var pizzaOutput = new Pizza(pizzaSize, pizzaToppings);


    $("span#firstPizza").text(pizzaOutput.pizzaSizeSentence());
    $("ul#firstPizzaToppings").text("");

    for (i = 0; i <= (pizzaOutput.pizzaToppings.length-1); i++) {
      $("ul#firstPizzaToppings").append(pizzaOutput.pizzaToppings[i] + "<br>")
    };


    $("#customerOrderResult").show();

  });
});
