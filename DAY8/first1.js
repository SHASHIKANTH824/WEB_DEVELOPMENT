const grandparent = document.getElementById('grandparent');
const parent = document.getElementById('parent');
const child = document.getElementById('child');

grandparent.addEventListener('click', () =>{
    console.log(event.target);        // here this will show the which element is triggered the target . check this in console.
},false)