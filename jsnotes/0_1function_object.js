// 1.  Basic Object Creation
// Create an object car with the following properties: brand, model, year, and color.
// Add a method to the object called displayInfo that logs all the car’s details in a readable format.
let car = {
    brand: 'Toyota',
    model: 'Corolla',
    year: 2022,
    color: 'red',
    displayInfo: function() {
        console.log(`Car: ${this.brand} ${this.model}, Year: ${this.year}, Color: ${this.color}`);
    }
};

car.displayInfo();

// 2. Object Methods
// Create an object person with properties: firstName, lastName, and age.
// Add a method fullName that returns the person’s full name.
let person = {
    firstName: 'John',
    lastName: 'Doe',
    age: 30,
    fullName: function() {
        return this.firstName + ' ' + this.lastName;
    }
};

console.log(person.fullName());

// 3. Passing Objects as Function Arguments
// Create a function describePerson that takes a person object and logs a descriptive sentence about the person.
function describePerson(person) {
    console.log(`${person.firstName} ${person.lastName} is ${person.age} years old.`);
}

let person1 = {
    firstName: 'Jane',
    lastName: 'Smith',
    age: 28
};

describePerson(person1);

// 4. Function Returning an Object
// Create a function createBook that takes the title, author, and year of a book and returns an object representing the book.
function createBook(title, author, year) {
    return {
        title: title,
        author: author,
        year: year
    };
}

let book = createBook('The Great Gatsby', 'F. Scott Fitzgerald', 1925);
console.log(book);

// 5. Object and Function Combination
// Create an object calculator with methods for add, subtract, multiply, and divide. Each method should take two numbers and return the result of the operation.
let calculator = {
    add: function(a, b) {
        return a + b;
    },
    subtract: function(a, b) {
        return a - b;
    },
    multiply: function(a, b) {
        return a * b;
    },
    divide: function(a, b) {
        if (b !== 0) {
            return a / b;
        } else {
            return 'Cannot divide by zero';
        }
    }
};

console.log(calculator.add(5, 3));  // 8
console.log(calculator.subtract(5, 3));  // 2
console.log(calculator.multiply(5, 3));  // 15
console.log(calculator.divide(5, 0));  // Cannot divide by zero

