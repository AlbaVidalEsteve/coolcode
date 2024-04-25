let mailNL = document.querySelector(".newsletter input");
let mailPop = document.querySelector(".form-input input");

mailNL.addEventListener("input", function () {
  const correo = mailNL.value;
  console.log('Correo introducido:', correo);
  mailPop.value = correo;
});
