/* eslint-disable no-plusplus */
// =================================================================
// =================================================================

/**
 * Brute force approach --
 * Takes in an array of stock prices and returns the maximum profit
 * @param {Array<number>} stocks list of stock prices
 * @returns {number} the maximum profit from a single buy and then sell
 */
function stockOptimizerBrute(stocks) {
  let maxProfit = 0;
  // loop runs n times, from 0 to n
  for (let i = 0; i < stocks.length - 1; i++) {
    // loop runs at most n-1 times, from i+1 to n
    for (let j = i + 1; j < stocks.length; j++) {
      const profit = stocks[j] - stocks[i]; // 3 operations, each is constant
      maxProfit = maxProfit > profit ? maxProfit : profit; // 2 operations, each is constant
    }
  }
  // total runtime is O( n(n(5)) ) = O(n^2)
  return maxProfit;
}

// =================================================================
// =================================================================

/**
 * Misguided/failed linear attempt --
 * Takes in an array of stock prices and returns the maximum profit
 * @param {Array<number>} stocks list of stock prices
 * @returns {number} the maximum profit from a single buy and then sell
 */
function stockOptimizerLinear(stocks) {
  // linear time?
  let maxProfit = 0;
  const doubleStocks = stocks.concat(stocks.slice(1));
  for (let i = 0, j = stocks.length; i < stocks.length - 1; i++, j++) {
    const profit = doubleStocks[j] - doubleStocks[i];
    maxProfit = maxProfit > profit ? maxProfit : profit;
  }
  return maxProfit;
}

// =================================================================
// =================================================================

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

// =================================================================
// =================================================================

const ex1Stocks = [10, 7, 6, 2, 9, 4];
console.log(`stocks: ${ex1Stocks}\nmaxProfit = ${stockOptimizerBrute(ex1Stocks)}`);
