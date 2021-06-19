package leetcode.java;

import java.util.Arrays;
import java.util.HashMap;
import java.util.Map;

public class TwoSums{

    public static void main(String[] args) {
        int[] nums = {3,2,4};

        int[] results = twoSum(nums, 6);
        System.out.println(Arrays.toString(results));
    }

    public static int[] twoSum(int[] nums, int target) {
        Map<Integer, Integer> map = new HashMap<>();
        for (int i = 0; i < nums.length; i++) {
            map.put(nums[i], i);
        }
        for (int i = 0; i < nums.length; i++) {
            int complement = target - nums[i];
            if (map.containsKey(complement) && map.get(complement) != i) {
                return new int[] { i, map.get(complement) };
            }
        }
        throw new IllegalArgumentException("No two sum solution");
    }
}