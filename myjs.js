
const button = document.querySelector(".savebutton");
const textbox = document.querySelector(".textbox");

button.addEventListener("click", () => {
  var text = textbox.value;
  var password = Math.floor(Math.random() * 65536);
  password = password.toString(16).toUpperCase();
  var passwordPlace = document.querySelector("h3");
  passwordPlace.textContent = "Your password is: " + password;
});

