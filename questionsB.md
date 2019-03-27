#### What is CRUD? Give a brief overview of how you can create a CRUD API

CRUD is an acronym that stands for Create, Read, Update, and Delete.
CRUD is the standardized use of HTTP Action Verbs. This means that if you want to create a new record you should be using “POST.” If you are trying to read a record, you should be using “GET.” To update a record utilizing “PUT” or “PATCH.” And to delete a record, using “DELETE.”

#### Explain the same-origin policy and how it relates to CORS.

The same-origin policy is a critical security mechanism that restricts how a document or script loaded from one origin can interact with a resource from another origin. It helps isolate potentially malicious documents, reducing possible attack vectors.
CORS (cross-origin resource sharing) is a mechanism that allows restricted resources on a web page to be requested from another domain outside the domain from which the first resource was served. Certain "cross-domain" requests, notably Ajax requests, are forbidden by default by the same-origin security policy.

#### What is destructuring? Can you give me an example of destructuring an array and an object? How do I destructure a function parameters?

Destructuring assignment is a special syntax that allows us to “unpack” arrays or objects into a bunch of variables, as sometimes they are more convenient.

```js
// we have an array with the name and surname
let arr = ['Scott', 'Roberts'];

// destructuring assignment
let [firstName, surname] = arr;

// object
let options = {
  width: 100,
  height: 200,
};

// object destructuring
let { width, height } = options;

// we pass object to function
let options = {
  title: 'My menu',
  items: ['Item1', 'Item2'],
};

// ...and it immediately expands it to variables
function showMenu({ title = 'Untitled', width = 200, height = 100, items = [] }) {
  // title, items – taken from options,
  // width, height – defaults used
  alert(`${title} ${width} ${height}`); // My Menu 200 100
  alert(items); // Item1, Item2
}

showMenu(options);
```

#### What is an ES6 template literal? What problem do they solve? Can you give an example of a template literal in use?

They are unique because they provide a lot of features that normal strings built with quotes do not, in particular:

- they offer a great syntax to define multiline strings
- they provide an easy way to interpolate variables and expressions in strings
- they allow you to create DSLs with template tags (DSL means domain specific language, and it’s for example used in React by Styled Components, to define CSS for a component)

```
const myVariable = 'test'
const string = `something ${myVariable}` //something test
```

#### How do you calculate the "length" of an object (i.e. the number of keys)

Using ES6:
`Object.keys(obj).length;` Works by internally iterating over the keys to compute a temporary array and returns its length.

- Pros - Readable and clean syntax. No library or custom code required except a shim if native support is unavailable
- Cons - Memory overhead due to the creation of the array.

#### What will be the output of this code?

```js
for (var i = 0; i < 10; i++) {
  setTimeout(function() {
    console.log(i);
  }, 1000);
}
```

Waits 1000ms then prints the index when it was called, with the 1000ms wait happening for each index and overlapping. So functionally it waits 1000ms and then prints the following:

```
0
1
2
3
4
5
6
7
8
9
```

**Follow-up:** How can we fix this to output `1, 2, 3, 4 ...`

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

- `forEach()` — executes a provided function once for each array element.
- `map()` — creates a new array with the results of calling a provided function on every element in the calling array.

The `forEach()` method doesn’t actually return anything (undefined). It simply calls a provided function on each element in your array. This callback is allowed to mutate the calling array.
Meanwhile, the `map()` method will also call a provided function on every element in the array. The difference is that `map()` utilizes return values and actually returns a new Array of the same size.

#### Explain event bubbling

When an event happens on an element, it first runs the handlers on it, then on its parent, then all the way up on other ancestors.

```html
<style>
  body * {
    margin: 10px;
    border: 1px solid blue;
  }
</style>

<form onclick="alert('form')">
  FORM
  <div onclick="alert('div')">
    DIV
    <p onclick="alert('p')">P</p>
  </div>
</form>
```

A click on the inner `<p>` first runs onclick:

1. On that `<p>`.
2. Then on the outer `<div>`.
3. Then on the outer `<form>`.
4. And so on upwards till the document object.

![bubbling](https://javascript.info/article/bubbling-and-capturing/event-order-bubbling@2x.png)
