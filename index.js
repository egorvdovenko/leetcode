/**
 * Remove Element
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
  let k = 0
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== val) {
      nums[k] = nums[i]
      k++
    }
  }
  for (let i = k; i < nums.length; i++) {
    nums[i] = "_"
  }
  return k
}

// var nums = [0, 1, 2, 2, 3, 0, 4, 2]
// console.log(removeElement(nums, 2));
// console.log(nums);

/*
[1,1,2,2,3,3,3,4,4], val = 3
i[0]1 != val3 => i[0]1 => [1,1,2,2,3,3,3,4,4]
i[1]1 != val3 => i[1]1 => [1,1,2,2,3,3,3,4,4]
i[2]2 != val3 => i[2]2 => [1,1,2,2,3,3,3,4,4]
i[3]2 != val3 => i[3]2 => [1,1,2,2,3,3,3,4,4]
i[4]3 == val3
i[5]3 == val3
i[6]3 == val3
i[7]4 != val3 => i[4]4 => [1,1,2,2,4,3,3,4,4]
i[8]4 != val3 => i[5]4 => [1,1,2,2,4,4,3,4,4]
k6
*/

/**
 * Remove Duplicates from Sorted Array
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  let k = 0
  for (let i = 1; i < nums.length; i++) {
    if (nums[k] !== nums[i]) {
      k++
      nums[k] = nums[i]
    }
  }
  k++
  for (let i = k; i < nums.length; i++) {
    nums[i] = "_"
  }
  return k
}

// var nums = [0, 0, 0, 1, 1, 1, 2, 2, 2, 3, 3, 4]
// console.log(removeDuplicates(nums))
// console.log(nums)

/*
[1,1,2,2,3,3,3,4,4]
k[0]1 == i[1]1
k[0]1 != i[2]2 => k[1]2 => [1,2,2,2,3,3,3,4,4]
k[1]2 == i[3]2
k[1]2 != i[4]3 => k[2]3 => [1,2,3,2,3,3,3,4,4]
k[2]3 == i[5]3
k[2]3 == i[6]3
k[2]3 != i[7]4 => k[3]4 => [1,2,3,4,3,3,3,4,4]
k[3]4 == i[8]4
k++ => k4
*/

/**
 * Remove Duplicates from Sorted Array II
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicatesII = function (nums) {
  if (nums.length <= 2) return nums.length

  let k = 2
  for (let i = 2; i < nums.length; i++) {
    if (nums[i] !== nums[k - 2]) {
      nums[k] = nums[i]
      k++
    }
  }
  for (let i = k; i < nums.length; i++) {
    nums[i] = "_"
  }
  return k
}

// var nums = [0, 0, 1, 1, 1, 1, 2, 3, 3]
// console.log(removeDuplicatesII(nums))
// console.log(nums)

/*
[0,0,1,1,1,1,2,3,3]
*/

/**
 * Majority Element
 * Boyer-Moore Voting Algorithm
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  let candidate = null
  let count = 0

  for (let i = 0; i < nums.length; i++) {
    if (count === 0) {
      candidate = nums[i]
    }

    count += nums[i] === candidate ? 1 : -1
  }

  return candidate
}

// var nums = [2, 2, 1, 1, 1, 2, 2]
// console.log(majorityElement(nums))

/**
 * Rotate Array
 * Two-Pointer Approach (In-Place Reversal)
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
  k %= nums.length

  var reverse = function (start, end) {
    while (start < end) {
      ;[nums[start], nums[end]] = [nums[end], nums[start]]
      start++
      end--
    }
  }

  reverse(0, nums.length - 1)
  reverse(0, k - 1)
  reverse(k, nums.length - 1)
}

// const nums = [1, 2, 3, 4, 5, 6, 7]
// rotate(nums, 3)
// console.log(nums)

/**
 * Best Time to Buy and Sell Stock
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let minPrice = Infinity
  let maxProfit = 0

  for (let i = 0; i < prices.length; i++) {
    if (prices[i] < minPrice) {
      minPrice = prices[i]
    } else if (prices[i] - minPrice > maxProfit) {
      maxProfit = prices[i] - minPrice
    }
  }

  return maxProfit
}

// const prices = [7, 1, 5, 3, 6, 4]
// console.log(maxProfit(prices))

/*
[7, 1, 5, 3, 6, 4]
i[0]7 < Infinity => minPrice = 7
i[1]1 < minPrice(7) => minPrice = 1
i[2]5 > minPrice(1) && i[2]5 - minPrice(1) > maxProfit(0) => maxProfit = 4
i[3]3 > minPrice(1) && i[3]3 - minPrice(1) < maxProfit(4)
i[4]6 > minPrice(1) && i[4]6 - minPrice(1) > maxProfit(4) => maxProfit = 5
i[5]4 > minPrice(1) && i[5]4 - minPrice(1) < maxProfit(5)
*/

/**
 * Best Time to Buy and Sell Stock II
 * @param {number[]} prices
 * @return {number}
 */
var maxProfitII = function (prices) {
  let maxProfit = 0

  for (let i = 1; i < prices.length; i++) {
    if (prices[i] > prices[i - 1]) {
      maxProfit += prices[i] - prices[i - 1]
    }
  }

  return maxProfit
}

// const prices = [7, 1, 5, 3, 6, 4]
// console.log(maxProfitII(prices))

/**
 * Jump Game
 * Greedy Algorithm
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
  let farthest = 0

  for (let i = 0; i < nums.length; i++) {
    if (i > farthest) {
      return false
    }

    farthest = Math.max(farthest, i + nums[i])

    if (farthest >= nums.length - 1) {
      return true
    }
  }

  return farthest >= nums.length - 1
}

// const nums = [3, 2, 1, 0, 4]
// const nums = [2, 3, 1, 1, 4]
// const nums = [3, 0, 8, 2, 0, 0, 1]
// console.log(canJump(nums))


/**
 * Jump Game II
 * Greedy Algorithm
 * @param {number[]} nums
 * @return {number}
 */
var jump = function (nums) {
  const n = nums.length;
  if (n === 1) return 0;

  let jumps = 0;
  let currentEnd = 0;
  let farthest = 0;

  for (let i = 0; i < n; i++) {
    farthest = Math.max(farthest, i + nums[i]);

    if (i === currentEnd) {
      jumps++;
      currentEnd = farthest;

      if (currentEnd >= n - 1) {
        break;
      }
    }
  }

  return jumps;
};

// const nums = [2, 3, 1, 1, 4]
// const nums = [2, 3, 0, 1, 4]
// const nums = [1, 2]
// const nums = [1, 2, 3]
// const nums = [3, 4, 3, 2, 5, 4, 3]
// const nums = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 1, 0]
// const nums = [1, 2, 0, 1]
// const nums = [7, 0, 9, 6, 9, 6, 1, 7, 9, 0, 1, 2, 9, 0, 3]
// console.log(jump(nums))