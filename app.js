const http = require('http')
const port = process.env.PORT || 3000

const fs = require('fs');
var path = require('path');

// var server = http.createServer(function (request, response) {
//   switch (request.url) {
//       case "/AppClientStyle.css" :
//           response.writeHead(200, {"Content-Type": "text/css"});
//           response.write(cssFile);
//           break;
//       default :    
//           response.writeHead(200, {"Content-Type": "text/html"});
//           response.write(htmlFile);
//   });
//   response.end();
// }


const server = http.createServer(function (req, res) {



  res.writeHead(200, { 'Content-Type': 'text/html' })
  fs.readFile('index.html', function (error, data) {
    if (error) {
      res.writeHead(404)
      res.write('Error: File Not Found')
    } else {
      res.write(data)
    }
    res.end()
  })

})

server.listen(port, function (error) {
  if (error) {
    console.log('Something went wrong', error)
  } else {
    console.log('Server is listening on port ' + port)
  }
})