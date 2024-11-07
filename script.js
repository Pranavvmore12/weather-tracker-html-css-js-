const apikey="eca0d944cf9491824200fd25606c16e1";
const apiurl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=" ;

const searchbox=document.querySelector('#city');
const searchbtn=document.querySelector('#citybutton');

async function checkweather(city){
const response= await fetch(apiurl+city+ `&appid=${apikey}`);
var data= await response.json();


document.querySelector('.finalcity').innerHTML=data.name;
document.querySelector('.celcius').innerHTML=data.main.temp+'°c';
document.querySelector('.mainspeed').innerHTML=data.wind.speed+'Km/h';
document.querySelector('.mainhumidity').innerHTML=data.main.humidity+'% ';
console.log(data)

if (data.weather[0].main === 'Clouds') {
    document.querySelector('.icon1').src = 'clouds.png';
    document.querySelector('.main').style.backgroundImage = "url('cloudycloudy.jpg')";
} 
else if (data.weather[0].main === 'Clear') {
    document.querySelector('.icon1').src = 'sunny.png';
    document.querySelector('.main').style.backgroundImage = "url('clear clear.jpg')";
}
else if (data.weather[0].main === 'Rain') {
    document.querySelector('.icon1').src = 'rainy.png';
    document.querySelector('.main').style.backgroundImage = "url('rainyrainy.jpg')";
}
else if (data.weather[0].main === 'Drizzle') {
    document.querySelector('.icon1').src = 'cloudy (2).png';
    document.querySelector('.main').style.backgroundImage = "url('drizzlydrizzly.jpg')";
}
else if (data.weather[0].main === 'Mist') {
    document.querySelector('.icon1').src = 'fog.png';
    document.querySelector('.main').style.backgroundImage = "url('mistymisty.jpg')";
}

}
searchbtn.addEventListener('click',()=>{
    checkweather(searchbox.value);
})
