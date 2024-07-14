//addition function
function add(number1, number2) {
    return number1 + number2;
}
//multiply function
function multiply(number1, number2) {
    return number1 * number2;
}
//substract function
function subtract(number1, number2) {
    return number1 - number2;
}
//divide function
function divide(number1, number2) {
    if (number2 === '0' || number2 === '' || number2 === 0){
        return "Error,cannot divide by 0";
    }
    
    else
    return number1 / number2;
}
//event lesteners for each button
document.getElementById('add').addEventListener('click', function() {
    const number1 = parseFloat(document.getElementById('number1').value) || 0;
    const number2 = parseFloat(document.getElementById('number2').value) || 0;
    const result  =  add(number1, number2);
    document.getElementById('calculation-result').textContent = result;
});
document.getElementById('divide').addEventListener('click',function(){
    const number1 = parseFloat(document.getElementById('number1').value) || 0;
    const number2 = parseFloat(document.getElementById('number2').value) || 0;
    const result  = divide(number1, number2);
    document.getElementById('calculation-result').textContent = result;
});
document.getElementById('subtract').addEventListener('click', function() {
    const number1 = parseFloat(document.getElementById('number1').value) || 0;
    const number2 = parseFloat(document.getElementById('number2').value) || 0;
    const result = subtract(number1, number2);
    document.getElementById('calculation-result').textContent=result;
});
document.getElementById('multiply').addEventListener('click', function() {
    const number1 = parseFloat(document.getElementById('number1').value) || 0;
    const number2 = parseFloat(document.getElementById('number2').value) || 0;
    const result = multiply(number1, number2);
    document.getElementById('calculation-result').textContent=result;
});