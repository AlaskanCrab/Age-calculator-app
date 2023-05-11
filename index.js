const dayTextArea = document.getElementById("dayTextArea");

const monthTextArea = document.getElementById("monthTextArea");

const yearTextArea = document.getElementById("yearTextArea");

const btn = document.getElementById("btn");

const yearText = document.getElementById("yearText");

const monthText = document.getElementById("monthText");

const dayText = document.getElementById("dayText");

const wrongDay = document.getElementById("wrongDay");

const wrongMonth = document.getElementById("wrongMonth");

const wrongYear = document.getElementById("wrongYear");

const topDayText = document.getElementById("topDayText");

const topMonthText = document.getElementById("topMonthText");

const topYearText = document.getElementById("topYearText");

let date = new Date();

let day = date.getDate();

let month = date.getMonth();

let year = date.getFullYear();

let findDayStatus = [];

let findMonthStatus = [];

let findYearStatus = [];

function findDay() {
  if (parseInt(dayTextArea.value) <= 31) {
    dayText.innerHTML = Math.abs(parseInt(dayTextArea.value) - day);
    wrongDay.innerHTML = "";
    topDayText.style.color = "var(--Smoke-grey)";
    findDayStatus = true;
  } else if (dayTextArea.value == "") {
    wrongDay.innerHTML = "This field is required";
  } else {
    dayText.innerHTML = "--";
    wrongDay.innerHTML = "Must be a valid Day";
    topDayText.style.color = "red";
    findDayStatus = false;
  }
}

function findMonth() {
  if (parseInt(monthTextArea.value) <= 12) {
    monthText.innerHTML = Math.abs(parseInt(monthTextArea.value) - (month + 1));
    wrongMonth.innerHTML = "";
    topMonthText.style.color = "var(--Smoke-grey)";
    findMonthStatus = true;
  } else if (monthTextArea.value == "") {
    wrongMonth.innerHTML = "This field is required";
  } else {
    monthText.innerHTML = "--";
    wrongMonth.innerHTML = "Must be a valid Month";
    topMonthText.style.color = "red";
    findMonthStatus = false;
  }
}
function findYear() {
  if (
    parseInt(yearTextArea.value) <= 2023 &&
    parseInt(yearTextArea.value) > 1900
  ) {
    yearText.innerHTML = Math.abs(parseInt(yearTextArea.value) - year) - 1;
    wrongYear.innerHTML = "";
    topYearText.style.color = "var(--Smoke-grey)";
    findYearStatus = true;
  } else if (yearTextArea.value == "") {
    wrongYear.innerHTML = "This field is required";
  } else if (parseInt(yearTextArea.value) > 2023) {
    wrongYear.innerHTML = "Must be in the past";
  } else {
    yearText.innerHTML = "--";
    wrongYear.innerHTML = "Must be a valid Year";
    topYearText.style.color = "red";
    findYearStatus = false;
  }
}

function fieldRequired() {
  btn.addEventListener("click", function () {
    if (
      dayTextArea.value == "" &&
      monthTextArea.value == "" &&
      yearTextArea.value == ""
    ) {
      wrongDay.innerHTML = "This field is required";
      wrongMonth.innerHTML = "This field is required";
      wrongYear.innerHTML = "This field is required";
    }
  });
}
