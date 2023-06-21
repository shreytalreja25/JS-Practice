
function isPalindrome(str) {
    var rev = '';
    for (var i = str.length - 1; i >= 0; i--) {
        rev = rev + str[i];
    }
    for (x = 0; x < str.length; x++) {
        if (str[x] !== rev[x]) {
            // return false;
            console.log("Not a palindrome")
        }
    }
    console.log("Palindrome")
}

isPalindrome("MalyalaM")