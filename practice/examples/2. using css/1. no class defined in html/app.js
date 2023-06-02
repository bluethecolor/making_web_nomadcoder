const h1 = document.querySelector('div.hello:first-child h1');
 
// CSS 이용하여 주황색 / 파란색 클릭시 바뀌게
function handleTitleClick(){
    const activeClass = 'suzume' //오타로 인한 에러 발생하도록 설정해주는거. 
    if(h1.className===activeClass){ // className==???에 오타가 생기면 에러 반환해줌
        h1.className = '';
    } else {
        h1.className = activeClass;
    }
}





h1.addEventListener('click', handleTitleClick) 


// step 1: element를 찾아라 (document)
// step 2: event를 listen해라 (addEventListener)
// step 3: 그 event에 반응해라 (function)