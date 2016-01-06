# Encapsulation

## Object Literal
  An object literal is a simplest way to encapsulate code. It doesnot offer privacy for properties or methods, but its useful for eliminating anonymous functions from your code. 

```javascript
  var myFeature = {
    myProperty: "hello",

    myMethod: function() {
      console.log(myFeature.myProperty);
    },

    init: function(settings) {
      myFeature.settings = settings;
    },

    readSettings: function() {
      console.log(myFeature.settings);
    }
  };
```