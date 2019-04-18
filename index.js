var http = require("http");
const url = require('url');
const host = process.env.HOST;
const port = process.env.PORT;

const server = http.createServer((req, res) => {
  const path = url.parse(req.url).path;
  if (req.method === 'GET'){
    res.write('world');
  }else if (req.method === 'POST') {
    res.write('world created');
  }else if (req.method === 'PUT') {
    res.write('world updated');
  }else if (req.method === 'DELETE') {
    res.write('world deleted');
  }
  res.end();
});

server.listen(port, host, () => {console.log(`Server is listening on ${host}:${port}`)});
