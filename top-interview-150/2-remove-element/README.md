# Remove Element

## Description
The "Remove Element" task requires you to remove all instances of a specified value from an array in-place and return the new length of the array. The order of the elements can be changed, and you do not need to allocate extra space for another array.

## Problem Statement
Given an array `nums` and a value `val`, you need to modify the array such that all occurrences of `val` are removed, and the remaining elements are shifted to the front of the array. The function should return the new length of the array after the removal of the specified value.

### Example
```javascript
Input: nums = [3, 2, 2, 3], val = 3
Output: 2, nums = [2, 2, _, _]
```

## Best Solution
The best solution involves using a two-pointer technique. One pointer iterates through the array, while the other pointer keeps track of the position to place the next non-`val` element. This approach ensures that the operation is done in O(n) time complexity and O(1) space complexity.
