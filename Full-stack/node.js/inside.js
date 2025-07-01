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
fs.rmdir() – Remove a folder.*/ 