function soma (a, b){
    return a + b;
}

function subtrai (a , b){
   return a - b;
}

function multiplica (a, b){
    return a * b;
}
function divide (a, b){
    return a / b;
}
function modulo (a, b){
    return a % b;
}
function retornoMaior (a, b){
    if (a > b){
        return console.log('a é maior q b.')
    } else {
        return console.log('b é maior q a.')
    }
}
function retornoMaiorQ3 (a, b, c){
    if (a > b && a > c){
        return console.log("A é maior que B e C.")
    }
    else if (b > a && b > c){
        return console.log("B é maior que A e C.")
    }
    else {
        return console.log("C é maior que A e B.")
    }
}
function exe4 (a){
    if (a > 0){
        return console.log("positive");
    }
    else if (a < 0){
        return console.log("negative");
    }
    else {
        return console.log("zero")
    }    
}
function exe5 (anguloA, anguloB, anguloC){
    if (anguloA > 0 && anguloB > 0 && anguloC > 0){
        let triang = anguloA + anguloB + anguloC;
    if (triang == 180){
        return console.log("true");
    }
    else {
        return console.log("false")
    }
    } else {
        return console.log("Números negativos são invalidos para angulos.")
    }
}
function exe6(peca){
    switch (peca){
        case "bispo":
            return console.log("Bispo => Diagonais.");
                break;
        case "peao":
            return console.log("Peão => Anda para frente.");
                break;
        case "rainha":
            return console.log("Rainha => Anda em qualquer direção e quantas casas quiser.");
                break;
        case "rei":
            return console.log("Rei => Anda em qualquer direção, mas apenas 1 casa.");
                break;
        case "cavalo":
            return console.log("Cavalo => Anda no formato de 'L'.")
                break;
        case "torre":
            return console.log("Torre => Anda sempre na vertical ou horizontal e anda quantas casas quiser.")
                break;
        default:
            return console.log("Esta peça não existe.")
    }
}
function exe7 (nota){
    if (nota >= 90){
        return console.log("Você tirou A");
    }
    else if (nota >= 80 && nota < 90){
        return console.log("Você tirou B.");
    }
    else if (nota >= 70 && nota < 80){
        return console.log("Você tirou C.");
    }
    else if (nota >= 60 && nota < 70){
        return console.log("Você tirou D.");
    }
    else if (nota >= 50 && nota < 60){
        return console.log("Você tirou E")
    }
    else if(nota >= 0 && nota < 50){
        return console.log("Você tirou F.")
    }
    else {
        return console.log("Erro de cálculo. Nota não identificada.")
    }
}
function exe8 (a, b, c){
    if ((a % 2) === 0 || (b % 2) === 0 || (c % 2) === 0){
        return console.log("True")
    }
    else {
        return console.log("False")
    }
}
function exe9 (a, b, c){
    if ((a % 2) === 1 || (b % 2) === 1 || (c % 2) === 1){
        return console.log("True")
    }
    else {
        return console.log("False")
    }
}
function exe10 (custoProd, vendaProd){
    let custoTotal = custoProd + (custoProd/5);
    console.log(custoTotal)
    let lucroProd = vendaProd - custoTotal;
    let venda1k = lucroProd * 1000;
    return console.log("A empresa lucrou " + venda1k + " com a venda do produto.")
}
function exe11 (salario){
    if (salario < 1556.94){
        salario = salario - (salario * (8/100)); 
    }
    else if (salario >= 1556.94 && salario < 2594.92){
        salario = salario - (salario * (9/100));
    }
    else if (salario >= 2594.93 && salario < 5189.82){
        salario = salario - (salario * (11/100));
    }
    else {
        salario = salario - 570.88;
    }
    console.log("Seu salário sem INSS é: " + salario + "$")
    
    if (salario < 1903.98){
        console.log("Seu salário líquido é de: " + salario + "$")
    }
    else if (salario >= 1903.98 && salario < 2826.65){
        salario = salario - (((7.5/100) * salario) - 142.90);
    }
    else if (salario >= 2826.66 && salario < 3751.05){
        salario = salario - (((15/100) * salario) - 354.80);
    }
    else if (salario >= 3751.05 && salario < 4664.68){
        salario = salario - (((22.5/100) * salario) - 636.13);
    }
    else {
        salario = salario - (((27.5/100) * salario) - 869.36)
    }
    return console.log(salario)
}
