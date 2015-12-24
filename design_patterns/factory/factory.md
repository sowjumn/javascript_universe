# Object creation in Javascript
  Javascript objects can be created using multiple ways. The first one is using the Factory pattern and the other one is using a constructor function and the third one is the prototype pattern
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
  * Execute the code inside the constructor function
  * Return the new object

At the end of the preceeding example person1 and person2 hold different instances of person. Each of these objects has a constructor property that points back to Person. Defining your own constructor enables you to identify the instances of a particular type lateron
```javascript
    (person1.constructor === Person); //true
    (person2.constructor === Person); //true
```
 *You can see each instance of Person has its own copy of the sayName function even though both do the same thing. This seems to be a waste especially when the 'this' object makes it possible to avoid binding functions to particular objects until runtime.*

## Prototype Pattern

**Basics of Prototype property**
* Each Function is created with a prototype property 
* The prototype property is an object containing the methods and properties that are shared on all instances that are created using the constructor function
* By default, all prototypes contain a property named constructor which points to the function on which the prototype is present

```javascript
  function Person(name, age, job) {
    this.name = name;
    this.age = age;
  }

  Person.prototype.job = 'Software Developer';
  Person.prototype.sayName = function() {
    console.log(this.name);
  }
``` 
**How it works?**
  * Whenever a property/method is accessed for reading on an object, the Javascript engine searches for a property with the name on the object itself.
  * If its found then the value is returned; if not the search continues up to the prototype of the object
  * Once a property is added on the object instance, it blocks access to the property on the prototype with the same name unless its explicitly accessed with Person.prototype.job 
  * Changes made to the prototypes are reflected on instances, even if the instance existed before the change was made

## Constructor + Prototype Pattern best suits for creating Custom Types
*The constructor pattern defines instance properties, whereas the prototype pattern defines methods and shared properties and hence a lot of memory is saved*

  ```javascript
    function Person(name, age, job) {
    this.name = name;
    this.age = age;
    this.job = job;
    
      if (typeof this.sayName != 'function') {
        Person.prototype.sayName = function() {
          alert(this.name);
        }
      }
    }
```