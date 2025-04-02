# Remove Duplicates from Sorted Array

## Description
The "Remove Duplicates from Sorted Array" task requires you to modify a sorted array in-place such that each element appears only once and returns the new length of the array. The order of elements can be changed, and you must not use extra space for another array.

## Problem Statement
Given a sorted array `nums`, remove the duplicates in-place such that each element appears only once and return the new length. Do not allocate extra space for another array.

### Example
Input: `nums = [1, 1, 2]`  
Output: `2`, with the first two elements of `nums` being `1` and `2`.

## Best Solution Approach
The best approach to solve this problem is to use a two-pointer technique. You can maintain a pointer `k` that tracks the position of the last unique element found. Iterate through the array with another pointer `i`, and whenever you find a new unique element, you place it at the position `k + 1` and increment `k`. This way, you ensure that all unique elements are moved to the front of the array.

### Time Complexity
The time complexity of this solution is O(n), where n is the number of elements in the array.

### Space Complexity
The space complexity is O(1) since we are modifying the array in-place without using extra space.