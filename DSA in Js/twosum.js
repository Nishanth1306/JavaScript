function twoSum(nums, target) {
    return nums.filter((num, index) => {
      return nums.some((otherNum, otherIndex) => {
        return otherIndex !== index && num + otherNum === target;
      });
    });
  }
  

  const numbers = [1, 2, 3, 4, 5];
  const target = 6;
  console.log(twoSum(numbers, target)); 
  