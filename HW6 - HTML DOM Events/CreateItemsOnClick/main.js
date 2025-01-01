//Get task input
const addTask = document.getElementById("add-task");

//Get add button
const addButton = document.getElementById("add-button");

//Get task list
let taskList = document.getElementById("task-list");

//const newTask = document.createElement("li"); // всичко отива на кино, ако тук го дефинираме

addButton.addEventListener("click", function () {
    console.log('in function');

    // Create a "li" element:
    const newTask = document.createElement("li");

    // Create a text node:
    let task = document.createTextNode(addTask.value);
    //console.log(task);

    // Append text node to "li" element:
    newTask.appendChild(task);
    
    // Insert before existing child:
    if (taskList.firstChild) {
        taskList.insertBefore(newTask, taskList.firstChild);
    } else {
        // If the list is empty, just append the new task
        taskList.appendChild(newTask);
    }
});

