# Best Time to Buy and Sell Stock

## Description
The "Best Time to Buy and Sell Stock" problem is a classic algorithmic challenge that involves determining the maximum profit that can be achieved from a series of stock prices over a given period. You are given an array where each element represents the price of a stock on a particular day. The goal is to find the maximum profit you can achieve by buying on one day and selling on another day in the future.

## Problem Statement
You are given an array `prices` where `prices[i]` is the price of a given stock on the `i-th` day. You want to maximize your profit by choosing a single day to buy one share of stock and choosing a different day in the future to sell that share.

Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return `0`.

### Example
Input: `prices = [7, 1, 5, 3, 6, 4]`  
Output: `5`  
Explanation: Buy on day `2` (price = `1`) and sell on day `5` (price = `6`), profit = `6 - 1 = 5`.

## Best Solution Approach
The optimal solution to this problem can be achieved using a single pass through the array. The idea is to keep track of the minimum price encountered so far and calculate the potential profit at each step. The maximum profit is updated whenever a higher profit is found.

### Algorithm
1. Initialize `minPrice` to `Infinity` and `maxProfit` to `0`.
2. Iterate through each price in the `prices` array:
   - If the current price is less than `minPrice`, update `minPrice`.
   - Calculate the potential profit by subtracting `minPrice` from the current price.
   - If the potential profit is greater than `maxProfit`, update `maxProfit`.
3. Return `maxProfit` after iterating through the array.

### Time Complexity
The time complexity of this solution is O(n), where n is the number of days (length of the prices array), as we only make a single pass through the array.

### Space Complexity
The space complexity is O(1) since we are using only a constant amount of extra space.