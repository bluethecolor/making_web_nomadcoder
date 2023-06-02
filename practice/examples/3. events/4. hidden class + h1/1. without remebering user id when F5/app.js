
const loginForm = document.querySelector('#login-form');
const loginInput = document.querySelector('#login-form input');
const greeting = document.querySelector('#greeting');

const HIDDEN_CLASSNAME = 'hidden'
    
function onLoginSubmit(event){

    // 기본 동작 막아주자!!
    event.preventDefault();  

    // hidden이라는 css class name을 더해서 로그인 form을 숨기자!!
    loginForm.classList.add(HIDDEN_CLASSNAME)

    // 유저 이름을 변수로 저장하고, 그 이름은 h1 안에 넣어주자!! 
    const username = loginInput.value;

    // 그러나 우린 아직 유저id를 전혀 기억 못한다!!
    // 새로고침할 때마다 유저id를 기억할 수 있게 JS의 DB에 아이템 이름을 저장하자!!
    localStorage.setItem('username', username);

    // h1 안에다 greeting에 있는 텍스트를 추가하자!!
    greeting.innerText = `Hello ${username}`
    // greeting.innerText = 'Hello ' + username; 

    // h1에서 hidden class를 빼자!!
    greeting.classList.remove(HIDDEN_CLASSNAME)

}

// 그러나 우린 아직 유저id를 전혀 기억 못한다!!
// 새로고침할 때마다 새로 로그인 해줘야 한다!!
// 이에 대한 해결은 다음 파트에!!! (아이디 기억하기!)

loginForm.addEventListener('submit', onLoginSubmit)














