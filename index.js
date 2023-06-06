const inputEl = document.querySelector(".input");
const spanEl=document.querySelector("span");
const bodyEl = document.querySelector("body");

inputEl.checked = JSON.parse(localStorage.getItem("mode"));

updateBody();

function updateBody() {
  if (inputEl.checked) {
    bodyEl.style.background = "black";
    spanEl.style.color="white";
    spanEl.innerHTML="SWITCHED TO DARK MODE."
  } else {
    bodyEl.style.background = "white";
    spanEl.style.color="black";
    spanEl.innerHTML="SWITCHED TO LIGHT MODE."
  }
}

inputEl.addEventListener("input", () => {
  updateBody();
  updateLocalStorage();
});

function updateLocalStorage() {
  localStorage.setItem("mode", JSON.stringify(inputEl.checked));
}
Footer