//1. A function which prints str after n seconds.
function printTimeout(str, n) 
{ 
  setTimeout(() => console.log(str) , n * 1000);
}
printTimeout('hello', 10) // hello will appear after 10secs in console


//2. A function which returns sum of all numbers from 1 to n using recursion.
function sumAll(n) 
{ 
 if (n != 1) {
        return n + sumAll(n - 1);
    }
    else return n;
}
console.log(sumAll(2)); // 3
console.log(sumAll(4)); // 10


// 4. A function which returns factorial of number using recursion.
function factorial(n)
{ 
 if (n == 0) { return 1; }
  else {
    if (n != 1) {
      return n*factorial(n-1);
    }
    else return n; 
  }
}
console.log(factorial(3)); // 6
console.log(factorial(5)); // 120


//5. Implement function from task №3 (bombTimer) using recursion and setTimeout.


// 6. A function which takes an array of numbers and maxNumber, the function returns new array with numbers not higher than maxNumber.
function filterNumbers(arr, maxNumber) 
{ 
  /* your code */ 
}
filterNumbers([1, 4, 8, 1, 20], 5) // [1, 4, 1]


//7. A function that returns object with min and max numbers from array of numbers.
function minMax(arr) 
{ 
  /* your code */ 
}
minMax([1, 4, 8, 2, 20]) // { max: 20, min: 1 }


//8. A function that returns average of numbers in array.
function average(arr) 
{
  /* your code */
}
average([1,4,2]) // 2.33


//9. A function which concats all first-nested arrays in one array (use reduce):
function concatFirstNestedArrays(arr) 
{ 
  /* your code */ 
}
concatFirstNestedArrays([[0, 1], [2, 3], [4, 5]]) // [0, 1, 2, 3, 4, 5]
