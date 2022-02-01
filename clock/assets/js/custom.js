// digital clock
function updateTime(){
    const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
    ];
    const dayNames = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    let todaysDate = new Date();
    let hours = todaysDate.getHours();
    let minutes = todaysDate.getMinutes();
    let seconds = todaysDate.getSeconds();

    let date = todaysDate.getDate();
    let day = dayNames[todaysDate.getDay()];
    let month = monthNames[todaysDate.getMonth()]
    let year = todaysDate.getFullYear()

    if(hours <= 9){
        document.getElementById("hours").innerHTML = "0" + hours + ":";    
    }
    else
    {
        document.getElementById("hours").innerHTML = hours + ":";    
    }
    
    if(minutes <= 9){
        document.getElementById("minutes").innerHTML = "0" + minutes + ":";    
    }
    else
    {
        document.getElementById("minutes").innerHTML = minutes + ":";    
    }
    if(seconds <= 9){
        document.getElementById("seconds").innerHTML = "0" + seconds + ":";    
    }
    else
    {
        document.getElementById("seconds").innerHTML = seconds + ":";    
    }
    if(hours >= 24 || hours < 12 ){
        let addAm = document.getElementById('am');
        addAm.innerHTML = "AM"
    } else if(hours >= 12 || hours <= 24)
        {
            let addPm = document.getElementById('pm');
            addPm.innerHTML = "PM";
        }

    document.getElementById("day").innerHTML = day + "," + date + "/" + month.slice(0,3)  + "/" + year;

}

updateTime();
setInterval(function() {
    updateTime()
}, 1000);
