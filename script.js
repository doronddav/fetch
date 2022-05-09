let firstName = document.getElementById("name");
let lastName = document.getElementById("lastName");
let adress = document.getElementById("adress");
let lang = document.getElementById("lang");
let img = document.getElementById("img");
let btn = document.getElementById("btn");
let loader = document.querySelector(".loader");

btn = addEventListener("click", () => {
  loader.style.display = "flex";
  setTimeout(() => {
    fetchAndDisplay();
  }, 5000);
});

let display = function (profileJSON) {
  firstName.innerHTML = "User Name:" + profileJSON.userName;
  lastName.innerHTML = "Last Name:" + profileJSON.lastName;
  adress.innerHTML = "Adress:" + profileJSON.adrres;
  lang.innerHTML = "Skills:" + profileJSON.language;
  img.src = profileJSON.img;
};
let fetchAndDisplay = function () {
  fetch("http://localhost:3001/profile")
    .then((profile) => profile.json())
    .then((profileJSON) => display(profileJSON));
  loader.style.display = "none";
  img.style.display = "inline";
};
