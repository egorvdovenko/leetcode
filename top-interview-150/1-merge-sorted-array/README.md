# Merge Sorted Array

## Description
The "Merge Sorted Array" task requires you to merge two sorted arrays into one sorted array in-place. The first array has enough space to hold the additional elements from the second array.

## Problem Statement
You are given two integer arrays `nums1` and `nums2`, sorted in non-decreasing order, and two integers `m` and `n`, representing the number of elements in `nums1` and `nums2`, respectively. You need to merge `nums2` into `nums1` as one sorted array **in-place**.

### Example
```javascript
Input: nums1 = [1, 2, 3, 0, 0, 0], m = 3, nums2 = [2, 5, 6], n = 3
Output: nums1 = [1, 2, 2, 3, 5, 6]
```

## Best Solution

The best solution uses a two-pointer technique starting from the end of both arrays. Two pointers, p1 and p2, are initialized at the end of the initialized parts of nums1 and nums2, respectively. A third pointer, p, starts at the end of nums1. The larger value between nums1[p1] and nums2[p2] is placed at nums1[p], and the corresponding pointer is decremented. If any elements remain in nums2, they are copied into nums1. This approach ensures the merge is performed in O(m + n) time complexity and O(1) space complexity.