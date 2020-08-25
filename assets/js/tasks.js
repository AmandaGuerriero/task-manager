var formEl = document.querySelector("#task-form");
var tasksToDoEl = document.querySelector("#tasks-to-do");

var taskFormHandler = function (event){
    event.preventDefault();
    var taskNameInput = document.querySelector("input[name='task-name']").value;
    console.dir(taskNameInput);
    var taskTypeInput = document.querySelector("select[name='task-type']").value;
    console.dir(taskTypeInput)

    if (!taskNameInput || !taskTypeInput) {
        alert("You need to fill out the task form!")
        return false;
    }
    else {
        // Package Data as an object
        var taskDataObject = {
            name: taskNameInput,
            type: taskTypeInput
        };
        createTaskEl(taskDataObject);
    }
    formEl.reset()
}

var createTaskEl = function(taskDataObject) {
    // Create list item
    var listItemEl = document.createElement("li");
    listItemEl.className = "task-item";

    // Create div to hold task info and ad to list item
    var taskInfoEl = document.createElement("div");
    taskInfoEl.className = "task-info";
    taskInfoEl.innerHTML = "<h3 class='task-name'>" + taskDataObject.name + "</h3><span class='task-type'>" + taskDataObject.type + "</span>";

    listItemEl.appendChild(taskInfoEl);

    // Add List Item
    tasksToDoEl.appendChild(listItemEl);
}

formEl.addEventListener("submit", taskFormHandler);


