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
    return [signature[0], signature[1]];
  }
  result.push(...signature);
  // console.log(result)
  for (let i = 0; i < n - 3; i++) {
    newSum =
      result[result.length - 1] +
      result[result.length - 3] +
      result[result.length - 2];
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

function minMax(arr) {
  let answer = [];
  answer.push(Math.min(...arr), Math.max(...arr));
  // console.log(answer)
  return answer;
}

// console.log(minMax([1, 2, 3, 4, 5]))
// console.log(minMax([2334454, 5]))
// console.log(minMax([5]))

// Problem 3

// This kata is about multiplying a given number by eight if it is an even number and by nine otherwise.

function simpleMultiplication(number) {
  if (number % 2 === 0) {
    return number * 8;
  } else {
    return number * 9;
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
  let answer = [];
  for (let i = 0; i < a.length; i++) {
    if (b.length < 1) {
      return a;
    }
    for (let j = i + 1; j < b.length; j++) {
      if (a[i] === b[j]) {
        a.splice(i, 1);
      }
    }
  }
  return a;
}

// console.log(arrayDiff([1,2],[1])) // == [2]

// ? Problem 5

// ? Given an array of ones and zeroes, convert the equivalent binary value to an integer.

//? Eg: [0, 0, 0, 1] is treated as 0001 which is the binary representation of 1.

const binaryArrayToNumber = (arr) => {
  let answer = 0;
  let powerOf = 0;
  for (let i = arr.length - 1; i > -1; i--) {
    // console.log(i)
    answer += arr[i] * Math.pow(2, powerOf);
    ++powerOf;
  }
  //  console.log('--------------')
  return answer;
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
  let reversed = "";
  let newString = "";
  let finalAns = "";
  let joinedStr = "";
  newString = str.split(" ");
  // console.log(newString)
  let answer = newString.forEach((element) => {
    // console.log(element)
    newString = element.split("");
    // console.log(newString)
    reversed = newString.reverse();
    // console.log(reversed)
    joinedStr = reversed.join("");
    // console.log(joinedStr)
    finalAns += joinedStr;
  });
  return finalAns;
}

// console.log(reverseWords("This is an example!"))
// console.log(reverseWords("double  spaces"))

// ! Come back

// ? problem 7  // Finished!

// ? An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

function isIsogram(str) {
  let lowercaseStr = str.toLowerCase();
  console.log(lowercaseStr);
  for (let i = 0; i < str.length; i++) {
    for (let k = i + 1; k < str.length; k++) {
      if (lowercaseStr[i] === lowercaseStr[k]) {
        return false;
      }
    }
  }
  return true;
}

// console.log(isIsogram("Dermatoglyphics"))       // * "Dermatoglyphics" = true
// console.log(isIsogram("moose"))     // * "moose" = false
// console.log(isIsogram("aba"))     // * "aba" = false

//  ? Problem 8 Finished!

// ? Timmy & Sarah think they are in love, but around where they live, they will only know once they pick a flower each. If one of the flowers has an even number of petals and the other has an odd number of petals it means they are in love.

// ? Write a function that will take the number of petals of each flower and return true if they are in love and false if they aren't.

function lovefunc(flower1, flower2) {
  if (
    (flower1 % 2 === 0 && flower2 % 2 !== 0) ||
    (flower2 % 2 === 0 && flower1 % 2 !== 0)
  ) {
    return true;
  } else {
    return false;
  }
}

// console.log(lovefunc(1,4))  // * true
// console.log(lovefunc(2,2))  // * false
// console.log(lovefunc(0,1))  // * true
// console.log(lovefunc(0,0))  // * false

// ? Problem 9

// ? Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.

function duplicateCount(text) {
  let lowercase = text.toLowerCase();
  let textArr = lowercase.split("");
  let duplicates = textArr.filter((element, index) => {
    return textArr.indexOf(element) !== index;
  });
  // console.log(duplicates)
  let answer = [...new Set(duplicates)];
  return answer.length;
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
  if (number === 0) {
    return 0;
  } else {
    return number * -1;
  }
}

// console.log(opposite(1)) // * -1
// console.log(opposite(14)) // * -14
// console.log(opposite(0)) // * 0
// console.log(opposite(-5)) // * 5
// console.log(opposite(4.24)) // * -4.25

// ? Problem 11

// ? In this kata you are required to, given a string, replace every letter with its position in the alphabet.

// ? If anything in the text isn't a letter, ignore it and don't return it.

let alphabet = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

function alphabetPosition(text) {
  const lowerCase = text.toLowerCase().split(" ").join("");
  let answer = [];
  let char = "";
  // console.log(lowerCase)
  for (let i = 0; i < lowerCase.length; i++) {
    char = lowerCase.charAt(i);
    if (alphabet.indexOf(char) > -1) {
      answer.push(alphabet.indexOf(char) + 1);
    }
  }
  let finalAnswer = answer.join(" ");
  return finalAnswer;
}

// console.log(alphabetPosition("The sunset sets at twelve o' clock.") // * "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11"

// ? Problem 12

// ? Character recognition software is widely used to digitise printed texts. Thus the texts can be edited, searched and stored on a computer.

// ? When documents (especially pretty old ones written with a typewriter), are digitised character recognition softwares often make mistakes.

// ? Your task is correct the errors in the digitised text. You only have to handle the following mistakes:

// ? S is misinterpreted as 5
//  ?O is misinterpreted as 0
// ? I is misinterpreted as 1
// ? The test cases contain numbers only by mistake.

function correct(string) {
  let arr = string.split("");
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "5") {
      arr.splice(i, 1, "S");
    } else if (arr[i] === "0") {
      arr.splice(i, 1, "O");
    } else if (arr[i] === "1") {
      arr.splice(i, 1, "I");
    }
  }
  let answer = arr.join("");
  return answer;
}

// console.log(correct("L0ND0N")); // *"LONDON"
// console.log(correct("DUBL1N")); // *"DUBLIN"
// console.log(correct("51NGAP0RE")); //*"SINGAPORE"
// console.log(correct("BUDAPE5T")) // *"BUDAPEST"
// console.log(correct("PAR15")) //* "PARIS"

// ? Problem

const welcome = {
  english: "Welcome",
  czech: "Vitejte",
  danish: "Velkomst",
  dutch: "Welkom",
  estonian: "Tere tulemast",
  finnish: "Tervetuloa",
  flemish: "Welgekomen",
  french: "Bienvenue",
  german: "Willkommen",
  irish: "Failte",
  italian: "Benvenuto",
  latvian: "Gaidits",
  lithuanian: "Laukiamas",
  polish: "Witamy",
  spanish: "Bienvenido",
  swedish: "Valkommen",
  welsh: "Croeso",
};

function greet(language) {
  switch (language) {
    case "english":
      return welcome.english;

    case "czech":
      return welcome.czech;
      break;
    case "danish":
      return welcome.danish;
      break;
    case "dutch":
      return welcome.dutch;
      break;
    case "estonian":
      return welcome.estonian;
      break;
    case "finnish":
      return welcome.finnish;
      break;
    case "flemish":
      return welcome.flemish;
      break;
    case "french":
      return welcome.french;
      break;
    case "german":
      return welcome.german;
      break;
    case "irish":
      return welcome.irish;
      break;
    case "italian":
      return welcome.italian;
      break;
    case "latvian":
      return welcome.latvian;
      break;
    case "lithuanian":
      return welcome.lithuanian;
      break;
    case "polish":
      return welcome.polish;
      break;
    case "spanish":
      return welcome.spanish;
      break;
    case "swedish":
      return welcome.swedish;
      break;
    case "welsh":
      return welcome.welsh;
      break;
    default:
      return "Welcome";
  }
}

// console.log(greet('english'))

// ? problem 14

// ? Count the number of divisors of a positive integer n.

// ? Random tests go up to n = 500000.

function getDivisorsCnt(n) {
  let count = 0;
  let answer = 0;
  while (count < 500000) {
    if (n % count === 0) {
      answer++;
    }
    count++;
  }
  return answer;
}

// console.log(getDivisorsCnt(4))  // * --> 3 (1, 2, 4)
// console.log(getDivisorsCnt(5))  // * 2 (1, 5)
// console.log(getDivisorsCnt(12)) // * 6 (1, 2, 3, 4, 6, 12)
// console.log(getDivisorsCnt(30)) // * 8 (1, 2, 3, 5, 6, 10, 15, 30)

// ? problem 15

// ? You ask a small girl,"How old are you?" She always says, "x years old", where x is a random number between 0 and 9.

// ? Write a program that returns the girl's age (0-9) as an integer.

// ? Assume the test input string is always a valid string. For example, the test input may be "1 year old" or "5 years old". The first character in the string is always a number.

function getAge(inputString) {
  let answer = parseInt(inputString);
  return answer;
}

// console.log(getAge("4 years old")) //, 4

// ? problem 16

// ?   There is a bus moving in the city which takes and drops some people at each bus stop.
// ? You are provided with a list (or array) of integer pairs. Elements of each pair represent the number of people that get on the bus (the first item) and the number of people that get off the bus (the second item) at a bus stop.
// ? Your task is to return the number of people who are still on the bus after the last bus stop (after the last array). Even though it is the last bus stop, the bus might not be empty and some people might still be inside the bus, they are probably sleeping there :D

// ? The second value in the first pair in the array is 0, since the bus is empty in the first bus stop.

var number = function (busStops) {
  // console.log(busStops[0][0])
  let totalPeople = 0;
  for (let i = 0; i < busStops.length; i++) {
    totalPeople += busStops[i][0];
    totalPeople -= busStops[i][1];
  }
  return totalPeople;
};

// console.log(number([[10,0],[3,5],[5,8]])) // *,5;
// console.log(number([[3,0],[9,1],[4,10],[12,2],[6,1],[7,10]])) // *,17;
// console.log(number([[3,0],[9,1],[4,8],[12,2],[6,1],[7,8]])) // *,21;
// console.log(number([[0,0]])) // *,0

// ? problem 17

function XO(str) {
  let countX = 0;
  let countO = 0;
  let lowerCase = str.toLowerCase();
  for (let i = 0; i < lowerCase.length; i++) {
    if (lowerCase[i] === "x") {
      countX++;
    } else if (lowerCase[i] === "o") {
      countO++;
    }
  }
  if (countX === countO) {
    return true;
  } else {
    return false;
  }
}

// console.log(XO("ooxx"))// * => true
// console.log(XO("xooxx"))// * => false
// console.log(XO("ooxXm"))// * => true
// console.log(XO("zpzpzpp"))// * => true // when no 'x' and 'o' is present should return true
// console.log(XO("zzoo"))// * => false

// ? Problem 18

//? Alex just got a new hula hoop, he loves it but feels discouraged because his little brother is better than him

//? Write a program where Alex can input (n) how many times the hoop goes round and it will return him an encouraging message :)

//? If Alex gets 10 or more hoops, return the string "Great, now move on to tricks".
//? If he doesn't get 10 hoops, return the string "Keep at it until you get it".

function hoopCount(n) {
  return n >= 10
    ? "Great, now move on to tricks"
    : "Keep at it until you get it";
}

// console.log((hoopCount(3))) //,"Keep at it until you get it"
// console.log((hoopCount(11))) //,"Great, now move on to tricks"

// ? problem 19

// ?Your task is to create a function that does four basic mathematical operations.

// ?The function should take three arguments - operation(string/char), value1(number), value2(number).
//? The function should return result of numbers after applying the chosen operation.

function basicOp(operation, value1, value2) {
  if (operation === "+") {
    return value1 + value2;
  } else if (operation === "-") {
    return value1 - value2;
  } else if (operation === "*") {
    return value1 * value2;
  } else if (operation === "/") {
    return value1 / value2;
  }
}

// ? problem 20

function points(games) {
  let points = 0;
  games.forEach((element, index) => {
    if (+element[0] > +element[2]) {
      points += 3;
    } else if (+element[0] < +element[2]) {
      points += 0;
    } else if (+element[0] === +element[2]) {
      points += 1;
    }
  });
  return points;
}

// console.log(points(["1:0","2:0","3:0","4:0","2:1","3:1","4:1","3:2","4:2","4:3"])) // * 30

// ? Problem 21

// ? You were camping with your friends far away from home, but when it's time to go back, you realize that your fuel is running out and the nearest pump is 50 miles away! You know that on average, your car runs on about 25 miles per gallon. There are 2 gallons left.

// ? Considering these factors, write a function that tells you if it is possible to get to the pump or not.

// ? Function should return true if it is possible and false if not.

const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
  let milesLeft = mpg * fuelLeft;
  if (milesLeft < distanceToPump) {
    return false;
  } else {
    return true;
  }
};

// console.log(zeroFuel(50, 25, 2)) // *true
// console.log(zeroFuel(100, 50, 1)) // * false

// ? Problem 22

// ? Create a function with two arguments that will return an array of the first n multiples of x.

// ? Assume both the given number and the number of times to count will be positive numbers greater than 0.

// ? Return the results as an array or list ( depending on language ).

function countBy(x, n) {
  let z = [];
  let i = 1;
  while (i <= n) {
    z.push(x * i);

    i++;
  }
  return z;
}

// console.log(countBy(1,10)) // * === [1,2,3,4,5,6,7,8,9,10]
// console.log(countBy(2,5)) // * === [2,4,6,8,10]

// ? Problem 23

// ?This function should test if the factor is a factor of base.

// ?Return true if it is a factor or false if it is not.

function checkForFactor(base, factor) {
  return base % factor === 0 ? true : false;
}

// ? Problem 24

// ? It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string. You're given one parameter, the original string. You don't have to worry with strings with less than two characters.

function removeChar(str) {
  let arr = str.split("");
  arr.splice(0, 1);
  arr.splice(arr.length - 1, 1);
  let answer = arr.join("");
  return answer;
}

//  console.log(removeChar('eloquent'))   // , 'loquen'
//  console.log(removeChar('country'))   //  'ountr'
//  console.log(removeChar('person'))    // 'erso'
//  console.log(removeChar('place'))     //' lac'
//  console.log(removeChar('ooopsss'))    //  'oopss'

// ? Problem 25

function saleHotdogs(n) {
  if (n < 5) {
    return n * 100;
  } else if (n >= 5 && n < 10) {
    return n * 95;
  } else {
    return n * 90;
  }
}

// ? Problem 26

// ? The main idea is to count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.

// ? What if the string is empty? Then the result should be empty object literal, {}.

function count(string) {
  let countA = 0;
  let countB = 0;
  if (string === "") {
    return {};
  }
  let answer = {};
  for (let i = 0; i < string.length; i++) {
    if (string[i] === "a") {
      countA++;
      answer.a = countA;
    } else if (string[i] === "b") {
      countB++;
      answer.b = countB;
    }
  }
  return answer;
}

// console.log(count(""))
// console.log(count("aba"))

// ? Problem 27

function highAndLow(numbers) {
  let arr = numbers.split(" ");
  // console.log(arr)
  let highest = Math.max(...arr);
  let lowest = Math.min(...arr);
  return highest + " " + lowest;
}

// console.log(highAndLow("1 2 3 4 5"));  // return "5 1"
// console.log(highAndLow("1 2 -3 4 5")); // return "5 -3"
// console.log(highAndLow("1 9 3 4 -5")); // return "9 -5"

// ? Problem 28

function isTriangle(a, b, c) {
  if (a <= 0 || b <= 0 || c <= 0) {
    return false;
  } else if (a + b > c && a + c > b && b + c > a) {
    return true;
  }
  return false;
}

// console.log(isTriangle(1,2,2))   //, true);
// console.log(isTriangle(7,2,2))  //, false;

// ? Problem 29

function finalGrade(exam, projects) {
  if (exam > 90 || projects > 10) {
    return 100;
  } else if (exam > 75 && projects >= 5) {
    return 90;
  } else if (exam > 50 && projects >= 2) {
    return 75;
  } else {
    return 0;
  }
}

// console.log(finalGrade(100, 12)) //, 100);
// console.log(finalGrade(85, 5)) //, 90);

// ? Problem 30

function twoSum(numbers, target) {
  let answer = [];
  for (let i = 0; i < numbers.length; i++) {
    for (let k = i + 1; k < numbers.length; k++) {
      if (numbers[i] + numbers[k] === target) {
        // console.log(numbers[i], numbers[k])
        let firstIndex = numbers.indexOf(numbers[i]);
        let secoundIndex = numbers.indexOf(numbers[k], 1);
        console.log(firstIndex, secoundIndex, "index");
        answer.push(firstIndex, secoundIndex);
        return answer;
      }
    }
  }
}

// console.log(twoSum([1, 2, 3], 4)) // returns [0, 2]
// console.log(twoSum([2, 2, 3], 4)) // returns [0, 1]

// ? Problem 31

// ? Given an integral number, determine if it's a square number:

var isSquare = function (n) {
  if (n < 0) {
    return false;
  }
  let num = Math.floor(Math.sqrt(n));
  // console.log(num)
  if (n === num * num) {
    return true;
  } else {
    return false;
  }
};

// console.log(isSquare(-1)) // false
// console.log(isSquare(0))  //  true
// console.log(isSquare(3))  // false
// console.log(isSquare(4))  // true
// console.log(isSquare(25))  // true

// ? Problem 32

// ? You receive an array with your peers' test scores. Now calculate the average and compare your score!

// ? Return True if you're better, else False!

function betterThanAverage(classPoints, yourPoints) {
  let average = 0;
  classPoints.forEach((element) => {
    average += element;
  });
  let answer = Math.floor(average / classPoints.length);
  console.log(answer);

  if (answer === yourPoints) {
    return false;
  } else if (answer < yourPoints) {
    return true;
  } else {
    return false;
  }
}

// console.log(betterThanAverage([2, 3], 5)); //, true);

// console.log(betterThanAverage([100, 40, 34, 57, 29, 72, 57, 88], 75)); //, true);

// console.log(betterThanAverage([12, 23, 34, 45, 56, 67, 78, 89, 90], 9)); //, false);

// console.log(betterThanAverage([41, 75, 72, 56, 80, 82, 81, 33], 50)); //, false);

// console.log(betterThanAverage([29, 55, 74, 60, 11, 90, 67, 28], 21)); //, false);

// ? Problem 33 
// TODO SORTING 

// ? Finish the solution so that it sorts the passed in array of numbers. If the function passes in an empty array or null/nil value then it should return an empty array.

function solution(nums){
  if (nums === null || nums === []) {
    return []
  }
  let answer = nums.sort((a, b) =>  a - b);
  return answer

}

// console.log(solution([1,2,3,10,5]))//, [1,2,3,5,10])
// console.log(solution(null))//, [])
// console.log(solution([]))//, [])
// console.log(solution([20, 2, 10]))//, [2,10,20])
// console.log(solution([2, 20, 10]))//, [2,10,20])



// ? Problem 34

//  ?Write a function that takes an array of numbers and returns the sum of the numbers. The numbers can be negative or non-integer. If the array does not contain any numbers then you should return 0.


function sum (numbers) {
  let final = 0
  if (numbers === null) {
    return 0
  }else {
    let answer = numbers.map((element, index) => {
      return final += element
    })
    return final
  }

  
};

// console.log(sum([])) //, 0);
// console.log(sum([1, 5.2, 4, 0, -1])) // 9.2);


// ? Problem 35

function fakeBin(x){
  let arr = x.split('')
  for (let i = 0; i < arr.length; i++) {
    if (+arr[i] < 5) {
      arr.splice(i, 1, '0')
} else if (+x[i] >= 5) {
      arr.splice(i, 1, '1')
  }
}
let answer = arr.join('')
console.log(answer)
return answer
}

console.log(fakeBin('45385593107843568')) //), '01011110001100111');
console.log(fakeBin('509321967506747')) //, '101000111101101'); 
console.log(fakeBin('366058562030849490134388085')) //, '011011110000101010000011011')
