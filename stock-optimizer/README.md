# Stock Buy and Sell Optimization

Source: [Algodaily](https://algodaily.com/challenges/stock-buy-and-sell-optimization)

## Problem

Write a function called `stockOptimizer` that takes an array of stock prices and returns the max profit that you can make by buying and selling only once.

This is a classic technical interview question that I've seen a times in interviews. Let's say you're given an array of stock prices. Each index represents a day, and the the element in that index is the stock price at that day.

So this array below means: day 1 - $10, day 2 - $7, and so on:

```js
const prices = [10, 7, 6, 2, 9, 4];
```

Given the ability to only buy once and sell once, our goal is to maximize the amount of profit (purchase price - selling price) that we can attain. Note the only caveat is that that we cannot sell a stock before we buy one. See the following examples for clarification:

```js
[10, 7, 6, 2, 9, 4];
// 7
```

For the above, the max profit is made when we buy on day/index 3 (when the price is 2) and sell on day/index 4 (when the price is 9). Let's do another example.

```js
[9, 8, 6, 5, 3];
// 0
```

In the above, the price drops every day, and thus we can't have a profit since we're required to buy before selling.

## Some Cases to Consider

- An empty array: `[]`
- An array of just a single stock price, e.g: `[2]`
- Duplicates in the array, e.g: `[1, 10, 4, 4, 6]`
- An array of all _increasing_ prices, e.g: `[1, 2, 3, 5, 10]`
- An array of all _decreasing_ prices, e.g: `[10, 5, 3, 1]`

## Solutions

### Brute-force Solution

Runtime: **O(n<sup>2</sup>)**

```js
/**
 * Takes in an array of stock prices and returns the maximum profit
 * @param {Array<number>} stocks list of stock prices
 * @returns {number} the maximum profit from a single buy and then sell
 */
function stockOptimizer(stocks) {
  let maxProfit = 0;
  // brute force
  for (let i = 0; i < stocks.length - 1; i++) {
    // loop runs n times, from 0 to n
    for (let j = i + 1; j < stocks.length; j++) {
      // loop runs at most n-1 times, from i+1 to n
      const profit = stocks[j] - stocks[i]; // 3 operations, each is constant
      maxProfit = maxProfit > profit ? maxProfit : profit; // 2 operations, each is constant
    }
  }
  // total runtime is O( n(n(5)) ) = O(n^2)
  return maxProfit;
}
```

### Linear Solution

Runtime: **0(n)**

```js
/**
 * Emily's linear solution (with minor format tweaks/simplification) --
 * Takes in an array of stock prices and returns the maximum profit
 * @param {Array<number>} stocks list of stock prices
 * @returns {number} the maximum profit from a single buy and then sell
 */
function stockOptimizerEmily(stocks) {
  let maxProfit = 0;
  let min = stocks[0];
  for (let i = 1; i < stocks.length; i++) {
    // update min if needed (if there's something more minimum)
    min = min > stocks[i] ? stocks[i] : min;
    // update maxProfit if needed (if current - min is greater than our previous max)
    const profit = stocks[i] - min;
    maxProfit = maxProfit > profit ? maxProfit : profit;
  }
  return maxProfit;
}
```
