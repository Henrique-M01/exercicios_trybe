let body = document.body;

let h1 = document.createElement("h1");
h1.innerText = "Exercício 5.2 - JavaScript DOM";
h1.className = "title";

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

let image = document.createElement("img");
image.className = "small-image";
image.src = "https://picsum.photos/200";
leftSquare.appendChild(image);

let list = document.createElement("ul");
rightSquare.appendChild(list);
let listItem = [
  "um",
  "dois",
  "tres",
  "quatro",
  "cinco",
  "seis",
  "sete",
  "oito",
  "nove",
  "dez",
];
for (let index = 0; index < 10; index += 1) {
  let createList = document.createElement("li");
  createList.innerHTML = listItem[index];
  list.appendChild(createList);
}

for (let index = 0; index < 3; index += 1) {
  let createH3 = document.createElement("h3");
  createH3.className = "description";
  createH3.innerText = "Hello World!!";
  main.appendChild(createH3);
}
main.removeChild(leftSquare);
rightSquare.style.marginRight = "auto";
main.style.backgroundColor = "green";
