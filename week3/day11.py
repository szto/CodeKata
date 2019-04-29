def complexNumberMultiply(a, b):
  
  """
  :type a: str
  :type b: str
  :rtype: str
  """
  print(a.index('+'))
  
  aObjectFront = slice(0,a.index('+'))
  aObjectBack = slice(a.index('+')+1,a.index('i'))
  bObjectFront = slice(0,b.index('+'))
  bObjectBack = slice(b.index('+')+1,b.index('i'))
  #print("%s, %s" %(a[aObjectFront], a[aObjectBack]))
  #print("%s, %s" %(b[bObjectFront], b[bObjectBack]))
  
  aFront = int(a[aObjectFront])
  aBack = int(a[aObjectBack])
  bFront = int(b[bObjectFront])
  bBack = int(b[bObjectBack])
  
  print ("%s, %s, %s, %s" %(aFront, aBack, bFront, bBack))
  
  resultFront = (aFront * bFront) - (aBack * bBack)
  resultBack = (aFront * bBack) + (bFront * aBack)
  
  print("%s, %s" %(resultFront, resultBack))
  
  resultString = f"{resultFront}+{resultBack}i"
  print(resultString)
  return resultString
  

aType = '105+1i'
bType = '1+10i'

complexNumberMultiply(aType, bType)


#Solutuion 

def complexNumberMultiply(a, b):
  """
  :type a: str
  :type b: str
  :rtype: str
  """

  firstArr = a[:-1].split('+')
  a1 = int(firstArr[0])
  a2 = int(firstArr[1])

  secondArr = b[:-1].split('+')
  b1 = int(secondArr[0])
  b2 = int(secondArr[1])

  return f'{a1 * b1 - a2 * b2}+{a1 * b2 + a2 * b1}i'

# 더 줄인 버전
def complexNumberMultiply2(a, b):
  """
  :type a: str
  :type b: str
  :rtype: str
  """
  a1, a2 = map(int, a[:-1].split('+'))
  b1, b2 = map(int, b[:-1].split('+'))
  return '%d+%di' % (a1 * b1 - a2 * b2, a1 * b2 + a2 * b1)
