const h1 = document.querySelector('div.hello:first-child h1');
 
// CSS 이용하여 주황색 / 파란색 클릭시 바뀌게
function handleTitleClick(){
    
    // toggle function은 classList에 clicked class가 이미 있는지 확인,
    // if clicked가 있다면, toggle이 clicked를 제거해줌
    // else clicked가 없다면, toggle에 cliked를 추가해줌
    h1.classList.toggle('clicked');
    // 이 한줄로 const로 className 정의하고, if문 써서 add, remove 사용한걸 전부 다 대체함!!!
}
 
h1.addEventListener('click', handleTitleClick) 
 

// step 1: element를 찾아라 (document)
// step 2: event를 listen해라 (addEventListener)
// step 3: 그 event에 반응해라 (function)