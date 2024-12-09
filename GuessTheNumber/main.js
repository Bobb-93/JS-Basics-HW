//Select difficulty for the game
function selectDifficulty(gameDifficulty) {
    switch (gameDifficulty.toLowerCase()) {
        case "easy":
            break;

        case "normal":
            maxNumber = 50;
            maxTries = 7;
            break;

        case "hard":
            maxNumber = 100;
            maxTries = 10;
            break;

        default:
            alert("Невалидна трудност! Автоматично е избрана трудност Easy...");

            // Не мога да рефрешна страницата с location.reload(); или да спра страницата с window.stop();
            // за да искам от потребителя да въведе нова трудност. Поради това измислих да става по този начин.

            break;
    }
}

//Program game logic
function gameLogic(userGuess, randomNumber) {
    // Game Logic
    while (userGuess !== randomNumber) {

        // Prompt the User for Input
        userGuess = parseInt(prompt(`Познайте числото между 1 и ${maxNumber}:\nИстория: ${numbersHistory.join(', ')}`));
        //alert(userGuess);

        // validate user guess (must be number in [1..maxNumber])
        if (isNaN(userGuess) || userGuess < 1 || userGuess > maxNumber) {
            alert('Моля въведете валидно число между 1 и ${maxNumber}!');
            continue;
        }

        userTries++;
        numbersHistory.unshift(userGuess);
        //alert(userTries);
        // Compare the Guess to the Random Number and Provide Feedback
        if (userGuess > randomNumber) {
            alert("Твърде висока стойност!");
        } else if (userGuess < randomNumber) {
            alert("Твърде ниска стойност!");
        } else if (userGuess === randomNumber) {
            alert(`Поздравления! Познахте моето число!`);
            break;
        }

        if (userTries === maxTries) {
            alert(`Играта свърши! Числото беше ${randomNumber}.`);
            break;
        }

    }

    alert(`Общият брой опити е ${userTries}`);

}

let generateRandomNumber = (minNumber, maxNumber) => Math.floor(Math.random() * maxNumber) + minNumber;

// Initialize Variables
let difficulty = prompt("Изберете трудност! Easy (за числата от 1 до 10), Normal (1-50) или Hard (1-100)")
let randomNumber;
let userGuess = null;
let userTries = 0;
let minNumber = 1;
let maxNumber = 10;
let maxTries = 5;
let numbersHistory = [];

//alert(randomNumber);

selectDifficulty(difficulty);

randomNumber = generateRandomNumber(minNumber, maxNumber); // Generate a Random Number

gameLogic(userGuess, randomNumber);