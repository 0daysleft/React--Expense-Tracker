//document.getElementById("check").
let myTasks = document.querySelectorAll(".check");
let taskContents = document.querySelectorAll(".task-name");

myTasks.forEach((task) => {
  task.addEventListener("change", function (event) {
    event.target.checked
      ? ((task.style.textDecoration = "line-through"),
        (task.style.color = "pink"),
        (document.getElementById("range-bar").value += 1))
      : ((task.style.textDecoration = "none"),
        (task.style.color = "black"),
        (document.getElementById("range-bar").value -= 1));
  });
});
