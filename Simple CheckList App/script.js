// let myTasks = document.querySelectorAll(".check");
// let taskContents = document.querySelectorAll(".task-name");

// myTasks.forEach((task) => {
//   task.addEventListener("change", function (event) {
//     event.target.checked
//       ? ((task.style.textDecoration = "line-through"),
//         (task.style.color = "pink"),
//         (document.getElementById("range-bar").value += 1),
//         alert(document.getElementById("range-bar").value))
//       : ((task.style.textDecoration = "none"),
//         (task.style.color = "black"),
//         (document.getElementById("range-bar").value -= 1),
//         alert(document.getElementById("range-bar").value));
//   });
// });

let myTasks = document.querySelectorAll(".check");

myTasks.forEach((task) => {
  task.addEventListener("change", function (event) {
    let rangeBar = document.getElementById("range-bar");
    let currentValue = Number(rangeBar.value);

    if (event.target.checked) {
      task.style.textDecoration = "line-through";
      task.style.color = "pink";
      rangeBar.value = currentValue + 1;
    } else {
      task.style.textDecoration = "none";
      task.style.color = "black";
      rangeBar.value = currentValue - 1;
    }

    //alert(rangeBar.value);
  });
});