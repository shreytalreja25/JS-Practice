function findMax(nums) {
    var max = nums[0];

    for (var i = 0; i < nums.length; i++) {
        if (nums[i] > max) {
            max = nums[i]
        }
    }
    return max;
}

var a = [5, 1, 3]

console.log(findMax(a))

