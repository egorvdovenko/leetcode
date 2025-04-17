# Insert Delete GetRandom O(1)

## Description
The "Insert Delete GetRandom O(1)" problem requires implementing a data structure that supports insertion, deletion, and retrieval of a random element in average O(1) time complexity.

## Problem Statement
Implement the `RandomizedSet` class:
- `RandomizedSet()` Initializes the object.
- `bool insert(int val)` Inserts an item `val` into the set if not present. Returns `true` if the item was not present, `false` otherwise.
- `bool remove(int val)` Removes an item `val` from the set if present. Returns `true` if the item was present, `false` otherwise.
- `int getRandom()` Returns a random element from the current set of elements. Each element must have the same probability of being returned.

### Example
```javascript
Input:
["RandomizedSet", "insert", "remove", "insert", "getRandom", "remove", "getRandom"]
[[], [1], [2], [2], [], [1], []]
Output:
[null, true, false, true, 2, true, 2]
```

## Best Solution
The best solution uses a combination of a hash map and an array:
1. **Hash Map**: Stores the indices of elements in the array, allowing O(1) access for insertion and deletion.
2. **Array**: Stores the elements, enabling O(1) random access.

### Time Complexity
- `insert`: O(1)
- `remove`: O(1)
- `getRandom`: O(1)

### Space Complexity
The space complexity is O(n), where `n` is the number of elements in the set.
