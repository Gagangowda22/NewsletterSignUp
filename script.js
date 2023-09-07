const form = document.querySelector("form");
const email = document.querySelector('input[type="email"]');
const invalid = document.querySelector("span");
const successPage = document.querySelector(".success");
const mainPage = document.getElementById("main");
const dismiss = document.getElementById("dismiss");

successPage.style.display = "none";

function isValidEmail(email) {
  let pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return pattern.test(email);
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (!isValidEmail(email.value)) {
    email.classList.add("error");
    invalid.style.display = "block";
  } else {
    email.classList.remove("error");
    invalid.style.display = "none";
    mainPage.style.display = "none";
    successPage.style.display = "flex";
  }
});

dismiss.addEventListener("click", () => {
  mainPage.style.display = "block";
  successPage.style.display = "none";
});
