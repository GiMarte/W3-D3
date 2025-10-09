const form = document.getElementById("main-form");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const userThings = document.getElementById("things");
  const createDiv = document.createElement("div"); // <div> </div>
  const userValue = userThings.value;
  createDiv.classList.add("div-matti");
  createDiv.innerHTML = `
  <p>${userValue} </p>
  <button type="onclick" class="delete-btn">Delete</button>
    `;
  form.appendChild(createDiv);

  createDiv.addEventListener("click", (e) => {
    e.target.style.textDecoration = "line-through";
    e.target.style.color = "red";
    e.classList.toggle("div-matti");
  });
  const deleteBtn = createDiv.querySelector(".delete-btn");

  deleteBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    createDiv.remove();
  }); 
});
