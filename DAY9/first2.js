const form = document.querySelector('form');
form.addEventListener('submit',(event) =>{

    event.preventDefault();

    const first = document.getElementById("first");
    console.log(first.value);

    const second = document.getElementById("second");
    console.log(second.value);

    const third = document.getElementById("third");
    console.log(third.value);

    const result = document.getElementById('result');
    result.innerHTML = `${first.value} ${second.value} is a good boy.`

    document.body.form.append(result);
})

// Method 2 to create the above code in simple way.
 
const data = new FormData(form);  // here all the data present in the form is stored in the data variable in the form of key value pair.
for(let key of data.entries())   // here it will give output in the form of iterate, so we can iterate on output by using loops.
console.log(key)                 // here by using the ".entries" we can print the input we give inplace of values.