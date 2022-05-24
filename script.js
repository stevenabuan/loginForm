"use strict";

document.querySelector(".logInBtn").addEventListener("click", function () {
  alert("Login successful");
});

document.querySelector(".submitBtn").addEventListener("click", function () {
  alert("Password reset was successful");
});

document.querySelector(".regBtn").addEventListener("click", function () {
  alert(
    `Hi ${
      document.querySelector("#firstName").value
    }, Your account is successfully registered!`
  );
});
