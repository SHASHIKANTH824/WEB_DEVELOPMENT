
function timing(){
    const date1 = new Date();
    const date2 = new Date('2028-07-14T00:00:00');
    const date = date2-date1;
    const days = Math.floor(date/(1000*60*60*24));
    const hours = Math.floor((date/(1000*60*60))%24);
    const minutes = Math.floor((date/(1000*60))%60);
    const seconds = Math.floor((date/(1000))%60);
    const dayss = document.getElementById('Daysss1');
    dayss.innerHTML= days;
    const dayss1 = document.getElementById('Daysss2');
    dayss1.innerHTML= hours;
    const dayss2 = document.getElementById('Daysss3');
    dayss2.innerHTML= minutes;
    const dayss3 = document.getElementById('Daysss4');
    dayss3.innerHTML= seconds;
    }
setInterval(timing,1000);
