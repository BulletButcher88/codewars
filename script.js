// function createPhoneNumber(numbers){
//   const nu = numbers.join('').replace(/^(\d{3})(\d{3})(\d{4})/, '($1) $2-$3')
//   console.log(nu)
// }

// createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])


// --------------------


// Task
// Given an array of integers, remove the smallest value. Do not mutate the original array/list. If there are multiple elements with the same value, remove the one with a lower index. If you get an empty array/list, return an empty array/list.

// Don't change the order of the elements that are left.



// function removeSmallest(numbers) {
//   const min = Math.min.apply(this, numbers);
//   return numbers.filter((num, idx, arr) => idx !== arr.indexOf(min));
// }

// console.log(removeSmallest([2, 2, 1, 2, 1]))









// =================================================
// In this kata you will create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.

// my code

// function filter_list(l) {
//   return (
//     l.filter((n) => 
//     n == 0 ? "0" :
//     typeof n === 'number' ? n :
//     ""
//     )
//   )
// }





// BEST ANSWERS
// function filter_list(l) {
//   return l.filter(function(v) {return typeof v == 'number'})
// }


// function filter_list(l) {
//   return l.filter(Number.isInteger);
// }




// console.log(filter_list([1,2,'a','b']))
// console.log(filter_list([1,'a','b',0,15]))
// console.log(filter_list([1,2,'aasf','1','123',123]))


// =================================================
// Create a function named divisors/Divisors that takes an integer n > 1 and returns an array with all of the integer's divisors(except for 1 and the number itself), from smallest to largest. If the number is prime return the string '(integer) is prime' (null in C#) (use Either String a in Haskell and Result<Vec<u32>, String> in Rust).

// MY CODE 

// function divisors(integer) {
//     let divisors = 0;
//     let results = [] 
//     while (divisors < integer){
//       if(integer % divisors === 0 && divisors !== 1){
//         results.push(divisors)
//       }
//       divisors++
//      } 
//      if (results.length == 0) {
//       results = `${integer} is a prime`
//      }
//     return results;
// };



// BEST ANSWER


// function divisors(integer) {
//   var divisors = [...Array(integer).keys()].slice(2, integer).filter(div => integer % div == 0);
//   return divisors.length > 0 ? divisors : integer + ' is prime';
// };


// function divisors(integer) {
//   var res = []
//   for (var i = 2; i <= Math.floor(integer / 2); ++i) if (integer % i == 0) res.push(i);
//   return res.length ? res : integer + ' is prime'
// };


// MY HACK

// function divisors(integer) {
//   var divisors = [...Array(integer).keys()].filter(num => integer % num == 0)
//   return divisors.length > 1 ? divisors :
//   integer + ' is prime';
// };


// console.log(divisors(15))
// console.log(divisors(12))
// console.log(divisors(13))







// =================================================
// Define a function that takes an integer argument and returns logical value true or false depending on if the integer is a prime.

// Per Wikipedia, a prime number (or a prime) is a natural number greater than 1 that has no positive divisors other than 1 and itself.



// MY CODE 
// function isPrime(num) {
//   let prime = true
//   for(let i = 2; i <= Math.sqrt(num); i++) {
//     if(num % i == 0) {
//       prime = false
//       break;
//     }
//   }
//   return prime && (num > 1)
// }





// BEST ANSWER
// function isPrime(num) {
//   for (var i = 2; i < num; i++) if (num % i == 0) return false;
//   return num >= 2; 
// }


// function isPrime(num) {
//   if(num < 2) return false;
//     for(var i = 2; i <= num / 2; i++) 
//       {
//         if(num % i == 0) 
//         return false;
//       }
//   return true;
// }

// function isPrime(n) {
//    return n < 2 ? false : !/^(11+?)\1+$/.test(Array(n + 1).join('1'));
// }



// CONSOLE LOGS

// console.log(isPrime(0))
// console.log(isPrime(1))
// console.log(isPrime(2))
// console.log(isPrime(73))
// console.log(isPrime(75))
// console.log(isPrime(-1))







// =================================================



// MY CODE 


// BEST ANSWER


// CONSOLE LOGS




// =================================================



// MY CODE 


// BEST ANSWER


// CONSOLE LOGS





// =================================================



// MY CODE 


// BEST ANSWER


// CONSOLE LOGS





// =================================================



// MY CODE 


// BEST ANSWER


// CONSOLE LOGS





// =================================================



// MY CODE 


// BEST ANSWER


// CONSOLE LOGS





// =================================================



// MY CODE 


// BEST ANSWER


// CONSOLE LOGS





// =================================================



// MY CODE 


// BEST ANSWER


// CONSOLE LOGS// =================================================



// MY CODE 


// BEST ANSWER


// CONSOLE LOGS




// =================================================



// MY CODE 


// BEST ANSWER


// CONSOLE LOGS





// =================================================



// MY CODE 


// BEST ANSWER


// CONSOLE LOGS





// =================================================



// MY CODE 


// BEST ANSWER


// CONSOLE LOGS





// =================================================



// MY CODE 


// BEST ANSWER


// CONSOLE LOGS





// =================================================



// MY CODE 


// BEST ANSWER


// CONSOLE LOGS





// =================================================



// MY CODE 


// BEST ANSWER


// CONSOLE LOGS// =================================================



// MY CODE 


// BEST ANSWER


// CONSOLE LOGS




// =================================================



// MY CODE 


// BEST ANSWER


// CONSOLE LOGS





// =================================================



// MY CODE 


// BEST ANSWER


// CONSOLE LOGS





// =================================================



// MY CODE 


// BEST ANSWER


// CONSOLE LOGS





// =================================================



// MY CODE 


// BEST ANSWER


// CONSOLE LOGS





// =================================================



// MY CODE 


// BEST ANSWER


// CONSOLE LOGS





// =================================================



// MY CODE 


// BEST ANSWER


// CONSOLE LOGS// =================================================



// MY CODE 


// BEST ANSWER


// CONSOLE LOGS




// =================================================



// MY CODE 


// BEST ANSWER


// CONSOLE LOGS





// =================================================



// MY CODE 


// BEST ANSWER


// CONSOLE LOGS





// =================================================



// MY CODE 


// BEST ANSWER


// CONSOLE LOGS





// =================================================



// MY CODE 


// BEST ANSWER


// CONSOLE LOGS





// =================================================



// MY CODE 


// BEST ANSWER


// CONSOLE LOGS





// =================================================



// MY CODE 


// BEST ANSWER


// CONSOLE LOGS// =================================================



// MY CODE 


// BEST ANSWER


// CONSOLE LOGS




// =================================================



// MY CODE 


// BEST ANSWER


// CONSOLE LOGS





// =================================================



// MY CODE 


// BEST ANSWER


// CONSOLE LOGS





// =================================================



// MY CODE 


// BEST ANSWER


// CONSOLE LOGS





// =================================================



// MY CODE 


// BEST ANSWER


// CONSOLE LOGS





// =================================================



// MY CODE 


// BEST ANSWER


// CONSOLE LOGS





// =================================================



// MY CODE 


// BEST ANSWER


// CONSOLE LOGS// =================================================



// MY CODE 


// BEST ANSWER


// CONSOLE LOGS




// =================================================



// MY CODE 


// BEST ANSWER


// CONSOLE LOGS





// =================================================



// MY CODE 


// BEST ANSWER


// CONSOLE LOGS





// =================================================



// MY CODE 


// BEST ANSWER


// CONSOLE LOGS





// =================================================



// MY CODE 


// BEST ANSWER


// CONSOLE LOGS





// =================================================



// MY CODE 


// BEST ANSWER


// CONSOLE LOGS





// =================================================



// MY CODE 


// BEST ANSWER


// CONSOLE LOGS// =================================================



// MY CODE 


// BEST ANSWER


// CONSOLE LOGS




// =================================================



// MY CODE 


// BEST ANSWER


// CONSOLE LOGS





// =================================================



// MY CODE 


// BEST ANSWER


// CONSOLE LOGS





// =================================================



// MY CODE 


// BEST ANSWER


// CONSOLE LOGS





// =================================================



// MY CODE 


// BEST ANSWER


// CONSOLE LOGS





// =================================================



// MY CODE 


// BEST ANSWER


// CONSOLE LOGS





// =================================================



// MY CODE 


// BEST ANSWER


// CONSOLE LOGS// =================================================



// MY CODE 


// BEST ANSWER


// CONSOLE LOGS




// =================================================



// MY CODE 


// BEST ANSWER


// CONSOLE LOGS





// =================================================



// MY CODE 


// BEST ANSWER


// CONSOLE LOGS





// =================================================



// MY CODE 


// BEST ANSWER


// CONSOLE LOGS





// =================================================



// MY CODE 


// BEST ANSWER


// CONSOLE LOGS





// =================================================



// MY CODE 


// BEST ANSWER


// CONSOLE LOGS





// =================================================



// MY CODE 


// BEST ANSWER


// CONSOLE LOGS