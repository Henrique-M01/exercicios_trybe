let salario = 5000;

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
console.log(salario)