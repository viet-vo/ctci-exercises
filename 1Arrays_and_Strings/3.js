// URLify
// Replace space character in strings with %
// Found out interesting stackoverlow that shows wiki explaination of when you see "%20" or "+"

const urlify = stringToReplace => {
    arrayOfString = stringToReplace.split('');
    for (i = 0; i < arrayOfString.length; i++) {
        if (arrayOfString[i] == " ") {
            arrayOfString[i] = "%20";
        }
    }
    return arrayOfString.join('');
};
module.exports = urlify;