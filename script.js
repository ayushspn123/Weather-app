const apikey="9738126f79522958fc1b46109ca99d73";
const apiurl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=ghazibad";
const searchbox=document.querySelector(".search input");
const searchbtn=document.querySelector(".search button");
const weathericon=document.querySelector(".wheather-icon");
async function check_w(city){
    const response=await fetch("https://api.openweathermap.org/data/2.5/weather?q="+city+"&appid=9738126f79522958fc1b46109ca99d73&units=metric");
    var data=await response.json();
    console.log(data);
    document.querySelector(".city").innerHTML=data.name;
    document.querySelector(".humidity").innerHTML=data.main.humidity +"%";
    document.querySelector(".temp").innerHTML=Math.round(data.main.temp )+"°C";
    document.querySelector(".wind").innerHTML=data.wind.speed +"Km/h";
    if(data.weather[0].main=="Clouds"){
             weathericon.src="images/clouds.png ";
    }

    else if(data.weather[0].main=="Clear")
    {
        weathericon.src="clear/clear.png ";
    } 
    else if(data.weather[0].main=="Rain")
    {
        weathericon.src="clear/rain.png ";
    } 
    else if(data.weather[0].main=="Drizzle")
    {
        weathericon.src="clear/Drizzle.png ";
    } 

     else if(data.weather[0].main=="Mist")
    {
        weathericon.src="clear/mist.png ";
    } 
    }

searchbtn.addEventListener("click",()=>
{
    check_w(searchbox.value); 
})

   
