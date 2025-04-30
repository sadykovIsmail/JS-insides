/* 1) ...arr - allows to add array to an array
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
*/