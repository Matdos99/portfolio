const colors = ["green", "red", "blue", "yellow"];

const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", () => {
  const randomNumber = getRandomColor();
  console.log(randomNumber);
  document.body.style.backgroundColor = colors[randomNumber];
  btn.style.backgroundColor = colors[randomNumber];
  color.textContent = colors[randomNumber];
});

function getRandomColor() {
  return Math.floor(Math.random() * colors.length);
}
