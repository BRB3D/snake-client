const net = require('net');
const connect = function() {
  const conn = net.createConnection({
    host: '165.227.47.243',// IP address here,
    port: 50541,// PORT number here,
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
  conn.on('data', (data) => {//event listener for data received from server
    console.log(`Servers says : ${data}`);
  });
  return conn;
};


module.exports = {connect };
