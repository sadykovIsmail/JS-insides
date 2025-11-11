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

6) actions for strings: .upper() #uppercase , .lower(), .strip() #removes space bef or aft  , my_str.replace('hello', 'hi')  , split() splits to the list,,
join(list),  .startswith('hello') #checks  , .endswith('world') #checks , .find('world') # 6 , .count('o') # 2  , .capitalize() #capitalizes  ,  .isupper() # checks 
.islower() # checks  ,  .title('hello world') # Hello World  , bool() #checks truthy or falsly
str.maketrans(from, to) #builds mapping  ,  string.translate(mapping) applies that translate  , str in text # checks for existance

7) Integers and Floats: print(type(my_int_1)) # <class 'int'>  ,  my_float_2 % my_float_1 #will return the remainder of division
print(5.8 // 2)  # 5.8 ÷ 2 = 2.9  ,  pow(2, 3)  # same as 2 ** 3 → 8  ,  int() , float()  , round(my_int_2, 1) # rounds to 1 decimal places  , abs(-15) #15 
 bin(my_int) # base of 2  , oct(int) # base of 8 , hex(int) # base of 16
 
8) Scope: LEGB  , nonlocal res  # Allow modification of an enclosing variable
global my_var_2  # Makes it globally usable or can change the global var inside function

9) if condition:    , elif con2:  , else:  #if statement

10) "and",  "or",  "not" operators   ,  range(start, stop, step)

11)del developer[1] #deletes the item index 1 from developer

12)List: developer = ['Alice', 34, 'Rust Developer'] unpacking name, age, job = developer
developer[2][1] # inside the nested list  ,  name, *rest = developer # rest == rest of after 1st el.
append() # adds element to last   ,   extend() # adds elements from list to list    ,   numbers.insert(2, 2.5)
.remove(el) # removes el    ,   .pop(index) # removes at index and returns value if not index return last and removes   ,    clear() #clears   ,   sort() #in place sort 
.sorted() #returns sorted list   ,   .reverse() # in place reverse   ,  index(item) # founds the items first index

13) Tuple: unpacking, slice, same list  ,  .count(el) #counts el  ,  index(el , start, end) # index of el  ,  
.sorted(iterable, key=None, reverse=False) # returns new list

14)for language in programming_languages:    # for loop    ,    while guess != secret_number:  # whilie loop
    print(language)   else: , break, continue  # works for both
    
15)Iterable Operations: list(enumerate(languages, start))   ,    list(zip(developers, ids))  #combines together   ,   
for name, id in zip(developers, ids):
    print(f'Name: {name}')
    print(f'ID: {id}')
    
even_numbers = [num for num in range(21) if num % 2 == 0]  # without else
result = ['Even' if num % 2 == 0 else 'Odd' for num in numbers]  # with even included
filter(function, iterable)   # filters   ,    map(function, iterable)  # changes each    ,   sum(iterable, start=0) #sums
lambda args: expression #small function   list(map(lambda x: x ** 2, numbers))

16) Dictionaries: pizza = dict([('name', 'Margherita Pizza'), ('price', 8.9), ('calories_per_slice', 250), ('toppings', ['mozzarella', 'basil'])])
dictionary[key] = new value    ,   dictionary.get(key, default)   ,  dic.keys()   ,   dic.values()  #gets values  ,  dic.items() # gets all ,   dic.clear() #clears
pizza.update({ 'price': 15, 'total_time': 25 })  , student.pop('key', 'default') #gives value removes key  ,  .popitem() #removes and gives the last key and value like tuple
for key, value in dictionary.items():      ,     for index, product in enumerate(products.items(), 1):
    dictionary[key] = round(value * 0.8)   ,         print(index, product)   ,  ** from dic to function parameters print(sum(**nums)) # 7
    
17)Set: set() # empty Set  ,  {} # empty Dictionary  ,   my_set.add(6) #adds  ,  .remove(el) # removes  , .clear() #clears  ,  
A.issubset(B) #A ⊆ B  ,   A.issuperset(B)  #A ⊇ B   ,  .isdisjoint() #checks if has NOT in common  ,  | adds tow sets no common  , & returns common
 A - B #returns element form A arenot in B  ,  ^ returns unique elements ,  
 
18) math	Math operations (sqrt, sin, factorial)	math.sqrt(16)    ,   random	Random numbers, shuffling	random.randint(1, 10)  ,  datetime	Dates and times	datetime.datetime.now()
os	Interact with operating system	os.listdir()   ,   sys	System-level commands and args	sys.argv   ,  time	Sleep, measure execution time	time.sleep(2)
json	Read/write JSON files	json.dumps(data)   ,  re	Regular expressions	re.findall(r'\d+', text)   ,  statistics	Mean, median, stdev	statistics.mean([1,2,3])
import sth as sth    ,   from math import sth

19) re: regex: re.search('p\d+', patient_id, re.IGNORECASE) #checks for p upper_lower case and any number and one or more times   ,   re.fullmatch #checks if onlly this no thing else

20)def parse_config(filename):
    try:
        with open(filename, 'r') as file:
            data = file.read()
            return int(data)
    except FileNotFoundError:
        raise ValueError('Configuration file is missing') from None
    except ValueError as e:
        raise ValueError('Invalid configuration format') from e

config = parse_config('config.txt')
pdb

21) Classes: class Book:
   def __init__(self, title, pages):
       self.title = title
       self.pages = pages

   def __len__(self):
       return self.pages

   def __str__(self):
       return f"'{self.title}' has {self.pages} pages"

   def __eq__(self, other):
       return self.pages == other.pages

22) Special methods:
how use:        code in class:              explanation:
a + b	        __add__(self, other)	   Runs when using + between objects
str(obj)   	    __str__(self)	           Returns a user-friendly string (for printing)
repr(obj)	    __repr__(self)         	   Returns an unambiguous developer string (for debugging)
a == b   	    __eq__(self, other)	       Runs when checking equality ==
a < b	        __lt__(self, other)	       Runs when comparing less-than <
for x in obj:	__iter__(self)	           Makes object iterable (returns iterator)
next(it)	    __next__(self)	           Returns next item from iterator

23) Dynamic attributes:
getattr(obj, name)	        Get attribute value	             getattr(p, "name")
setattr(obj, name, value)	Set attribute value	             setattr(p, "age", 30)
hasattr(obj, name)	        Check if attribute exists	     hasattr(p, "age")
delattr(obj, name)	        Delete attribute	             delattr(p, "age")
aaaaaaaaaaaaa
'''