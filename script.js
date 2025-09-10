let name = "Ailen";
let age = 30;
function greetUser(name, age) {
  return `Hello, I am ${name} and I am ${age} years old.`;
}
console.log(greetUser(name, age));

const button = document.getElementById("colorBtn");
const display = document.getElementById("colorDisplay");

function getRandomColor() {
  let hex = Math.floor(Math.random() * 16777215).toString(16);
  return "#" + hex.padStart(6, "0"); // ensures 6 digits
}

button.addEventListener("click", () => {
  let newColor = getRandomColor();
  document.body.style.backgroundColor = newColor;
  display.textContent = `Background changed to: ${newColor}`;

  console.log("Button clicked!");
  console.log(`Generated color: ${newColor}`);
});

console.log("✅ Script loaded successfully. Ready to interact!");
