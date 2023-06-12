// DESAFIO 1

const image = document.querySelector(".img1");


image.addEventListener("click", function () {

  if (image.style.border === "2px solid red") {
    image.style.border = "";
  } else {
    image.style.border = "2px solid red";
  }
});

// DESAFIO 2

const inputs = document.querySelectorAll("input");
const message = document.querySelector(".message");
const verifyButton = document.querySelector(".verify");

verifyButton.addEventListener("click", function () {
  let totalStickers = 0;

  inputs.forEach((input) => {
    totalStickers += parseInt(input.value) || 0;
  });

  if (totalStickers > 10) {
    message.textContent = "Llevas demasiados stickers";
  } else if (totalStickers === 0) {
    message.textContent =
      "No has seleccionado ningún sticker, escoge los que te gusten";
  } else {
    message.textContent =
      totalStickers + " Stickers seleccionados, ¡que los disfrutes!";
  }
});

// DESAFIO 3

const select1 = document.querySelector("[name='select1']");
const select2 = document.querySelector("[name='select2']");
const select3 = document.querySelector("[name='select3']");
const loginButton = document.querySelector(".login");
const passMessage = document.querySelector(".passMessage");

function verificarPassword() {
  const pass1 = select1.value;
  const pass2 = select2.value;
  const pass3 = select3.value;

  if (pass1 === "9" && pass2 === "1" && pass3 === "1") {
    passMessage.textContent = "Password 1 correcto";
  } else if (pass1 === "7" && pass2 === "1" && pass3 === "4") {
    passMessage.textContent = "Password 2 es correcto";
  } else {
    passMessage.textContent = "Password incorrecto";
  }
}

loginButton.addEventListener("click", verificarPassword);
