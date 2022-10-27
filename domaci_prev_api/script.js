let resData = null;
const container = document.getElementById("container");
const prevBtn = document.querySelector("#prevPage");
const nextBtn = document.querySelector("#nextPage");
let myUrl = `https://catfact.ninja/facts?page=1`;
let pageN = document.querySelector(".pageNumber");
const pageNumbers = document.querySelectorAll(".pageNumbers");
// functions
pageNumbers.forEach((el) => {
  el.addEventListener("click", function (e) {
    e.preventDefault();
    const novi = Number(e.target.innerText);
    if (!novi) {
      return;
    }
    container.innerHTML = "";

    myUrl = `https://catfact.ninja/facts?page=${novi}`;
    prevBtn.removeAttribute("disabled");
    nextBtn.removeAttribute("disabled");

    getData();
  });
});
function getData() {
  fetch(myUrl)
    .then((response) => {
      return response.json();
    })
    .then((responseBody) => {
      resData = responseBody;

      if (resData.prev_page_url === null) {
        prevBtn.setAttribute("disabled", "true");
      }
      if (resData.next_page_url === null) {
        nextBtn.setAttribute("disabled", "true");
      }
      pageN.innerText = responseBody.current_page;
      console.log(resData);
      responseBody.data.forEach((el) => {
        container.appendChild(createCard(el));
      });
    })
    .catch((err) => {
      console.log("GRESKAAA", err);
    });
}

function createCard(catFact) {
  let card = document.createElement("p");
  card.innerHTML = catFact.fact;
  card.classList.add("fact_card");
  return card;
}

function goToNextPage() {
  if (!resData.next_page_url) {
    return;
  }
  container.innerHTML = "";
  myUrl = resData.next_page_url;
  prevBtn.removeAttribute("disabled");
  getData();
}

function goToPrevPage() {
  if (!resData.prev_page_url) {
    return;
  }
  nextBtn.removeAttribute("disabled");
  container.innerHTML = "";
  myUrl = resData.prev_page_url;
  getData();
}

// ifi function
(function () {
  getData();
})();

// ---eventslistner ---
prevBtn.addEventListener("click", goToPrevPage);
nextBtn.addEventListener("click", goToNextPage);
