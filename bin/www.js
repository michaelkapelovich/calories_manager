/*
name: matan katsnelson id: 208322248
name: michael kapelovich id: 336137377
*/

console.log("inside www.js");

/**
 * Module dependencies.
 * Import necessary modules:
 * - app: the Express application instance.
 * - debug: module to enable debug logs.
 * - http: Node.js HTTP server module to create the server.
 */
const app = require('../app');
const debug = require('debug')('restsample:server');
const http = require('http');

/**
 * Get port from environment and store it in the Express app.
 * If PORT environment variable is not defined, it defaults to port 3000.
 */
const port = normalizePort(process.env.PORT || '3000');
app.set('port', port);

/**
 * Create an HTTP server using the Express app instance.
 */
var server = http.createServer(app);

/**
 * Server listens on the specified port on all network interfaces.
 * Handles errors and logs when the server starts listening.
 */
server.listen(port);
server.on('error', onError);
server.on('listening', onListening);

/**
 * Normalize a port into a number, string, or false.
 * - If the value is not a number, it assumes it's a named pipe.
 * - If the value is a valid port number, return it.
 * - Otherwise, return false.
 */
function normalizePort(val) {
  var port = parseInt(val, 10);

  if (isNaN(port)) {
    // named pipe
    return val;
  }

  if (port >= 0) {
    // port number
    return port;
  }

  return false;
}

/**
 * Event listener for the HTTP server "error" event.
 * Handles errors related to starting the server, such as permission issues
 * (EACCES) or the port already being in use (EADDRINUSE).
 */
function onError(error) {
  if (error.syscall !== 'listen') {
    throw error;
  }

  var bind = typeof port === 'string'
      ? 'Pipe ' + port
      : 'Port ' + port;

  // Handle specific errors with friendly messages
  switch (error.code) {
    case 'EACCES':
      console.error(bind + ' requires elevated privileges');
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error(bind + ' is already in use');
      process.exit(1);
      break;
    default:
      throw error;
  }
}

/**
 * Event listener for the HTTP server "listening" event.
 * Logs a message indicating the server is listening, and outputs the address
 * it's bound to (either pipe or port).
 */
function onListening() {
  console.log("listening");
  var addr = server.address();
  var bind = typeof addr === 'string'
      ? 'pipe ' + addr
      : 'port ' + addr.port;
  debug('Listening on ' + bind);
}
