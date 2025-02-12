import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { getWeatherData } from "./helpers/getWeatherData";
import { createWeatherNode } from "./helpers/createWeatherNode";

document.getElementById("weatherForm").onsubmit = async function (event) {
  event.preventDefault();
  const location = document.getElementById("location").value;
  const weatherData = await getWeatherData(location);

  let weatherContainer = document.getElementById("weatherContainer");
  if (!weatherContainer) {
    weatherContainer = document.createElement("div");
    weatherContainer.id = "weatherContainer";
    weatherContainer.classList.add("container", "mt-4");
    document.body.appendChild(weatherContainer);
  }

  weatherContainer.innerHTML = "";

  const currentWeatherNode = createWeatherNode(weatherData.currentConditions);
  weatherContainer.appendChild(currentWeatherNode);

  weatherData.days.forEach((day) => {
    const forecastNode = createWeatherNode(day, day.datetime);
    weatherContainer.appendChild(forecastNode);
  });

  if (!document.getElementById("weatherContainer")) {
    document.body.appendChild(weatherContainer);
  }
};
