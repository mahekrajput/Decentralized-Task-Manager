// Simulate blockchain in JS
let tasks = [];
let accountAddress = "0x" + Math.floor(Math.random()*1e16).toString(16);

function addTask(content) {
    let timestamp = Math.floor(Date.now() / 1000);
    let task = {
        id: tasks.length,
        content: content,
        createdBy: accountAddress,
        timestamp: timestamp
    };
    tasks.push(task);
    console.log("🧾 Task Added:", content);
    displayTasks();
}

function displayTasks() {
    const list = document.getElementById("task-list");
    list.innerHTML = "";
    tasks.forEach(task => {
        let li = document.createElement("li");
        li.textContent = `#${task.id} | ${task.content} | By: ${task.createdBy} | ${task.timestamp}`;
        list.appendChild(li);
    });
}

// Connect UI
document.getElementById("add-task-btn").onclick = () => {
    const input = document.getElementById("task-input");
    if(input.value) addTask(input.value);
    input.value = "";
};
