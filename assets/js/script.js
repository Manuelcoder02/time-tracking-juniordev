"use strict";

// storing html elements in a variable
const dailyEL = document.querySelector(".daily");
const weeklyEL = document.querySelector(".weekly");
const monthlyEL = document.querySelector(".monthly");

const dailyTitleEL = document.querySelector(".daily-title");
const weeklyTitleEL = document.querySelector(".weekly-title");
const monthlyTitleEL = document.querySelector(".monthly-title");

// work
const workCurrentTime = document.querySelector(".work-current");
const workPreviousTime = document.querySelector(".work-previous");

//play
const playCurrentTime = document.querySelector(".play-current");
const playPreviousTime = document.querySelector(".play-previous");

//study
const studyCurrentTime = document.querySelector(".study-current");
const studyPreviousTime = document.querySelector(".study-previous");

//exercise
const exerciseCurrentTime = document.querySelector(".exercise-current");
const exercisePreviousTime = document.querySelector(".exercise-previous");

//social
const socialCurrentTime = document.querySelector(".social-current");
const socialPreviousTime = document.querySelector(".social-previous");

//self-care
const selfcareCurrentTime = document.querySelector(".self-care-current");
const selfcarePreviousTime = document.querySelector(".self-care-previous");

// functions
const dailyInit = function () {
  //   dailyTitleEL.classList.toggle("focus-color");

  workCurrentTime.textContent = "5hrs";
  workPreviousTime.textContent = "Yesterday - 7hrs";

  playCurrentTime.textContent = "1hr";
  playPreviousTime.textContent = "Yesterday - 2hrs";

  studyCurrentTime.textContent = "0hrs";
  studyPreviousTime.textContent = "Yesterday - 1hr";

  exerciseCurrentTime.textContent = "1hr";
  exercisePreviousTime.textContent = "Yesterday - 1hr";

  socialCurrentTime.textContent = "1hr";
  socialPreviousTime.textContent = "Yesterday - 3hrs";

  selfcareCurrentTime.textContent = "0hrs";
  selfcarePreviousTime.textContent = "Yesterday - 1hr";
};

const weeklyInit = function () {
  workCurrentTime.textContent = "32hrs";
  workPreviousTime.textContent = "Last Week - 36hrs";

  playCurrentTime.textContent = "10hrs";
  playPreviousTime.textContent = "Last Week - 8hrs";

  studyCurrentTime.textContent = "4hrs";
  studyPreviousTime.textContent = "Last Week - 7hrs";

  exerciseCurrentTime.textContent = "4hrs";
  exercisePreviousTime.textContent = "Last Week - 5hrs";

  socialCurrentTime.textContent = "5hrs";
  socialPreviousTime.textContent = "Last Week - 10hrs";

  selfcareCurrentTime.textContent = "2hrs";
  selfcarePreviousTime.textContent = "Last Week - 2hrs";
};

const monthlyInit = function () {
  workCurrentTime.textContent = "103hrs";
  workPreviousTime.textContent = "Last Month - 128hrs";

  playCurrentTime.textContent = "23hrs";
  playPreviousTime.textContent = "Last Month - 29hrs";

  studyCurrentTime.textContent = "13hrs";
  studyPreviousTime.textContent = "Last Month - 19hrs";

  exerciseCurrentTime.textContent = "11hrs";
  exercisePreviousTime.textContent = "Last Month - 18hrs";

  socialCurrentTime.textContent = "21hrs";
  socialPreviousTime.textContent = "Last Month - 23hrs";

  selfcareCurrentTime.textContent = "7hrs";
  selfcarePreviousTime.textContent = "Last Month - 11hrs";
};

// Event listeners
dailyEL.addEventListener("click", dailyInit); //Daily

weeklyEL.addEventListener("click", weeklyInit); //Weekly

monthlyEL.addEventListener("click", monthlyInit); // Monthly
