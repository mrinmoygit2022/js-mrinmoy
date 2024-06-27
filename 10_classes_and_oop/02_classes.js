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
  