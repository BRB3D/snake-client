const setupInput = function() {//sets up the input for the user to be able to play.
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on('data', handleUserInput);
  return stdin;
};

const handleUserInput = function(key) {//first key is the exit key. otherwise the process will never end.
  // your code here
  if (key === '\u0003') {
    process.exit();
  }
};


module.exports = {setupInput};