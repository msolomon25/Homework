const pizzaPlace = "dominos";

let numberOfToppings = 9;

console.log(typeof pizzaPlace); //String

console.log(typeof numberOfToppings); //number


let greeting = `"Hello, this is ${pizzaPlace}," I said, "We have ${numberOfToppings} toppings to choose from!"`;


//`"Hello, this is ${pizzaPlace}," I said, "We have ${numberOfToppings} toppings to choose from!"`;

console.log(`"Hello, this is ${pizzaPlace}," I said, "We have ${numberOfToppings} toppings to choose from!"`);


if (numberOfToppings <= 10){
  console.log("Quality, not quantity.");
}else{
  console.log("A whole lot of pizza.");
}
