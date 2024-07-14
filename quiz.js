document.addEventListener('DOMContentLoaded', function() {

    function checkAnswer() {
        
        let userAnswer = document.querySelector('input[name="quiz"]:checked');
        
    
        userAnswer = userAnswer.value;
        
    
        let correctAnswer = "4"; 
        
        
        let feedback = document.getElementById('feedback');


        if (userAnswer === correctAnswer) {
            feedback.textContent = "Correct! Well done.";
        } else {
            feedback.textContent = "That's incorrect. Try again!";
        }
    }

    document.getElementById('submit-answer').addEventListener('click', checkAnswer);
});