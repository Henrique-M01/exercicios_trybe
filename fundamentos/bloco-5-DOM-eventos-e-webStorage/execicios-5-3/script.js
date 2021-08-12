function createDaysOfTheWeek() {
  const weekDays = [
    "Domingo",
    "Segunda",
    "Terça",
    "Quarta",
    "Quinta",
    "Sexta",
    "Sábado",
  ];
  const weekDaysList = document.querySelector(".week-days");

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement("li");
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  }
}

createDaysOfTheWeek();

// Escreva seu código abaixo.
const dezDaysList = [
  29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
];
function createDays() {
  let ul = document.getElementById("days");
  for (let key = 0; key < dezDaysList.length; key += 1) {
    let li = document.createElement("li");
    li.innerText = dezDaysList[key];
    li.classList.add("day");
    ul.appendChild(li);
    if (
      dezDaysList[key] === 24 ||
      dezDaysList[key] === 25 ||
      dezDaysList[key] === 31
    ) {
      li.classList.add("holiday");
    }
    if (
      dezDaysList[key] === 25 ||
      dezDaysList[key] === 4 ||
      dezDaysList[key] === 11 ||
      dezDaysList[key] === 18
    ) {
      li.classList.add("friday");
    }
  }
}

createDays();

function createButtonHoliday(string) {
  let button = document.createElement("button");
  button.id = "btn-holiday";
  button.innerText = string;
  let divPaiButton = document.getElementsByClassName("buttons-container")[0];
  divPaiButton.appendChild(button);
  button.style.backgroundColor = "blue";
}
createButtonHoliday("Feriados");

// let buttonHoliday = document.getElementById("btn-holiday");
// buttonHoliday.addEventListener("click", changeBackGroundColor);

// function changeBackGroundColor() {
//   let holiday = document.querySelectorAll(".holiday")[0].ba;
//   console.log(holiday);
//   for (let key of holiday){

//   }
// }

function createButtonFriday(string) {
  let buttonFriday = document.createElement("button");
  buttonFriday.id = "btn-holiday";
  buttonFriday.innerText = string;
  let divPaiButton = document.getElementsByClassName("buttons-container")[0];
  divPaiButton.appendChild(buttonFriday);
  buttonFriday.style.backgroundColor = "red";
}
createButtonFriday("Sexta-Feira");
