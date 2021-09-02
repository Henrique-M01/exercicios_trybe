const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

function hof(gabarito, answerStudent, callback) {
    return callback(gabarito, answerStudent);
}


function compareAnswer(gabarito, answerStudent) {
    let countAnswers = 0;
    for (let key = 0; key < gabarito.length; key += 1) {
        if (gabarito[key] === answerStudent[key]){
            countAnswers += 1;
        } else if (gabarito[key] !== answerStudent[key]) {
            countAnswers -= 0.5;
        }
    }
    return countAnswers;
}

console.log(hof(RIGHT_ANSWERS, STUDENT_ANSWERS, compareAnswer));