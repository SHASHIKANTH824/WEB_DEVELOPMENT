
const timer = document.getElementById('root');
timer.style.fontSize = "500px";  
timer.style.height = "100vh";
timer.style.backgroundColor = "orange";
timer.style.display = "flex";
timer.style.alignItems = "center";
timer.style.justifyContent = "center";




function timing(){
const timer = document.getElementById('root');
const now = new Date();
const indiantime = now.toLocaleTimeString();
timer.innerHTML= indiantime;
}
setInterval(timing,1000);   // here if we use the while loop and give condition as true (like- while(true)), then the function will be called 
                               // infinite times and the browser will be crashed and no output will be shown, to solve this problemm we are using 
                               // setinterval function and give 1000 as input means perform the function for every 1 second .   



