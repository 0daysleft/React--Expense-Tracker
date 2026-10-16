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
//let checkbox_details = document.querySelectorAll(");

myTasks.forEach((task, index) => {
  task.addEventListener("change", function (event) {
    let rangeBar = document.getElementById("range-bar");
    let currentValue = Number(rangeBar.value);
// checkbox_details.forEach( 
//       (detail) => {
    if (event.target.checked) {
      document.getElementsByClassName("checkbox-span-contents")[
        index
      ].style.textDecoration = "line-through";
      document.getElementsByClassName("checkbox-span-contents")[
        index
      ].style.color = "pink";
      rangeBar.value = currentValue + 1;
    } else {
      document.getElementsByClassName("checkbox-span-contents")[
        index
      ].style.textDecoration = "none";
      document.getElementsByClassName("checkbox-span-contents")[
        index
      ].style.color = "black";
      rangeBar.value = currentValue - 1;
    }

    //alert(index, " clicked");
  }
//)}
);
});