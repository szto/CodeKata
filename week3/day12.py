def minPathSum(grid):
  
  length = len(grid[0])
  height = len(grid)
  
  first = grid[0][0]
  last = grid[length-1][height-1]
  newArr = grid.copy()
  
  for i in range(1,len(grid[0])):
    
    newArr[0][i] += newArr[0][i-1]
  
  for j in range(1,len(grid)):
    newArr[j][0] += newArr[j-1][0]
  
  for p in range(1,len(grid[0])):
    for q in range(1,len(grid)):
      if(newArr[p-1][q]<=newArr[p][q-1]):
        newArr[p][q] += newArr[p-1][q]
      else:
        newArr[p][q] += newArr[p][q-1]
      print(newArr[p][q], newArr[p-1][q], newArr[p][q-1] )
  
  return newArr[length-1][height-1]
