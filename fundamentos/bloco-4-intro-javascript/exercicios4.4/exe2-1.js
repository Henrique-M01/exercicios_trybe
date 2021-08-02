function verificaPalindrome(palavra){
    let palindromo = palavra.toString().split('').reverse().join('');
    if (palindromo === palavra){
        console.log(true)
    }
    else {
        console.log(false)
    }
}
verificaPalindrome('amor a roma')

let inteiros = [2, 3, 6, 7, 10, 1];
function retornoIndiceMaiorValor (inteiros){
    let maior = 0;
    for (let key = 0; key < 6; key += 1){
        if (inteiros[maior] < inteiros[key]){
            maior = key;
        }
    }
    return maior
}
console.log(retornoIndiceMaiorValor(inteiros))

let inteiros = [2, 4, 6, 7, 10, 0, -3];
function menorValor (inteiros){
    let menor = 0;
    for (let key in inteiros){
        if (inteiros[menor] > inteiros[key]){
            menor = key;
        }
    }
    return menor;
}
console.log(menorValor(inteiros))