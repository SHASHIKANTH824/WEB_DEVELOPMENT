
const button = document.querySelector('button');

button.addEventListener('click', () => {
    const input1 = document.getElementById('first');
    const number1 = Number(input1.value); // Convert input1 value to number ( here the 'value' is stored as sting in backend , so we have to convert it into the number by using "const number1 = Number(input1.value);")

    const input2 = document.getElementById('second');
    const number2 = Number(input2.value); // Convert input2 value to number  ( here if won't use the "result: " then it will show the output number inplace of the result.)

    // Check if the values are valid numbers
    if (isNaN(number1) || isNaN(number2)) {
        alert('Please enter valid numbers');
        return;
    }

    const result = number1 + number2;
    const re = document.getElementById('result');
    re.textContent = "Result: " + result; 
});