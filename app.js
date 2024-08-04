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

  let completeMilliseconds = diff;
  let years = diff / (1000 * 60 * 60 * 24 * 30 * 12);
  let months =
    (diff % (1000 * 60 * 60 * 24 * 30 * 12)) / (1000 * 60 * 60 * 24 * 30);
  let days = (diff % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24);
  let hours = (diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60);
  let minutes = (diff % (1000 * 60 * 60)) / (1000 * 60);
  let seconds = (diff % (1000 * 60)) / 1000;
  let milliseconds = diff % (1000 * 60);
  secondsOutput.innerHTML = Math.floor(seconds);
  minutesOutput.innerHTML = Math.floor(minutes);
  hoursOutput.innerHTML = Math.floor(hours);
  daysOutput.innerHTML = Math.floor(days);
  monthsOutput.innerHTML = Math.floor(months);
  yearsOutput.innerHTML = Math.floor(years);
  millisecondsOutput.innerHTML = Math.floor(milliseconds);
  output.innerHTML = `${Math.floor(years)} years, ${Math.floor(
    months
  )} Months & ${Math.floor(days)} days`;
}

userInput.addEventListener("keypress", (event) => {
  if (event.code == "Enter") {
    console.log(event.code);
    calculate();
  }
});
