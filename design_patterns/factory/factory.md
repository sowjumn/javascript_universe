# Object creation in Javascript
  Javascript objects can be created using two ways. The first one is using the Factory pattern and the other one is using a constructor function
## Factory Pattern
  The factory pattern is used to abstract away creation of objects. With no way to define classes in JS, developers wrapped code that is related to the creation of objects with the same interface in a function
  ```javascript
    function createPerson(name, age, job) {
      var obj = new Object();
      obj.name = name;
      obj.age = age;
      obj.job = job;
      obj.sayname = function() {
        console.log(this.name);
      }
      return obj;
    }
    var person = createPerson('Sowju', 30, 'Software Engineer');
    person.sayName();
```
  *Though this solved the problem of creating multiple similar objects, it failed in the object identification. We cannot query the returned object for what type it is.*

## Constructor Pattern
  Constructors in ECMAScript are used to create specific types of objects. There are native constructors in ECMAScript such as Object and Array. Following is a code sample to create a custom constructor
  ```javascript
    function Person(name, age, job) {
      this.name = name;
      this.age = age;
      this. job = job;
      this.sayName = function() {
        console.log(this.name);
      }
    }
    var person1 = new Person('sowju', 30, 'Software Engineer');
    var person2 = new Person('Mudu', 30, 'Software Developer');
```
* *By convention, constructor functions start with a uppercase letter and non-constructor functions begin with a lower case. This is because constructors are simple functions that create objects*
* *Also the only difference between constuctor functions and regular functions are int he way they are called*
* *Calling a constructor function with a new operator essentially does the following*
  * create a new object and assign the this value of the constructor to the new object(so this points to the new object)
  * Execute the code inside the constuctor function
  * Return the new object
