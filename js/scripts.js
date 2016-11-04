var customerAddress = []
var pizzaCost = [];
var pizzaToppings = [];
var pizzaToppingsNumber = [];
var globalPizzaSizeCost = []
var globalPizzaToppingsCost = []
var globalTotalPizzaCost = []

function Pizza(size, toppings) {
  this.pizzaSize = size;
  this.pizzaToppings = toppings;
}

Pizza.prototype.pizzaSizeSentence = function() {
  return "You've ordered a " + this.pizzaSize + " pizza with the following toppings:";
}

Pizza.prototype.pizzaSizeCost = function() {

  if (this.pizzaSize === "Small") {
    pizzaSizeCost = 8
  }else if (this.pizzaSize === "Medium") {
    pizzaSizeCost = 10
  } else if (this.pizzaSize === "Large") {
    pizzaSizeCost = 12
  };
    return pizzaSizeCost
};

Pizza.prototype.pizzaToppingsCost = function() {

  pizzaMath = (pizzaToppingsNumber * .5);
  return pizzaMath
};

// user interface logic
$(document).ready(function() {

  $("form#pizzaDelivery").submit(function(event) {
    event.preventDefault();

    var pizzaDelivery = $("select.yesNoDelivery").val();

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
      var firstName = $("input.new-first-name").val();
      var lastName = $("input.new-last-name").val();
      var inputtedStreet = $("input.new-street").val();
      var inputtedCity = $("input.new-city").val();
      var inputtedState = $("input.new-state").val();
      customerAddress.push(firstName, lastName, inputtedStreet, inputtedCity, inputtedState);
      $("#addressEntry").hide();
      $("#mainPage").show();
      $("#deliveryDivFinal").show();
  });

//Pizza Ordering Form

  $("form#orderPizza").submit(function(event) {
    event.preventDefault();

    var pizzaSize = $("select.pizzaSize").val();


    $("input:checkbox[name=toppings]:checked").each(function(){
      var oneTopping = $(this).val();
      pizzaToppings.push(oneTopping);
    });

    var toppingsNumber = pizzaToppings.length;
    pizzaToppingsNumber.push(toppingsNumber);


    var pizzaOutput = new Pizza(pizzaSize, pizzaToppings);

    $("span#firstPizza").text(pizzaOutput.pizzaSizeSentence());
    $("ul#firstPizzaToppings").text("");

    for (i = 0; i <= (pizzaOutput.pizzaToppings.length-1); i++) {
      $("ul#firstPizzaToppings").append(pizzaOutput.pizzaToppings[i] + "<br>")
    };


    globalPizzaSizeCost.push(pizzaOutput.pizzaSizeCost());

    globalPizzaToppingsCost.push(pizzaOutput.pizzaToppingsCost());

    console.log(globalPizzaToppingsCost);

    var theTotalPizzaCost = parseInt((globalPizzaSizeCost).toString()) + parseInt((globalPizzaToppingsCost).toString());

    $("span#totalCost").text(theTotalPizzaCost);
    for (i = 0; i <= (customerAddress.length-1); i++) {
      $("ul#deliveryAddress").append(customerAddress[i] + "<br>")
    };
    $("#customerOrderResult").show();

  });
});
