interface Joke {
    joke: string;
}

const apis = [
    'https://icanhazdadjoke.com/',
    'https://api.chucknorris.io/jokes/random'
];



document.addEventListener('DOMContentLoaded', getJoke);

if (button) {
    button.addEventListener('click', getJoke);
}

async function get(): Promise<void> {
    try {
        const randomApi = Math.floor(Math.random() * apis.length);
        const selectApi = apis[randomApi];

        const jokeData = await fetch(selectApi, {
            headers: {
                'Accept': 'application/json'
            }
        });

        const jokeObj: Joke = await jokeData.json();

        if (jokeText) {
            jokeText.innerHTML = jokeObj.joke;
        }
    } catch (error) {
        console.error('Error al obtener el chiste:', error);
    }
}
