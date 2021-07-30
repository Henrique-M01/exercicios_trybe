let n = 5;
let symbols = '*';
let symbolVoid = ' ';
let nDeItensLinha = '';

for (let index = 0; index < n; index += 1){
    if (index < n){
        nDeItensLinha += symbolVoid.repeat((n - index) + symbols)
    } 
    else if (index === n){
        nDeItensLinha += symbols.repeat(n)
    }
    console.log(nDeItensLinha)
}
