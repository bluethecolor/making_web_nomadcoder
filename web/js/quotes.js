const quotes = [
{
    quote: "But, I'm still hungry.",
    author: "-Guus Hiddink-"
},
{
    quote: "Blind spots can't stop any goalkeeper. However, I can prevent it.",
    author: "-Lev Yashin-"
},
{
    quote: "I'd rather fall than kneel.", 
    author: "-JS Park-"
},
{
    quote: "Join if you can't win.",
    author: "-Michael Owen-"
},
{
    quote: "The little one in me whispered to move to Manchester United.",
    author: "-Robin van Persie-"
},
{
    quote: "We go norwich.",
    author: "-Steven Gerrard-"
},
{
    quote: "Liverpool is not a big club.",
    author: "-Karim Benzema-"
},
{
    quote: "Even if everything falls apart, we have football.",
    author: "-Gabriel Omar Batistuta-"
},
{
    quote: "Gentleman does not leave the lady when she is in need.",
    author: "-Del Piero-"
},
{
    quote: "The ball is roundm the game lasts ninety minutes, and everything else is just theory",
    author: "-Sepp Herberger-"
}
];

const quote = document.querySelector('#quote span:first-child');
const author = document.querySelector('#quote span:last-child');

// quotes 열 중 랜덤으로 하나 가져오기
// Math로 계산한 값은 전부 숫자 // round:반올림, ceil:올림, floor:내림


// 명언 자동으로 바뀌게 하기!!
function changequote(){
    const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];
    quote.innerText = todaysQuote.quote;
    author.innerText = todaysQuote.author; 
}

changequote()
setInterval(changequote, 6000)



