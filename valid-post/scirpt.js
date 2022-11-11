let emailInp = document.querySelector("#email");
let passInp = document.querySelector("#pass");
let userInp = document.querySelector("#user");
let nameInp = document.querySelector("#name");
let signBtn = document.querySelector("#signBtn");
let loginBtn = document.querySelector("#loginBtn");
let loginEmail = document.querySelector("#emailLogin");
let loginPass = document.querySelector("#passLogin");
let obj = {};
let loginObj = {};
signBtn.addEventListener("click", async function () {
  // https://serene-fortress-45917.herokuapp.com/v1/auth/signup
  obj.email = emailInp.value;
  obj.pass = passInp.value;
  obj.user = userInp.value;
  obj.name = nameInp.value;
  console.log(obj);
  console.log(obj);
  const resObj = await axios.post(
    "https://serene-fortress-45917.herokuapp.com/v1/auth/signup",
    obj
  );
  console.log(resObj);
});
loginBtn.addEventListener("click", async function () {
  loginObj.email = loginEmail.value;
  console.log(loginObj);
  const loginRes = await axios.post(
    "https://serene-fortress-45917.herokuapp.com/v1/auth/forgot-password-code",
    loginObj
  );
  console.log(loginRes);
});
