var sentence = "I love coding. Coding is my passion.";
var keyword = "coding";
var replacedSentence = sentence.replace(new RegExp(keyword, "gi"), "programming");
console.log(replacedSentence);