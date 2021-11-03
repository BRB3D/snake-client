const net = require('net');
const connect = function() {
  const conn = net.createConnection({
    host: '192.168.2.40',// IP address here,
    port: 50541,// PORT number here,
  });
  conn.on('data', (data) => {//event listener for data.
    console.log(`Servers says : ${data}`);
  });
  // interpret incoming data as text
  conn.setEncoding("utf8");

  return conn;
};


module.exports = {net, connect };