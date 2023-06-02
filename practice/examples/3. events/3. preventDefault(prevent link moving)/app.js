// 링크로 이동되는 기본 동작을 막아보자

const loginForm = document.querySelector('#login-form');
const loginInput = document.querySelector('#login-form input');

const link = document.querySelector('a') // 'a'는 HTML에서 가져옴
    
function onLoginSubmit(event){

    event.preventDefault();  
    console.log(loginInput.value);
}

function handleLinkClick(event){
    event.preventDefault();
    // 이렇게 .preventDefault()로 막아주면 링크로 이동되는 동작이 막아짐.
    // 실제로 console에서 세부정보를 보면 'defaultPrevented: True'로 되어있다.

    console.log(event);
    // alert('clicked'); // alert는 창을 띄우므로서 모든 다른 동작을 막아준다!!
}


loginForm.addEventListener('submit', onLoginSubmit)
link.addEventListener('click', handleLinkClick)

// 가장 중요한건 addEventListener 안에 있는 함수는 직접 실행하지 않는다는 것!!!!
// 함수 실행은 내가 아니라 브라우저가 해주는 것이다!!


// JS는 함수를 실행시키는 동시에 그 함수에 첫 번째 인자로 object를 넣어줄거다!!
// 그이고 이 object에는 방금 일어난 event에 대한 여러 정보가 담겨있다.
// handleLinkClick({'information about the event that just happend'})










