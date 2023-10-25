// 1.Define a function, as a function declaration, maxOfTwoNumbersthat takes two numbers as arguments and returns the largest of them. If they are the same, return that number. Use the if-else construct or a ternary expression - the Math.max method is not allowed.


function maxOfTwoNumbers(a, b) {
  if (a >= b) {
    return a;
  } else {
    return b;
  }
}
  // console.log(maxOfTwoNumbers(295,95));

//=================================================

// 2.Define a function, as a function expression, maxOfThreethat takes three numbers as arguments and returns the largest of them. Again, the Math.max method is not allowed.


function maxOfThree(a, b, c) {
  if(a >= b && a >= c) {
      return a;
  } else if (b >= a && b >= c) {
      return b;
  } else {
   return c;
  }
} 
//   console.log(maxOfThree(350, 250, 150))

//=====================================================
// 5.Define a function, as a function declaration, multiplyArraythat takes an array of numbers and returns the product those numbers. For example, multiplyArray([2, 4, 5]);would return 40.

const multiplyArray = (arr) => {
  if (arr.length === 0) {
    return 1;
  }
  return arr[0] * multiplyArray(arr.slice(1));
}
// console.log(multiplyArray([2,6,24,16]));
//====================================================
// 4.Define a function, as a function expression, sumArraythat takes an array of numbers and returns the sum of those numbers. For example, sumArray([2, 4, 5]);would return 11.

const data = [33, 45, 8, 27];
 function sumArray (input) {
    let results = 0; 
    for (const element of input) {
        results += element
    }
    return results;
 } 
//  console.log(sumArray(data))
//====================================================
// 3.Define a function, as a function declaration, isCharAVowelthat takes a character as an argument and returns true if it is a vowel, false otherwise.
function isCharAVowel (char) {
 
  if (char && 'a' && 'e' && 'i' && 'o' && 'u') {
      return "The Character is a Vowel";
  } else {
   
    return "The Character is not a vowel";
  }
}

// console.log(isCharAVowel('u'));