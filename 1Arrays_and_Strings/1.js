// Is Unique: Implement an algorithm to determine if a string has all unique characters. 
// What if you cannot use additional data structures? 

const allUniq = {
    method1: function(word) {
        for (i = word.length - 1; i != 0; i--) {
            j = i - 1;
            do {
                if (word.charAt(i) === word.charAt(j)) {
                    return false;
                } else {
                    j--;
                };
            } while (j > -1);
        };
        return true;
    },
}

module.exports = allUniq;