// Write a JavaScript function named reverseString that takes a string as a parameter and returns the reverse of that string. For example, if the string is "hello," the function should return "olleh."

// function reverseString(str) {
//     var rev = '';
//     for(var i = str.length -1;i>=0;i--){
//         rev = rev + str[i];
//     }
//     console.log(rev);
//   }
  
//   reverseString("Shrey");

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