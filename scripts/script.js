// Set the date we're counting down to
var countDownDate = new Date("Jan 1, 2021 00:00:00").getTime();

// Add zero before one character number (0-9)
function addZero(i) {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
}

// Update the countdown every 1 second
var x = setInterval(function() {

  // Set today's date
  var today = new Date();
  
  // Find the distance between now and the countdown date
  var distance = countDownDate - today;
    
  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  /* Output the result in an element with id="countdownDate"
     document.getElementById("countdownDate").innerHTML = days + " days " + hours + " hours " + minutes + " minutes " + seconds + " seconds "; */

  // Output the result in flex container
  document.getElementById("days").innerHTML = days;
  document.getElementById("hours").innerHTML = hours;
  document.getElementById("minutes").innerHTML = minutes;
  document.getElementById("seconds").innerHTML = seconds;

  /* Set up format for today date */

  // Get currentDayName of the week
  var dayName = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
  var currentDayName = dayName[today.getDay()];
  
  // Get currentMonth
  var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  var currentMonth = months[today.getMonth()];
  
  // Get day
  var day = String(today.getDate()).padStart(2, '0');

  // Get year
  var yyyy = today.getFullYear();

  // Call function addZero to display current time in format (HH:MM:SS)
  var currentHours = addZero(today.getHours());
  var currentMinutes = addZero(today.getMinutes());
  var currentSeconds = addZero(today.getSeconds());
    
  // Set format of today date
  // today = currentDayName + ', ' + day + ' ' + currentMonth + ' ' + yyyy + ' ' + currentHours + " hours " + currentMinutes + " minutes " + currentSeconds + " seconds ";
  today = currentDayName + ', ' + day + ' ' + currentMonth + ' ' + yyyy + ' (' + currentHours + ' : ' + currentMinutes + ' : ' + currentSeconds + ')';

  // Output the result in an element with id="currentDate"
  document.getElementById("currentDate").innerHTML = "Time until " + today;

  // If the countdown is over, write error text 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("countdownDate").innerHTML = "ERROR! EXPIRED DATE!";
  }
}, 1000);