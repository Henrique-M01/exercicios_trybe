const lesson1 = {
    materia: 'Matemática',
    numeroEstudantes: 20,
    professor: 'Maria Clara',
    turno: 'manhã',
  };
  
  const lesson2 = {
    materia: 'História',
    numeroEstudantes: 20,
    professor: 'Carlos',
  };
  
  const lesson3 = {
    materia: 'Matemática',
    numeroEstudantes: 10,
    professor: 'Maria Clara',
    turno: 'noite',
  };
let addMorningLesson2 = 
(obj, keyAdd, keyValue) => obj[keyAdd] = keyValue; 
addMorningLesson2(lesson2, 'turno', 'manhã');

const listKeys = obj => Object.keys(obj);
console.log(listKeys(lesson3))

const lengthObj = obj => Object.keys(obj).length;
console.log(lengthObj(lesson3))

const allLessons = Object.assign({}, {lesson1, lesson2, lesson3});
console.log(allLessons)