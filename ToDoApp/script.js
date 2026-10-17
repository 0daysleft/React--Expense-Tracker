let toDo = document.getElementById("to-do-text");
let button = document.getElementById("submitButton");
let items = document.getElementById("to-Do-Items-Container");
let checkBoxes = document.querySelectorAll(".check-box");

let toDoArray = ["Example To Do 1", "Example To Do 2", "Example To Do 3"];

function addItemToArray() {
  let inputValue = toDo.value;
  if (inputValue == " " || inputValue == "") return;
  toDoArray.push(inputValue);
  toDo.value = "";
  DisplayToDo();
}

toDo.addEventListener("keypress", (e) => {
  if (e.key == "Enter") {
    addItemToArray();
  }
});

function DisplayToDo() {
  items.innerHTML = "";
  if (toDoArray.length == 0) {
    items.innerHTML = "<p>Nothing to Show Here Pals</p>";
  } else {
    toDoArray.forEach((value, index) => {
      items.innerHTML += `
                  <p> <input type="checkbox" class="check-box"/> ${index + 1}. ${value}
                  <button onclick="deleteList(${index})">Delete</button>
                  </p> 
                  `;
    });
  }
}

function deleteList(x) {
  toDoArray.splice(x, 1);
  DisplayToDo();
}

button.onclick = () => addItemToArray();
DisplayToDo();

checkBoxes.forEach((checkBox, index) => {
  checkBox.addEventListener("change", function (event) {
    if (event.target.checked) {
      document.body.style.backgroundColor = "red";
    } else {
      document.body.style.backgroundColor = "white";
    }
  });
});
