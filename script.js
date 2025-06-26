function addTask(){
    let input = document.getElementById("taskInput");
    let taskText = input.value.trim();
    if(taskText === "") return;

    let ul = document.getElementById("taskList");
    let li = document.createElement("li");
    li.innerHTML = `
        <button class="check-btn" onclick="toggleCompleted(this)">
            <i class="ri-checkbox-blank-line"></i>
        </button>
        <span>${taskText}</span>
        <button class="delete-btn" onclick="deleteTask(this)">
            <i class="ri-delete-bin-line"></i>
        </button>
    `;
    ul.appendChild(li);
    input.value = "";
}

function toggleCompleted(button) {
    let taskText = button.nextElementSibling;
    let icon = button.querySelector("i");

    taskText.classList.toggle("completed");

    if (taskText.classList.contains("completed")) {
        icon.classList.replace("ri-checkbox-blank-line", "ri-checkbox-fill");
    } else {
        icon.classList.replace("ri-checkbox-fill", "ri-checkbox-blank-line");
    }
}

function deleteTask(button){
    button.parentElement.remove();
}
