function firstRecurringCharacter(input) {
    let map = {};

    for(let i = 0; i < input.length; i++) {
        if(map[input[i]] !== undefined) {
            return input[i];
        }
        map[input[i]] = i;
    }
}

console.log(firstRecurringCharacter([2,5,1,2,3,5,1,2,4]));
console.log(firstRecurringCharacter([2,1,1,2,3,5,1,2,4]));
console.log(firstRecurringCharacter([2,3,4,5]));
