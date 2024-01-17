interface Joke {
    joke: string;
}


document.addEventListener('DOMContentLoaded', getJoke);

if (button) {
    button.addEventListener('click', getJoke);
}

async function get(): Promise<void> {
    try {
        const jokeData = await fetch('https://icanhazdadjoke.com/', {
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
