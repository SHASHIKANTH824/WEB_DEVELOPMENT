

const obj = fetch(`http://api.weatherapi.com/v1/current.json?key=064c197c8a914737885202251252703&q=London&aqi=yes`);  
 
// "http://api.weatherapi.com/v1/current.json?key=064c197c8a914737885202251252703&q=London&aqi=yes" this is the format to 
// communicate with the weather Api.


//   console.log(obj);  here the output will be the "promise pending" because this fetch operation will take some time to complete. 
// But we didn't wait for the response. so it will show the output as "promise pending" .


// here to solve this problem we can use the "setTimeout(()=>{})" function. but this is not the best way to solve this problem 
// because we don't know how much time the fetch operation will take. so we can't use the setTimeout function here. 
// Here we can use the "async/await" function to solve this.
//    setTimeout(()=>{
//          console.log(obj);
//    })


obj.then((response)=>{   // This is only known as the "then" method. And it is used to handle the promise . 
console.log(response);   // Here this obj is known as the promise object .
}).catch((error)=>{       // here this will be executed when the data is fetched from the api. till the data is npt fetched it won't print anything.
    console.log(error);   // here this catch method is used to handle the error. Here if the data is not fetched from the api then it will print 
});                       // the error or whatever we have written in the catch method.
// here it will bring the response header part only , but we want the response body part. so we have to use the ".json()"
// there will be three stages in a promise: pending, fulfilled(or resolved) and rejected. here when we make a request from API, it will be there
// in the pending state. when the data is fetched from the API, it will be in the fulfilled(/resolved) state or when the data is not fetched from
// the API, then it will be in the rejected state.

// Method-1 : Using then method to handle a promise.

obj.then((response)=>{   
      const pro = response.json();
      pro.then((data)=>{
        console.log(data);
      })                        // "response.json" brings the response body part. here "response.json" is also the asynchronous function, it also
}).catch((error)=>{           // takes time to complete the function. If we use directly "response.json" then it will output as prommise<pending>.
        console.log(error);   // so we have to use ".then()" to get correct output.
});   


// Method-2 : Using then method to handle a promise.


const pro = obj.then((response)=>{
    return response.json();
})

pro.then((Data)=>{
    console.log(Data);
})


// Method-3 : Using then method to handle a promise.

// this is also known as the promise chaining. 
obj.then((response)=>{
    return response.json();
}).then((Data)=>{
    console.log(Data);
})

// Method-4 : Using then method to handle a promise.

obj
.then(response=>response.json())
.then(Data=>console.log(Data))
.catch((error)=>console.log(error));  

// Method-5 : Using then method to handle a promise.

fetch(`http://api.weatherapi.com/v1/current.json?key=064c197c8a914737885202251252703&q=London&aqi=yes`)
.then(response=>response.json())
.then(Data=>console.log(Data))
.catch((error)=>console.log(error));    // here this ".catch()" is used to handle all the errors come in any part of the code.
