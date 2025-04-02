# Best Time to Buy and Sell Stock II

## Description
The "Best Time to Buy and Sell Stock II" problem is a classic algorithmic challenge that involves maximizing profit from stock trading. Unlike the first version of this problem, where you can only complete one transaction (buy and then sell), this version allows for multiple transactions. You can buy and sell the stock as many times as you like, but you must sell the stock before you can buy it again.

## Problem Statement
Given an array of integers `prices` where `prices[i]` is the price of a given stock on the `i-th` day, your task is to calculate the maximum profit you can achieve. You may complete as many transactions as you like (i.e., buy one and sell one share of the stock multiple times). However, you must sell the stock before you can buy it again.

### Example
Input: `prices = [7, 1, 5, 3, 6, 4]`  
Output: `7`  
Explanation: Buy on day 2 (price = 1) and sell on day 3 (price = 5), profit = 5 - 1 = 4. Then buy on day 4 (price = 3) and sell on day 5 (price = 6), profit = 6 - 3 = 3. Total profit is 4 + 3 = 7.

## Best Solution Approach
The optimal solution involves iterating through the prices and summing up all the positive differences between consecutive days. This approach ensures that you capture all profitable transactions without needing to track individual buy and sell operations explicitly.

### Time Complexity
The time complexity of this solution is O(n), where n is the number of days (length of the prices array).

### Space Complexity
The space complexity is O(1) since we are using a constant amount of space for variables.