const form = document.getElementById("main-form");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const userThings = document.getElementById("things");
  const userValue = userThings.value;
  const createDiv = document.createElement("div"); // <div> </div>
  createDiv.classList.add("div-matti");
  createDiv.innerHTML = `
  <p>${userValue} </p>
  <button type="button" class="delete-btn">Delete</button>
    `;

  form.appendChild(createDiv);

  const p = createDiv.querySelector("p");
  p.addEventListener("click", (e) => {
    p.classList.toggle("line-through");
  });
  const deleteBtn = createDiv.querySelector(".delete-btn");

  deleteBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    createDiv.remove();
  });
});
