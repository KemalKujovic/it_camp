const btn = document.querySelector("#dodati");
const taskinput = document.querySelector("#inputAdd");

function todoList() {
  let inputAdd = document.querySelector("#inputAdd").value;
  let dodavanje = document.querySelector(".novo");

  if (inputAdd === "") {
    alert("unesite tekst");
  } else {
    // dodavanje.innerHTML = '';
    dodavanje.innerHTML += `<li class="todoList2">
    <h1>${inputAdd}</h1><button onclick="kliknuti(this)" class="active">X</button></li>`;
    taskinput.value = "";
    // taskinput.focus();
  }
  let drugi = document.querySelectorAll(".active");
  drugi.forEach((e) => {
    e.addEventListener("click", () => {
      e.parentElement.remove();
    });
  });
  // let activeX = document.querySelectorAll('.active');
  // for(let i =0; i<activeX.length; i++){
  //   activeX[i].onclick = function(){
  //     this.parentElement.remove();
  //   }
  // }
}
btn.addEventListener("click", todoList);

// function kliknuti(e){
//   e.addEventListener('click', () => {
//     e.focus();
//     e.parentElement.remove();
//   })

// }
