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

'''