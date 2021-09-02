// function testingScope(escopo) {
//     if (escopo === true) {
//       let ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
//       ifScope = ifScope + ' ótimo, fui utilizada no escopo !';
//       console.log(ifScope);
//     } else {
//       const elseScope = 'Não devo ser utilizada fora meu escopo (else)';
//       console.log(elseScope);
//     }
//   }

//   testingScope(true);

const testingEscopo = escopo => 
    (escopo === true) ? `Não devo ser utilizada fora do meu escopo (if) ótimo, fui utilizada no escopo !` 
    : `Não devo ser utilizada fora meu escopo (else)`

console.log(testingEscopo(true))

const oddsAndEvens = [13, 3, 4, 10, 7, 2];
const numberorder = oddsAndEvens.sort((a, b) => a -b);


console.log(`Os números ${numberorder} se encontram ordenados de forma crescente!`); 