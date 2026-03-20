function longestWord(words) {
    let longest = "";
    let wordsArray = words.split(" ");
    for(let i = 0; i < wordsArray.length; i++) {
        let word = wordsArray[i].replace(/[^a-zA-Z ]/g, "");
        if(word.length > longest.length) {
            longest = word;
        }
    }
    return longest;
}

console.log(longestWord("fun&!! time"));
console.log(longestWord("I love God"));
