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
list = [22, 'Hello', 3.24, true] , None # is nothing, to check: type() , checking: isinstance(True, bool) # True

4) immutable data types: string, integer, float, boolean, tuple, and range. #can reassing but not change the value

5) Strings: multiline strings: my_str_3 = """Multiline
string"""   using "" : quote = 'She said, "Hello World!"' or "She said, \"Hello!\""  , 
str + int = typeError  ,  print(f'The sum of {num1} and {num2} is {num1 + num2}') # The sum of 5 and 10 is 15  , len() #checks the length 
hello world  print(my_str[-2]) # l  , sentence[start:stop] # start included stop excluded  , print(my_str[8:])  # rld  , print(my_str[0:11:2])  # Hlowrd   , print(my_str[::-1]) # dlrow olleH
print('Hello' in my_str)  # True

6) actions for strings: upper() #uppercase , lower(), strip() #removes space bef or aft  , my_str.replace('hello', 'hi')  , split() splits to the list,,
join(list),  .startswith('hello') #checks  , .endswith('world') #checks , .find('world') # 6 , .count('o') # 2  , .capitalize() #capitalizes  ,  .isupper() # checks 
.islower() # checks  ,  .title('hello world') # Hello World  , bool() #checks truthy or falsly
str.maketrans(from, to) #builds mapping  ,  string.translate(mapping) applies that translate  , str in text # checks for existance

7) Integers and Floats: print(type(my_int_1)) # <class 'int'>  ,  my_float_2 % my_float_1 #will return the remainder of division
print(5.8 // 2)  # 5.8 ÷ 2 = 2.9  ,  pow(2, 3)  # same as 2 ** 3 → 8  ,  int() , float()  , round(my_int_2, 1) # rounds to 1 decimal places  , abs(-15) #15 
 bin(my_int) # base of 2  , oct(int) # base of 8 , hex(int) # base of 16
 
8) Scope: LEGB  , nonlocal res  # Allow modification of an enclosing variable
global my_var_2  # Makes it globally usable or can change the global var

9) if condition:    , elif con2:  , else:  #if statement

10) "and",  "or",  "not" operators 

11)del developer[1] #deletes the item index 1 from developer

12)List: developer = ['Alice', 34, 'Rust Developer'] unpacking name, age, job = developer
developer[2][1] # inside the nested list  ,  name, *rest = developer # rest == rest of after 1st el.
append() # adds element to last   ,   extend() # adds elements from list to list    ,   numbers.insert(2, 2.5)
.remove(el) # removes el    ,   .pop(index) # removes at index   ,    clear() #clears   ,   sort() #in place sort 
.sorted() #returns sorted list   ,   .reverse() # in place reverse   ,  index(item) # founds the items first index

13) Tuple: unpacking, slice, same list  ,  .count(el) #counts el  ,  index(el , start, end) # index of el  ,  
.sorted(iterable, key=None, reverse=False) # returns new list

'''