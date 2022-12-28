
var sentence  = "This dinner is not that bad ! You cook well";
var wordNot   = sentence.indexOf("not");
var wordBad   = sentence.indexOf("bad");


if(wordBad > wordNot){
    sentence = sentence.replace(/not(?:\s[a-zA-Z_]*\s|\s)bad/gm,"good");
    console.log(sentence);
}else{
    console.log(sentence);
}