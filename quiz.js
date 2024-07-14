//creating the function checkAnswer
function checkAnswer() {
    const correctAnswer = "4";
    let userAnswer = null ; //we'll give it value later
    let feedback = document.getElementById('feedback');//we select the feedback element to show the msg later
    let answers = document.querySelectorAll("input[name= 'quiz']");//this will return a list with all input elements named quiz

    //now we loop all the input to look for the one that is checked
    answers.forEach(element => {
        if (element.checked === true)
        userAnswer = element.value;
    });
    //now we test if the user answer is the correct answer
    if (userAnswer === correctAnswer)
        feedback.textContent = "Correct! Well done.";
    else
        feedback.textContent = "That's incorrect. Try again!";    

}
//we add the event listener for the submit button
document.getElementById('submit-answer').addEventListener('click', checkAnswer);


















