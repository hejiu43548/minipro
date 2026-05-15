function addTodo() {
    const todoInput = document.getElementById("todo-input");
    const input = todoInput.value.trim();
    
    fetch("/api/todo", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ todo: input })
    })
    .then(res => res.json())
    .then(data => {
        console.log("Response:", data);
    })
    .then(() => {
        todoInput.value = "";
        loadTodos();
    });
}

function loadTodos() {
    fetch("/api/todo")
    .then(res => res.json())
    .then(data =>{
        renderTodos(data);
    })
}

function renderTodos(data) {
    const todoList = document.getElementById("todo-list");
    todoList.innerHTML = "";
    
    data.todos.forEach(todo => {
        const li = document.createElement("li");
        li.textContent = todo;
        todoList.appendChild(li);
    });
}

loadTodos();