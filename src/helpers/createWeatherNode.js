export function createWeatherNode(conditions, date) {
  const weatherNode = document.createElement("div");
  weatherNode.classList.add("card", "mb-3");

  const cardBody = document.createElement("div");
  cardBody.classList.add("card-body");

  const dateElement = document.createElement("h5");
  dateElement.classList.add("card-title");
  if (date) {
    dateElement.textContent = `Date: ${date}`;
  } else {
    dateElement.textContent = `Today's Forecast`;
  }
  cardBody.appendChild(dateElement);

  const tempElement = document.createElement("h5");
  tempElement.classList.add("card-title");
  tempElement.textContent = `Temperature: ${conditions.temp}°C`;

  const descElement = document.createElement("p");
  descElement.classList.add("card-text");
  descElement.textContent = `Conditions: ${conditions.conditions}`;

  cardBody.appendChild(tempElement);
  cardBody.appendChild(descElement);
  weatherNode.appendChild(cardBody);

  return weatherNode;
}
