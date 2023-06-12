const pizzaType1 = 8;
const pizzaType2 = 10;
const pizzaType3 = 12;
const smallSize = -1;
const mediumSize = 0;
const bigSize = 2;
const toppingVegetable = 1;
const toppingSeaFood = 2;
const toppingMeat = 3;

let pizzaPrice = 0;
let sizePrice = 0;
let toppingPrice = 0;

/**
 * Calculate pizza type based on the given input.
 *
 * @param {*} element
 */
function calculatePizzaType(element) {
  if (element == null) {
    return;
  }

  switch (element.value) {
    case "pizzaType1":
      pizzaPrice = pizzaType1;
      break;
    case "pizzaType2":
      pizzaPrice = pizzaType2;
      break;
    case "pizzaType3":
      pizzaPrice = pizzaType3;
      break;
  }

  // alternative version of switch statement.
  // pizzaPrice = {
  //   "pizzaType1": smallPizza,
  //   "pizzaType2": mediumPizza,
  //   "pizzaType3": largePizza,
  // }[element.value];

  calculateTotal();
};

/**
 * Enable or disable list of pizza topping based on the given pizza type.
 */
function enablePizzaTopppingOptions() {
  const selectedPizzaType = document.querySelectorAll('input[name="pizzaType"]');
  let disabledToppings = [];
  const availableToppings = [
    "Lobster",
    "Broccoli",
    "Onions",
    "Zucchini",
    "Ham",
    "Oyster",
    "Salmon",
    "Bacon",
    "Duck",
    "Sausage",
    "Avocado",
    "Tuna",
  ];

  for (let availableTopping of availableToppings) {
    document.getElementById(availableTopping).disabled = false;
  }

  if (selectedPizzaType[0].checked || selectedPizzaType[1].checked || selectedPizzaType[2].checked) {
    if (selectedPizzaType[0].checked) {
      disabledToppings = ["Lobster", "Oyster", "Salmon", "Bacon", "Duck", "Sausage"];
    } else if (selectedPizzaType[1].checked) {
      disabledToppings = ["Avocado", "Tuna", "Duck", "Sausage"];
    } else if (selectedPizzaType[2].checked) {
      disabledToppings = ["Avocado", "Lobster", "Oyster", "Salmon"];
    }
  
    for (let disabledTopping of disabledToppings) {
      document.getElementById(disabledTopping).disabled = true;
    }
  }
}

/**
 * Calculate pizza size based on the given input.
 *
 * @param {*} element
 */
function calculatePizzaSize(element) {
  if (element == null) {
    return;
  }

  switch (element.value) {
    case "smallSize":
      sizePrice = smallSize;
      break;
    case "mediumSize":
      sizePrice = mediumSize;
      break;
    case "bigSize":
      sizePrice = bigSize;
      break;
  }

  // alternative version of switch statement.
  // sizePrice = {
  //   "smallSize": smallSize,
  //   "mediumSize": mediumSize,
  //   "bigSize": largeSize,
  // }[element.value];

  calculateTotal();
};

/**
 * function of toppings $1.
 */
function calculateToppingVegetable(element) {
  toppingPrice = element.checked
    ? toppingPrice + toppingVegetable
    : toppingPrice - toppingVegetable;

  calculateTotal();
};

/**
 * function of toppings $2.
 */
function calculateToppingSeaFood(element) {
  toppingPrice = element.checked
    ? toppingPrice + toppingSeaFood
    : toppingPrice - toppingSeaFood;

  calculateTotal();
};

/**
 * function of toppings $3.
 */
function calculateToppingMeat(element) {
  toppingPrice = element.checked
  ? toppingPrice + toppingMeat
  : toppingPrice - toppingMeat;

  calculateTotal();
};

/**
 * calculate total price
 */

function calculateTotal() {
  let total = pizzaPrice + sizePrice + toppingPrice;

  document.getElementById("total-price").innerHTML = total;
  document.getElementById("pizza-price").innerHTML = pizzaPrice;
  document.getElementById("size-price").innerHTML = sizePrice;
  document.getElementById("topping-price").innerHTML = toppingPrice;
};
