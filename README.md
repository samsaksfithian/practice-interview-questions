# Interview Prep

We will be using this repository to collect all kinds of resources to help you prepare for interviews.
This will include:

- code challenges
- interview questions
- helpful resources

## Interview Questions

**Some tips:**

- Be succinct with your answer. More rambling === more chance of a misstep
- Look for the buzzwords so you can show off your expert level knowledge
- Use examples to help you explain
- Don't be afraid to ask clarifying questions. It may help you stall for some time
- Don't be afraid of a moment of silence while you think. Take your time

### JavaScript

#### Fizzbuzz

Create a for loop that iterates up to 100 while outputting "fizz" at multiples of 3, "buzz" at multiples of 5 and "fizzbuzz" at multiples of 3 and 5.

Example:

```js
1
2
fizz
4
buzz
fizz
7
8
fizz
buzz
...
14
fizzbuzz
```

**Solution:**

```js
for (let i = 1; i <= 100; i++) {
  if (i % 5 === 0 && i % 3 === 0) {
    console.log("fizzbuzz");
  } else if (i % 5 === 0) {
    console.log("buzz");
  } else if (i % 3 === 0) {
    console.log("fizz");
  } else {
    console.log(i);
  }
}
```

#### What tools and techniques do you use for debugging JavaScript code?

- Debugger + breakpoints
- Console.log
- test cases
- Postman
- Dev tools: react, network tab, console, inspector

#### What are the differences between variables created using `let`, `var` or `const`?

- `let`: variables you want to change/mutate. Block-scoped
- `const`: variables you don't want to change (no reassignment). Block-scoped
- `var`: older syntax, more generic scope. Function-scoped

```js
const myObj = {};
myObj.name = "Andrew";
myObj = { name: "Andrew" };
```

#### What is the difference between `==` and `===`?

- `==`: makes type conversion/cast. Compares value
- `===`: compares value and type

#### Explain the difference between synchronous and asynchronous functions.

- Sync: runs one after the otter
- Async: runs together AKA "concurrently" or "in parallel"
  - Runs in the event loop

#### What is AJAX? What are the advantages and disadvantages to using it?

Hint: AJAX = Asynchronous JavaScript and XML

Can be used with libraries: `XMLHTTPRequest`, `fetch`, `axios`

**Advantages**:

- Allows loading of content without blocking

**Disadvantages**

- Race condition: data retrieval is unpredictable timing-wise - makes programming unpredictable.

#### What are the three ways to handle asynchronous actions? What are pros and cons of each?

- `Callback`: pass as parameter
  - Pros: supported in pretty much all version of JS
  - Cons: callback hell
- `Async/await`: `async` in function header, then `await` any asynchrounous calls
  - Pros: looks synchronous
  - Cons: no chaining, have to wrap in a try-catch
- `Promises`: handle with `.then()`, handle errors with `.catch()`: chaining
  - Pros: chaining (readability)
  - Cons: promise hell, still uses a form of callbacks

#### What is a SPA? What are the advantages and disadvantages?

Single Page Application

- single HTML page
- JavaScript renders all the content on the client using something like JSX, React, Web components etc.
- routing

Advantages

- there can be speed improvements
- no refresh
- more native
- mobile friendly

Disadvantages

- SEO

#### Explain the same-origin policy and how it relates to CORS.

#### How can you share code between files?

#### What is destructuring? Can you give me an example of destructuring an array and an object? How do I destructure a function parameters?

#### What are the benefits of using spread syntax and how is it different from rest syntax?

#### What is an ES6 template literal? What problem do they solve? Can you give an example of a template literal in use?

#### How do you empty an array?

For instance:

```js
var arrayList = ["a", "b", "c", "d", "e", "f"];
```

How can we empty the array above?

#### How do you calculate the "length" of an object (i.e. the number of keys)

#### What are some ways to create objects?

#### What will be the output of this code?

```js
for (var i = 0; i < 10; i++) {
  setTimeout(function() {
    console.log(i);
  }, 1000);
}
```

#### Concatenate an array of strings using the `reduce` method

#### What would be the ouput of the following code?

Side note: This is an Immediately Invoked Function Expression (IIFE). The anonymous function will be executed immediately.

```js
(function() {
  const list = ["foo", "bar", "john", "ritz"];
  console.log(list.slice(1));
  console.log(list.slice(1, 3));
  console.log(list.slice());
  console.log(list.slice(2, 2));
  console.log(list);
})();
```

```js
(function() {
  const list = ["foo", "bar", "john"];
  console.log(list.splice(1));
  console.log(list.splice(1, 2));
  console.log(list);
})();
```

#### Write a function `duplicate` that takes an array and returns a new array containing each element twice.

Example:

```js
duplicate([1, 2, 3, 4]); // [1, 1, 2, 2, 3, 3, 4, 4]
```

**Bonus**: return an array where the amount of each element in the returned array is its index in the original

Example:

```js
duplicate([1, 2, 3, 4]); // [2, 3, 3, 4, 4, 4]
```

#### Can you describe the main difference between a `.forEach` loop and a `.map` loop and why you would pick one versus the other?

#### Explain event bubbling

#### What is immutability? Why is it important? How are some ways you can achieve immutability?

## Whiteboarding Tips

- Explain the question back to the interviewer to make sure you understand it fully
- Clarify all requirements, such as: function signature, return value, runtime, data format

## Code Challenges

- [Stock Buy and Sell Optimization](https://algodaily.com/challenges/stock-buy-and-sell-optimization)

## Resources

- [Front-end Interview Handbook](https://github.com/yangshun/front-end-interview-handbook/blob/master/questions/javascript-questions.md)
- [AlgoDaily](https://algodaily.com/): free daily coding challenge
- [LeetCode](https://leetcode.com/): code challenges
- [Big O Cheatsheet](http://www.bigocheatsheet.com/)
