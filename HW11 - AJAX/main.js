const url = "https://api.chucknorris.io/jokes/random "; // work as intended

// const url = "https://api.chucknorris.io/jokses/random "; // undefined; 
// the whole object is: {timestamp: '2025-02-01T13:32:56.685Z', status: 404, error: 'Not Found', path: '/jokses/random'}
//joke does not have property value

// const url = "https://api.chucknsorris.io/jokes/rasndom "; // Error: TypeError: Failed to fetch
//we don't get any object

const dom = {
    showJokeButtton: document.getElementById("show-joke-buttton"),
    jokeText: document.getElementById("joke-text")
};

dom.showJokeButtton.addEventListener("click", function () {
    fetch(url)
        .then(response => response.json())
        .then(joke => dom.jokeText.innerText = joke.value)
        // .then(joke => console.log(joke)) // testing
        .catch(error => dom.jokeText.innerText = `Error: ${error}`);;
});