const toDoForm = document.getElementById('todo-form');
const toDoList = document.getElementById('todo-list');
const toDoInput = toDoForm.querySelector('input');
// const toDoInput = document.querySelector('#todo-form input');


const TODOS_KEY = 'todos'
let toDos = []; // todos를 저장할 array
// toDos는 빈 array로 시작된다. 그렇기에
// 새로고침하면 초기화 되기에 업데이트 되도록 let을 써준다!!!

// 새로고침해도 ToDos가 날아가지 않게 하자
function saveToDos(){
    // JSON.stringify()로 toDos array안의 요소들을 text로 만들어줌
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}   

// 버튼을 누르면 항목이 제거되게 하자
function delectToDo(event){
    const li = event.target.parentElement;
    // X button을 눌러 지워도 새로고침하면 다시 복구되는걸 막아보자!
    // toDos DB에서 X buttton을 눌러 지워진 toDo를 지우는 것이다!
    // 클릭했던 li의 id를 갖고 있는 toDo를 지우자(toDo의 id가 li의 id와 다른걸 남기자)
    // li.id : string, toDo.id : number 이기에 parseInt로 li.id를 숫자로 변환!
    toDos = toDos.filter(toDo => toDo.id !== parseInt(li.id));
    // saveToDos함수를 한번 더 부른다!!
    saveToDos();
    li.remove();
}

function paintTodo(newTodo){ // paintTodo는 이제 text가 아닌 object를 받음!!
    const li = document.createElement('li');
    li.id = newTodo.id;
    const span = document.createElement('span');
    span.innerText = newTodo.text; // object를 받기에 .text 써서 안의 text를 뽑아내야 함!
    const button = document.createElement('button');
    button.innerText = 'X'
    button.addEventListener('click', delectToDo);

    // li에 span, button을 삽입
    li.appendChild(span);  
    li.appendChild(button);
    // todo-list ul에 li 삽입
    toDoList.appendChild(li);
} 

function handleToDoSubmit(event){
    event.preventDefault();
    // toDoInput.value 가 비워지기 전에 변수로 저장
    const newTodo = toDoInput.value;
    // toDoInput.value 을 비우기
    toDoInput.value = '';

    // text가 아닌 object를 array에 push할 것이다!! 
    // let으로 toDos는 복원되도 localstage는 업데이트되지 않는 것을 해결하기 위해
    const newTodoObj = {
        text:newTodo,
        id: Date.now() // 1000ms단위 시간 -> 랜덤으로 활용
        // id로 각각의 li item을 구별하고 싶음
    }
    toDos.push(newTodoObj); // 이제 todos에는 text가 아닌 object가 저장된다!!!
    paintTodo(newTodoObj); // paintTodo에도 text가 아닌 object를 주자!!
    saveToDos();
}

toDoForm.addEventListener('submit', handleToDoSubmit);


function sayHello(item){
    console.log('this is the turn of', item)
}


const savedToDos = localStorage.getItem(TODOS_KEY);



// 새로고침해도 기존에 paint되있던 항목들을 복원하고 다시 화면에 paint해주기!!
if (savedToDos != null){
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos; // 전에 있던 toDos들을 복원해주기!!

    // foreEach : array의 각각의 item에 대해 function을 실행시켜줌
    parsedToDos.forEach(paintTodo);
    // parsedToDos.forEach((item) => console.log('this is the turn of', item));
    };
