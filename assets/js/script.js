// Array of special characters to be included in password
var specialCharacters = [
    '@',
    '%',
    '+',
    '\\',
    '/',
    "'",
    '!',
    '#',
    '$',
    '^',
    '?',
    ':',
    ',',
    ')',
    '(',
    '}',
    '{',
    ']',
    '[',
    '~',
    '-',
    '_',
    '.'
  ];
  
  // Array of numeric characters to be included in password
  var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  
  // Array of lowercase characters to be included in password
  var lowerCasedCharacters = [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z'
  ];
  
  // Array of uppercase characters to be included in password
  var upperCasedCharacters = [
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
    'J',
    'K',
    'L',
    'M',
    'N',
    'O',
    'P',
    'Q',
    'R',
    'S',
    'T',
    'U',
    'V',
    'W',
    'X',
    'Y',
    'Z'
  ];
  
  // Function to prompt user for password options
 
    var password=document.getElementById("password");
    function genpassword() {
    var chars = "123456789%+\\/'!#$^?:,)(}{][~_-.abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var passwordLength = 9 ;
    var password ="";

   for (var i=0; i <= passwordLength; i++) {
    var randomNumber = Math.floor(Math.random()*chars.Length);
    password += Chars.substring(randomNumber, randomNumber +1);
   }
   //APPLY IT
  document.getElementById("password").value = password;
  }
  function copPassoword () {
    var copyText = document.getElementById("passport");
    copyText.Select();
    copyText.setSelectionRange(1000);
    document.execCommand("copy");
  }

  
  // Add event listener to generate button
  generateBtn.addEventListener('click', writePassword);