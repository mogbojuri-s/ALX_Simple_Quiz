function checkAnswer() {
    const correctAnswer = "4";
    const selectedOption = document.querySelector('input[name="quiz"]:checked');

    const feedbackDiv = document.getElementById("feedback");

    if (!selectedOption) {
        feedbackDiv.textContent = "Please select an answer!";
        feedbackDiv.style.color = "#dc3545";
        return;
    }

    const userAnswer = selectedOption.value;

    if (userAnswer === correctAnswer) {
        feedbackDiv.textContent = "Correct! Well done.";
        feedbackDiv.style.color = "#28a745";
    } else {
        feedbackDiv.textContent = "That's incorrect. Try again!";
        feedbackDiv.style.color = "#dc3545";
    }
}

document.getElementById("submit-answer").addEventListener("click", checkAnswer);

