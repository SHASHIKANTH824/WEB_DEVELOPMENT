// EVENT DELEGATION.

const root = document.getElementById('root');

root.addEventListener('click', (event) =>{ 

// here we given button in capital letters , becoz all the tagnames will be stored in the capital letters in backened , so to compare we give input in capital letters.

    if(event.target.tagName === 'BUTTON')   // by including this the event listener will only listen for clicks on the button. It won't change the color when we click on the h1 tag.
    document.body.style.backgroundColor = event.target.id;   // here the code became next level , becoz it will show the which element is triggered
})                                                           // the target. this is known as the event delegation.