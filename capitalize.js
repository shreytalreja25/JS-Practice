function capitalizeWords(sentence) {
    var words = sentence.split(" ");
    var cap = [];
    for (var i = 0; i < words.length; i++) {
        var word = words[i];
        var capWord = word.charAt(0).toUpperCase() + word.slice(1);
        cap.push(capWord)
    }
    return cap.join(" ");
}

var sentence = "hello world"
console.log(capitalizeWords(sentence));