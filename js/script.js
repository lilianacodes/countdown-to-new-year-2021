// Set the date we're counting down to
var countDownDate = new Date("Jan 1, 2021 00:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date
  var today = new Date();
  
  // Find the distance between now and the count down date
  var distance = countDownDate - today;
    
  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  // Output the result in an element with id="countdownDate"
  document.getElementById("countdownDate").innerHTML = days + " days " + hours + " hours " + minutes + " minutes " + seconds + " seconds ";
  
  
  /* Set up format for today date */

  // days of the week
  var dayName = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
  var currentDayName = dayName[today.getDay()];
  
  // months
  var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  var currentMonth = months[today.getMonth()];
  
  // day
  var day = String(today.getDate()).padStart(2, '0');

  /* month
  var mm = String(today.getMonth() + 1).padStart(2, '0'); // January is 0!  
  */
  
  // year
  var yyyy = today.getFullYear();
  
  // get current time: hours, minutes and seconds
  var currentHours = today.getHours();
  var currentMinutes = today.getMinutes();
  var currentSeconds = today.getSeconds();
    
  // set format of today date
  // or today = day + ', ' + dd + '/' + mm + '/' + yyyy;
  today = currentDayName + ', ' + day + ' ' + currentMonth + ' ' + yyyy + ' ' + currentHours + " hours " + currentMinutes + " minutes " + currentSeconds + " seconds ";

  
  // Output the result in an element with id="demo2_now"
  // or document.getElementById("demo2_now").innerHTML = "Time until " + today_demo;  
  document.getElementById("currentDate").innerHTML = "Today is " + today;

    
  // If the count down is over, write error text 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("countdownDate").innerHTML = "ERROR! EXPIRED DATE!";
  }
}, 1000);