
const loginForm = document.querySelector('#login-form');
const loginInput = document.querySelector('#login-form input');
const greeting = document.querySelector('#greeting');

// logout const
const logoutForm = document.querySelector('#logout-form');
const logoutButton = document.querySelector('#logout-button');

const HIDDEN_CLASSNAME = 'hidden'
const USERNAME_KEY = 'username' // 'username' 오타날까봐 변수로 지정
    

function onLogoutButtonClick(){
    localStorage.removeItem(USERNAME_KEY);
    greeting.classList.add(HIDDEN_CLASSNAME);
    logoutForm.classList.add(HIDDEN_CLASSNAME);
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginInput.value = '';
}


function onLoginSubmit(event){
    // 기본 동작 막아주자!!
    event.preventDefault();  
    // hidden이라는 css class name을 더해서 로그인 form을 숨기자!!
    loginForm.classList.add(HIDDEN_CLASSNAME)
    // input받은 유저 이름을 변수로 저장하자!!
    const username = loginInput.value;
    // 새로고침할 때마다 유저id를 기억할 수 있게 JS의 DB에 아이템 이름을 저장하자!!
    localStorage.setItem(USERNAME_KEY, username);
    // input받은 username을 paintgreetings 함수에 넣자!!
    paintGreetings(username)
}

function paintGreetings(username){
    greeting.innerText = `Hello ${username}` 
    greeting.classList.remove(HIDDEN_CLASSNAME)
    // greeting은 보이고 텍스트 출력해주고, 로그인form은 안보임
    // 즉 유저 정보를 기억하고 있는거 (유저 정보 =  savedUsername)   

    logoutForm.classList.remove(HIDDEN_CLASSNAME);
}   


logoutButton.addEventListener('click', onLogoutButtonClick);




// HTML에서 form이랑 h1 모두 hidden으로 설정해놓은 상태
const savedUsername = localStorage.getItem(USERNAME_KEY);
// localstorage에 유저정보가 없다면 Null 반환할거임
if (savedUsername === null){
    loginForm.classList.remove(HIDDEN_CLASSNAME) 
    // 로그인form 다시 보이고, greeting은 안보임
    // 유저 정보가 없으니 onLoginSubmit를 submit함
    loginForm.addEventListener('submit', onLoginSubmit)
} else {
    // null이 아니라 유저 정보 있으면 paintGreetings로 유저정보 받아서 띄운다.
    paintGreetings(savedUsername)
}












// To add the logout functionality, you can follow these steps:

// 1. In your HTML file, add a "Logout" button inside a new div with a specific id (e.g., "logout-container").

// html
// <!-- Add this code after the <h1 id="greeting" class="hidden"></h1> -->
{/* <div id="logout-container" class="hidden">
    <button id="logout-button">Logout</button>
</div> */}


// 2. In your JavaScript file (greeting.js), add an event listener for the "Logout" button.

// javascript
// Add this code at the beginning of the file
// const logoutContainer = document.querySelector('#logout-container');
// const logoutButton = document.querySelector('#logout-button');

// Add this function to handle the logout process
// function onLogoutButtonClick() {
//     localStorage.removeItem(USERNAME_KEY);
//     greeting.classList.add(HIDDEN_CLASSNAME);
//     logoutContainer.classList.add(HIDDEN_CLASSNAME);
//     loginForm.classList.remove(HIDDEN_CLASSNAME);
//     loginInput.value = '';
// }

// Add this event listener below the paintGreetings function
// logoutButton.addEventListener('click', onLogoutButtonClick);



// 3.Modify the paintGreetings function to show the logout button when greeting the user.

// javascript
// function paintGreetings(username) {
//     greeting.innerText = `Hello ${username}`;
//     greeting.classList.remove(HIDDEN_CLASSNAME);
//     logoutContainer.classList.remove(HIDDEN_CLASSNAME); // Add this line
// }

// Now when the user logs in, they will see a "Logout" button next to the greeting, and clicking on it will log them out and bring up the login form again.