const toDoForm = document.querySelector(".js-toDoForm"),
    toDoInput = toDoForm.querySelector("input"),
    toDoList = document.querySelector(".js-toDoList");

const TODOS_LS = 'toDos';

function filterFn(toDo){

}

let toDos = [];

function deleteToDo(event){
   //console.log(event.target.parentNode); //console.dir로 부모 알아내기
   const btn = event.target;

   const li = btn.parentNode;
   toDoList.removeChild(li);
   const cleanToDos = toDos.filter(function(toDo){
     return toDo.id !== parseInt(li.id);
   });
   toDos = cleanToDos
   saveToDos();
}

function saveToDos(){
    localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
}//JSON.stringify : localStorage는 js의 데이터를 저장 못해서 stringdmfh qusrud

function paintToDo(text){
  const li = document.createElement("li");
  const delBtn = document.createElement("button");
  delBtn.classList.add('btn');
  const span = document.createElement("span");
  const newId = toDos.length + 1;
  delBtn.innerText = "❌";
  delBtn.addEventListener("click", deleteToDo);
  span.innerText = text;
  li.appendChild(delBtn); //1.버튼을 li에 넣는다
  li.appendChild(span);  // 2.span을 li에 넣는다 (1,2위치 영향있음)
  li.id = newId;
  toDoList.appendChild(li);
  const toDoObj ={
    text: text,
    id: newId
  };
  toDos.push(toDoObj);
  saveToDos();
}

function handleSubmit(event){
  event.preventDefault(); //값 입력시 새로고침 방지
  const currentValue = toDoInput.value;
  paintToDo(currentValue);
  toDoInput.value=""; //이부분이 없으면 what a to do가 다시 안뜸
}

function loadToDos(){
  const loadedToDos = localStorage.getItem(TODOS_LS);
  if(loadedToDos !== null){
    const parsedToDos = JSON.parse(loadedToDos);
    parsedToDos.forEach(function(toDo){
      paintToDo(toDo.text);
    });
  }
}

function init() {
  loadToDos();
  toDoForm.addEventListener("submit", handleSubmit)
}

init();
