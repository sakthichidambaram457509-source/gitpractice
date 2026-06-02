const form = document.getElementById("todo-form");
const input = document.getElementById("todo-input");
const list = document.getElementById("todo-list");

form.addEventListener("submit", function(e) {
  e.preventDefault();
  const text = input.value.trim();
  if (text !== "") {
    addTodo(text);
    input.value = "";
  }
});

function addTodo(text) {
  const li = document.createElement("li");
  li.className = "todo-item";

  const span = document.createElement("span");
  span.textContent = text;
  span.addEventListener("click", () => {
    li.classList.toggle("completed");
  });

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "❌";
  deleteBtn.addEventListener("click", () => {
    list.removeChild(li);
  });

  li.appendChild(span);
  li.appendChild(deleteBtn);
  list.appendChild(li);
}
