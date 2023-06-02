const APT_KEY = 'efb683f43f97ab10431d802fbf679bc6'

function onGeoOk(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${APT_KEY}&units=metric`;
    
    // fetch는 promise고, promise는 일정시간 뒤 작동됨.
    // 그렇기에 then을 사용           ----> 자세한 내용은 wetube 강의에서
    fetch(url)
        .then(response => (response).json()
        .then((data) => {
                    const weather = document.querySelector('#weather span:first-child')
                    const city = document.querySelector('#weather span:nth-child(2)')
                    const temp = document.querySelector("#weather span:last-child");
                    city.innerText = data.name;
                    // weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
                    weather.innerText = `Weather: ${data.weather[0].main} \n`;
                    city.innerText = `Place: ${data.name}\n`;
                    temp.innerText = `Temp: ${Math.floor(data.main.temp)}˚C`;
                }));
} 

function onGeoError(){
    alert("Can't find you. No weather for you.")
}
 
navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);