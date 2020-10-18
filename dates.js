

// The days of the week are: "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
function getDayName(dateString) {
    let date = new Date(dateString);
    let dayName;
    //let arrayName = date.toDateString().split(" ");
    //dayName = arrayName[0];

let weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
for (let i=0; i<weekday.length; i++)
{
    let day = date.getDay();
    dayName = weekday[day];
}

//one way
    /*switch(dayName){
        case 'Sun':
        dayName = 'Sunday';
        break;
       case 'Mon':
       dayName = 'Monday';
       break;
       case 'Tue':
       dayName = 'Tuesday'
       break;
       case 'Wed':
       dayName= 'Wednesday'
       break;
       case 'Thu':
       dayName = 'Thursday'
       break;
       case 'Fri':
       dayName = 'Friday';
       break;
       case 'Sat':
       dayName = 'Saturday'
       break;
    }
    */

    // Write your code here
    
    return dayName;
}

