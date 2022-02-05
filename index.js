var nums = [2, 7, 11, 15, 14, 5, 9, 6];
var target = 19;
for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j <= nums.length; j++) {
        if (nums[i] + nums[j] == target) {
            document.write(`location = ${[i,j]}`);
        }
    }
}