export async function getWeatherData(location) {
    const encodedLocation = encodeURIComponent(location);
    const request = new Request(
      `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${encodedLocation}?key=B5XZ3UB3TG4U8DW3ULRGETB95`,
    );
  
    const response = await fetch(request);
    const data = await response.json();
    console.log(data.currentConditions);
    data.days.forEach((element) => {
      console.log(element);
    });
    return await data;
  }
  