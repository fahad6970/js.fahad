// 6. Function to Modify Object Properties
// Create an object student with properties name, age, and grade.
// Write a function updateGrade that takes the student object and a new grade, and updates the grade property of the student.
let student = {
    name: 'Alex',
    age: 20,
    grade: 'B'
};

function updateGrade(student, newGrade) {
    student.grade = newGrade;
}

updateGrade(student, 'A');
console.log(student.grade);  // Output: A

// 7. Object with Nested Object and Methods
// Create an object library that has a property books (an array of book objects). Each book should have properties like title, author, and year.
// Add a method listBooks that prints all the books’ details.
let library = {
    books: [
        { title: '1984', author: 'George Orwell', year: 1949 },
        { title: 'To Kill a Mockingbird', author: 'Harper Lee', year: 1960 }
    ],
    listBooks: function() {
        this.books.forEach(book => {
            console.log(`${book.title} by ${book.author}, published in ${book.year}`);
        });
    }
};

library.listBooks();

// 8.  Function Returning Object with Calculations
// Write a function createRectangle that takes length and width as parameters and returns an object representing a rectangle. The object should have properties length, width, and methods getArea and getPerimeter.
function createRectangle(length, width) {
    return {
        length: length,
        width: width,
        getArea: function() {
            return this.length * this.width;
        },
        getPerimeter: function() {
            return 2 * (this.length + this.width);
        }
    };
}

let rectangle = createRectangle(10, 5);
console.log(rectangle.getArea());  // Output: 50
console.log(rectangle.getPerimeter());  // Output: 30

// 9. Object Manipulation with Functions
// Create an object employee with properties name, position, and salary.
// Write a function giveRaise that increases the salary by a given percentage.
let employee = {
    name: 'Sarah',
    position: 'Manager',
    salary: 50000
};

function giveRaise(employee, percentage) {
    employee.salary += employee.salary * (percentage / 100);
}

giveRaise(employee, 10);  // 10% raise
console.log(employee.salary);  // Output: 55000

// 10.  Scope Exercise
// Write a function outerFunction that defines a variable outerVar. Inside this function, define another function innerFunction that modifies outerVar. Log the variable before and after calling innerFunction.
function outerFunction() {
    let outerVar = 'I am outer';

    function innerFunction() {
        outerVar = 'I am changed by inner';
    }

    console.log(outerVar);  // Output: I am outer
    innerFunction();
    console.log(outerVar);  // Output: I am changed by inner
}

outerFunction();

// 11. Returning Functions from Functions
// Write a function greetPerson that takes a greeting (e.g., "Hello") and returns another function. The returned function should take a name and log the greeting with the name.
function greetPerson(greeting) {
    return function(name) {
        console.log(`${greeting}, ${name}!`);
    };
}

let greetHello = greetPerson('Hello');
greetHello('John');  // Output: Hello, John!

// 12. Function with Object Parameters
// Write a function compareAges that takes two person objects (each with a name and age property) and logs which person is older.
function compareAges(personA, personB) {
    if (personA.age > personB.age) {
        console.log(`${personA.name} is older than ${personB.name}`);
    } else if (personA.age < personB.age) {
        console.log(`${personB.name} is older than ${personA.name}`);
    } else {
        console.log(`${personA.name} and ${personB.name} are the same age`);
    }
}

let person1 = { name: 'Alice', age: 30 };
let person2 = { name: 'Bob', age: 25 };

compareAges(person1, person2);

