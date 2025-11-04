'''
1) declaring variable: name = 'John Doe'
2) actions of print(): print(*objects, sep=' ', end='\n', file=sys.stdout, flush=False)
print('Footballers:', end=' ')
print('Ronaldo', end='.') # Output: Footballers: Ronaldo.

with open('output.txt', 'w') as f:
  print('Hello world!', file=f) #will print into file: output.txt
  
import time
print('Processing...', end=' ', flush=True)
time.sleep(2)
print('Done!')

3) data types: integer: 4, -5 , float:4.50 , complex: 3 + 4j , set:{4, 2, 0}, dictionary: {'name': 'Ismail'} , typle: (4,2,0) , range(5) #(0, 5) , 
list = [22, 'Hello', 3.24, true] , None # is nothing

4) immutable data types: string, integer, float, boolean, tuple, and range. #can reassing but not change the value
'''