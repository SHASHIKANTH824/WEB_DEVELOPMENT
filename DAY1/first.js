//const d= new Date();
//console.log(d);

//   "control + `  " by entering this the terminal will be openend //


const date1 = new Date();
    const date2 = new Date('2028-07-14T00:00:00');
    const date = date2-date1;
    const days = Math.floor(date/(1000*60*60*24));
    console.log(days)