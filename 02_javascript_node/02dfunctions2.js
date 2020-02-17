


function isClean(word, swearword) {
    //bad style
    var isDirty
    if (word.toLowerCase() == swearword)
        isDirty = true;
    else
        idDirty = false;
    return !isDirty;
}

console.log(isClean("FraK", "frak"));

var swearWords = ["fraque", "fraq", "fudge", "friggin'", "frak", "freakin'"];
var unknownWords = "I made some fudge brownies".split(" ");

var cleanWords = unknownWords.filter(function (suspect) {
    return !(suspect == 'fudge');
});
console.log(cleanWords);

var cleanWords2 = unknownWords.filter((suspect, index, unknownWords) => { return !(suspect == 'fudge'); });
console.log(cleanWords2);



swearWords = ["fraque", "fraq", "fudge", "friggin'", "frak", "freakin'"];
function checkPhrase(phrase, swearWords) {
    var clean = phrase.split(" ");
    var temp = clean;
    console.log(clean);
    for (var i in swearWords) {
        console.log("Checking " + swearWords[i]);
        temp = clean.filter((suspect, index, clean) => { return !(suspect == swearWords[i]); })
        clean = temp.slice();
        console.log(clean);
    }
    return clean;
}
var safe = checkPhrase("I made some friggin' fudge brownies", swearWords);
console.log("Safe is " + safe);


