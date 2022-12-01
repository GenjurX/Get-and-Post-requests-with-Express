function sumOfArray(array) {
    let sum = 0
    for (const number of array) {
        sum += number
    }
    return sum
}

function returnUnique (array) {
    const unique = [];
    for(let element of array) {
        if(!unique.includes(Number(element))){
            unique.push(Number(element));
        }
    } 
    return unique;
}

export {returnUnique,sumOfArray} ;