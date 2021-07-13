//TODO Write a JavaScript program where the program takes a random integer between 1 to 10, the user is then prompted to input a guess number. If the user input matches with guess number, the program will display a message "Good Work" otherwise display a message "Not matched"

//Get a random integer from 0 to n inclusive;
//n is the number of times the loop will run

// const number = Math.ceil(Math.random() * n);
//The Math.ceil() function is used to get the smallest integer greater than or equal to a given number.

function isMatched(gnum){
// Get a random integer from 1 to 10 inclusive
 const num = Math.ceil(Math.random() * 10);
 if (gnum == num)
   console.log('Matched');
  else
   console.log('Not matched, the number was '+gnum);
}

isMatched(5);

