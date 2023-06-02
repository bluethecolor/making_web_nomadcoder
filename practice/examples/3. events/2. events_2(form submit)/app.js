// events_1과 다르게 click이 아니라 submit를 중점으로 간다!!
// submit는 엔터를 누르거나 버튼을 클릭할 때 발생한다는 사실을 기억하자!

// 브라우저는 클릭(엔터)시 새로고침이 자동으로 일어나는건 form submit의 기본 동작임이 설정되어있음
// 이제 우리가 할 일은 이 기본 동작(새로고침)이 발생하지 않도록 하는 것

const loginForm = document.querySelector('#login-form');
const loginInput = document.querySelector('#login-form input');

function onLoginSubmit(event){

    event.preventDefault();  
    // .preventDefault() ---> 어떤 event의 기본 행동이든 발생되지 않게 막는다.
    // 즉 form submit시의 자동 새로고침을 막아주는 것!!!
    console.log(event);
}


//우리는 이렇게 addEventListener시 ()안의 함수를 '함수명()'로 쓰지 않음.
loginForm.addEventListener('submit', onLoginSubmit)
// 함수()는 함수가 '즉시' 실행된다는 뜻인데 우린 바로 실행되는걸 원하지 않음
// !!!!!!submit event가 발생하면 브라우저가 알아서 그 함수를 실행시켜줄거임!!!!!!!













