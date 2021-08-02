let names = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];

function numberCaracterName(names){
    let namesLong = '';
    for (let key in names){
        if(names.length[key] >= names[key]){
            namesLong = names.length[key];
        }
    }
    return namesLong;
}
console.log(numberCaracterName(names))