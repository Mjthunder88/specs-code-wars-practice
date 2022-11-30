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