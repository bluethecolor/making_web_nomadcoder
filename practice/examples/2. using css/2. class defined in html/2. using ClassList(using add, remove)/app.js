const h1 = document.querySelector('div.hello:first-child h1');
 
// CSS 이용하여 주황색 / 파란색 클릭시 바뀌게
function handleTitleClick(){
    //오타로 인한 에러 발생하도록 설정해주는거
    const clickedClass = 'clicked' 
        // 우리는 Sexy font라는 className을 바꾸고 싶지 않고, Clicked라는 class만 변경하고 싶음

        // h1.className 대신에 h1.classList를 써보자

        // ClassList는 우리의 class들의 목록으로 작업할 수 있게 해줌
        // 반면, ClassName은 모든 것을 바꿔버림. 이전 class들 상관 없이

    // classList에 contains를 써보자 -> 우리가 명시한 class가 HTML elements의 class에 포함되있는지 말해줌
    if(h1.classList.contains(clickedClass)){
        // clickedClass가 classList에 포함되있다면, clickedClass를 제거
        h1.classList.remove(clickedClass); 
    } else {
        // clickedClass가 classList에 포함되있지 않다면, clickedClass를 추가
        h1.classList.add(clickedClass) // 우린 이걸 교체하고 싶은게 아님
    }
}
            //// 이렇게 하면 우리는 clickedClass를 제거하지만, html의 sexy font는 그대로 남아있다!!!!

            
h1.addEventListener('click', handleTitleClick) 


// step 1: element를 찾아라 (document)
// step 2: event를 listen해라 (addEventListener)
// step 3: 그 event에 반응해라 (function)