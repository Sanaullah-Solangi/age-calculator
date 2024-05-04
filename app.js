var userInput = document.getElementById("dob");
var btn = document.querySelector("#btn");
var yearsOutput = document.querySelector(".years");
var monthsOutput = document.querySelector(".months");
var daysOutput = document.querySelector(".days");
var hoursOutput = document.querySelector(".hours");
var minutesOutput = document.querySelector(".minutes");
var secondsOutput = document.querySelector(".seconds");
var millisecondsOutput = document.querySelector(".milliseconds");
var output = document.querySelector(".output");

function calculate() {
  var dob = new Date(userInput.value);
  var now = new Date();
  var diff = now - dob;

  var completeMilliseconds = diff;
  var seconds = diff / 1000;
  var minutes = diff / (1000 * 60);
  var hours = diff / (1000 * 60 * 60);
  var days = diff / (1000 * 60 * 60 * 24);
  var months = diff / (1000 * 60 * 60 * 24 * 30);
  var years = diff / (1000 * 60 * 60 * 24 * 30 * 12);
  millisecondsOutput.innerHTML = Math.floor(completeMilliseconds);
  secondsOutput.innerHTML = Math.floor(seconds);
  minutesOutput.innerHTML = Math.floor(minutes);
  hoursOutput.innerHTML = Math.floor(hours);
  daysOutput.innerHTML = Math.floor(days);
  monthsOutput.innerHTML = Math.floor(months);
  yearsOutput.innerHTML = Math.floor(years);

  output.innerHTML = `${Math.floor(years)} years, ${Math.floor(
    months
  )} Months & ${Math.floor(days)} days`;
}
