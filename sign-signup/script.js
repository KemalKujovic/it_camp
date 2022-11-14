let url = "https://serene-fortress-45917.herokuapp.com/v1/auth/";
async function signUp() {
  let emailInput = document.querySelector("#email_signUp");
  let nameInput = document.querySelector("#name_signUp");
  let passInput = document.querySelector("#password_signUp");
  let userNameInput = document.querySelector("#username_signUp");
  let response = await axios.post(url + "signup", {
    email: emailInput.value,
    name: nameInput.value,
    password: passInput.value,
    username: userNameInput.value,
  });
  console.log(response);
}

async function login() {
  let emailInput = document.querySelector("#email_login");
  let passInput = document.querySelector("#password_login");
  try {
    let response = await axios.post(url + "login", {
      email: emailInput.value,
      password: passInput.value,
    });

    let storage = await localStorage.setItem(
      "accesToken",
      response.data.data.access_token
    );
    toasterAnimation("You are successfully logged in", "#28a745");
    goToNextPage();
  } catch (error) {
    toasterAnimation("Incorrect credentials", "#dc3545");
    console.log(error);
  }
}
function goToNextPage() {
  setTimeout(() => {
    return (window.location.href = "accToken.html");
  }, 2500);
}

async function toasterAnimation(message, color) {
  let toaster = document.querySelector(".toasterLogin");
  toaster.innerHTML = message;
  toaster.style.right = "10px";
  toaster.style.color = color;
  setTimeout(() => {
    toaster.style.right = "-250px";
  }, 2000);
}
