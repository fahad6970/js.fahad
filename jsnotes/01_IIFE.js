// 1.  IIFE with Parameters
// Create an IIFE that takes two numbers as arguments and logs their sum.

(function(a, b) {
    console.log(a + b);
})(5, 3);

// 2. IIFE to Protect Variable Scope
// Use an IIFE to create a private variable that can't be accessed from outside the IIFE.

(function() {
    let privateVar = "I am private!";
    console.log(privateVar);  // Output: I am private!
})();

// Trying to access privateVar outside will give an error
// console.log(privateVar); // Uncaught ReferenceError: privateVar is not defined

// 3. IIFE to Return a Value
// Write an IIFE that returns the product of two numbers and stores the result in a variable.

let product = (function(a, b) {
    return a * b;
})(4, 5);

console.log(product);  // Output: 20

// 4. IIFE to Initialize a Counter
// Create an IIFE that returns an object with two methods: increment and getValue. Use the IIFE to create a private counter variable that can only be manipulated using these methods.

let counter = (function() {
    let count = 0;
    return {
        increment: function() {
            count++;
        },
        getValue: function() {
            return count;
        }
    };
})();

counter.increment();
counter.increment();
console.log(counter.getValue());  // Output: 2

// 5. IIFE for DOM Manipulation
// Write an IIFE that immediately adds a new element (e.g., a paragraph) to the DOM. 

(function() {
    let paragraph = document.createElement('p');
    paragraph.textContent = 'This is a new paragraph added by an IIFE.';
    document.body.appendChild(paragraph);
})();

// 6. IIFE for Module Pattern
// Use an IIFE to create a simple module for managing a to-do list. The module should expose methods to add a task, remove a task, and display all tasks.

let todoModule = (function() {
    let tasks = [];

    return {
        addTask: function(task) {
            tasks.push(task);
        },
        removeTask: function(task) {
            tasks = tasks.filter(t => t !== task);
        },
        showTasks: function() {
            console.log(tasks);
        }
    };
})();

todoModule.addTask("Learn JavaScript");
todoModule.addTask("Practice IIFE");
todoModule.showTasks();  // Output: ['Learn JavaScript', 'Practice IIFE']
todoModule.removeTask("Learn JavaScript");
todoModule.showTasks();  // Output: ['Practice IIFE']

// 7. IIFE with Closures
// Write an IIFE that creates a closure to track how many times a function has been invoked.

let tracker = (function() {
    let count = 0;

    return function() {
        count++;
        console.log(`Function called ${count} times`);
    };
})();

tracker();  // Output: Function called 1 times
tracker();  // Output: Function called 2 times
tracker();  // Output: Function called 3 times
