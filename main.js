// Завдання 1
const itemElem = document.querySelectorAll(".item");
const getNumberElements = (elem) => {
  let lengthCategories = 0;
  elem.forEach((element, index) => {
    return (lengthCategories += index);
  });
  return `Number of categories: ${lengthCategories}`;
};

console.log(getNumberElements(itemElem));

const lengthItem = document.querySelectorAll(".item");

lengthItem.forEach((category) => {
  const title = category.querySelector("h2").textContent;
  const elements = category.querySelectorAll("li").length;
  console.log(`Category: ${title}`);
  console.log(`Elements: ${elements}`);
});

// Завдання 2

const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const productList = document.querySelector("#ingredients");
for (let i = 0; i < ingredients.length; i += 1) {
  const item = document.createElement("li");
  item.classList.add("item");
  item.textContent = ingredients[i];
  productList.append(item);
}
console.log(productList);

// Завдання 3
const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];
images.map((params) => {
  const gallery = document.querySelector(".gallery");
  gallery.insertAdjacentHTML(
    "beforeend",
    `<li><img class= "gallery-item-img" src="${params.url}" alt="${params.alt}"></li>`
  );
});
// Завдання 4

const decrementBtn = document.querySelector(".js-btnDecriment");
const incrementBtn = document.querySelector(".js-btnIncriment");
const answer = document.querySelector("#value");

let counterValue = 0;
decrementBtn.addEventListener("click", () => {
  answer.textContent = counterValue -= 1;
});
incrementBtn.addEventListener("click", () => {
  answer.textContent = counterValue += 1;
});
// Завдання 5
const inputName = document.querySelector("#name-input");
const inputValue = document.querySelector("#name-output");
inputName.addEventListener("input", (params) => {
  inputName.value === ""
    ? (inputValue.textContent = "Anonymous")
    : (inputValue.textContent = params.currentTarget.value);
});

// Завдання 6

const validationInput = document.querySelector("#validation-input");
validationInput.addEventListener("input", () => {
  const inputLegth = validationInput.value.length;
  const numberСharacters = parseInt(
    validationInput.getAttribute("data-length")
  );
  if (inputLegth === numberСharacters) {
    validationInput.classList.remove("invalid");
    validationInput.classList.add("valid");
  } else {
    validationInput.classList.remove("valid");
    validationInput.classList.add("invalid");
  }
});

// Завдання 7

const controlFontSize = document.querySelector("#font-size-control");
const text = document.querySelector("#text");

controlFontSize.addEventListener("input", (elem) => {
  const textFontSize = elem.currentTarget.value;
  text.style.fontSize = `${textFontSize}px`;
});

// Завдання 8

const form = document.querySelector(".login-form");

form.addEventListener("submit", (elem) => {
  elem.preventDefault();
  const formElements = elem.currentTarget.elements;
  const email = formElements.email.value;
  const password = formElements.password.value;

  email === "" || password === ""
    ? alert("всі поля повинні бути заповнені")
    : email,
    password;

  const user = {
    email,
    password,
  };

  console.log(user);
  form.reset();
});

// Завдання 9

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const btnChangeColor = document.querySelector(".change-color");

btnChangeColor.addEventListener("click", () => {
  document.body.style.background = `${getRandomHexColor()}`;
});

// Завдання 10

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const conteiner = document.querySelector("#controls");
const numInput = document.querySelector("#controls input");
const createBtn = document.querySelector("#controls [data-create]");
const destroyBtn = document.querySelector("#controls [data-destroy]");
const mainBox = document.querySelector("#boxes");

function createBoxes(elem) {
  for (let i = 0; i < elem; i += 1) {
    const box = document.createElement("div");
    box.style.width = 30 + i * 10 + "px";
    box.style.height = 30 + "px";
    box.style.background = getRandomHexColor();
    mainBox.append(box);
  }
}
function destroyBoxes(elem) {
  while (elem.firstChild) {
    elem.removeChild(elem.firstChild);
  }
}

createBtn.addEventListener("click", () => createBoxes(numInput.value));
destroyBtn.addEventListener("click", () => destroyBoxes(mainBox));
