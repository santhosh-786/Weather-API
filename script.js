// let key="69bcfdc7aa26df0b5f29e3131157eec3"
// let url="https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}"

let input=document.getElementById("location")
let btn=document.getElementById("btn")
let temperature=document.getElementById("temp_num")
let humidity=document.getElementById("humid_num")
let description=document.getElementById("weather_description")
let img=document.getElementById("img")

console.log(input);
console.log(btn);
console.log(temperature);
console.log(humidity);

let checkWeatherDetails=async (city)=>{
    let key="69bcfdc7aa26df0b5f29e3131157eec3"
    let url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`
    
    let weather1=await fetch(url)
    let weather2=await weather1.json()

    // console.log(weather2);
    // console.log(weather2.main.temp);
    // console.log(weather2.main.humidity);
    console.log(weather2.weather[0].main);
    description.innerHTML=`${weather2.weather[0].main}`
    let celcius=Math.round(weather2.main.temp-273)
    // console.log(celcius);

    temperature.innerHTML=`${celcius}<sup>o</sup>C`
    humidity.innerHTML=`${weather2.main.humidity}%`

    switch(weather2.weather[0].main){
        case 'Haze':
            img.src='./weather.png'
            break;
         case 'Snow':
                img.src='./snow.jpg'
                break;
         case 'Clouds':
            img.src='./cloudy.png'
            break;
        case 'Clear':
            img.src='./clear.png'
            break;
          case 'Smoke':
            img.src='smoke.png'
            break;
           default:
            img.src='weather.png'
            break;   

    }

}
btn.addEventListener("click",()=>{
    checkWeatherDetails(input.value)
})