function addTask() {
    const input = document.getElementById('task-input');
    const taskText = input.value.trim();

    if (taskText) {
        const tasksList = document.getElementById('tasks-list');
        const li = document.createElement('li');

        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.className = 'checkbox';
        checkbox.onclick = function () {
            if (this.checked) {
                li.classList.add('completed');
            } else {
                li.classList.remove('completed');
            }
        };

        const text = document.createElement('span');
        text.textContent = taskText;

        li.appendChild(checkbox);
        li.appendChild(text);
        tasksList.appendChild(li);
        input.value = '';
    }
}

function clearCompleted() {
    const tasksList = document.getElementById('tasks-list');
    const completedTasks = tasksList.querySelectorAll('.completed');

    completedTasks.forEach(task => {
        tasksList.removeChild(task);
    });
}

document.getElementById('task-input').addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
        addTask();
    }
});
