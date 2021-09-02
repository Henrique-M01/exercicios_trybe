function hof(num ,calback) {
    const game = Math.floor(Math.random() * 5)
    return calback(game, num);
}

function compareNumber(numSorteado, numRecebido) {
    if (numRecebido === numSorteado) {
        return 'Parabéns você ganhou'
    }
    return 'Tente novamente';
} 

console.log(hof(2, compareNumber))