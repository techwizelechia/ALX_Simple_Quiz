// Step 1: Function Declaration
function checkAnswer() {
    // Step 2: Identify the Correct Answer
    const correctAnswer = "4";  // The correct answer is "4"

    // Step 3: Retrieve the User’s Answer
    const userAnswer = document.querySelector('input[name="quiz"]:checked');

    // Feedback element
    const feedback = document.getElementById('feedback');

    // Step 4: Check if an answer is selected
    if (userAnswer) {
        // Step 5: Compare the User’s Answer with the Correct Answer
        if (userAnswer === correctAnswer) {
            feedback.textContent = "Correct! Well done.";
            feedback.style.color = "green"; // Feedback color for correct answer
        } else {
            feedback.textContent = "That's incorrect. Try again!";
            feedback.style.color = "red"; // Feedback color for incorrect answer
        }
    } else {
        feedback.textContent = "Please select an answer before submitting.";
        feedback.style.color = "orange"; // Feedback color for no selection
    }
}

// Step 6: Add Event Listener to the Submit Button
document.getElementById('submit-answer').addEventListener('click', checkAnswer);
