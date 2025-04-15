// const original_answer = ["Sachin Tendulkar","West Indies","Sachin Tendulkar","264","Muttiah Muralitharan"]
// here if we store the original answers in the array, and when we answer only three questions then in backened only three answers will be sent
// and the comparision will between the 3 and 5 , so it won't be possible to compare, thats why we will store the original answers in the object format. And we use "for of" loop to iterate over it
const original_answer = {
    q1: "Sachin Tendulkar",
    q2: "West Indies",
    q3: "Sachin Tendulkar",
    q4: "264",
    q5: "Muttiah Muralitharan"
 }
 const form = document.querySelector('form');
 
 form.addEventListener('submit',(event)=>{
     
    event.preventDefault();
    const data = new FormData(form);  // by using this we can get the complete data which the user will be given as input in the form of keys and values.
 //here by using this object format to store the original answers will give the advantage in comparison as it compares through keys and values ,
 // it won't compare on the basis of index values just like array. By this we can compare the any no.of questions attempted with the original answers.
 //    const answer = Array.from(data.values());
    
 //    let result = 0;
 //    for(let i=0;i<answer.length;i++)
 //    { if(answer[i]===original_answer[i])
 //         result++;
 //    }
 
    let result = 0
 
    for(let [key,value] of data.entries())
    {
     if(value===original_answer[key])
         result++;
    }
 
    const out = document.getElementById('result');
    out.innerText = `${result} out of 5 is correct`;
 
 //    form.reset();
 
 })
 
 
 