const promise = new Promise((resolve, reject) => {
    const newArray = [];
    
    for (let index = 0; index <= 10; index += 1) {
        const numberRandom = Math.random() * 50
        newArray.push(numberRandom.toFixed()**2);
    }
    
    const sumArray = newArray.reduce((acumulator, acc) => acumulator + acc, 0)
    if (sumArray < 8000){
        resolve(console.log('promisse bem suscedida'))
        return sumArray;
    } else {
        reject(console.log('promisse mal suscedida'))}
}).then(number => {
    console.log(number)
        const divide2 = number / 2;
        const divide3 = number / 3;
        const divide5 = number / 5;
        const divide10 = number / 10;
        const newArray = [divide2, divide3, divide5, divide10]
        return console.log(newArray);
    })
    .catch(console.log("É mais de oito mil! Essa promise deve estar quebrada!"))

console.log(promise)