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
  } catch (error) {
    console.log(error);
  }
}
