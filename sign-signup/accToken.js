let api_URL = "https://serene-fortress-45917.herokuapp.com/v1/user/users";

(async function () {
  try {
    let accessLocal = await localStorage.getItem("accesToken");
    let response = await axios.get(api_URL, {
      headers: {
        access_token:
          "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJVc2VySUQiOiI2MiIsIlVzZXJSb2xlIjoidXNlciIsIktleVR5cGUiOiJhY2Nlc3MiLCJleHAiOjE2Njg0MDE4MzgsImlzcyI6InJpc2NfYXBwLmF1dGguc2VydmljZSJ9.Z-T-Kgee9fXAy5p_MUquImhcPouZ3iPLxYOq3FfMpikJRxxhP7yK1DNeYGeAOStinZK5xja5e86g4BZHP8XWx89J_6N_EuSfiRftMSfQ4Bu2lnmi9FAn5by-Qi0atkXTQnEUezA4YUN-WIaHZVOT1FkNj_05XkFhF-1gKQP-NQ3xBC6IKx5OWjtArBbi7StwhA9oli09fc4yi3Cy4bLCJzlH4QJwHH-7Z3_YEskhC6lcTNwl8v574dzkUiEY8YERfpoaZWEa1ZZltNCGrskXPwExO6G7tobM6gyW8-7wcPxX_XODmzaKdQMQ9MGKG0bAhBSSLccD1NQSOalQVPrgEw",
      },
    });
  } catch (error) {
    console.log(error);
  }
})();
