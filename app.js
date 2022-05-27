const expressApp = require('./global.config.js');
var http = require('http');

var port = normalizePort(process.env.PORT || '3000');

expressApp.set('port', port);

var server = http.createServer(expressApp);


server.listen(port);

server.on('error', () => {
    console.log('错误监听')
});

server.on('listening', () => {
    console.log('事件监听:' + 'http://127.0.0.1:' + port)
});

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