const { connect } = require("http2");
const { keybindings } = require("./constants");
let connection;
const setupInput = function(conn) {//sets up the input for the user to be able to play.
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on('data', handleUserInput);
  return conn;
};

const handleUserInput = function(key) {//first key is the exit key. otherwise the process will never end.
  // your code here
  if (key === '\u0003') {
    process.exit();
  }
  if (key in keybindings) {
    connection.write(keybindings[key]);
  }
};


module.exports = {setupInput};