//Array of questions
let questions = [ 
    "What is the capital of France?", 
    "Which language is used for Front-end Web development?",
    "What does CSS stand for?"
];

//Array of options for each question
let options = [
    ["Berlin", "Madrid", "Paris", "Lisbon"],
    ["Python", "JavaScript", "C++", "Java"],
    ["Cascading Style Sheets", "Creative Style System", "Computer Style Sheets", "Colorful Style Sheets"]
];

//Array of correct options
let answers = [
    "Paris",
    "JavaScript",
    "Cascading Style Sheets"
];

let quizContainer = document.getElementById('quiz-container');
quizContainer.innerHTML = '';

for (let i = 0; i < questions.length; i++) {
    let questionHTML = `
        <div class="question"
            <h2>${questions[i]}</h2>
            <ul>
    `;
    
    for (let j = 0; j < options[i].length; j++) {
        questionHTML += `
            <li>
                <label>
                    <input type="radio" name="question${i}" value="${options[i][j]}"> ${options[i][j]} 
                </label>
            </li>
        `;
    }

    questionHTML += `
            </ul>
        </div>
    `;

    quizContainer.innerHTML += questionHTML;
}