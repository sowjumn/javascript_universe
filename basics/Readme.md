# These are some of the ECMAScript basics picked up from various books:

* In JS everything is case-sensitive; variables, function names, and operators
* An identifier is the name of a variable, function, property or function argument
  * The first character of an identifier is a letter, underscore or a dollar sign
  * All other characters can be letters, underscores, dollar signs, or numbers
* Strict mode is a different parsing and execution model for javascript where some of the erratic behavior of ECMAScript 3 is addressed and errors are thrown for unsafe activities
* Use the pragma 'use strict'; to tell the JS engine to change into stict mode; However, you need to use the pragma at the top of the scope
* ECMAScript variables are loosely typed. which means a variable can hold any type of data at any point of time;
* Using the var operator to define a variable makes it local to the scope in which it is defined.

## Data Types
  * There are five primitive data types in ECMAScript: Undefined, NULL, Boolean, Number and String
  * There is one complex data type called Object which is an unordered list of key value pairs
  * Because ECMAScript variables are loosely typed there needs to be a way to determine the data type of a given variable and the typeof operator provides that information
  * Using the typeof operator on a value returns one of the following strings
    * 'undefined' if the value is undefined
    * 'boolean' if the value is Boolean
    * 'string' if the value is a string
    * 'number' if the value is a number
    * 'object' if the value is an object or null
    * 'function' if the value is a function
  * Undefined type has only one value, which is the special value undefined: When a variable is declared using var but not initialized, it is assigned the value of undefined. Hence, you should never explicitly set the value of a variable to undefined
  * The Null type has only one value, which is null. Logically, a null value is an empty object pointer and hence typeof null returns 'object'
    * When defining a variable that is later meant to hold an object, it is advisable to initialize it with null
  * Boolean type has two values: true and false
  * Number type has both Integer and Floating point values
    * If a calculation results in a number value that cannot be represented by Javascripts numeric range then the number automatically gets the special value Infinity: likewise negative value out of numeric range gets -Infinity
    * You can use the function isFinite() to determine if a value is finite
    * NaN is a special numeric value to indicate when an operation intended to return a number has failed. Example diving a number by 0
    * Use isNaN() function to check if the value is a NaN

  ### Number Conversions

