var unknownWords = "I made some Fudge brownies".split(" ");

var cleanWords = unknownWords.filter(function (suspect) {
    return !(suspect == 'fudge');
});
console.log(cleanWords);

cleanWords = unknownWords.filter((suspect) => {
    return !(suspect.toLowerCase() == 'fudge');
});
console.log( cleanWords );