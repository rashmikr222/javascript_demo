function displayDays(){
    // month
    let month = document.querySelector('select').value;
    // year
    let year = document.getElementById('userInput').value;
    // message
    let message = document.getElementById("message"); 
    console.log(month)
    let buttonDisabled = document.getElementById('submitButton');
    if(year === " " || year === "" || year === null){
        message.className = "error";
        message.innerHTML = "Please enter valid year and month";
        buttonDisabled.disabled = true;
    }
    else{
        isCharacter();
        message.classList.add("displayMessage");
        switch(month){
            case "january":
                message.innerHTML = month.toUpperCase() + " has 31 days";
                break;
            case "february":
                checkLeapYear(year);
                break;
            case "march":
                message.innerHTML = month.toUpperCase() + " has 31 days";
                break;
            case "april":
                message.innerHTML = month.toUpperCase() + " has 30 days";
                break;
            case "may":
                message.innerHTML = month.toUpperCase() + " has 31 days";
                break;
            case "june":
                message.innerHTML = month.toUpperCase() + " has 30 days";
                break;
            case "july":
                message.innerHTML = month.toUpperCase() + " has 31 days";
                break;
            case "august":
                message.innerHTML = month.toUpperCase() + " has 31 days";
                break;
            case "september":
                message.innerHTML = month.toUpperCase() + " has 30 days";
                break;
            case "october":
                message.innerHTML = month.toUpperCase() + " has 31 days";
                break;
            case "november":
                message.innerHTML = month.toUpperCase() + " has 30 days";
                break;
            case "december":
                message.innerHTML = month.toUpperCase() + " has 31 days";
                break;
            default:
                message.className = "error";
                message.innerHTML = "Please enter valid month";
        }
    }
}

function isCharacter(){
    let errorMessage = document.getElementById('message');
    let year = document.getElementById('userInput').value;
    let buttonDisabled = document.getElementById('submitButton');
    let isValidYear = !/^[0-9]+$/.test(year);
    errorMessage.className = "error";
    if(year === "")
    {
        errorMessage.innerHTML = " ";
    }
    else if(isValidYear)
    {
        errorMessage.innerHTML = "Please enter number";
        buttonDisabled.disabled = true;
    } else if(year <= 1900) 
    {
        errorMessage.innerHTML = "Please enter the year above 1900";
        buttonDisabled.disabled = true;
    }
    else{
        buttonDisabled.disabled = false;
        errorMessage.innerHTML = " ";
    }
}
function checkLeapYear(year){
    if((year % 4 === 0) &&  (year % 100 != 0) ||  (year % 400 === 0))
    {
        message = document.getElementById("message").innerHTML ="In Year " + year + " FEBRUARY has 29 days and its a leap year";
    }
    else
    {
        message = document.getElementById("message").innerHTML = "In Year " + year + " FEBRUARY has 28 days and its not a leap year";
    }
    
}

