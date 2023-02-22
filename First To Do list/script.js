
const input = document.getElementById("input");
const list = document.getElementById("list");

// Function to add a to-do item to the list
function addItem() {
  const text = input.value.trim();
  if (text !== "") {
    const item = document.createElement("li");
    const span = document.createElement("span");
    span.textContent = text;
    const button = document.createElement("button");
    button.textContent = "Delete";
    button.addEventListener("click", () => item.remove());
    item.appendChild(span);
    item.appendChild(button);
    list.appendChild(item);
    input.value = "";
  }
}

// Add an event listener to the input element to call the addItem function when the "Enter" key is pressed
input.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    addItem();
  }
});
