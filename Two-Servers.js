// Require/import the HTTP module
var http = require("http");

// Define a port to listen for incoming requests
var PORT = 7000;

// Create a generic function to handle requests and responses
function handleRequest(request, response) {

  // Send the below string to the client when the user visits the PORT URL
  response.end("I AM AWESOME!!! " + request.url);
}

// Use the Node HTTP package to create our server.
// Pass the handleRequest function to empower it with functionality.
var server = http.createServer(handleRequest);

var PORT = 7500;
// Start our server so that it can begin listening to client requests.
server.listen(PORT, function() {

  // Log (server-side) when our server has started
  console.log("I SUCK!" + PORT);
});
