var customerAddress = []

function Pizza(size, toppings) {
  this.pizzaSize = size;
  this.pizzaToppings = toppings;
}

Pizza.prototype.pizzaSizeSentence = function() {
  return "You've ordered a " + this.pizzaSize + " pizza with the following toppings:";
}

// user interface logic
$(document).ready(function() {

  $("form#pizzaDelivery").submit(function(event) {
    event.preventDefault();

    var pizzaDelivery = $("select.yesNoDelivery").val();
    console.log(pizzaDelivery);

    if (pizzaDelivery === "delivery") {
      $("#deliveryDiv").hide();
      $("#addressEntry").show();

    } else {
      $("#landingPage").hide();
      $("#mainPage").show();
    }
  });

  $("form#enterAddress").submit(function(event) {
    event.preventDefault();
      var firstName = $("input.new-last-name").val();
      var lastName = $("input.new-first-name").val();
      var inputtedStreet = $("input.new-street").val();
      var inputtedCity = $("input.new-city").val();
      var inputtedState = $("input.new-state").val();
      customerAddress.push(firstName, lastName, inputtedStreet, inputtedCity, inputtedState);
      console.log(customerAddress);
      $("#addressEntry").hide();
      $("#mainPage").show();

  });

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
