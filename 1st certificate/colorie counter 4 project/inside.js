/*1)document.getElementById('title') is calling element by id. .textContent,.style.color = "blue". 
2) prefix isValid → Checks if something is valid.
isEmpty → Checks if a list, string, or container is empty.
isLoggedIn → Checks if a user is logged in.
isAvailable → Checks if an item is available.
3)hasAccess → Checks if a user has access.
hasErrors → Checks if there are any errors.
hasChildren → Checks if an element has child elements.
hasPermission → Checks if an entity has the necessary permissions.
3)let regex helps find, match, and replace text. let regex = /hello/
/\d+/	Matches one or more digits	"123", "42"
/\w+/	Matches a word (letters, numbers, underscore)	"hello", "test_123"
/\s+/	Matches one or more spaces	" "
/./	Matches any single character except a newline	"a", "7", "@" 
[hello]+ looks for h,e,l,l,o mor than one time ; /g is for globally ; /i for Hello hElLo ; \d any digit;

4) replace() is replaces "hello".replace(/l/g, "1"); replace l to 1
5) variable.match () is returns similar in [] let text = "Hello, world! Hello again!";
let result = text.match(/Hello/g);  // Global flag
console.log(result);  output:[hello hello]
6)querySelectorAll() for all matching elements   const inputContainers = document.querySelectorAll(".input-container");
7) .addEventListener('click', functionName)function works on clicking button
8) element.insertAdjacentHTML(position, htmlString); is adding element to html without replacing
9) for (const name of name2){ console.log} takes from name2 gives to name like an array 
10) .toLowerCase()  is converets to lowercase
11) Math.abs() will return absolute value
12)variable name.remove() removes all thing from html
13)Array.from(str) is makes a new array*/