#### What is HTTP? Explain HTTP verbs and what they do

#### Explain fullstack architecture. What is the difference between backend and frontend? How do they communicate? List some technologies that we might use for each.

#### How can you share code between files?

#### What are the benefits of using spread syntax and how is it different from rest syntax?

#### How do you empty an array?

For instance:

```js
var arrayList = ["a", "b", "c", "d", "e", "f"];
```

How can we empty the array above?

#### What are some ways to create objects?

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

#### Concatenate an array of strings using the `reduce` method

#### What is immutability? Why is it important? How are some ways you can achieve immutability?
