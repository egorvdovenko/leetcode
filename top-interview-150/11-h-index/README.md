# H-Index

## Description
The H-Index is a metric used to measure the productivity and citation impact of a researcher. It is defined as the maximum value of `h` such that the researcher has published `h` papers that have each been cited at least `h` times.

## Problem Statement
Given an array of integers `citations` where `citations[i]` is the number of citations of the `i-th` paper, return the h-index of the researcher.

## Best Solution Approach
1. **Sorting**: First, sort the array of citations in descending order.
2. **Iterate**: Iterate through the sorted array and check for the condition `citations[i] >= i + 1`. This checks if the current paper can contribute to the h-index.
3. **Return**: The maximum value of `h` found during the iteration will be the h-index.

### Time Complexity
The time complexity of this approach is O(n log n) due to the sorting step, where `n` is the number of papers.

### Space Complexity
The space complexity is O(1) if we consider the sorting done in-place.