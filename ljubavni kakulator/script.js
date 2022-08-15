"use strict";

const btn = document.querySelector("#btn");
let tekstSrce = document.querySelector(".zasliku");
let tekstzaSliku = document.querySelector("#tekstuSliku");

btn.addEventListener("click", () => {
  let drugoIme = document.querySelector("#secondName").value;
  let prvoIme = document.querySelector("#fristName").value;
  const dinc = Math.trunc(Math.random() * 100) + 1;

  if (prvoIme === "Kemal" && drugoIme === "Amina") {
    tekstzaSliku.textContent = 100 + "%";
  } else {
    tekstSrce = dinc;
    tekstzaSliku.textContent = tekstSrce + "%";
  }
});
