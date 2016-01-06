# Garbage Collection in Javascript and Dereferencing

  * JavaScript is a garbage-collected language, meaning that the execution environment is responsible for managing the memory required during code execution.JavaScript frees developers from worrying about memory management by automatically allocating what is needed and reclaiming memory that is no longer being used.

  * The basic idea is simple: figure out which variables aren’t going to be used and free the memory associated with them.

  * The amount of memory available for use in web browsers is typically much less than is available for desktop applications. This is more of a security feature than anything else, ensuring that a web page running JavaScript can’t crash the operating system by using up all the system memory. The memory limits affect not only variable allocation but also the call stack and the number of statements that can be executed in a single thread. Keeping the amount of used memory to a minimum leads to better page performance. 
  * The best way to optimize memory usage is to ensure that you’re keeping around only data that is necessary for the execution of your code. When data is no longer necessary, it’s best to set the value to null, freeing up the reference — this is called dereferencing the value. This advice applies mostly to global values and properties of global objects. Local variables are dereferenced automatically when they go out of context.

## Reference Counting: 
  * If an object  doesnot have any other object referencing to it, it is garbage collected. Circular Referencing(cycles) are a problem with reference counting. A circular reference happens when two objects reference each other and is a source of memory leaks

```javascript 
  function f() {
    var p = {};
    var p2 = {};
    p.a = p2; // p references p2
    p2.a = p; // p2 references p

    return 'crap';  
  }

  f();
```
*The reference counting algorithm considers that since each of other object is referenced at least once both of them cannot be garbage collected*

## Mark and Sweep Algorithm:

  * The garbage collector will start at root(global object) and find all objects that are referenced from these roots, then all objects referenced from these etc. The garbage collector will thus find all reachable objects and collect all non-reachable objects. 

  *Hence, cycles are not a problem anymore*
  

