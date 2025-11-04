/*1)for( sth of sth) - doing all things one by one by one
    // 2).repeat() is repeats things
    // 3).push() is adding things to end
    // 4)name() is calling 
    // 5).repeat() it repeats for () time
    // 6).unshift() adding things to start returns the new length
//     const unshifted = numbers.unshift(5);
// console.log(unshifted);
// console.log(numbers);
    // 7).pop() removes the last element
    // 8).shift() removes the first element 
//     const numbers = [1, 2, 3];
// const shifted = numbers.shift();
// console.log(shifted);
//  1)button.onclick = myFunction;  When the button is clicked, myFunction will be called. we call putting only name not with ()
2)querySelector("# for id ") uses in js to find first element from html  let h1 = document.querySelector("h1"); we call "" css # '' ..style.fontSize, .style.color = "red" 
3).innerText property controls the text that appears in an HTML element. For example:  const info = document.querySelector("#info"); 
info.innerText = "Hello World"; 
4) \"Store\" is doing quotes in string 
5) {} is an object in primitive const obj = {
  name: "Quincy Larson"
}; name is key "quincy" is value
6)object.property; is dot notation it is calling objects whout space
7) [] dot notation is calling for the object when it has spaces: objectName["property name"] as a veriable name() as a function;
8) [] is calling specific item from object or function 
9) The .style property is used to access the inline style of an element and the .display property is used to set the visibility of an element.
const paragraph = document.querySelector('p');
paragraph.style.display = 'block';
10).innerHTML is changes the things from html
11) ? uses instead of if else. return score > 0 ? score : default_score
12) .includes() const numbersArray = [1, 2, 3, 4, 5]
const number = 3

if (numbersArray.includes(number)) {
  console.log("The number is in the array.")
}
  13) Math.random() is generates a random nnumber between 0 1 console.log(Math.random()); // Might print 0.328374 or 0.756928, etc.
14) Math.floor(x) rounds down a number to the nearest whole number. console.log(Math.floor(4.9)); // 4
console.log(Math.floor(7.1)); // 7
 1)document.getElementById('title') is calling element by id. .textContent,.style.color = "blue". 
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
| OR method, + forat least  one or more , *for 0 or more, optional?: matches either
fr[e3] matches free or fr33,?= look ahead.?<= look behind,?! negative ahead, ?<! not behind
(.+) all things $1 calling that things new RegExp(value) creates new regex, m is multi line
4) replace() is replaces "hello".replace(/l/g, "1"); replace l to 1
5) variable.match () is returns similar in [] let text = "Hello, world! Hello again!";
let result = text.match(/Hello/g);  // Global flag
console.log(result);  output:[hello hello]
6)querySelectorAll#id .class  for all matching elements   const inputContainers = document.querySelectorAll(".input-container");
7) .addEventListener('click', functionName)function works on clicking button
8) element.insertAdjacentHTML(position, htmlString); is adding element to html without replacing
9) for (const name of name2){ console.log} takes from name2 gives to name like an array 
10) .toLowerCase()  is converets to lowercase
11) Math.abs() will return absolute value
12)variable name.remove() removes all thing from html
13)Array.from(str) is makes a new array 
 1) ...arr - allows to add array to an array and spreads them
2) () => {code} anonymys function const multiplyTwoNumbers = (num1, num2) => {
  return num1 * num2;}
  3) const multiplyTwoNumbers = (num1, num2) => num1 * num2   implicit function for one line;
4) map() when you want to create a new array based on the values of an existing array 
const doubledNumbers = numbers.map((number) => number * 2); // doubledNumbers will be [2, 4, 6] callback
5) join() makes array one string
const exampleArr = ["This", "is", "a", "sentence"];
const sentence = exampleArr.join(" "); // Separator takes a space character
console.log(sentence); // Output: "This is a sentence"// 
6) ?. when u use it shows undefined instead of error const zipCode = user.address?.zipCode; // Returns undefined instead of throwing an error
7) sort() is for sorting alphabeticall const names = ["Tom", "Jessica", "Quincy", "Naomi"];
names.sort() // ["Jessica", "Naomi", "Quincy", "Tom"]
8) find( ) returns first element if no undefined 
const numbers = [10, 20, 30, 40, 50];
// Find the first number greater than 25
const foundNumber = numbers.find((number) => number > 25);
console.log(foundNumber); // Output: 30
9) .classList gives you access to the list of classes on that element.
playButton.classList.add("playing");

10)play() is playing and pause() is pausing 
11) indexOf() is finds at which index the element if no -1
 const animals = ["dog", "cat", "horse"];
animals.indexOf("cat") // 1
12) .forEach runs  once for each item in an array array.forEach(function(item, index, array) {
  // your code here
});
playlistSongElements.forEach((songEl) => {

})
13) .removeAttribute("aria-current") removes that attribute from the element.
14).setAttribute("aria-current", "true")This adds aria-current="true" to the current song
15)console.log(element.textContent);  // Output: This is some text content 
16) const names = ["Tom", "Jessica", "Quincy", "Naomi"];
names.sort(() => Math.random() - 0.5); this  randomizes
17 filter() const numArr = [1, 10, 8, 3, 4, 5]
const numsGreaterThanThree = numArr.filter((num) => num > 3);
console.log(numsGreaterThanThree) // Output: [10, 8, 4, 5]
18) const divElement = document.createElement('div') is creating element to html 
19) const myText = document.createTextNode("your text") creates text in div to html
20)// attach the text "Click me" to the button
parentElement.appendChild(parentElementText)
1) .style.display = "none"; // Hide options        .style.display = "block"; // Show reset button   
 2) for (let i = 0; i < array.length; i++) {}

  string.match(regex) if matches [] if no null*/