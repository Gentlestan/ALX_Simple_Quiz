// Function to check the user's answer
function checkAnswer() {
    // Define the correct answer
    const correctAnswer = "4";

    // Get the selected radio button
    const selectedOption = document.querySelector('input[name="quiz"]:checked');

    // Check if an option was selected
    if (selectedOption) {
        const userAnswer = selectedOption.value;

        // Compare user's answer with the correct answer
        if (userAnswer === correctAnswer) {
            document.getElementById('feedback').textContent = "Correct! Well done.";
        } else {
            document.getElementById('feedback').textContent = "That's incorrect. Try again!";
        }
    } else {
        // No option selected
        document.getElementById('feedback').textContent = "Please select an answer before submitting.";
    }
}

// Add event listener to the submit button
document.getElementById('submit-answer').addEventListener('click', checkAnswer);
