const clock = document.querySelector('h2#clock')

// interval : '매번' 일어나야 하는 무언가 ex)매 2초
// setInterval(함수, 5000); // 5초마다 함수가 1번씩 계속 실행됨
// setTimeout(함수, 5000); // 5초 뒤 함수가 1번 실행됨

function getClock(){
    const date = new Date();
    // .padStart(길이, 넣을 값) : 1 -> 01, string만 가능
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');
    clock.innerText = `${hours} : ${minutes} : ${seconds}`;
}

getClock(); // 새로고침시 시간이 바로 나타나게 바로 함수를 실행해줌
setInterval(getClock, 1000);
  

