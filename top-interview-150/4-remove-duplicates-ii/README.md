# Remove Duplicates from Sorted Array II

## Description
The "Remove Duplicates from Sorted Array II" task requires you to modify a sorted array in such a way that each element can appear at most twice. The function should return the new length of the modified array. The elements beyond the new length can be ignored.

## Problem Statement
Given a sorted array `nums`, remove duplicates in-place such that each element appears at most twice and return the new length. Do not allocate extra space for another array.

### Example
Input: `nums = [1, 1, 1, 2, 2, 3]`  
Output: `5`, with the first five elements of `nums` being modified to `[1, 1, 2, 2, 3]`.

## Best Solution Approach
The best approach to solve this problem is to use a two-pointer technique. The first pointer (`k`) keeps track of the position to insert the next unique element, while the second pointer iterates through the array. By checking the condition of the current element against the element at `k-2`, we can ensure that no more than two duplicates are allowed.

### Time Complexity
The time complexity of this solution is O(n), where n is the number of elements in the array.

### Space Complexity
The space complexity is O(1) since we are modifying the array in place without using additional storage.