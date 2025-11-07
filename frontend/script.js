const addBtn = document.getElementById("addBtn");
const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

let tasks = []; // simulated blockchain storage

addBtn.addEventListener("click", () => {
  const content = taskInput.value.trim();
  if (!content) return alert("Enter a task first!");

  // Simulate adding to blockchain
  const newTask = {
    id: tasks.length,
    content,
    createdBy: "0xABC123... (simulated address)",
    timestamp: new Date().toLocaleString(),
  };
  tasks.push(newTask);
  renderTasks();
  taskInput.value = "";
});

function renderTasks() {
  taskList.innerHTML = "";
  tasks.forEach((t) => {
    const div = document.createElement("div");
    div.className = "task";
    div.innerHTML = `
      <strong>🧾 ${t.content}</strong><br>
      <small>ID: ${t.id} | Added by: ${t.createdBy} | ${t.timestamp}</small>
    `;
    taskList.appendChild(div);
  });
}
