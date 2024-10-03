const http = require('http');
const utils = require('./utils');
const numero = utils(0, 10);

const requestListener = function (req, res) {
  if (req.url === "/") { 
  res.end("Página Inicial");

  } else if (req.url === "/sobre") { 
    res.writeHead(200);
    res.end("Meu nome eh Danton");
  
  } else if (req.url === "/contato") {
    res.writeHead(200);
    res.end("+55 42 98423-3181");

  } else if (req.url === "/numero") {
    res.writeHead(200);
    res.end((numero).toString())
  
  } else if (req.url.startsWith("/saudacao/")) { 
    const nome = req.url.split("/")[2];
    res.writeHead(200);
    res.end(`Olá, ${nome}!`);

  } else {
  res.writeHead(404);
  res.end("Página não encontrada");
  }
}

  const server = http.createServer(requestListener);
  server.listen(8000, 'localhost', () => {
      console.log("Servidor está rodando em http://localhost:8000"); 
  });
