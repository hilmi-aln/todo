const addButton = document.getElementById("add-task");
const input = document.getElementById("task-input");
const task = document.getElementsByName("task1");
const tasks = document.getElementById("tasks");
const deleteButton = document.getElementById("delete");




addButton.addEventListener("click", () => {
  tasks.innerHTML += `<div>
  <input type="checkbox" name="task1" id="task1" />
  <label for="task1">${input.value}</label>
</div>`;
});

deleteButton.addEventListener("click", () => {
    for (let i = 0; i < task.length; i++) {
        if (task[i].checked) {
        task[i].parentNode.remove();
        }
    }
});
