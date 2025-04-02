# Jump Game II

## Description
The "Jump Game II" task involves finding the minimum number of jumps required to reach the last index of an array, starting from the first index. Each element in the array represents the maximum jump length at that position. The goal is to determine the least number of jumps needed to reach the end of the array.

## Problem Statement
Given an array of non-negative integers `nums`, where each element represents the maximum jump length at that position, return the minimum number of jumps to reach the last index. If you cannot reach the last index, return -1.

### Example
Input: `nums = [2, 3, 1, 1, 4]`  
Output: `2`  
Explanation: The minimum number of jumps to reach the last index is 2. Jump 1 step from index 0 to 1, then 3 steps to the last index.

## Best Solution Approach
The optimal solution uses a greedy algorithm. The idea is to keep track of the farthest point that can be reached at each step and count the number of jumps needed to reach that point. The algorithm iterates through the array, updating the farthest reachable index and incrementing the jump count whenever the current index reaches the end of the last jump.

### Time Complexity
The time complexity of this approach is O(n), where n is the length of the input array.

### Space Complexity
The space complexity is O(1) since we are using a constant amount of space for variables.