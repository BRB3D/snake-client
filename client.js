const net = require('net');
const {ip, port} = require('./constants');
const connect = function() {
  const conn = net.createConnection({
    host: ip,// IP address here,
    port: port,// PORT number here,
  });
    // interpret incoming data as text
  conn.setEncoding('utf8');
  const name = 'JAI';
  conn.on('connect', ()=> {//when connected logs a message.
    console.log(`sucessfuly connected to the snake game`);
  });
  conn.on('connect', () => {//at connection it sends name
    conn.write(`Name: ${name}`);
  });
  //not used anymore but kept here becasue it serves as a check to see if the game is working.
  /*  conn.on('connect', () => {//at connection it sends name
    conn.write(`Move: up`);
  }); */
  conn.on('data', (data) => {//event listener for data received from server
    console.log(`Servers says : ${data}`);
  });
  return conn;
};


// legal moves of the game.
/* "Move: up" - move up one square (unless facing down)
"Move: down" - move down one square (unless facing up)
"Move: left" - move left one square (unless facing right)
"Move: right" - move left one square (unless facing left) */

module.exports = {connect };
