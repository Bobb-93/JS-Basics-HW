const url = "https://api.chucknorris.io/jokes/random ";

const dom = {
    showJokeButtton: document.getElementById("show-joke-buttton"),
    jokeText: document.getElementById("joke-text")
};

dom.showJokeButtton.addEventListener("click", function () {
    fetch(url)
        .then(response => response.json())
        .then(joke => dom.jokeText.innerText = joke.value);
});