const grandparent = document.getElementById('grandparent');
const parent = document.getElementById('parent');
const child = document.getElementById('child');

// event bubbling and event capturing

child.addEventListener('click', () =>{
    console.log("clicked child");
},false)

parent.addEventListener('click', () =>{
    console.log("clicked parent");
},false)

grandparent.addEventListener('click', () =>{
    console.log("clicked grandparent");
},false)

// see all the outputs in console by clicking on the div tags.

// Here the bubbling will take place when we give the input as "false" ; and the capturing will take place when the input is "true0".



child.addEventListener('click', () =>{
    console.log(event.target);  
    event.stopPropagation();  // here by using this the bubbling will be stopped.     
},false)                                    // here this will show the which element is triggered the target inside the grandparent element (or highest div tag) . check this in console.

parent.addEventListener('click', () =>{
    console.log(event.target);
},false)

grandparent.addEventListener('click', () =>{
    console.log(event.target);
},false)


// To get the information about which element is triggered the target, then here we then here we can use the "event.target" property.
// To know about the own element which is triggered the target , then we can use the "event.currentTarget".

child.addEventListener('click', () =>{
    console.log(event.currentTarget);
},false)

parent.addEventListener('click', () =>{       // here all will show the same output as the "childelement" , it won't show the which element is triggered the target.
                                              // to get the information about which element is triggered the target , then here we can use the "event.currenttarget" property.
    console.log(event.currentTarget);        
},false)

grandparent.addEventListener('click', () =>{
    console.log(event.currentTarget);
},false)


