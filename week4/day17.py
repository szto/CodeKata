def solution(N):
  binary = str(bin(N))
  count = 0
  array = []
  for i in range(2,len(binary)):
    
    if binary[i] == '1':
      array.append(count)
      count = 0 
    elif binary[i] == '0':
      count += 1

  return max(array)
