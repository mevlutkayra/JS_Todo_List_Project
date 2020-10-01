
const todoList = [];

const todoListUlElement = document.querySelector("#myUL");

// console.log(todoListUlElement);

document.querySelector("#todo_button").addEventListener("click", addTodo);

function addTodo() {
    const todoText = document.querySelector("#myInput");

    if (todoText.value != "") {
        const toDoItem = {
            todoId: todoList.length,
            toDo: todoText.value,
            isDone: false
        }
        todoList.push(toDoItem);
        displayTodo()
        console.log(toDoItem);
    }
 
    todoText.focus();
    todoText.value = "";
}

function doneTodo(_todoId) {
    console.log(_todoId)
    const selectedItem = todoList.findIndex((item) => item.todoId == _todoId)
    console.log(selectedItem)
    if (todoList[selectedItem].isDone == true)
        todoList[selectedItem].isDone = false;
    else todoList[selectedItem].isDone = true;
    displayTodo()
}

function displayTodo() {

    todoListUlElement.innerHTML = "";
    todoList.forEach(todoItem => {
        const todoElement = document.createElement("li")
        todoElement.innerText = todoItem.toDo
        todoElement.setAttribute("data-id", todoItem.todoId);
        // todoElement.setAttribute("id", todoItem.todoId);
        todoElement.classList.add("lilo");
        // todoElement.setAttribute("class", "checked");
        //console.log(todo)
        if (todoItem.isDone)
            todoElement.classList.add("checked");

        todoElement.addEventListener("click", function (e) {
            const selectedID = e.target.getAttribute("data-id")
            doneTodo(selectedID)
        })

        todoListUlElement.appendChild(todoElement);
    }
    )
}

 





