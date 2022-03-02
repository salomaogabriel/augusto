let articles = document.getElementsByTagName("article");
let page_is_home = true;
let menu = document.getElementsByClassName("menu-nav")[0];
function changePage(id, isResponsive = false) {
  for (let i = 0; i < articles.length; i++) {
    articles[i].classList.add("hide");
  }
  if (!isResponsive) {
    document.getElementById(id).classList.remove("hide");
    if (id == "inicio") {
      menu.innerHTML = "Lista de Presentes";
      page_is_home = true;
    } else {
      menu.innerHTML = "Início";

      page_is_home = false;
    }
  } else {
    if (page_is_home) {
      document.getElementById("lista").classList.remove("hide");
      page_is_home = false;
      menu.innerHTML = "Início";
    } else {
      menu.innerHTML = "Lista de Presentes";

      document.getElementById("inicio").classList.remove("hide");
      page_is_home = true;
    }
  }
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
      <div class="info">
      <h2>${res[i].name}</h2>
      <h3>R$${res[i].price},00</h3>
      </div>
      <button onclick="createRipple(event); openModal(${res[i].id},'${res[i].name}',${res[i].price});">Presentear</button>
    </div>`;
    }
  });

var modal = document.getElementById("payment");

// Get the button that opens the modal

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// Modal html elementes:
let modal_qr_code = document.getElementById("qr-imgcode-img");
let modal_picture = document.getElementById("modal-picture");
let modal_name = document.getElementById("modal-name");
let modal_price = document.getElementById("modal-price");
// When the user clicks the button, open the modal
function openModal(id, name, price) {
  if (id != 99) {
    modal_price.innerHTML = `R$${price},00`;
  } else {
    modal_price.innerHTML = `R$xx,xx`;
  }
  modal_name.innerHTML = name;

  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
function copyKey(event) {
  createRipple(event);

  navigator.clipboard.writeText("example@example.com");
  document.getElementById("copied").classList.remove("hide");
  document.getElementById("copied").classList.add("animation");
  setTimeout(() => {
    document.getElementById("copied").classList.remove("animation");
    document.getElementById("copied").classList.add("hide");
  }, 4000);
}
function updateWeek() {
  let weeks = weeksBetween(new Date(), new Date(2021, 6, 8));
  document.getElementById("weeks").innerHTML = `${weeks} Semanas!`;
}
function weeksBetween(d2, d1) {
  return Math.floor((d2 - d1) / (7 * 24 * 60 * 60 * 1000));
}
updateWeek();
