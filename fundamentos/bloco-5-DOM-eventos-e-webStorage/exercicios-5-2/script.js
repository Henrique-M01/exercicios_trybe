let body = document.body;

let h1 = document.createElement("h1");
h1.innerText = "Exercício 5.2 - JavaScript DOM";

body.appendChild(h1);

let main = document.createElement("main");
main.className = "main-content";

body.appendChild(main);

let sectionCenter = document.createElement("section");
sectionCenter.className = "center-content";

main.appendChild(sectionCenter);

let paragraph = document.createElement("p");
paragraph.innerText = "Lorem ipsum carpe diem !!";
sectionCenter.appendChild(paragraph);

let leftSquare = document.createElement("section");
leftSquare.className = "left-content";
main.appendChild(leftSquare);

let rightSquare = document.createElement("section");
rightSquare.className = "right-content";
main.appendChild(rightSquare);
