

document.getElementById("check").addEventListener("change", function(event) {
      event.target.checked
        ? ((document.getElementById("task-name").style.textDecoration =
            "line-through"),
          (document.getElementById("task-name").style.color = "pink"),
          (document.getElementById("range-bar").value = 1))
        : ((document.getElementById("task-name").style.textDecoration = "none"),
          (document.getElementById("task-name").style.color = "black"),
          (document.getElementById("range-bar").value = 0));
}
);
