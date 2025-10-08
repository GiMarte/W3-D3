const form = document.getElementById("main-form");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const userThings = document.getElementById("things");
  const createDiv = document.createElement("div"); // <div> </div>
  const userValue = userThings.value;
  createDiv.classList.add("div-matti");
  const autoDistr = document.createElement("button");
  autoDistr.innerHTML = "Delete";
  createDiv.innerHTML = `
  <p>${userValue} </p>
    `;
  form.appendChild(createDiv);

  createDiv.addEventListener("click", (e) => {
    e.target.style.textDecoration = "line-through";
    e.target.style.color = "red";
  });
});
