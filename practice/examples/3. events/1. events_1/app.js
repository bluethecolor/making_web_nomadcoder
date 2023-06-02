const loginForm = document.getElementById('login-form');
// const loginForm = document.querySelector('#login-form')
// querySelector()는 classname, tagname 모두 검색해주기에 대상이 id인지 명확히 해줘야 함
// getElementById는 그럴 필요 없기에 더 선호됨. JS가 내가 id 찾는걸 이미 알고 있음

// 이제 HTML의 input과 button을 끌어오자
 
// 첫번째
// document가 아닌 loginForm에서 바로 찾는 방법 (loginForm의 login-form은 HTML element이기에)
const loginInput = loginForm.querySelector('input');
const loginButton = loginForm.querySelector('button');
 
// 두번째 document로 찾는법 (더 짧게 가능)
// const loginInput = document.querySelector('#login-form input');
// const loginButton = document.querySelector('#login-form button');


function onLoginBtnClick(){
    const username = loginInput.value;
    console.log(username);


    // username 비었을 때 경고창
    // if(username === ''){
    //     alert('Please write your name')
    // // username 15글자 초과시 경고창
    // } else if(username.length > 15){
    //     alert('Your name is too long')
    // } 
}


loginButton.addEventListener('click', onLoginBtnClick );









