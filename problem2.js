//TODO Write a JavaScript program to find which 1st January is being a Sunday between 2014 and 2050.

// new Date();
// new Date(value);
// new Date(dateString);
// new Date(year, month[, day[, hour[, minutes[, seconds[, milliseconds]]]]]);

// The getDay() method is used to get the day of the week for the specified date according to local time, where 0 represents Sunday. The value returned by getDay() is an integer corresponding to the day of the week: 0 for Sunday, 1 for Monday, 2 for Tuesday, and so on.

for (var year = 2014; year <= 2050; year++){
    var d = new Date(year, 0, 1);
    if ( d.getDay() === 0 ){
        console.log("1st January is being a Sunday  "+year);
    } 
}

// Output:
/* 1st January is being a Sunday  2017
1st January is being a Sunday  2023
1st January is being a Sunday  2034
1st January is being a Sunday  2040
1st January is being a Sunday  2045 */