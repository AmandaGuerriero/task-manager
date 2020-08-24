var formEl = document.querySelector("#task-form");
var tasksToDoEl = document.querySelector("#tasks-to-do");

var createTaskHandler = function (event){
    event.preventDefault();
    
    var taskNameInput = document.querySelector("input[name='task-name']").value;
    console.dir(taskNameInput);
    var taskTypeInput = document.querySelector("select[name='task-type']").value;
    console.dir(taskTypeInput)
    // Create list item
    var listItemEl = document.createElement("li");
    listItemEl.className = "task-item";

    // Create div to hold task info and ad to list item
    var taskInfoEl = document.createElement("div");
    taskInfoEl.className = "task-info";
    taskInfoEl.innerHTML = "<h3 class='task-name'>" + taskNameInput + "</h3><span class='task-type'>" + taskTypeInput + "</span>";

    listItemEl.appendChild(taskInfoEl);

    // Add List Item
    tasksToDoEl.appendChild(listItemEl);
}

formEl.addEventListener("submit", createTaskHandler);


