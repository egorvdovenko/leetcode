# Jump Game

## Description
The "Jump Game" problem is a classic algorithmic challenge that involves determining whether you can reach the last index of an array starting from the first index. Each element in the array represents your maximum jump length at that position. The goal is to decide if you can reach the end of the array.

## Problem Statement
Given an array of non-negative integers `nums`, you are initially positioned at the first index. Each element in the array represents your maximum jump length at that position. Your task is to return `true` if you can reach the last index, and `false` otherwise.

### Example
Input: `nums = [2, 3, 1, 1, 4]`  
Output: `true`  
Explanation: Jump 1 step from index 0 to 1, then 3 steps to the last index.

Input: `nums = [3, 2, 1, 0, 4]`  
Output: `false`  
Explanation: You will always arrive at index 3, which has a maximum jump length of 0, meaning you cannot move further.

## Best Solution Approach
The optimal solution uses a greedy algorithm. The idea is to keep track of the farthest index you can reach as you iterate through the array. If at any point the current index exceeds the farthest reachable index, it means you cannot proceed further, and you should return `false`. If you can reach or exceed the last index during your iterations, return `true`.

### Time Complexity
The time complexity of this approach is O(n), where n is the length of the input array, as we only traverse the array once.

### Space Complexity
The space complexity is O(1) since we are using a constant amount of space for variables.