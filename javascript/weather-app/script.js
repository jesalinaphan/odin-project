class weatherData {
  constructor(
    address,
    conditions,
    datetime,
    datetimeEpoch,
    feelslike,
    humidity,
    icon,
    moonphase,
    precip,
    temp,
    uvindex,
  ) {
    this.address = address;
    this.conditions = conditions;
    this.datetime = datetime;
    this.datetimeEpoch = datetimeEpoch;
    this.feelslike = feelslike;
    this.humidity = humidity;
    this.icon = icon;
    this.moonphase = moonphase;
    this.precip = precip;
    this.temp = temp;
    this.uvindex = uvindex;
  }
}

async function getWeather(city) {
  try {
    let response = await fetch(
      `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?key=LALSMYUVR79M5XXSLPQAJFSYA&contentType=json`,
    );

    if (!response.ok) {
      throw new Error(`HTTP error. ${response.status}`);
    }

    let weather_data = await response.json();
    let current = weather_data.currentConditions;

    return new weatherData(
      weather_data.address,
      current.conditions,
      current.datetime,
      current.datetimeEpoch,
      current.feelslike,
      current.humidity,
      current.icon,
      current.moonphase,
      current.precip,
      current.temp,
      current.uvindex,
    );
  } catch (error) {
    console.error(`${error}`);
    return null;
  }
}

function displayCard(weather_object) {
  let cardDiv = document.querySelector("#weather-card");
  cardDiv.innerHTML = "";

  let city = document.createElement("h1");
  city.textContent = weather_object.address;
  cardDiv.appendChild(city);

  let temp = document.createElement("p");
  temp.textContent = `Temperature: ${weather_object.temp}°F (Feels like: ${weather_object.feelslike}°F)`;
  cardDiv.appendChild(temp);

  let conditions = document.createElement("p");
  conditions.textContent = `Conditions: ${weather_object.conditions}`;
  cardDiv.appendChild(conditions);

  let details = document.createElement("p");
  details.textContent = `Humidity: ${weather_object.humidity}% | UV Index: ${weather_object.uvindex} | Precipitation Chance: ${weather_object.precip}%`;
  cardDiv.appendChild(details);

  let meta = document.createElement("small");
  meta.textContent = `Data for time: ${weather_object.datetime} (Moon Phase: ${weather_object.moonphase})`;
  cardDiv.appendChild(meta);
}

async function saveInput() {
  let cityQuery = document.querySelector("#city-input");
  let city = cityQuery.value.toLowerCase().trim();

  if (!city) {
    return;
  }

  let weather_object = await getWeather(city);

  if (!weather_object) {
    console.error("Unsuccessful Query");
    return;
  }

  displayCard(weather_object);
}
