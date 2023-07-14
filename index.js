const apiKey = "1618f7c0b86249f81fae26076565cd90";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");
const weatherDetails = document.querySelector('.weather');

async function checkweather(city)
{
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

    if(response.status == 404){
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";

    }
    else
    { 
        var data = await response.json();
        
        console.log(data);
        
        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".temperature").innerHTML = Math.round(data.main.temp) + "°C";
        document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";
        document.querySelector(".description").innerHTML = data.weather[0].description; 
        
        if(data.weather[0].main == "Thunderstorm")
        {
          weatherIcon.src  = "https://openweathermap.org/img/wn/11d@4x.png";
        }
        else if(data.weather[0].main == "Drizzle")
        {
            weatherIcon.src  = "https://openweathermap.org/img/wn/09d@4x.png";
        }
        else if(data.weather[0].main == "Rain"){
            weatherIcon.src  = "https://openweathermap.org/img/wn/10d@4x.png";
        }
        else if(data.weather[0].main == "Snow"){
            weatherIcon.src  = "https://openweathermap.org/img/wn/13d@4x.png";
        }
        else if(data.weather[0].main == "Mist"){
            weatherIcon.src  = "https://openweathermap.org/img/wn/50d@4x.png";
        }
        else if(data.weather[0].main == "Clear"){
            weatherIcon.src  = "https://openweathermap.org/img/wn/01d@4x.png";
        }
        else if(data.weather[0].main == "Clouds"){
            weatherIcon.src  = "https://openweathermap.org/img/wn/02d@4x.png";
        }
    
        document.querySelector(".weather").style.display = "block";
       document.querySelector(".error").style.display = "none";
    }

}
searchBtn.addEventListener("click", ()=>
{
    checkweather(searchBox.value);

})
