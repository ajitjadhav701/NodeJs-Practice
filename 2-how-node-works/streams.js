const fs = require('fs');
const server = require('http').createServer();
const url = require('url');


server.on('request', (req, res) => {
    ////soln1
    // fs.readFile('./test-file.txt', (err, data) => {
    //     if (err) {
    //         console.log(err);
    //     }
    //     res.end(data)
    // })//need to load entire file in memory , thats not good technique

    ////soln2 : streams
    // const readable = fs.createReadStream('./test-file.txt');
    // readable.on('data', (chunk) => {
    //     res.write(chunk);
    // })
    // readable.on('end', () => {
    //     res.end();
    // })
    // readable.on('error', (err) => {
    //     console.log(err);
    //     res.statusCode = 500;
    //     res.end('File not found')
    // })

    ////soln3
    const readable = fs.createReadStream('./test-file.txt');
    readable.pipe(res);//readableSource.pipe(writableDest)

})

server.listen(8000, '127.0.0.1', () => {
    console.log('server started')
})