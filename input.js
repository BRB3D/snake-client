const { connect } = require("http2");
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
  if (key === 'w') {
    connection.write("Move: up");
  }
  if (key === 'a') {
    connection.write("Move: left");
  }
  if (key === 'd') {
    connection.write("Move: right");
  }
  if (key === 's') {
    connection.write("Move: down");
  }
  if(key === 'q') {
    connection.write('Say: we are the champions');
  }
};


module.exports = {setupInput};