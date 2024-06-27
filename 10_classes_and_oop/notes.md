#  Javascript and classes
- Yes, JavaScript does have classes. They were introduced in ECMAScript 2015 (also known as ES6) and provide a more traditional syntax for creating objects and dealing with inheritance, similar to other object-oriented programming languages.

## Here's a basic example of how to use classes in JavaScript:
``` Javascript 
class Animal {
  constructor(name, type) {
    this.name = name;
    this.type = type;
  }

  describe() {
    return `${this.name} is a ${this.type}.`;
  }
}

class Dog extends Animal {
  constructor(name, breed) {
    super(name, 'Dog');
    this.breed = breed;
  }

  bark() {
    return `${this.name} barks loudly!`;
  }
}

const myDog = new Dog('Buddy', 'Golden Retriever');
console.log(myDog.describe()); // Buddy is a Dog.
console.log(myDog.bark()); // Buddy barks loudly!

```

## In this example:

- The Animal class has a constructor that initializes name and type properties, and a describe method.
The Dog class extends Animal and adds a breed property and a bark method. It uses the super keyword to call the constructor of the parent Animal class.
- Classes in JavaScript are essentially syntactic sugar over the existing prototype-based inheritance model, providing a clearer and more familiar syntax for creating and managing objects and inheritance.

# Object Oriented Program (OOP)
- collection of properties and methods
- toLowerCase

## Why use OOP
## Parts of OOP 
Object literal

- Constructor function
- Prototypes
- Classes
- Instances (new, this)

## 4 Pillers
- Abstraction - "Hide the details. Ex- fetch()"
- Encapsulation - "Wrap up the methods or data."
- Inheritance - 
- Polymorphism - "'Poly' means many, 'morphism' means form. Ex- console.log()"





