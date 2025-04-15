const buttons = document.querySelectorAll('button');
const body = document.body;

buttons.forEach((button) =>{
    button.addEventListener('click',() =>{
        body.style.backgroundColor = button.id;  //here generating the addEventListener to every button by using the forEach loop will occupy the 
                                                 //more space in the memory and also it will become slow . to solve this problem we will use the 
                                                 //concept of "event bubbling".
    })
})