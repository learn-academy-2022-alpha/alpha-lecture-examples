// 2. Fizz Buzz: Use a for loop to log all numbers from 1-100.  If a number is a multiple of 3, replace it with the word `fizz`. If a number is a multiple of five, replace it with the word `buzz`. If a number is a multiple of both 3 and 5, replace it with `fizzbuzz`. **Expected output** --> 1, 2, "fizz", 4, "buzz", "fizz", 7, 8, "fizz", "buzz", 11, "fizz", 13, 14, "fizzbuzz" ...etc


for(let i = 1; i < 100001; i++) {
  if(i % 5 === 0 && i % 3 === 0) {
    console.log("fizzbuzz");
  } else if(i % 3 === 0) {
    console.log("fizz");
  } else if(i % 5 === 0){
    console.log("buzz");
  } else {
    console.log(i);
  }
}