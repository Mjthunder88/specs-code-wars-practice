// Problem 1

// As the name may already reveal, it works basically like a Fibonacci, but summing the last 3 (instead of 2) numbers of the sequence to generate the next. And, worse part of it, regrettably I won't get to hear non-native Italian speakers trying to pronounce it :(

// We need to loopp through the signature/array but only by the give number/(n)
// So the inital signature will add all 3 numbers together but then from that point on
// We need to add the sum of the inital 3 numbers plus the previous 2 numbers
// Then repeat until we have gone n number of times.

// And if the signature is empty we return an empty array

// updated notes
// We neeed to push the sums to to a new array and return that array.

function tribonacci(signature, n) {
  let newSum = 0;
  let result = [];

  if (signature.length < 1) {
    return signature;
  }
  if (n < 1) {
    return [];
  }
  if (n === 1) {
    return [signature[0]];
  } else if (n === 2) {
    return [signature[0], signature[1]]
  }
  result.push(...signature);
  // console.log(result)
  for (let i = 0; i < n - 3; i++) {
    newSum = result[result.length - 1] + result[result.length - 3] + result[result.length - 2];
    // console.log(newSum)
    result.push(newSum);
  }
  return result;
}

// console.log(tribonacci([1, 1, 1], 10));
// console.log(tribonacci([], 10));
// console.log(tribonacci([1, 1, 1], 0));
// console.log(tribonacci([1, 1, 1], 1));
// console.log(tribonacci([1, 1, 1], 2));


// Problem 2

// Story
// Ben has a very simple idea to make some profit: he buys something and sells it again. Of course, this wouldn't give him any profit at all if he was simply to buy and sell it at the same price. Instead, he's going to buy it for the lowest possible price and sell it at the highest.

// Task
// Write a function that returns both the minimum and maximum number of the given list/array.


function minMax(arr){
  let answer =[]
  answer.push(Math.min(...arr), Math.max(...arr))
  // console.log(answer)
  return answer
}

// console.log(minMax([1, 2, 3, 4, 5]))
// console.log(minMax([2334454, 5]))
// console.log(minMax([5]))


// Problem 3 

// This kata is about multiplying a given number by eight if it is an even number and by nine otherwise.

function simpleMultiplication(number) {
    if (number % 2 === 0) {
      return number * 8
    } else {
      return number * 9
    }
}

// console.log(simpleMultiplication(2))
// console.log(simpleMultiplication(5))
// console.log(simpleMultiplication(10))
// console.log(simpleMultiplication(13))  

// problem 4


// Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.

// It should remove all values from list a, which are present in list b keeping their order.


// * I need to compare each array to the other and check if any numbers in the secound/b array are the same as any in the first/a array. 
// If there is then I need to remove all of the repeating numbers from a 


function arrayDiff(a, b) {
  let answer = []
  for (let i = 0; i < a.length; i++) {
    if (b.length < 1) {
      return a
    }
    for (let j = i + 1; j < b.length; j++) {
      if (a[i] === b[j]) {
        a.splice(i, 1)
      }
    }
  }
  return a
}


// console.log(arrayDiff([1,2],[1])) // == [2]         

// ? Problem 5

// ? Given an array of ones and zeroes, convert the equivalent binary value to an integer.

//? Eg: [0, 0, 0, 1] is treated as 0001 which is the binary representation of 1.

const binaryArrayToNumber = arr => {
  let answer = 0
  let powerOf = 0
  for (let i = arr.length - 1; i > -1; i--) {
    // console.log(i)
   answer += arr[i] * Math.pow(2, powerOf)
   ++powerOf
  }
    //  console.log('--------------')
  return answer 
};

// console.log(binaryArrayToNumber([0, 0, 0, 1])) //* 1
// console.log(binaryArrayToNumber([0, 0, 1, 0])) //* 2
// console.log(binaryArrayToNumber([0, 1, 0, 1])) //* 5
// console.log(binaryArrayToNumber([1, 0, 0, 1])) //* 9



// ? Problem 6

// Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.

// "This is an example!" ==> "sihT si na !elpmaxe"
// "double  spaces"      ==> "elbuod  secaps"

function reverseWords(str) {
  let reversed = ''
  let newString = ''
  let finalAns = ''
  let joinedStr = ''
newString = str.split(' ')
// console.log(newString)
let answer = newString.forEach(element => {
  // console.log(element)
  newString = element.split('')
  // console.log(newString)
   reversed = newString.reverse()
  // console.log(reversed)
  joinedStr = reversed.join('')
  // console.log(joinedStr)
   finalAns += joinedStr
});
  return finalAns
}


// console.log(reverseWords("This is an example!"))
// console.log(reverseWords("double  spaces"))

// ! Come back


// ? problem 7  // Finished! 

// ? An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.



function isIsogram(str){
  let lowercaseStr = str.toLowerCase()
  console.log(lowercaseStr)
  for (let i = 0; i < str.length; i++) {
    for (let k = i + 1; k < str.length; k++) {
      if (lowercaseStr[i] === lowercaseStr[k]) {
          return false
      }
    }
  }
  return true
}

// console.log(isIsogram("Dermatoglyphics"))       // * "Dermatoglyphics" = true
// console.log(isIsogram("moose"))     // * "moose" = false
// console.log(isIsogram("aba"))     // * "aba" = false


//  ? Problem 8 Finished!

// ? Timmy & Sarah think they are in love, but around where they live, they will only know once they pick a flower each. If one of the flowers has an even number of petals and the other has an odd number of petals it means they are in love.

// ? Write a function that will take the number of petals of each flower and return true if they are in love and false if they aren't.




function lovefunc(flower1, flower2){
  if (flower1 % 2 === 0 && flower2 % 2 !== 0 || flower2 % 2 === 0 && flower1 % 2 !== 0) {
    return true
  }
   else { 
    return false
   }
}

// console.log(lovefunc(1,4))  // * true
// console.log(lovefunc(2,2))  // * false
// console.log(lovefunc(0,1))  // * true
// console.log(lovefunc(0,0))  // * false


// ? Problem 9 

// ? Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.


function duplicateCount(text){
  let lowercase = text.toLowerCase()
  let textArr = lowercase.split('')
  let duplicates = textArr.filter((element, index) => {
    return textArr.indexOf(element) !== index
  })
  // console.log(duplicates)
  let answer = [...new Set(duplicates)]
  return answer.length
}

// console.log(duplicateCount("")) // 0
// console.log(duplicateCount("abcde")) // 0
// console.log(duplicateCount("aabbcde")) // 2
// console.log(duplicateCount("aabBcde")) // 2
// console.log(duplicateCount("Indivisibility")) // 1
// console.log(duplicateCount("Indivisibilities")) // 2


// ? Problem 10 
// ? Very simple, given an integer or a floating-point number, find its opposite.

function opposite(number) {
  if(number === 0) {
    return 0
  } else {
    return number * -1
  }
}

// console.log(opposite(1)) // * -1
// console.log(opposite(14)) // * -14
// console.log(opposite(0)) // * 0
// console.log(opposite(-5)) // * 5
// console.log(opposite(4.24)) // * -4.25
