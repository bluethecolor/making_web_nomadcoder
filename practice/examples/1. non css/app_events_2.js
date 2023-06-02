const h1 = document.querySelector('div.hello:first-child h1');
 

// click하면 글씨색깔 blue <-> tomato 반복해서 바뀜
function handleTitleClick(){
    const currentColor = h1.style.color
    let newColor

    if(currentColor === 'blue'){
        newColor = 'tomato'
    } else {
        newColor = 'blue'
    }
    h1.style.color = newColor;
}
 
h1.addEventListener('click', handleTitleClick) 



// step 1: element를 찾아라 (document)
// step 2: event를 listen해라 (addEventListener)
// step 3: 그 event에 반응해라 (function)