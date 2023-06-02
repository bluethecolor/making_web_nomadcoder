const h1 = document.querySelector('div.hello:first-child h1');

console.dir(h1)

// document에서 body,head,title 은 중요해서 언제든
// ex) document.body 로 가져올수있지만
// div나 h1 등 element 들은 querySelector getElementById등으로 찾아야한다.
// ex) document.querySelector(“h1”);


function handleClick(){
    h1.style.color = 'red';
}
function handleMouseENter(){
    h1.innerText = 'Mouse is here!'
}
function handleMouseLeave(){
    h1.innerText = 'Mouse is gone!'
}
function handWindowResize(){
    document.body.style.backgroundColor = 'tomato';
}
function handleWindowCopy(){
    alert('copier')
}
function handleWindowOffline(){
    alert('SOS No Wifi')
}
function handleWindowOnline(){
    alert("WIFI is connected!")
}

h1.addEventListener('click', handleClick)
// h1.onclick = handleClick;
h1.addEventListener('mouseenter',handleMouseENter)
// h1.onmouseenter = handleMouseENter;
h1.addEventListener('mouseleave', handleMouseLeave)

// addEventListener를 선호하는 이유: 
// h1.removeEventListener로 지울 수 있어서

// window(기본제공)
window.addEventListener('resize', handWindowResize)
window.addEventListener('copy',handleWindowCopy)
// wifi
window.addEventListener('offline', handleWindowOffline)
window.addEventListener('online', handleWindowOnline)



