const express = require('express');
const fs = require('fs');
const app = express() 
const port = 3000

app.get('/', (req, res) => {
    res.send('Hello World! Welcome to Node.js')
})

app.get('/api/data', (req, res) => {
    data = read('dados.json');
    res.end(data[0].nome);
})

function read(file){
    return JSON.parse(fs.readFileSync(file));
}

app.listen(port, () => {
console.log('Server listening at http://localhost:${port}')
})