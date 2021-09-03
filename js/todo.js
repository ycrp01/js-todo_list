//localStorage can save only text(string). cant save array
//JSON.stringify() : function that take anything whatever I want into string even JavaScript object or array.
//JSON.stringify() : 값을 string으로 저장하고 싶을 때 자주 사용함. array -> stirng
////JSON.parse() : stirng -> array

const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("#todo-form input"); //document.querySelector("#todo-form input"); 와 같음
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";

let toDos = [];

function saveToDos() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos)); //localStorage에는 stirng만 가능한데 array 모양으로 넣고싶어서 이렇게 작성함.
}

function deleteToDo(event) {
    const li = event.target.parentElement;
    li.remove();
    toDos = toDos.filter((toDos) => toDos.id !== parseInt(li.id));
    saveToDos();
}

function paintToDo(newTodo) {
    const li = document.createElement("li");
    li.id = newTodo.id;
    const span = document.createElement("span");
    span.innerText = newTodo.text;
    const button = document.createElement("button");
    button.innerText = "❌";
    button.addEventListener("click", deleteToDo);
    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li); //append는 뒤에 와야한다
}

function handleToDoSubmit(event) {
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value = "";
    const newTodoObj = {
        text: newTodo,
        id: Date.now(),
    };
    toDos.push(newTodoObj);
    paintToDo(newTodoObj);
    saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if(savedToDos !== null) {
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    parsedToDos.forEach(paintToDo);
    // (item) => console.log("this is the turn of ", item); //function 간편하게 쓰는 법 : arrow function
    // function sayHello(item) {
    //     console.log("this is the turn of ", item);
    // }
} 