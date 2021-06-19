/*
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
You may assume that each input would have exactly one solution, and you may not use the same element twice.
You can return the answer in any order.

Example:

Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Output: Because nums[0] + nums[1] == 9, we return [0, 1].
*/

let nums = [2, 7, 11, 15], tgt = 9;

console.log(twoSum([3,2,4], 6));

function twoSum(numbs, target) {
    let sCount = 0, indices = [], isDone = true;
    
    while (isDone) {
        let lCount = (numbs.length - 1);
        for (let i in numbs) {
            if(sCount != lCount){
                if ((numbs[sCount] + numbs[lCount]) == target) {
                    indices.push(sCount, lCount), isDone = false;
                    break;
                }
            }
            lCount--
        }
        sCount++
    }
    return indices;
}