//                 here there is no need to make the event listener on "label" , "input", and "button" all these elements , if we give the event listener to the "form" then we can play with its child "label" , "input", and "button"
//                 eg: const form = document.querySelector('form');
//                     form.addEventListener('click', (event) =>{
//                      console.log(event.target.id)  , here by putting ".value" in place of ".id" , we can print the value inside the element we written by clicking on it.
//                     })

//                                              EVENT TYPES:
//            1. Input: when we write anything inside the element everyting will be triggered .
//                 eg: const form = document.querySelector('form');
//                    form.addEventListener('input', (event) =>{
//                       console.log(event.target.value);
//                        })

//            2. change: when we write anything inside the element nothing will be triggered, but when we come out of that box the complete inner value will be triggered.
//                here only when we make any changes , then only the event will be triggered , otherwise no event will be triggered even if we change the input box.
//                eg: const form = document.querySelector('form');
//                    form.addEventListener('change', (event) =>{
//                       console.log(event.target.value);
//                        })

//             3. focus: here it won't bubble, so it needs to be directly attached to individual input elements.
//                   eg: const form = document.querySelector('form');
//                      form.addEventListener('focus', (event) =>{
//                        console.log(event.target.value);
//                        })
//               focusin: It will bubble , so it can be attached to the form element for event delegetion. 
//                        here it will be triggered when the element gets the focus , i.e when we put the cursor inside the elemnt .
//                   eg: const form = document.querySelector('form');
//                      form.addEventListener('focusin', (event) =>{
//                        console.log(event.target.value);
//                        })

//             4. blur: here it won't bubble same as focus.
//                   eg: const form = document.querySelector('form');
//                      form.addEventListener('blur', (event) =>{
//                        console.log(event.target.value);
//                        })

//               focusout: It will bubble , so it can be attached to the form element for event delegetion. 
//                        here it will be triggered when the element gets the focusout , i.e when we remove the cursor from the input box .
//                   eg: const form = document.querySelector('form');
//                      form.addEventListener('focusout', (event) =>{
//                        console.log(event.target.value);
//                        })

//             5. click: here when we click on any element the event will be triggered .
//                    const form = document.querySelector('form');
//                      form.addEventListener('click', (event) =>{
//                        console.log("click single");
//                        })


//             6. dbclick: here when we double click on any element the event will be triggered .
//                    const form = document.querySelector('form');
//                      form.addEventListener('dbclick', (event) =>{
//                        console.log("click double");
//                        })


//             7. submit: here when we click on submit button the form will be submitted . here when the form is submitted , the page will be refreshed , i.e when we click on the submit button the page is refreshed automatically.
//                  here to stop the automatic refresh of the page we need to use the "event.preventDefault()".
//                    const form = document.querySelector('form');
//                      form.addEventListener('submit', (event) =>{
//                        console.log(event.target.value);
//                        })

//             8. reset: here when we click on reset button the form will be reseted, i.e when we click on the reset button all elemets will become empty.
//                here we have the change the type of the button to reset (i.e like "type:reset")
//                     const form = document.querySelector('form');
//                      form.addEventListener('reset', (event) =>{
//                        console.log(event.target.value);
//                        })

//    note: In console to store the previous history , we have to on the preservelog option.




