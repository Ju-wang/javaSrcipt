const toDoForm = document.querySelector("#todo-form")
const toDoInput = toDoForm.querySelector("input")
const toDoList = document.querySelector("#todo-list")

const TODOS_KEY = "todos"

let toDos = []

function saveToDos() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos))
}

// filter는 object를 유지시키기 위해서는 True를 반환해야 한다
function deleteToDo(event) {
    const li = event.target.parentElement
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id))
    li.remove()
    saveToDos()
}

function paintToDo(newTodo) {
    const li = document.createElement("li")
    li.id = newTodo.id
    const span = document.createElement("span")
    span.innerHTML = newTodo.text
    const button = document.createElement("button")
    button.innerHTML = "❌"
    button.addEventListener("click", deleteToDo)
    li.appendChild(span)
    li.appendChild(button)
    toDoList.appendChild(li)
}

// Json 형식으로 id를 만드는 이유는 html 관점에서는 event.tartget.parentElemet로 삭제가 가능하지만,
// DB 관점으로 보았을 때는 DB 데이터를 삭제하기 위해서는 id 값을 주고 id에 해당하는 값을 삭제해야 DB에서도 삭제되기 때문이다
function handleToDoSubmint(event) {
    event.preventDefault()
    const newTodo = toDoInput.value
    toDoInput.value = ""
    const newTodoObj = {
        text: newTodo,
        id: Date.now()
    }
    toDos.push(newTodoObj)
    paintToDo(newTodoObj)
    saveToDos()
}

toDoForm.addEventListener("submit", handleToDoSubmint)

function sayHello(item) {
    console.log(item)
}

const savedToDos = localStorage.getItem(TODOS_KEY)

if (savedToDos) {
    const parsedToDos = JSON.parse(savedToDos)
    toDos = parsedToDos
    parsedToDos.forEach(paintToDo)
}
