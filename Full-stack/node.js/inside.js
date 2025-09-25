/* 1) You want the script to auto-restart when you make changes during development (node --watch filename.js)
You want to run it with a shebang as a system script (./filename.js, after chmod +x filename.js and adding #!/usr/bin/env node at the top)
You want to run scripts defined in your package.json via node --run <script>, npm run <script>, or yarn run <script> 

2) GET with AXIOUS framework
const axios = require('axios');

axios
  .get('https://example.com/todos')
  .then(res => {
    console.log(`statusCode: ${res.status}`);
    console.log(res);
  })
  .catch(error => {
    console.error(error);
  });

3) POST with AXIOUS
axios
  .post('https://whatever.com/todos', {
    todo: 'Buy the milk',
  })
  .then(res => {
    console.log(`statusCode: ${res.status}`);
    console.log(res);
  })
  .catch(error => {
    console.error(error);
  });

4) GET MANUALLY with https
  const https = require('https');

const options = {
  hostname: 'example.com',
  port: 443,
  path: '/todos',
  method: 'GET',
};

const req = https.request(options, res => {
  console.log(`statusCode: ${res.statusCode}`);

  res.on('data', d => {
    process.stdout.write(d);
  });
});

req.on('error', error => {
  console.error(error);
});

req.end();
5) POST WITH HTTPS MANUALLY
const https = require('https');

const data = JSON.stringify({
  todo: 'Buy the milk',
});

const options = {
  hostname: 'whatever.com',
  port: 443,
  path: '/todos',
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Content-Length': data.length,
  },
};

const req = https.request(options, res => {
  console.log(`statusCode: ${res.statusCode}`);

  res.on('data', d => {
    process.stdout.write(d);
  });
});

req.on('error', error => {
  console.error(error);
});

req.write(data);   // send the JSON data in the request
req.end();         // finish the request

  
6)Promise-based (modern async):
const fs = require('fs/promises');
await fs.readFile('file.txt')

7)functions in fs
fs.readFile() – Read a file.
fs.writeFile() – Write to a file (creates if missing).
fs.rename() – Rename a file or move it.
fs.unlink() – Delete a file.
fs.readdir() – Read a folder’s contents.
fs.mkdir() – Make a new folder.
fs.rmdir() – Remove a folder.
await fs.appendFile('file.txt', 'More content!');

8) for reading with node const fs = require('fs/promises');
const data = await fs.readFile('file.txt', 'utf8');
console.log(data);

9) creating url const myURL = new URL('https://example.org/foo');
const myURL2 = new URL('/foo', 'https://example.org/');

10) changing url myURL.hostname = 'google.com';
myURL.searchParams.append('key', 'value');
myURL.hash = '#section2';
console.log(myURL.toString()); // prints the new URL string

11)const params = new URLSearchParams('user=abc&query=xyz');
params.get('user'); // 'abc'
params.append('foo', 'bar');
params.toString(); // 'user=abc&query=xyz&foo=bar'

12)const EventEmitter = require('events');
const eventEmitter = new EventEmitter();
.on(event, handler): Listen for an event (add a callback).

.emit(event, [arg1, arg2, ...]): Trigger an event (call the listeners, pass arguments).

.once(event, handler): Listen only the first time the event fires.

.removeListener(event, handler) / .off(event, handler): Remove a listener.

.removeAllListeners(event): Remove all listeners for an event.

13) Use node --inspect yourfile.js to start debugging.
Open chrome://inspect in Chrome.
Use breakpoints and the Watch tab to inspect your app step-by-step.

14)fs.readFile(...)	Read a file from disk (e.g. index.html)
path.join(...)	Build the correct full path to the file
__dirname	Current project folder path
res.writeHead(...)	Set HTTP status (200 or 500) and content type
res.end(data)	Send the actual HTML page to browser

15) FOR SECRET  CODES: 1)npm install dotenv
2) # .env
NODE_ENV=development
PORT=3000
DB_URL=mongodb://localhost:27017/mydb
API_KEY=123456789abcdef
SECRET_TOKEN=mysecrettoken
DEBUG=true
3)require('dotenv').config(); // Load .env variables into process.env
4) for using console.log(process.env.NODE_ENV);      // development
console.log(process.env.PORT);          // 3000
console.log(process.env.API_KEY);       // 123456789abcdef
console.log(process.env.SECRET_TOKEN);  // mysecrettoken

if (process.env.DEBUG === "true") {
    console.log("Debugging is ON");
}

16)to start express
npm init -y
npm install express
node app.js

17)"/message{s}", "/{*splat}"matches all, "/:username/messages/:id"

18)app.get("/path", (req, res) => { res.send("Response"); });
app.post("/path", (req, res) => { ... });


19) controllers
// General response
res.send("Hello!");          // Sends plain text
res.send({ a: 1 });          // Sends JSON if it's an object

// JSON API response
res.json({ user: "Alex" });  // Always sends as JSON

// Set status code
res.status(404).send("Not found");
res.status(500).json({ error: "Internal error" });
wwwwww
// Redirect
app.get('/old-page', (req, res) => {
  res.redirect('/new-page');
});


// Render view (with a template engine)
res.render('dashboard', { username: "John" });

20)to use EJS 
1) npm init -y
2)npm install express ejs
3) to run node app.js
4)in app js 
const express = require("express");
const path = require("node:path");

const app = express();

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");


21)<% code %>	Run some JS code (like if, for, etc.)
<%= value %>	Output escaped value
<%- value %>	Output raw/unescaped HTML
<%# comment %>	This is a comment
<%%	Outputs literal <%

res.render("index", { links: links }) means:
the index.ejs file gets a variable called links
fff  fff fff df f fff fd
 xxxx
22)FORM Concept	Meaning
1) form action="/new" method="POST"	Browser sends a POST request to your server
2)app.post("/new", (req, res) => it answers to that request in app.js
3) name="messageUser"	Input field's name — this becomes req.body.messageUser
4) app.use(express.urlencoded({ extended: true }));	Tells Express how to read HTML form data
5) req.body	Object that contains form data
6) res.redirect("/")	After handling the form, go back to homepage

23)Using PostgreSQL: CREATE DATABASE top_users; → Makes a new database in PostgreSQL.
CREATE TABLE usernames (...); → Creates a table (like a spreadsheet) inside the DB.
INSERT INTO usernames (username) VALUES ('Mao'); → Adds a row of data to the table.
SELECT * FROM usernames; → Reads all rows from the table.
Pool (pg) → A reusable connection to PostgreSQL for Node.js apps
pool.query("SELECT * FROM usernames"); → Runs SQL from Node.js.
rows → The result of a query, an array of JavaScript objects (each row = object).
$1, $2 in SQL → Placeholders for safe parameters (prevents ScQL injection).
insertUsername("Lofty") → Function that runs an INSERT SQL query.
controllers/usersController.js → Defines what happens when a route is requested.
router.get("/", controller.getUsernames) → Route: GET / shows all usernames
router.get("/new") → Route: shows a form for adding usernames.
router.post("/new") → Route: handles form submission and inserts into DB.
req.body.username → Contains form input value with name="username".
res.redirect("/") → After adding user, sends you back to homepage.d
app.use(bodyParser.urlencoded(...)) → Lets Express read form data ddddddddddddddddddd*/ d