

interface WeatherInfo {
    temperature: number;
    description: string;
}

//const weatherApiUrl = 'https://api.openweathermap.org/data/2.5/weather';
//const apiKey = '38ad19818cf52b088ef524b6d468839d';

document.addEventListener('DOMContentLoaded', getWeather);
   

async function getW(): Promise<void> {
    try {
        const response = await fetch(`${'https://api.openweathermap.org/data/2.5/weather'}?q=BARCELONA&appid=${'38ad19818cf52b088ef524b6d468839d'}&units=metric`, {
            headers: {
                'Accept': 'application/json'
            }
        });
        const weatherData = await response.json();

        
        const weatherContainer = document.getElementById('weather-container');
        if (weatherContainer) {
            weatherContainer.innerHTML = `<p>Temperatura: ${weatherData.temperature} °C</p>
                                          <p>Descripció: ${weatherData.description}</p>`;
        }
    } catch (error) {
        console.error('Error al obtenir la informació meteorològica:', error);
    }
}


