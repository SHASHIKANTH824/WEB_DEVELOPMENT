
cart  = ["pizza", "sushi", "tacos"];

function placeorder(Cart, callback){
    console.log("Talking with Domino's");
    setTimeout(()=>{
        console.log("order placed succesfully");
        order = {orderid: 221, food: Cart, restaurant: "Dominos", location: hyderabad}
        callback(order);
    },2000)
};


function preparingorder(order , callback){
    console.log("pizza preparation started.....");
    setTimeout(()=>{
        console.log("pizza preparation done");
        fooddetails = {token: 12, restaurant: order.restaurant, location: order.location};
        callback(fooddetails);
    },2000)
};

function pickuporder(fooddetails, callback){
    console.log("Talking with Domino's");
    setTimeout(()=>{
        console.log("order picked up by delivert boy");
        droplocation = {droppoint, fooddetails};
        callback(droplocation);
    },2000)
};


function deliveryorder(droplocation, callback){
    console.log("delivery boy on the way");
    setTimeout(()=>{
        console.log("order delivered succesfully");
        callback(droplocation);
    },2000)
};


preparingorder(cart, (order)=>{
    preparingorder(order, (fooddetails)=>{
        pickuporder(fooddetails, (droplocation)=>{
            deliveryorder((droplocation));
        })
    })
})

// here this is not the correct way , here everything will be depended on other . if anyone didn't respond then the whole process will be failed.
// so to solve this problem we will use promise.











// creating the promise :
// "new promise(function(resolve, reject){})" this is the format to create a promise.
//This is the best method to write the code for callback functions.
cart  = ["pizza", "sushi", "tacos"];

function placeorder(Cart){
    console.log("Talking with Domino's");

    const pr = new Promise((resolve, reject) => {

    setTimeout(()=>{
        const food_available = true;
        if(food_available){
        console.log("order placed succesfully");
        order = {orderid: 221, food: Cart, restaurant: "Dominos", location: hyderabad};
        resolve(order);
        }
        else{
            reject("items rejected");
        }
    },2000)
})
return pr;
};


function preparingorder(order){
    console.log("pizza preparation started.....");

    const pr = new Promise((resolve, reject) => {

        setTimeout(()=>{
            const food_prepared = true;
            if(food_prepared){
                console.log("pizza preparation done");
                fooddetails = {token: 12, restaurant: order.restaurant, location: order.location};
                resolve(fooddetails);
            }
            else{
                reject("food not prepared");
            }
        },2000)
    })
    return pr;
};

function pickuporder(fooddetails){
    console.log("Talking with Domino's");

    const orderpicked = true;
    
    const pr = new Promise((resolve, reject) => {
        setTimeout(()=>{
            if(orderpicked){
            console.log("order picked up by delivert boy");
            droplocation = {droppoint, fooddetails};
            resolve(droplocation);
        }
        else{
            reject("order not picked");
        }
        },2000)
    })

    return pr;
};


function deliveryorder(droplocation){
    console.log("delivery boy on the way");
    // here there is no need of writing the promise, beacause no one is expecting anything from this function.
        setTimeout(()=>{
         console.log("order delivered succesfully");
        },2000)
};

placeorder(order)
.then(order=>preparingorder(order))
.then(fooddetails=>pickuporder(fooddetails))
.then(droplocation=>deliveryorder(droplocation))
.catch(error=>console.log(error));






















// The more optimized way to create the callback functions is-

cart  = ["pizza", "sushi", "tacos"];

function placeorder(Cart){
    console.log("Talking with Domino's");

    const pr = new Promise((resolve, reject) => {

    setTimeout(()=>{
        const food_available = true;
        if(food_available){
        console.log("order placed succesfully");
        order = {orderid: 221, food: Cart, restaurant: "Dominos", location: hyderabad};
        resolve(order);
        }
        else{
            reject("items rejected");
        }
    },2000)
    })
    return pr;
};


function preparingorder(order){
    console.log("pizza preparation started.....");

    const pr = new Promise((resolve, reject) => {

        setTimeout(()=>{
            const food_prepared = true;
            if(food_prepared){
                console.log("pizza preparation done");
                fooddetails = {token: 12, restaurant: order.restaurant, location: order.location};
                resolve(fooddetails);
            }
            else{
                reject("food not prepared");
            }
        },2000)
    })
    return pr;
};

function pickuporder(fooddetails){
    console.log("Talking with Domino's");

    const orderpicked = true;
    
    const pr = new Promise((resolve, reject) => {
        setTimeout(()=>{
            if(orderpicked){
            console.log("order picked up by delivert boy");
            droplocation = {droppoint, fooddetails};
            resolve(droplocation);
        }
        else{
            reject("order not picked");
        }
        },2000)
    })

    return pr;
};


function deliveryorder(droplocation){
    console.log("delivery boy on the way");
    // here there is no need of writing the promise, beacause no one is expecting anything from this function.
        setTimeout(()=>{
         console.log("order delivered succesfully");
        },2000)
};


async function greet() {
   try{
    const order = await placeorder(cart);
    const fooddetails = await preparingorder(order);
    const droplocation = await pickuporder(fooddetails);
    deliveryorder(droplocation);
   }
   catch(error){
        console.log(error);    // error will be handled in this way. if any error comes in try block, then it will send it to the catch block.
   }
}

greet();

//here we created the async and await function, which will call the functions one by one and 
// wait for the result of each function before calling the next one. Here the "await" won't work outside the async fuction.
// It must be used inside the async function.



// concept of await in js:
const p1 = new Promise((resolve, reject) => {
    setTimeout(()=>{
        resolve("first promise resolved");
    },5000)
})

const p2 = new Promise((resolve, reject) => {
    setTimeout(()=>{
        resolve("second promise resolved");
    },5000)
})

async function greet() {
    const data1 = await p1;
    console.log(data1);

    const data2 = await p2;
    console.log(data2);
}


p1.then(value=>console.log(value));

p2.then(value=>console.log(value));

// here the p1 and p2 prints immediately , it wait 5 seconds only for p1 and then after 5 seconds it prints the p1 and p2 same time, 
// i.e it won't wait another 5 seconds for p2 beacause in js code execution will be done line by line. so when the setTimeout() for p1 is came,
// it will give it web API and goes to next line and sees setTimeout for p2 and gives it to web API . Now it sees the async function , it won't 
// enter into it beacause it is not called, leaves that and goes to next one. there async function is called. Now it allots the new place in
// call stack for async function above the GEC. when it sees the await keyword it will wait for the promise to be resolved and then it will 
// execute it and sees the next await for p2 and here the promise is already resolved because the setTimeot for p1 and p2 are started at same time
// so it will prints the p1 and p2 at the same time after waiting 5 seconds. here if the time for p1  is more and p2 is less then it will wait
// till the p1 is resolved , it won't go to next line before the p1 is resolved . but incase of ".then" it will go to next line and executes the 
// less time taking promise first and them it will executes the more time taking promise. This is the difference between async/await and .then()



function test1(){
    const p1 = new Promise((resolve, reject) => {
        setTimeout(()=>{
            resolve("first promise resolved");
        },5000)
    })
    return p1;
}

function test2(){
    const p2 = new Promise((resolve, reject) => {
        setTimeout(()=>{
            resolve("second promise resolved");
        },5000)
    })
    return p2;
}

async function meet() {
    const data1 = await test1();
    console.log(data1);

    const data2 = await test2();
    console.log(data2);
}

meet();

// here the it will wait for 5 seconds for test1 and then it wait another 5 seconds for test2 because p1 and p2 are wrapped inside the function
// and so the when the fuction is called in the await it will wait for the promise to be resolved and then after p1 promise is resolved it will go
// to the await of p2 the there the test2 is called.

// here the async function will always return the promise only. if promise is not created then anything return inside the async function is 
// returned as the promise . if anything is not written in the async function then it will return the promise as undefined. 


async function name() {
    return "hello";  // here the hello is returned as the promise. async function will always expects the promise to be returned.
}



// Here we will make a level up:
function test1(){
    const p1 = new Promise((resolve, reject) => {
        setTimeout(()=>{
            resolve("first promise resolved");
        },5000)
    })
    return p1;
}

function test2(){
    const p2 = new Promise((resolve, reject) => {
        setTimeout(()=>{
            resolve("second promise resolved");
        },5000)
    })
    return p2;
}

async function meet() {
    
    console.log("hello");
    const data1 = await test1();
    console.log(data1);

    const data2 = await test2();
    console.log(data2);
}

meet();
console.log(" coder")
console.log("army")

// here the output will be "'hello' 'coder' 'army' 'first promise resolved' 'second promise resolved'", here first it will enter into async
// function and then prints the hello and sees await test1(), it will come out after seeing await test1() and comes out of the async function and
// executes the main part of the code and then goes back to async function and then prints p1 and p2. 


function test1(){
    const p1 = new Promise((resolve, reject) => {
        setTimeout(()=>{
            resolve("first promise resolved");
        },5000)
    })
    return p1;
}

function test2(){
    const p2 = new Promise((resolve, reject) => {
        setTimeout(()=>{
            resolve("second promise resolved");
        },5000)
    })
    return p2;
}

async function meet() {
    
    console.log("hello");
    const [data1,data2] = Promise.all([test1(),test2()]);   // To execute both the promises at the same time we use "promise.all([])".
    console.log(data1); 
    console.log(data2);
}
meet();