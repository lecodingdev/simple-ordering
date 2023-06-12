const smallPizza = 8;
const mediumPizza = 10;
const largePizza = 12;
const smallSize = -1;
const mediumSize = 0;
const bigSize = 2;
const toppingVegetable = 1;
const toppingSeaFood = 2;
const toppingMeat = 3;
let pizzaPrice = 0;
let sizePrice = 0;
let toppingPrice = 0;

// function of pizza price
function calculatePizza(element) {
  if (element == null) {
    return;
  }

  switch (element.value) {
    case "13":
      pizzaPrice = smallPizza;
      break;
    case "15":
      pizzaPrice = mediumPizza;
      break;
    case "17":
      pizzaPrice = largePizza;
      break;
  }
  calculateTotal();
};

// function of pizza choice of toppings
function pizzaChoice() {
  const menu = document.querySelectorAll('input[name="pizza"]');
  const dis = [];
  let topping = [
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
  for (let value of topping) {
    document.getElementById(value).disabled = false;
  }

  if (menu[0].checked || menu[1].checked || menu[2].checked) {
    if (menu[0].checked) {
      let dis = ["Lobster", "Oyster", "Salmon", "Bacon", "Duck", "Sausage"];
      for (let value of dis) {
        document.getElementById(value).disabled = true;
      }
    }

    if (menu[1].checked) {
      let dis = ["Avocado", "Tuna", "Duck", "Sausage"];
      for (let value of dis) {
        document.getElementById(value).disabled = true;
      }
    }

    if (menu[2].checked) {
      let dis = ["Avocado", "Lobster", "Oyster", "Salmon"];
      for (let value of dis) {
        document.getElementById(value).disabled = true;
      }
    }
  }
};

// function of size price
function calculateSize(element) {
  if (element == null) {
    return;
  }

  switch (element.value) {
    case "4":
      sizePrice = smallSize;
      break;
    case "5":
      sizePrice = mediumSize;
      break;
    case "7":
      sizePrice = bigSize;
      break;
  }
  calculateTotal();
};

// function of toppings $1
function calculateToppingVegetable(element) {
  if (element.checked) {
       toppingPrice += toppingVegetable;
  } else {
      toppingPrice -= toppingVegetable;
  }
    calculateTotal();
};

// function of toppings $2
function calculateToppingSeaFood(element) {
  if (element.checked) {
       toppingPrice += toppingSeaFood;
  } else {
      toppingPrice -= toppingSeaFood;
  }
    calculateTotal();
};

// function of toppings $3
function calculateToppingMeat(element) {
  if (element.checked) {
       toppingPrice += toppingMeat;
  } else {
      toppingPrice -= toppingMeat;
  }
    calculateTotal();
};

// function of price
function calculateTotal() {
  let total = pizzaPrice + sizePrice + toppingPrice;
  document.getElementById("total-price").innerHTML = total;
  document.getElementById("pizza-price").innerHTML = pizzaPrice;
  document.getElementById("size-price").innerHTML = sizePrice;
  document.getElementById("topping-price").innerHTML = toppingPrice;
};


