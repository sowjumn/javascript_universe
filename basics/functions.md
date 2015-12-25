# Advanced concepts
  * When a primitive value is assigned from one variable to another, the value stored on the variable object is created and copied into the location for the new variable
  * When a reference value is assigned from one variable to another, the value stored on the variable object is also copied into the location for the new variable. The difference is that this value is actually a pointer to an object stored on the heap. Once the operation is complete both the variables point to exactly the same object. So changes to one are reflected in the other
  * All function arguments in ECMAScript are passed by value. If the values is primitive, then it acts just like a primitive variable copy, and if the value is a reference, it acts just like a reference variable copy
  * The instanceof operator returns true if the variable is an instance of a given reference type
## Arrays
  * ECMAScript arrays are ordered lists of data, and can hold any type of data in each slot
  * An array object can act like a stack(LIFO)
  * the push method accepts any arguments and adds them to the end of the array
  * the pop method returns the last item in the array
  * An array object can also act like a queue(FIFO) with shift() and push()
  * the unshift method adds items to the front of the array
  * reverse() reverses the order of items in the array 
  * sort() sorts the items in the array in ascending order by calling the String() casting function on every item and this happens even if all the items in an array are numbers. Usually that might not be what we want in many cases and the sort() method allows you to pass in a comparison function
  * The comparison function accepts two arguments and returns a negative number if the first argument should come before the second, a zero if the arguments are equal or a positive number if the first argument should come after the second

  ```javascript
    function compare(value1, value2) {
      if (value1 < value2) {
        return -1;
      } else if (value1 > value2) {
        return 1;
      } else {
        return 0;
      }
    }

    var numsArray = [4, 6, 7, 8, 9];
    numsArray.sort(compare);
  ```
  * concat(), slice(), splice() & indexOf() 
  * every() , filter(), map(), some(), reduce()

## Function Type
  * Functions are objects in ECMAScript and each function is an instance of the Function type that has properties and methods
  * function names are simply pointers to function objects
  * function declarations are read and available in an execution context before any code is executed: The JS engine hoists the function declarations to the top
  * function expressions aren't complete until the execution reaches that line of code
  * In ECMAScript function doesnt care how many arguments are passed in, nor does it care about the data types of those arguments: You can define a function with two arguments and pass in three arguments to it and the interpreter wouldnt complain; also there is no overloading
  * Any named argument that is not passed into the function is automatically assigned the value of undefined
  * Two special objects exist inside a function: arguments and this
  * the arguments object contains all the arguments passed into the function
  * the arguments object also contains a property named callee which is a pointer to the function that owns the arguments object: however, strict mode doesnot support using callee
  * 'this' refers to the context object the function is operating on.
  * the 'this' object is bound at runtime based on the context in which a function is executed: 
    * when used inside global functions, this is equal to window in nonstrict mode and undefined in strict mode
    * this is equal to the object when called as an object method
  * apply() and call() are used to call a function with a specific this value
  * apply() method accepts two arguments 1) the value of this inside the function and 2) an array of arguments
  * call() method exhibits same behavior as apply(), but arguments are passed to it differently
    * the value of this is the first argument
    * the remaining arguments are passed directly into the function
  * bind() method creates a new function instance where the this value is bound to the value that was passed into bind()

  ```javascript
      var o = { color: 'blue' };
      function sayColor() {
        alert(this.color);
      }
      var objectSayColor = sayColor.bind(o);
      objectSayColor();
  ```
  ## Creating scopes using IIFE
    *An anonymous function that is called immediately is called an Immediately invoked function*
  ```javascript
    (function(){
      //block code here
    })();
  ```
   *What looks like a function declaration is enclosed in parenthesis to indicate that its actually a function expression. The reason for that is function declarations cannot be followed by parenthesis where as function expressions can*