const EventEmitter = require('events');
const http = require('http');


class Sales extends EventEmitter {
    constructor() {
        super();
    }
}
const myEmitter = new Sales();
myEmitter.on('newSale', () => {
    console.log('there was an new sale');
});

myEmitter.on('newSale', () => {
    console.log('customer name : jonas');
});
myEmitter.on('newSale', (stock) => {
    console.log(`Item stuck are ${stock}`);
});
myEmitter.emit('newSale', 9);//create event

///////////////
const server = http.createServer();

server.on('request', (req, res) => {
    console.log('Request received');
    console.log(req.url);
    res.end('Request received')
})
server.on('request', (req, res) => {
    console.log('another Request received😉');
})

server.on('close', () => {
    console.log('server closed');
})

server.listen(8000, '127.0.0.1', () => {
    console.log('Waiting for  request....');
})