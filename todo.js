const toDoForm = document.querySelector(".js-toDoForm"),
    toDoInput = toDoForm.querySelector("input"),
    toDoList = document.querySelector(".js-toDoList");

const TODOS_LS = 'toDos';

function paintToDo(text){
  const li = document.createElement("li");
  const delBtn = document.createElement("button");
  delBtn.innerText = "❌";
  const span = document.createElement("span");
  span.innerText = text;
  li.appendChild(span);  //span을 li에 넣는다
  li.appendChild(delBtn); //버튼을 li에 넣는다
  toDoList.appendChild(li);
}

function handleSubmit(event){
  event.preventDefault();
  const currentValue = toDoInput.value;
  paintToDo(currentValue);
}

function loadToDos(){
  const toDos = localStorage.getItem(TODOS_LS);
  if(toDos !== null){

  }
}

function init() {
  loadToDos();
  toDoForm.addEventListener("submit", handleSubmit)
}

init();
