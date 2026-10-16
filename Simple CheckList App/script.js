let myTasks = document.querySelectorAll(".check");

myTasks.forEach((task, index) => {
  task.addEventListener("change", function (event) {
    let rangeBar = document.getElementById("range-bar");
    let currentValue = Number(rangeBar.value);
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
  });
});
