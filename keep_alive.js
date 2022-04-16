var http = require('http');

http.createServer(function (req, res){
  res.write("Bot 7/24");//İsteğe bağlı değişebilir 
  res.end();
}).listen(8080);

//Replit Uptime İçin