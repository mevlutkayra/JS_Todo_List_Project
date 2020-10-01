
const todoList = [];

class Todo {

    constructor(listElementParam) {
        this.todolistElement=listElementParam;
    }

    add(todoItem){
        const toDoItem = {
            todoId: todoList.length,
            toDo: todoItem.value,
            isDone: false
        }
        todoList.push(toDoItem);
        todoItem.focus();
        todoItem.value = "";
        this.displayTodo()
    }

    done(_todoId){
        const selectedItem = todoList.findIndex((item) => item.todoId == _todoId)
        console.log(selectedItem)
        // if (todoList[selectedItem].isDone == true)
        //     todoList[selectedItem].isDone = false;
        // else todoList[selectedItem].isDone = true;
        todoList[selectedItem].isDone == true ? todoList[selectedItem].isDone = false : todoList[selectedItem].isDone = true

        this.displayTodo()
    }

    displayTodo(){
        this.todolistElement.innerHTML = "";
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
                myTodoList.done(selectedID)
            })
            
    
            this.todolistElement.appendChild(todoElement);
             
        }
        )

    }
  
}

const listSection=document.querySelector("#myUL");
const myTodoList= new  Todo(listSection);
document.querySelector("#todo_button").addEventListener("click", function(){
    const todoText = document.querySelector("#myInput");
    myTodoList.add(todoText);
});