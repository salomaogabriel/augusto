let articles = document.getElementsByTagName("article");
function changePage(id) {
  for (let i = 0; i < articles.length; i++) {
    articles[i].classList.add("hide");
  }
  document.getElementById(id).classList.remove("hide");
}
let navs = document.getElementsByClassName("nav");
for (let i = 0; i < navs.length; i++) {
  navs[i].addEventListener("click", function (event) {
    createRipple(event);
  });
}
document
  .getElementById("ver-lista")
  .addEventListener("click", function (event) {
    createRipple(event);
  });

function createRipple(event) {
  const button = event.currentTarget;

  const circle = document.createElement("span");
  const diameter = Math.max(button.clientWidth, button.clientHeight);
  const radius = diameter / 2;

  circle.style.width = circle.style.height = `${diameter}px`;
  circle.style.left = `${event.clientX - button.offsetLeft - radius}px`;
  circle.style.top = `${event.clientY - button.offsetTop - radius}px`;
  circle.classList.add("ripple");

  const ripple = button.getElementsByClassName("ripple")[0];

  if (ripple) {
    ripple.remove();
  }

  button.appendChild(circle);
}
fetch("products.json")
  .then((res) => res.json())
  .then((res) => {
    console.log(res.length);
    let cards = document.getElementById("cards");
    for (let i = 0; i < res.length; i++) {
      cards.innerHTML += `<div class="card">
      <img src="product/${res[i].id}.jpg" alt="${res[i].name}" />
      <h2>${res[i].name}</h2>
      <h3>R$${res[i].price},00</h3>
      <button onclick="createRipple(event)">Presentear</button>
    </div>`;
    }
  });
