def moveZeroes(nums):
  length = len(nums)
  zero_count = 0
  for num in range(0,length):
    if nums[num] == 0:
      nums.append(nums[num])
      zero_count += 1
  
      
  for num in range(length-1,-1,-1):
    if nums[num] == 0:
      del nums[num]
    
  return nums
