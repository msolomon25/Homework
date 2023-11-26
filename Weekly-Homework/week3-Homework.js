// Create an array of pizzaToppings with at least four different toppings
const pizzaToppings = ["sausage", " olives", " jalepeno", " pepperoni"];

// Create a greetCustomer function that prints a message that welcomes a guest,
// then informs them of the available toppings by looping over pizzaToppings (don't worry about
// perfect grammar here yet, i.e. "a, b, and c", see Bonus Challenge #9)

function greetCustomer() {
  for (let ingredientList of pizzaToppings){
    console.log(`"Welcome to Dominos! What toppings would you like? Our toppings are ${pizzaToppings}."`);
    break;
  }
}

// greetCustomer();

// i.e. "Welcome to Pizza House, our toppings are: a, b, c, ..."

// Create a getPizzaOrder function that
// has the parameters size, crust, and an indefinite amount of toppings as inputs
// prints the order, i.e. "One large thick crust pizza with x, y, z, ... coming up!"
// outputs a list with the size, crust, and toppings


function getPizzaOrder(size = "large", crust = "thick", ...toppings) {
  let orderMessage = "";
  for (let topping of toppings) {
    orderMessage = orderMessage + topping;
  }
  console.log(`"One ${size}, ${crust} crust pizza with ${orderMessage} coming up!"`);
}
// getPizzaOrder("large", "thick", "sausage", " pepperoni");



// Create a preparePizza function that
// has an array as its parameter with three items: a size, a crust, and a list of toppings
// prints something like "...Cooking pizza..."
// outputs a pizza Object with appropriate key-value pairs for size, crust, and toppings

function preparePizza(order) {
  let pizza = {
    size: order[0],
    crust: order[1],
    toppings: order[2]
  }
  let index = 3
  while(index < order.length){
    pizza.toppings = pizza.toppings + ", " + order[index]
    index++
  }
  console.log("...Cooking the pizza...")
  console.log(pizza);
  return pizza;
}


// preparePizza(["large", "thin", "sausage", "pepperoni"]);

// Create a servePizza function that
// has a parameter of a pizza Object
// logs a message that the pizza is ready and repeats the order, i.e. "Order up!
// Here's your large thick crust pizza with x, y, z, ... Enjoy!"
// outputs the same pizza Object that was passed in

function servePizza(pizza) {
  console.log(`"The pizza is ready! Here's your ${pizza.size}, ${pizza.crust} crust pizza with ${pizza.toppings} "`)

}
// let readyPizza = preparePizza(["large", "thick", "sausage", "pepperoni"]);
// servePizza(readyPizza);

// Call each function and (starting with preparePizza) use the returned value from the previous function as its input

greetCustomer();
getPizzaOrder("large", "thick", "sausage", " pepperoni");
let readyPizza = preparePizza(["large", "thick", "sausage", "pepperoni"]);
servePizza(readyPizza);

// NOTE: Please refrain from utilizing the Array.toString() method or inadvertently employing string coercion when constructing
// template literals. The primary objective of this exercise is to provide you with an opportunity to hone your skills
// in array traversal. Focus on utilizing while, for, and for...of loops to transform the array of toppings into the
// required output strings.

// The following is not an acceptable solution for
// Week 3 homework: let pizzaToppings = [" pepperoni", " bacon"]; console.log(The pizza toppings are ${pizzaToppings});
// After Week 3 this would be a perfectly acceptable solution but not for this assignment. Thank you.


// An example output for this assignment is:

// Welcome to The Pizza House, our toppings are:
// pepperoni, sausage, onions, peppers,
// One large thin crust pizza with sausage, onions, peppers, .Coming up!
// ...your pizza is cooking... Order up! Here's your large thin crust pizza with sausage, onions, peppers, . Enjoy!

