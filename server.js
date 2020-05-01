"use strict";
const http = require("http");
const greet = require("./greeting");

const lebowskiQuotes = [
  "I had a rough night and I hate the Eagles",
  "The Dude Abides",
  "Ya well that's just like, your opinion man",
];

// Request and response as parameters. Can pull info off of request like your IP address or location of where you are.
http
  .createServer((req, res) => {
    res.writeHead(200, {
      "Content-type": "text/plain",
    });

    const count = Math.floor(Math.random() * Math.floor(3));
    res.write(`${lebowskiQuotes[count]}`);

    res.end();
  })
  .listen(3000);
