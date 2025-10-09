/*1)setTimeout()onceafter a delay setTimeout(() => {
console.log("This runs after 2 seconds");
}, 2000);
 2)setInterval()loopevery delay setInterval(() => {
  console.log("This runs every 1 second")
}, 1000);
 3) const id = requestAnimationFrame(myFunction);
cancelAnimationFrame(id) Making smooth animations
 4) const animation = box.animate([.{
  duration: 1000, // 1 second
  iterations: 2,  // repeat 2 times
  easing: 'ease-in-out'
}
..], {...}):
animation.pause();      // stop
animation.play();       // resume
animation.reverse();    // go backwards
animation.cancel();     // stop and reset
// it is animating in js instead of css
  5)canvas we need to open to html 
// 1. fillRect(x, y, width, height)
ctx.fillStyle = 'green'; // Set fill color
ctx.fillRect(50, 50, 100, 100); // Draw a green rectangle at (50, 50) with width 100 and height 100

// 2. clearRect(x, y, width, height)
ctx.clearRect(60, 60, 80, 80); // Clear a section of the canvas, making it transparent

// 3. strokeRect(x, y, width, height)
ctx.strokeStyle = 'blue'; // Set stroke color
ctx.strokeRect(200, 50, 100, 100); // Draw a blue outline rectangle at (200, 50) with width 100 and height 100

// 4. arc(x, y, radius, startAngle, endAngle)
ctx.beginPath(); // Start a new path
ctx.arc(150, 200, 50, 0, Math.PI * 2); // Draw a full circle at (150, 200) with radius 50
ctx.stroke(); // Outline the circle

// 5. beginPath()
ctx.beginPath(); // Begin a new path (important before drawing custom shapes)

// 6. moveTo(x, y)
ctx.moveTo(300, 300); // Move the pen to (300, 300) without drawing anything

// 7. lineTo(x, y)
ctx.lineTo(400, 300); // Draw a line from the current position (300, 300) to (400, 300)
ctx.stroke(); // Apply stroke to the line

// 8. closePath()
ctx.closePath(); // Close the path (connect the last point to the first one)

// 9. fillStyle
ctx.fillStyle = 'yellow'; // Set fill color to yellow
ctx.fillRect(150, 50, 100, 100); // Fill rectangle with yellow color

// 10. strokeStyle
ctx.strokeStyle = 'purple'; // Set stroke color to purple
ctx.lineWidth = 5; // Set line width to 5px
ctx.strokeRect(100, 200, 100, 100); // Outline rectangle with purple color

// 11. lineWidth
ctx.lineWidth = 10; // Set line width to 10px
ctx.strokeStyle = 'red'; // Set stroke color to red
ctx.strokeRect(250, 250, 100, 100); // Draw a rectangle with red outline

// 12. fillText(text, x, y)
ctx.fillStyle = 'black'; // Set text fill color
ctx.font = '20px Arial'; // Set font size and family
ctx.fillText('Hello, Canvas!', 50, 300); // Draw text at (50, 300)

// 13. strokeText(text, x, y)
ctx.strokeStyle = 'orange'; // Set stroke color for text
ctx.lineWidth = 2; // Set text stroke width
ctx.strokeText('Outlined Text', 50, 350); // Draw outlined text at (50, 350)

// 14. createLinearGradient(x1, y1, x2, y2)
let grad = ctx.createLinearGradient(0, 0, 200, 0); // Create gradient from left to right
grad.addColorStop(0, 'red'); // Start with red
grad.addColorStop(1, 'yellow'); // End with yellow
ctx.fillStyle = grad; // Set fill to gradient
ctx.fillRect(0, 400, 200, 100); // Fill rectangle with gradient

// 15. drawImage(image, x, y, width, height)
const img = new Image(); // Create a new image object
img.src = 'image.jpg'; // Set image source
img.onload = () => { // Ensure the image is loaded before drawing
  ctx.drawImage(img, 100, 450, 100, 100); // Draw the image at (100, 450) with width 100 and height 100
};

// 16. save()
ctx.save(); // Save the current state of the canvas
ctx.fillStyle = 'blue'; // Set new fill color
ctx.fillRect(50, 500, 100, 100); // Draw blue rectangle
ctx.restore(); // Restore the previous state

// 17. restore()
ctx.save(); // Save current state
ctx.fillStyle = 'green'; // Change fill color to green
ctx.fillRect(200, 500, 100, 100); // Draw green rectangle
ctx.restore(); // Restore the previous state (remove the green fill)

// 18. translate(x, y)
ctx.translate(50, 50); // Move the origin of the canvas by (50, 50)
ctx.fillStyle = 'pink'; // Set fill color to pink
ctx.fillRect(0, 0, 100, 100); // Draw pink rectangle relative to the new origin

// 19. rotate(angle)
ctx.save(); // Save current state
ctx.translate(200, 200); // Move origin to (200, 200)
ctx.rotate(Math.PI / 4); // Rotate by 45 degrees (Math.PI / 4)
ctx.fillStyle = 'brown'; // Set fill color to brown
ctx.fillRect(0, 0, 100, 100); // Draw rotated rectangle
ctx.restore(); // Restore previous state
ммммм
// 20. scale(x, y)
ctx.scale(2, 2); // Scale by 2x in both X and Y direction
ctx.fillStyle = 'orange'; // Set fill color to orange
ctx.fillRect(50, 50, 50, 50); // Draw scaled rectangle (will be twice as big)
  6)<dialog> is an HTML element used to create popup boxes on a web page.
.show() → Opens like a normal box.
.showModal() → Opens like a modal (blocks rest of the page).
You can close it with .close().
6) we can find by key names from object console.log(obj[key]
7) listeners : change	When a form element's value changes and loses focus	Dropdowns, checkboxes, confirming a change
input	Fires every time the user types or changes the value	Live search, instant feedback while typing
click	When an element is clicked	Buttons, links, toggles
submit	When a form is submitted	Form validation, sending data
keydown	When a key is pressed down	Game controls, typing detection
keyup	When a key is released	Keyboard shortcuts, validating typed input
focus	When an element gets focus (e.g. clicking into an input box)	Highlighting, showing helper text
blur	When an element loses focus	Validating after typing, hiding tooltips
play – triggered when media starts playing.
pause – triggered when it pauses.
ended – triggered when the media finishes playing.
waiting – triggered when media is buffering.
canplay – triggered when media is ready to play (partially).
canplaythrough – triggered when media can play to the end without buffering.
8) throw new Error("You must be at least 18.") is throwing error
9) try {
  // Code that might throw an error
} catch (error) {
  // Code to run if an error happens
} finally {
  // Code that always runs (optional)
}
10) debugger	Pauses JS execution and opens debugging tools
11) console.dir(person);     // Shows full structure with methods
12) .checkValidity()Checks if the input is valid according to HTML rules (required, pattern
13) .reportValidity() browsers defaul error
14) input.setCustomValidity("Please use a company email like name@sampleCompany.com");
15) .validity says why the input is invalid
16)e.preventDefault() stops happening something
17) <form action="/submit"> defines where to send data
18)<form method="GET"> <!-- default --> data is in the url
<form method="POST"> data is in the request body
application/x-www-form-urlencoded	default (key=value&key2=value2)
text/plain	plain text
multipart/form-data	used for file uploads
19)Object.values(obj) returns all values of obj in []
20) Object.entrires(obj) it takes objects values and keys
21) new Audio('audio-file.mp3') creates new audio
22)canPlayType(type) Checks if the audio type is supported
23)codecs="COder" + "DECoder" for compres	, vorbis for audio, "vp8, vorbis" for video WebM , video/mp4; codecs="avc1.4d002a" for (MP4 with H.264)
24)isTypeSupported()	JS method to check support
25).addTextTrack() – adds subtitles or captions.
26).fastSeek(time) – jumps to a specific time in the media.
27) Use navigator.mediaDevices.getUserMedia(constraints) to access camera/mic.
const video = document.querySelector("video");
const stream = await navigator.mediaDevices.getUserMedia({ video: true });
video.srcObject = stream;  have to use await or .then()
await video.play();
28)Use navigator.mediaDevices.getDisplayMedia() Captures the user's screen instead of webcam
29) audio par: loop	Repeats the audio after it ends
muted	Starts the audio muted
30)AudioContext: Core of audio processing.
AudioBuffer: Holds audio data.
GainNode: Controls volume.  what is these which you explain last
31)new Set()in js can get anything no duolicactes methods add() addes if no inside, delete(), has(), clear() all el., size, values(),keys().entries()key,value
32)Weak set on;y objects can be removed automatic. Only add(), delete(), and has()
33)new Map() keys can be anything haas .size to count pairs set()
34)new WeakMap() keys must be objects if no refers deletes no loops especially for private
35)class.get(key) is to get from map or set
36)class.delete(key) is deletes key from map or set
37)sessionStorage is atorage but closes after the tab closed features like local
38)document.cookie = "sessionId=abc123; path=/"; deleted when browser closeddocument.cookie = "sessionId=abc123; path=/";
39)Set-Cookie: sessionToken=secret123; HttpOnly js cannot read
40)cache is storage in the browser CacheStorage	Place where caches live
caches.open(name)	Open (or create) a cache
cache.add(url)	Fetch + store one file
cache.addAll(urls)	Fetch + store many files
caches.match(request)	Check if something exists
caches.delete(name)	Delete a cache
caches.keys()	List all caches
41)let fingerprintExample = navigator.userAgent + screen.width + screen.height;
console.log(fingerprintExample);
it is unique to identify users 
 42) indexDB stores objects arrays request.onsuccess: Called when the database opens successfully.
request.onerror: Called if there’s an error opening the database
db.createObjectStore("STORE_NAME", { keyPath: "ID" }) stores your data
"readwrite": Allows modification of data.
"readonly": For retrieving data only.
onsuccess and onerror to handle results of database operations.
Add Data: objectStore.add()
Get Data: objectStore.get()
Delete Data: objectStore.delete()
43) class Dog {
  constructor(name) {
    this.name = name; // is the name like parameter
  }

  bark() {
    console.log(`${this.name} says woof!`); // method
  }
}
44)this	Refers to the current object being created.
45) extends	Keyword to inherit
super()	Calls the parent class constructor
static method	Function that belongs to the class
static property	Variable that belongs to the class
46) destructuring const Object	{ name } = obj	by property name
Array const	[first, second] = arr	by position 
47)Pure Functions not changes impure changes outside
48)const curriedAdd = a => b => a + b;
console.log(curriedAdd(3)(4)); // 7     Currying function
49)Synchronous (Blocking) Asynchronous (Non-blocking)
50) new Promise is giving success or failure
resolve() → call this when the operation is successful
reject() → call this when it failed
.then() → what to do if it succeeds
.catch() → what to do if it fails
async	Marks a function to be asynchronous
await	Wait for the promise inside an async function
51)async Executes	as soon as downloaded <script src="example.js" async></script>
52) defer downloads but waits for html <script src="example.js" async></script>
53)fetch('https://api.example.com/data')
.then(response => response.json())
.then(data => console.log(data));
(like getting data from a server or sending data to it).
fetch() returns a Promise → use .then() to process.
For POST is creating, PUT renewing, DELETE deleting, always include:
method
headers
body (when sending data)
The ID in the URL is commonly used for identifying resources.
response.json() Parses the response body as JSON.
chaining meaans having more .then methods they will run step by step if sth error catch will catch it
async automatically returns a Promise. ta catch error we use try catch
await pauses until the Promise resolves, uses inside async
engine executes your code
runtime provides the environment and tools 
54) getCurrentPosition() gerts current position 
navigator.geolocation.getCurrentPosition(successCallback, errorCallback, options);
par:  successCallback	Function called if location is retrieved
errorCallback	Function called if there’s an error
options	(Optional) extra settings for accuracy, timeout 
position.coords.latitude     // number → latitude
position.coords.longitude    // number → longitude
position.coords.accuracy     // meters (how precise it is)
position.coords.altitude     // optional (altitude in meters)
position.coords.speed        // optional (meters/second)
position.coords.heading      // optional (direction)
position.timestamp           // when location was retrieved

if you want to do for yourelf const options = {
  enableHighAccuracy: true,   // use GPS if possible
  timeout: 5000,             // wait max 5 seconds
  maximumAge: 0               // no cached location
};

navigator.geolocation.getCurrentPosition(success, error, options);


*/