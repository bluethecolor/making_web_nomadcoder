const h1 = document.querySelector('div.hello:first-child h1');
 
// CSS 이용하여 주황색 / 파란색 클릭시 바뀌게
function handleTitleClick(){
    //오타로 인한 에러 발생하도록 설정해주는거
    const clickedClass = 'clicked sexy-font' 
                //sexy-font가 유지되도록 띄어쓰기 해주고 추가
                // 그러나 위의 방법은 ClassName과 CSS까지 수정해야 하므로 좋은 생각은 X
                // 또 ClassName은 ''값과 Clicked로 뒤바뀌게 되면 본래 ClassName인 Sexy font를 잃게 됨
                // 우리는 Sexy font라는 className을 바꾸고 싶지 않고, Clicked라는 class만 변경하고 싶음
    if(h1.className=== clickedClass){
        h1.className = '';
    } else {
        h1.className = clickedClass;
    }
}

h1.addEventListener('click', handleTitleClick) 


// step 1: element를 찾아라 (document)
// step 2: event를 listen해라 (addEventListener)
// step 3: 그 event에 반응해라 (function)