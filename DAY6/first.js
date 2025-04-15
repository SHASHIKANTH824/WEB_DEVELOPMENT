document.body.addEventListener('click', function (e) {
    const circle = document.createElement('div');
    circle.className = 'circle';
     
    const x = e.clientX;     // here we take "const x = e.clientX" because to get the x position from the center of body , that is by knowing this we can create the bubble at that position.
    const y = e.clientY;
    circle.style.left = `${x - 25}px`;    // here we subracted 125px from the circle because to get the circle at the center of the mouse pointer (i.e here the circle diameter is 250 px.
    circle.style.top = `${y - 25}px`;   
   
    
    const colors = ['#FF5733', '#33FF57', '#3357FF', '#F3F033', '#8E44AD'];
    circle.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
   
 
     const messages = ['Hi', 'Hello', 'Welcome', 'Hey there', 'Hola'];
     circle.textContent = messages[Math.floor(Math.random() * messages.length)];
   
     document.body.appendChild(circle);       // here we append(add) the circle to the body of the document everytime we click on the body of the document
        setTimeout (() => {
        circle.remove();                      // we use the setTimeout function to remove the appended(added) circle after every 5 seconds.
      }, 5000);
   });
 
 
 
 