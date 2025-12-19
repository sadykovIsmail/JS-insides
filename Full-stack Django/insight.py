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
dictionary[key] = new value    ,   dictionary.get(key, default)   ,  dic.keys()   ,   dic.values()  #gets values  ,  dic.items() # gets all ,   dic.clear() #clears, del dic[key]
pizza.update({ 'price': 15, 'total_time': 25 })  , student.pop('key', 'default') #gives value removes key  ,  .popitem() #removes and gives the last key and value like tuple
for key, value in dictionary.items():      ,     for index, product in enumerate(products.items(), 1):
    dictionary[key] = round(value * 0.8)   ,         print(index, product)   ,  ** from dic to function parameters print(sum(**nums)) # 7
    
17)set()              # creates an empty set
{}                 # creates an empty dictionary (NOT a set)

s.add(x)           # adds element x to the set
s.remove(x)        # removes x (raises error if x not found)
s.discard(x)       # removes x (NO error if x not found)
s.pop()            # removes and returns an arbitrary element
s.clear()          # removes all elements from the set

x in s             # checks if x exists in the set (True / False)

A | B              # union → all elements from both sets (no duplicates)
A & B              # intersection → elements common to both sets
A - B              # difference → elements in A but NOT in B
A ^ B              # symmetric difference → elements in A or B, but not both

A.union(B)         # union (method form)
A.intersection(B)  # intersection (method form)
A.difference(B)    # difference (method form)
A.symmetric_difference(B)  # symmetric difference (method form)

A.issubset(B)      # checks if A ⊆ B
A.issuperset(B)    # checks if A ⊇ B
A.isdisjoint(B)    # checks if A and B have NO elements in common

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

21) Classes: self._balance = balance # internal accessible  with __ not accessible private
__validate # for validation
@property # makes method like property of the class
@<property_name>.setter #for setting values to property and can use # my_circle.radius = 4 # This will call the setter
del my_circle.radius # let you define what happens after deletion
class Book:
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

24) import datetime 
now = datetime.datetime.now()
print(now.strftime("%Y-%m-%d-%H-%M-%S"))  # Output: 2024-03-15 (year-month-day-hour-minute-second with - separator)

25) Inheritance:
class Walker:
    def walk(self):
        return 'I can walk on land'

class Swimmer:
    def swim(self):
        return 'I can swim in water'

# Amphibian inherits from both Walker and Swimmer
class Amphibian(Walker, Swimmer):
    def __init__(self, name):
        self.name = name

    def introduce(self):
        return f"I'm {self.name} the frog. {self.walk()} and {self.swim()}."

frog = Amphibian('Freddy')
print(frog.introduce())
# Output: I'm Freddy the frog. I can walk on land and I can swim in water.

base = super().sound() means:
#Call the parent class’s sound() method and save its result.

26)
# ==============================
# 1️⃣ Regular Polymorphism
# Different classes, same method name, different behavior
# ==============================

class Cat:
    def speak(self):
        return "Meow"  # Cat sound

class Dog:
    def speak(self):
        return "Woof"  # Dog sound

def make_sound(animal):
    # Works with any object that has a .speak() method
    print(animal.speak())

make_sound(Cat())  # Output: Meow
make_sound(Dog())  # Output: Woof

# ✅ Concept: One function, many behaviors depending on the object

# ==============================
# 2️⃣ Inheritance-based Polymorphism
# Parent defines method, children override it
# ==============================

class Animal:
    def speak(self):
        return "Some generic sound"  # Default parent method

class Cat(Animal):
    def speak(self):
        return "Meow"  # Child override

class Dog(Animal):
    def speak(self):
        return "Woof"  # Child override

class Monkey(Animal):
    def speak(self):
        return "Ooh ooh aah aah"  # Child override

animals = [Cat(), Dog(), Monkey()]

for animal in animals:
    # Same method name, different child behavior
    print(animal.speak())

# Output:
# Meow
# Woof
# Ooh ooh aah aah


27)class MediaError(Exception): # costumize error from build in class method Exception

28) from abc import ABC, abstractmethod

class Animal(ABC):
    @abstractmethod # makes method required to all subclasses
    def make_sound(self):
        pass 
        
        
29) import random
 return random.choice([])
 
30) Data structures:
Stacks: like dish last removes first, Push: adding, POP: removing, peek: return the last element
Queues: like queues first come first leave , Enqueue: adding to back , Deque: removing first
'''