/**
 * Majority Element
 * Boyer-Moore Voting Algorithm
 * @param {number[]} nums
 * @return {number}
 */
function majorityElement(nums) {
  let candidate = null;
  let count = 0;

  for (let i = 0; i < nums.length; i++) {
    if (count === 0) {
      candidate = nums[i];
    }
    count += nums[i] === candidate ? 1 : -1;
  }

  return candidate;
}