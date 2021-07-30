let n = 5;
let symbols = '*';
let symbolVoid = ' ';
let nDeItensLinha = '';

for (let index = 0; index < n; index += 1){
    if(index !== 0){
        nDeItensLinha += symbolVoid + symbols;
    }
    else {
        nDeItensLinha += symbols;
    }
    console.log(nDeItensLinha)
}
