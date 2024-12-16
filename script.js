


let ip1 = document.getElementById("ip1");
let icon = document.getElementById("icon");
let temp = document.getElementById("temp");
let desc = document.getElementById("desc");
let wind = document.getElementById("wind");
let humidity = document.getElementById("humidity");
let pressure = document.getElementById("pressure");

async function search() {
  const city = ip1.value;
  const apiKey = "466ddaa21a8de191e9f608bd11a56acb";
  const apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

  try {
    const response = await fetch(apiURL);
    const data = await response.json();

    if (data.cod === "404") {
      alert("City not found. Please enter a valid city name.");
      return;
    }

    const weatherIcons = {
      "clear sky": "☀️",
      "few clouds": "🌤️",
      "scattered clouds": "☁️",
      "broken clouds": "🌥️",
      "shower rain": "🌧️",
      rain: "🌦️",
      thunderstorm: "⛈️",
      snow: "❄️",
      mist: "🌫️",
      haze: "🌫️",
      "overcast clouds": "☁️",
    };

    const backgrounds = {
      "clear sky": "url('https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExMzUxY211MWlhcWhnZHR5c25zMXlma3JiZnprZWRobWs0N2k0c3pxayZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/NU9hqIw9vN0fm/giphy.webp')",
      rain: "url('https://giffiles.alphacoders.com/209/209277.gif')",
      snow: "url('https://i.pinimg.com/originals/3f/e9/cc/3fe9cc34196b37d4d4613fd77e87f7c4.gif')",
      haze: "url('https://media3.giphy.com/media/IuKnqFMhtcA2A/200.webp')",
      "overcast clouds": "url('https://i.pinimg.com/originals/3c/6d/81/3c6d812bd53d19b45202e5483380b97a.gif')",
      default: "url('https://i.pinimg.com/originals/9a/53/ae/9a53aeb1141b4dde7f2b3910de0970f8.gif')",
    };

    document.getElementById("location").textContent = data.sys.country 
      ? `${data.name}, ${data.sys.country}` 
      : `${data.name}`;
    icon.innerText = weatherIcons[data.weather[0].description] || "🌍";
    temp.textContent = `${Math.round(data.main.temp)}°C`;
    desc.textContent = data.weather[0].description;
    wind.textContent = `Wind: ${data.wind.speed} km/h`;
    humidity.textContent = `Humidity: ${data.main.humidity}%`;
    pressure.textContent = `Pressure: ${data.main.pressure} mb`;

    const weatherCondition = data.weather[0].description.toLowerCase();
    document.body.style.backgroundImage =
      backgrounds[weatherCondition] || backgrounds.default;
  } catch (error) {
    alert("Unable to fetch weather data. Please try again later.");
    console.error("Error fetching data:", error);
  }
}






















// let ip1 = document.getElementById("ip1");
// let icon = document.getElementById("icon");
// let temp = document.getElementById("temp");
// let desc = document.getElementById("desc");
// let wind = document.getElementById("wind");
// let humidity = document.getElementById("humidity");
// let pressure = document.getElementById("pressure");
// // let location=document.getElementById("location")

// async function search() {
//   city = ip1.value;
//   const apiKey = "466ddaa21a8de191e9f608bd11a56acb";
//   const apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

//   try {
//     const response = await fetch(apiURL);
//     const data = await response.json();

//     if (data.cod === "404") {
//       alert("City not found. Please enter a valid city name.");
//       return;
//     }
//     const weatherIcons = {
//       "clear sky": "☀️",
//       "few clouds": "🌤️",
//       "scattered clouds": "☁️",
//       "broken clouds": "🌥️",
//       "shower rain": "🌧️",
//       rain: "🌦️",
//       thunderstorm: "⛈️",
//       snow: "❄️",
//       mist: "🌫️",
//       haze: "🌫️",
//       dust: "🌪️",
//       sand: "🌪️",
//       fog: "🌫️",
//       tornado: "🌪️",
//       volcano: "🌋",
//       smoke: "🌫️",
//       "overcast clouds": "☁️",
//       "light rain": "🌦️",
//       "moderate rain": "🌧️",
//       "heavy rain": "🌧️",
//       "isolated thunderstorm": "⛈️",
//       "light snow": "🌨️",
//       "heavy snow": "❄️",
//       "freezing rain": "🌧️",
//       sleet: "🌧️",
//       clear: "☀️",
//       "partly cloudy": "🌤️",
//     };
//     console.log(data.weather[0].description)
//     document.getElementById('location').textContent = data.sys.country === undefined ? `${data.name}` :`${data.name}, ${data.sys.country}`;
//     icon.innerText = weatherIcons[data.weather[0].description] || "🌍";
//     temp.textContent = `${Math.round(data.main.temp)}°C`;
//     desc.textContent = data.weather[0].description;
//     wind.textContent = `Wind: ${data.wind.speed} km/h`;
//     humidity.textContent = `Humidity: ${data.main.humidity}%`;
//     pressure.textContent = `Pressure: ${data.main.pressure} mb`;



//     const backgrounds = {
//       "clear sky": "url(https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExMzUxY211MWlhcWhnZHR5c25zMXlma3JiZnprZWRobWs0N2k0c3pxayZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/NU9hqIw9vN0fm/giphy.webp)",
//       rain: "url(https://giffiles.alphacoders.com/209/209277.gif)",
//       snow: "url(https://i.pinimg.com/originals/3f/e9/cc/3fe9cc34196b37d4d4613fd77e87f7c4.gif)",
//       clouds: "url('https://source.unsplash.com/1600x900/?cloudy')",
//       default: "url('https://i.pinimg.com/736x/a1/9a/d2/a19ad2f983ad80d28050e9844bc42fcc.jpg)",
//       haze:"url(https://media3.giphy.com/media/IuKnqFMhtcA2A/200.webp?cid=790b7611dlvd2ao4ukoap1tnd42tq9vyma909kw65bfeetli&ep=v1_gifs_search&rid=200.webp&ct=g)",
//       "overcast clouds":"url(https://i.pinimg.com/originals/3c/6d/81/3c6d812bd53d19b45202e5483380b97a.gif)"
//     };

//     const weatherCondition = data.weather[0].main.toLowerCase();
//     document.body.style.backgroundImage =
//       backgrounds[weatherCondition] || backgrounds.default;



//   } catch (error) {
//     alert("Unable to fetch weather data. Please try again later.");
//     console.error("Error fetching data:", error);
//   }
// }